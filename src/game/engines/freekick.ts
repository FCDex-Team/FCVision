import type { ComponentContext } from "seyfert";
import { addCoins, addWin, incrementDuelsPlayed } from "../persistence/users";
import { createChallengeFlow, createLobbyFlow } from "../shared/challenge";
import {
	ENTRY_FEE_FREEKICK,
	FREEKICK_PICK_MS,
	FREEKICK_ROUNDS,
	FREEKICK_TRANSITION_MS,
} from "../shared/constants";
import { createSession, deleteSession, generateId } from "../shared/store";
import type {
	Direction,
	FreekickMatch,
	PlayerInfo,
	Role,
} from "../shared/types";
import { EPHEMERAL, editGameMsg } from "../shared/utils";
import {
	buildFreekickChallengeMessage,
	buildFreekickCoinTossMessage,
	buildFreekickFinishedMessage,
	buildFreekickLobbyMessage,
	buildFreekickResolvedMessage,
	buildFreekickRevealMessage,
	buildFreekickRoundMessage,
	currentFreekickRoles,
} from "../ui/freekick";

// ---------------------------------------------------------------------------
// Match flow
// ---------------------------------------------------------------------------

function createFreekickMatch(
	guildId: string,
	channelId: string,
	playerA: PlayerInfo,
	playerB: PlayerInfo,
	pot?: number,
): FreekickMatch {
	const id = generateId();
	const firstShooterIndex = Math.random() < 0.5 ? 0 : 1;

	return createSession<FreekickMatch>({
		kind: "freekick",
		id,
		guildId,
		channelId,
		players: [playerA, playerB],
		firstShooterIndex,
		round: 1,
		scores: [0, 0],
		picks: {},
		pot,
	});
}

function scheduleFirstRound(match: FreekickMatch): void {
	setTimeout(() => void sendFreekickRound(match), 1_500);
}

async function startFreekickMatchFromCtx(
	ctx: ComponentContext<"Button">,
	guildId: string,
	channelId: string,
	playerA: PlayerInfo,
	playerB: PlayerInfo,
	pot?: number,
): Promise<void> {
	const match = createFreekickMatch(guildId, channelId, playerA, playerB, pot);
	const message = await ctx.followup(buildFreekickCoinTossMessage(match));
	match.message = message;
	scheduleFirstRound(match);
}

export const freekickChallenge = createChallengeFlow({
	buildMessage: (c) => buildFreekickChallengeMessage(c),
	buildResolved: (c, reason) =>
		buildFreekickResolvedMessage(c.opponent.mention, reason),
	startMatch: startFreekickMatchFromCtx,
	entryFee: ENTRY_FEE_FREEKICK,
});

export const freekickLobby = createLobbyFlow({
	buildMessage: (l) => buildFreekickLobbyMessage(l),
	buildResolved: (l, reason) =>
		buildFreekickResolvedMessage(l.host.mention, reason),
	startMatch: startFreekickMatchFromCtx,
	entryFee: ENTRY_FEE_FREEKICK,
});

// ---------------------------------------------------------------------------
// Match logic
// ---------------------------------------------------------------------------

async function sendFreekickRound(match: FreekickMatch): Promise<void> {
	match.picks = {};
	await editGameMsg(
		match.message,
		buildFreekickRoundMessage(match) as unknown as Record<string, unknown>,
	);
	match.timer = setTimeout(
		() => void forceResolveFreekickRound(match),
		FREEKICK_PICK_MS,
	);
}

export async function handleFreekickDirection(
	ctx: ComponentContext<"Button">,
	match: FreekickMatch,
	direction: Direction,
): Promise<void> {
	const { shooter, keeper } = currentFreekickRoles(match);

	let role: Role | undefined;
	if (ctx.author.id === shooter.id) role = "shooter";
	else if (ctx.author.id === keeper.id) role = "keeper";

	if (!role) {
		return ctx.write({
			content: "You're not part of this match!",
			...EPHEMERAL,
		});
	}

	if (match.picks[role]) {
		return ctx.write({
			content: "You've already picked this round!",
			...EPHEMERAL,
		});
	}

	match.picks[role] = direction;
	await ctx.write({
		content:
			role === "shooter"
				? "🦵 Locked in your shot!"
				: "🧤 Locked in your dive!",
		...EPHEMERAL,
	});

	if (match.picks.shooter && match.picks.keeper) {
		clearTimeout(match.timer);
		await resolveFreekickRound(match);
	}
}

async function forceResolveFreekickRound(match: FreekickMatch): Promise<void> {
	const roles: Role[] = ["shooter", "keeper"];
	const values: Direction[] = ["left", "center", "right"];
	for (const role of roles) {
		if (!match.picks[role]) {
			match.picks[role] = values[Math.floor(Math.random() * values.length)];
		}
	}
	await resolveFreekickRound(match);
}

async function resolveFreekickRound(match: FreekickMatch): Promise<void> {
	const { shooterIndex } = currentFreekickRoles(match);
	const shooterDir = match.picks.shooter ?? "center";
	const keeperDir = match.picks.keeper ?? "center";
	const goal = shooterDir !== keeperDir;

	if (goal) match.scores[shooterIndex]++;

	await editGameMsg(
		match.message,
		buildFreekickRevealMessage(
			match,
			shooterDir,
			keeperDir,
			goal,
		) as unknown as Record<string, unknown>,
	);

	if (match.round >= FREEKICK_ROUNDS) {
		await finishFreekickMatch(match);
		return;
	}

	setTimeout(() => {
		match.round++;
		void sendFreekickRound(match);
	}, FREEKICK_TRANSITION_MS);
}

async function finishFreekickMatch(match: FreekickMatch): Promise<void> {
	deleteSession(match.id);
	await editGameMsg(
		match.message,
		buildFreekickFinishedMessage(match) as unknown as Record<string, unknown>,
	);

	const [a, b] = match.players;
	const [scoreA, scoreB] = match.scores;

	for (const player of match.players) {
		incrementDuelsPlayed(player.id);
	}

	if (scoreA !== scoreB) {
		const winner = scoreA > scoreB ? a : b;
		addWin(winner.id);
		addCoins(winner.id, match.pot ?? 75);
	} else if (match.pot) {
		addCoins(a.id, Math.floor(match.pot / 2));
		addCoins(b.id, Math.floor(match.pot / 2));
	} else {
		addCoins(a.id, 25);
		addCoins(b.id, 25);
	}
}

// Re-exports for component handlers
export const createFreekickChallenge = freekickChallenge.create;
export const acceptFreekickChallenge = freekickChallenge.accept;
export const declineFreekickChallenge = freekickChallenge.decline;
export const createFreekickLobby = freekickLobby.create;
export const joinFreekickLobby = freekickLobby.join;
export const cancelFreekickLobby = freekickLobby.cancel;
