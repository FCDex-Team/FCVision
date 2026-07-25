import type { CommandContext, ComponentContext } from "seyfert";
import {
	STADIUM_REWARDS,
	STADIUM_ROUND_MS,
	STADIUM_ROUNDS,
	STADIUM_TRANSITION_MS,
} from "./constants";
import {
	addCoins,
	incrementStadiumGamesPlayed,
	recordStadiumResult,
} from "./db";
import { selectStadium } from "./stadium-selector";
import {
	createSession,
	deleteSession,
	findSessionByChannel,
	generateId,
} from "./store";
import type { StadiumGame } from "./types";
import {
	buildStadiumFinishedMessage,
	buildStadiumIntroMessage,
	buildStadiumRevealMessage,
	buildStadiumRoundMessage,
	stadiumPointsForPlace,
} from "./ui-stadium";
import { EPHEMERAL, editGameMsg, sortedScores } from "./utils";

function shuffle<T>(array: T[]): T[] {
	const copy = [...array];
	for (let i = copy.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		const a = copy[i];
		const b = copy[j];
		if (a !== undefined && b !== undefined) {
			copy[i] = b;
			copy[j] = a;
		}
	}
	return copy;
}

export async function startStadiumGame(ctx: CommandContext): Promise<void> {
	const existing = findSessionByChannel(ctx.channelId, "stadium");
	if (existing) {
		await ctx.write({
			content: "A stadium quiz is already running in this channel!",
			...EPHEMERAL,
		});
		return;
	}

	const game = createSession<StadiumGame>({
		kind: "stadium",
		id: generateId(),
		guildId: ctx.guildId ?? "",
		channelId: ctx.channelId,
		round: 0,
		totalRounds: STADIUM_ROUNDS,
		scores: {},
		answeredThisRound: new Set(),
		correctOrderThisRound: [],
		participants: new Set(),
	});

	await ctx.deferReply();
	const intro = await ctx.followup(buildStadiumIntroMessage());
	game.message = intro;

	setTimeout(() => void nextStadiumRound(game), 2_000);
}

function nextStadiumRound(game: StadiumGame): void {
	if (game.round >= game.totalRounds) {
		void finishStadiumGame(game);
		return;
	}

	game.round++;
	game.answeredThisRound = new Set();
	game.correctOrderThisRound = [];

	const source = selectStadium(Array.from(game.participants));
	const options = shuffle(source.options);
	const correctIndex = options.indexOf(source.name);

	game.currentStadium = source;
	game.currentCorrectIndex = correctIndex;

	const currentStadium = game.currentStadium;
	void editGameMsg(
		game.message,
		buildStadiumRoundMessage(game, currentStadium) as unknown as Record<
			string,
			unknown
		>,
	);

	game.roundTimer = setTimeout(() => {
		void endStadiumRound(game);
	}, STADIUM_ROUND_MS);
}

export async function handleStadiumGuess(
	ctx: ComponentContext<"Button">,
	game: StadiumGame,
	optionIndex: number,
): Promise<void> {
	const userId = ctx.author.id;
	game.participants.add(userId);

	if (game.answeredThisRound.has(userId)) {
		return ctx.write({
			content: "You already guessed this round!",
			...EPHEMERAL,
		});
	}

	game.answeredThisRound.add(userId);

	const isCorrect = optionIndex === game.currentCorrectIndex;
	recordStadiumResult(userId, isCorrect);

	if (isCorrect) {
		const place = game.correctOrderThisRound.length;
		game.correctOrderThisRound.push(userId);
		const points = stadiumPointsForPlace(place);
		game.scores[userId] = (game.scores[userId] ?? 0) + points;
		await ctx.write({
			content: `:white_check_mark: Correct! +${points} points`,
			...EPHEMERAL,
		});
	} else {
		await ctx.write({ content: ":x: Wrong answer!", ...EPHEMERAL });
	}
}

async function endStadiumRound(game: StadiumGame): Promise<void> {
	clearTimeout(game.roundTimer);
	const stadium = game.currentStadium;
	if (!stadium) return;

	await editGameMsg(
		game.message,
		buildStadiumRevealMessage(game, stadium) as unknown as Record<
			string,
			unknown
		>,
	);

	setTimeout(() => {
		void nextStadiumRound(game);
	}, STADIUM_TRANSITION_MS);
}

async function finishStadiumGame(game: StadiumGame): Promise<void> {
	deleteSession(game.id);
	await editGameMsg(
		game.message,
		buildStadiumFinishedMessage(game) as unknown as Record<string, unknown>,
	);

	const participants = Object.keys(game.scores);
	for (const userId of participants) {
		incrementStadiumGamesPlayed(userId);
	}

	const finalScores = sortedScores(game.scores);
	for (let i = 0; i < finalScores.length; i++) {
		const entry = finalScores[i];
		if (!entry) continue;
		const [userId] = entry;
		let coins = STADIUM_REWARDS.participant;
		if (i === 0) coins = STADIUM_REWARDS.first;
		else if (i === 1) coins = STADIUM_REWARDS.second;
		else if (i === 2) coins = STADIUM_REWARDS.third;
		addCoins(userId, coins);
	}
}
