import type { ComponentContext } from "seyfert";
import { addCoins, addWin, incrementDuelsPlayed } from "../persistence/users";
import { createChallengeFlow, createLobbyFlow } from "../shared/challenge";
import {
	COIN_TOSS_DELAY_MS,
	ENTRY_FEE_POST,
	MAX_ROUNDS,
	PICK_TIMEOUT_MS,
	ROUND_TRANSITION_MS,
} from "../shared/constants";
import { createSession, deleteSession, generateId } from "../shared/store";
import type {
	ActiveMatch,
	PlayerInfo,
	Role,
	RoundRecord,
} from "../shared/types";
import { EPHEMERAL, editGameMsg } from "../shared/utils";
import {
	buildChallengeMessage,
	buildChallengeResolvedMessage,
	buildCoinTossMessage,
	buildFinishedMessage,
	buildLobbyMessage,
	buildLobbyResolvedMessage,
	buildRevealMessage,
	buildRoundMessage,
	currentRoles,
} from "../ui/shared";

interface UserLike {
	id: string;
	username: string;
	toString(): string;
}

export function toPlayerInfo(user: UserLike): PlayerInfo {
	return { id: user.id, username: user.username, mention: user.toString() };
}

// ---------------------------------------------------------------------------
// Match flow
// ---------------------------------------------------------------------------

function startMatch(
	guildId: string,
	channelId: string,
	playerA: PlayerInfo,
	playerB: PlayerInfo,
	pot?: number,
): ActiveMatch {
	const id = generateId();
	const firstShooterIndex = Math.random() < 0.5 ? 0 : 1;

	return createSession<ActiveMatch>({
		kind: "match",
		id,
		guildId,
		channelId,
		players: [playerA, playerB],
		firstShooterIndex,
		round: 1,
		scores: [0, 0],
		history: [],
		picks: {},
		autoPicked: new Set(),
		pot,
	});
}

function scheduleFirstRound(match: ActiveMatch): void {
	setTimeout(() => {
		void sendRound(match);
	}, COIN_TOSS_DELAY_MS);
}

async function startMatchFromCtx(
	ctx: ComponentContext<"Button">,
	guildId: string,
	channelId: string,
	playerA: PlayerInfo,
	playerB: PlayerInfo,
	pot?: number,
): Promise<void> {
	const match = startMatch(guildId, channelId, playerA, playerB, pot);
	const message = await ctx.followup(buildCoinTossMessage(match));
	match.message = message;
	scheduleFirstRound(match);
}

export const postChallenge = createChallengeFlow({
	buildMessage: buildChallengeMessage,
	buildResolved: buildChallengeResolvedMessage,
	startMatch: startMatchFromCtx,
	entryFee: ENTRY_FEE_POST,
});

export const postLobby = createLobbyFlow({
	buildMessage: buildLobbyMessage,
	buildResolved: buildLobbyResolvedMessage,
	startMatch: startMatchFromCtx,
	entryFee: ENTRY_FEE_POST,
});

// ---------------------------------------------------------------------------
// Match logic
// ---------------------------------------------------------------------------

async function sendRound(match: ActiveMatch): Promise<void> {
	match.picks = {};
	match.autoPicked = new Set();

	await editGameMsg(
		match.message,
		buildRoundMessage(match) as unknown as Record<string, unknown>,
	);

	match.pickTimer = setTimeout(
		() => void forceResolveRound(match),
		PICK_TIMEOUT_MS,
	);
}

export async function handleBoxPick(
	ctx: ComponentContext<"Button">,
	match: ActiveMatch,
	box: number,
): Promise<void> {
	const { shooter, keeper } = currentRoles(match);

	let role: Role | undefined;
	if (ctx.author.id === shooter.id) role = "shooter";
	else if (ctx.author.id === keeper.id) role = "keeper";

	if (!role) {
		return ctx.write({
			content: "You're not part of this match!",
			...EPHEMERAL,
		});
	}

	if (match.picks[role] !== undefined) {
		return ctx.write({
			content: "You've already picked your box this round!",
			...EPHEMERAL,
		});
	}

	match.picks[role] = box;

	const label =
		role === "shooter" ? "🎯 Aimed at your target." : "🧤 Dove for your guess.";
	await ctx.write({
		content: `${label} Waiting for your opponent...`,
		...EPHEMERAL,
	});

	if (match.picks.shooter !== undefined && match.picks.keeper !== undefined) {
		clearTimeout(match.pickTimer);
		await resolveRound(match);
	}
}

async function forceResolveRound(match: ActiveMatch): Promise<void> {
	const roles: Role[] = ["shooter", "keeper"];
	for (const role of roles) {
		if (match.picks[role] === undefined) {
			match.picks[role] = Math.floor(Math.random() * 9);
			match.autoPicked.add(role);
		}
	}
	await resolveRound(match);
}

async function resolveRound(match: ActiveMatch): Promise<void> {
	const { shooterIndex } = currentRoles(match);
	const shooterBox = match.picks.shooter ?? 0;
	const keeperBox = match.picks.keeper ?? 0;
	const goal = shooterBox !== keeperBox;

	if (goal) match.scores[shooterIndex]++;

	const record: RoundRecord = {
		round: match.round,
		shooterIndex,
		shooterBox,
		keeperBox,
		goal,
		autoPicked: [...match.autoPicked],
	};
	match.history.push(record);

	await editGameMsg(
		match.message,
		buildRevealMessage(match, record) as unknown as Record<string, unknown>,
	);

	if (isMatchDecided(match)) {
		await finishMatch(match);
		return;
	}

	match.roundTimer = setTimeout(() => {
		match.round++;
		void sendRound(match);
	}, ROUND_TRANSITION_MS);
}

function isMatchDecided(match: ActiveMatch): boolean {
	const [scoreA, scoreB] = match.scores;
	if (match.round < MAX_ROUNDS) return false;
	if (match.round === MAX_ROUNDS) return scoreA !== scoreB;

	const extraRounds = match.round - MAX_ROUNDS;
	if (extraRounds % 2 !== 0) return false;
	return scoreA !== scoreB;
}

async function finishMatch(match: ActiveMatch): Promise<void> {
	deleteSession(match.id);
	await editGameMsg(
		match.message,
		buildFinishedMessage(match) as unknown as Record<string, unknown>,
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
export const createChallenge = postChallenge.create;
export const acceptChallenge = postChallenge.accept;
export const declineChallenge = postChallenge.decline;
export const createLobby = postLobby.create;
export const joinLobby = postLobby.join;
export const cancelLobby = postLobby.cancel;
