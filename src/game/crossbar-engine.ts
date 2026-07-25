import type { ComponentContext } from "seyfert";
import { createChallengeFlow, createLobbyFlow } from "./challenge";
import { CROSSBAR_ATTEMPTS, CROSSBAR_HIT_CHANCE } from "./constants";
import { addCoins, addWin, incrementDuelsPlayed } from "./db";
import { createSession, deleteSession, generateId } from "./store";
import type { CrossbarMatch, PlayerInfo } from "./types";
import {
	buildCrossbarChallengeMessage,
	buildCrossbarFinishedMessage,
	buildCrossbarLobbyMessage,
	buildCrossbarResolvedMessage,
	buildCrossbarResultMessage,
	buildCrossbarTurnMessage,
} from "./ui-crossbar";
import { EPHEMERAL, editGameMsg, otherIndex } from "./utils";

// ---------------------------------------------------------------------------
// Match flow
// ---------------------------------------------------------------------------

function createCrossbarMatch(
	guildId: string,
	channelId: string,
	playerA: PlayerInfo,
	playerB: PlayerInfo,
): CrossbarMatch {
	const firstShooter = Math.random() < 0.5 ? 0 : 1;
	return createSession<CrossbarMatch>({
		kind: "crossbar",
		id: generateId(),
		guildId,
		channelId,
		players: [playerA, playerB],
		currentPlayerIndex: firstShooter,
		attempts: [0, 0],
		hits: [0, 0],
		round: 1,
		maxRounds: CROSSBAR_ATTEMPTS * 2,
		finished: false,
	});
}

async function startCrossbarMatchFromCtx(
	ctx: ComponentContext<"Button">,
	guildId: string,
	channelId: string,
	playerA: PlayerInfo,
	playerB: PlayerInfo,
): Promise<void> {
	const match = createCrossbarMatch(guildId, channelId, playerA, playerB);
	const message = await ctx.followup(buildCrossbarTurnMessage(match));
	match.message = message;
}

export const crossbarChallenge = createChallengeFlow({
	buildMessage: (c) =>
		buildCrossbarChallengeMessage({
			id: c.id,
			challenger: c.challenger,
			opponent: c.opponent,
		}),
	buildResolved: (c, reason) =>
		buildCrossbarResolvedMessage(c.opponent.mention, reason),
	startMatch: startCrossbarMatchFromCtx,
});

export const crossbarLobby = createLobbyFlow({
	buildMessage: (l) => buildCrossbarLobbyMessage({ id: l.id, host: l.host }),
	buildResolved: (l, reason) =>
		buildCrossbarResolvedMessage(l.host.mention, reason),
	startMatch: startCrossbarMatchFromCtx,
});

// ---------------------------------------------------------------------------
// Match logic
// ---------------------------------------------------------------------------

export async function handleCrossbarShoot(
	ctx: ComponentContext<"Button">,
	match: CrossbarMatch,
): Promise<void> {
	if (match.finished) {
		return ctx.write({ content: "This match is already over!", ...EPHEMERAL });
	}

	const currentPlayer = match.players[match.currentPlayerIndex];
	if (ctx.author.id !== currentPlayer.id) {
		return ctx.write({ content: "It's not your turn!", ...EPHEMERAL });
	}

	const hit = Math.random() * 100 < CROSSBAR_HIT_CHANCE;
	match.attempts[match.currentPlayerIndex]++;
	if (hit) match.hits[match.currentPlayerIndex]++;

	await ctx.write({
		content: hit ? "🎯 You hit the crossbar!" : "😬 You missed.",
		...EPHEMERAL,
	});

	await editGameMsg(
		match.message,
		buildCrossbarResultMessage(match, hit) as unknown as Record<
			string,
			unknown
		>,
	);

	if (isCrossbarMatchDecided(match)) {
		await finishCrossbarMatch(match);
		return;
	}

	match.currentPlayerIndex = otherIndex(match.currentPlayerIndex);
	match.round++;

	setTimeout(() => {
		void editGameMsg(
			match.message,
			buildCrossbarTurnMessage(match) as unknown as Record<string, unknown>,
		);
	}, 2_500);
}

function isCrossbarMatchDecided(match: CrossbarMatch): boolean {
	const [attemptsA, attemptsB] = match.attempts;
	const [hitsA, hitsB] = match.hits;

	if (attemptsA >= CROSSBAR_ATTEMPTS && attemptsB >= CROSSBAR_ATTEMPTS) {
		return hitsA !== hitsB;
	}

	const remainingA = CROSSBAR_ATTEMPTS - attemptsA;
	const remainingB = CROSSBAR_ATTEMPTS - attemptsB;

	if (hitsA > hitsB + remainingB) return true;
	if (hitsB > hitsA + remainingA) return true;

	return false;
}

async function finishCrossbarMatch(match: CrossbarMatch): Promise<void> {
	match.finished = true;
	deleteSession(match.id);
	await editGameMsg(
		match.message,
		buildCrossbarFinishedMessage(match) as unknown as Record<string, unknown>,
	);

	const [a, b] = match.players;
	const [hitsA, hitsB] = match.hits;

	for (const player of match.players) {
		incrementDuelsPlayed(player.id);
	}

	if (hitsA !== hitsB) {
		const winner = hitsA > hitsB ? a : b;
		addWin(winner.id);
		addCoins(winner.id, 75);
	} else {
		addCoins(a.id, 25);
		addCoins(b.id, 25);
	}
}

// Re-exports for component handlers
export const createCrossbarChallenge = crossbarChallenge.create;
export const acceptCrossbarChallenge = crossbarChallenge.accept;
export const declineCrossbarChallenge = crossbarChallenge.decline;
export const createCrossbarLobby = crossbarLobby.create;
export const joinCrossbarLobby = crossbarLobby.join;
export const cancelCrossbarLobby = crossbarLobby.cancel;
