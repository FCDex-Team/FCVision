import type { CommandContext, ComponentContext } from "seyfert";
import {
	DIRECTIONS,
	DRIBBLE_ROUND_MS,
	DRIBBLE_ROUNDS,
	DRIBBLE_TRANSITION_MS,
} from "./constants";
import { addCoins, incrementDribbleGamesPlayed } from "./db";
import {
	createSession,
	deleteSession,
	findSessionByChannel,
	generateId,
} from "./store";
import type { Direction, DribbleGame } from "./types";
import {
	buildDribbleFinishedMessage,
	buildDribbleIntroMessage,
	buildDribbleRevealMessage,
	buildDribbleRoundMessage,
} from "./ui-dribble";
import {
	DRIBBLE_REWARDS,
	EPHEMERAL,
	editGameMsg,
	otherDirection,
	sortedScores,
} from "./utils";

function beatDefender(defender: Direction, chosen: Direction): boolean {
	if (chosen === "center") return Math.random() < 0.5;
	return chosen === otherDirection(defender);
}

function pickDefenderDirection(): Direction {
	const dir = DIRECTIONS[Math.floor(Math.random() * DIRECTIONS.length)];
	return dir?.value ?? "center";
}

export async function startDribbleGame(ctx: CommandContext): Promise<void> {
	const existing = findSessionByChannel(ctx.channelId, "dribble");
	if (existing) {
		await ctx.write({
			content: "A dribble challenge is already running in this channel!",
			...EPHEMERAL,
		});
		return;
	}

	const game = createSession<DribbleGame>({
		kind: "dribble",
		id: generateId(),
		guildId: ctx.guildId ?? "",
		channelId: ctx.channelId,
		round: 0,
		totalRounds: DRIBBLE_ROUNDS,
		scores: {},
		answeredThisRound: new Set(),
		choicesThisRound: {},
		successThisRound: {},
	});

	await ctx.deferReply();
	const intro = await ctx.followup(buildDribbleIntroMessage());
	game.message = intro;
	setTimeout(() => void nextDribbleRound(game), 2_000);
}

function nextDribbleRound(game: DribbleGame): void {
	if (game.round >= game.totalRounds) {
		void finishDribbleGame(game);
		return;
	}

	game.round++;
	game.answeredThisRound = new Set();
	game.choicesThisRound = {};
	game.successThisRound = {};
	game.defenderDirection = pickDefenderDirection();

	void editGameMsg(
		game.message,
		buildDribbleRoundMessage(game) as unknown as Record<string, unknown>,
	);

	game.roundTimer = setTimeout(() => {
		void endDribbleRound(game);
	}, DRIBBLE_ROUND_MS);
}

export async function handleDribbleDirection(
	ctx: ComponentContext<"Button">,
	game: DribbleGame,
	direction: Direction,
): Promise<void> {
	const userId = ctx.author.id;

	if (game.answeredThisRound.has(userId)) {
		return ctx.write({
			content: "You already picked a direction this round!",
			...EPHEMERAL,
		});
	}

	if (!game.defenderDirection) {
		return ctx.write({
			content: "Round not ready yet.",
			...EPHEMERAL,
		});
	}

	game.answeredThisRound.add(userId);
	game.choicesThisRound[userId] = direction;
	const success = beatDefender(game.defenderDirection, direction);
	game.successThisRound[userId] = success;
	game.scores[userId] = (game.scores[userId] ?? 0) + (success ? 100 : 0);

	await ctx.write({
		content: success
			? ":white_check_mark: You beat the defender! +100 points"
			: ":x: The defender tackled you!",
		...EPHEMERAL,
	});
}

async function endDribbleRound(game: DribbleGame): Promise<void> {
	clearTimeout(game.roundTimer);
	await editGameMsg(
		game.message,
		buildDribbleRevealMessage(game) as unknown as Record<string, unknown>,
	);

	setTimeout(() => {
		void nextDribbleRound(game);
	}, DRIBBLE_TRANSITION_MS);
}

async function finishDribbleGame(game: DribbleGame): Promise<void> {
	deleteSession(game.id);
	await editGameMsg(
		game.message,
		buildDribbleFinishedMessage(game) as unknown as Record<string, unknown>,
	);

	const sorted = sortedScores(game.scores);
	for (let i = 0; i < sorted.length; i++) {
		const entry = sorted[i];
		if (!entry) continue;
		const [userId] = entry;
		let coins = DRIBBLE_REWARDS.participant;
		if (i === 0) coins = DRIBBLE_REWARDS.first;
		else if (i === 1) coins = DRIBBLE_REWARDS.second;
		else if (i === 2) coins = DRIBBLE_REWARDS.third;
		addCoins(userId, coins);
		incrementDribbleGamesPlayed(userId);
	}
}
