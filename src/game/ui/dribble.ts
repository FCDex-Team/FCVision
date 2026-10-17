import { ActionRow, Button, Container, TextDisplay } from "seyfert";
import { ButtonStyle } from "seyfert/lib/types";
import { COLORS, DIRECTIONS, DRIBBLE_ROUNDS } from "../shared/constants";
import type { Direction, DribbleGame } from "../shared/types";
import {
	DRIBBLE_REWARDS,
	divider,
	otherDirection,
	sortedScores,
	V2,
} from "../shared/utils";

function directionLabel(d: Direction): string {
	const def = DIRECTIONS.find((x) => x.value === d);
	return def ? `${def.emoji} ${def.label}` : d;
}

export function buildDribbleIntroMessage() {
	const container = new Container()
		.setColor(COLORS.pending)
		.addComponents(
			new TextDisplay().setContent("### 🏃 Beat the Defender"),
			new TextDisplay().setContent(
				`${DRIBBLE_ROUNDS} rounds of predicting the defender. A defender is approaching — pick a direction to dribble. After everyone picks, the defender's move is revealed. The opposite direction beats them; a risky center attempt is a 50/50 nutmeg.`,
			),
			divider(),
			new TextDisplay().setContent("Round 1 starting soon..."),
		);

	return { components: [container], ...V2 };
}

export function buildDribbleRoundMessage(game: DribbleGame) {
	const buttons = DIRECTIONS.map((d) =>
		new Button()
			.setCustomId(`dribble:dir:${game.id}:${d.value}`)
			.setLabel(d.label)
			.setEmoji(d.emoji)
			.setStyle(ButtonStyle.Primary),
	);

	const defender = game.defenderDirection;
	if (!defender) {
		const container = new Container()
			.setColor(COLORS.inProgress)
			.addComponents(
				new TextDisplay().setContent(
					`### 🏃 Round ${game.round}/${DRIBBLE_ROUNDS}`,
				),
				new TextDisplay().setContent("Setting up the next defender..."),
			);
		return { components: [container], ...V2 };
	}

	const container = new Container()
		.setColor(COLORS.inProgress)
		.addComponents(
			new TextDisplay().setContent(
				`### 🏃 Round ${game.round}/${DRIBBLE_ROUNDS}`,
			),
			new TextDisplay().setContent(
				"**A defender is approaching!** Pick a direction before the reveal.",
			),
			new TextDisplay().setContent("Which way will you dribble?"),
			new ActionRow<Button>().setComponents(buttons),
		);

	return { components: [container], ...V2 };
}

export function buildDribbleRevealMessage(game: DribbleGame) {
	const defender = game.defenderDirection;
	if (!defender) {
		const container = new Container()
			.setColor(COLORS.goal)
			.addComponents(
				new TextDisplay().setContent(
					`### 🏃 Round ${game.round}/${DRIBBLE_ROUNDS} result`,
				),
				new TextDisplay().setContent("Round result pending..."),
			);
		return { components: [container], ...V2 };
	}

	const correct = otherDirection(defender);
	const resultLines = Object.entries(game.choicesThisRound).map(
		([userId, chosen]) => {
			const ok = game.successThisRound[userId];
			return ok
				? `✅ <@${userId}> dribbled ${chosen} (+100)`
				: `❌ <@${userId}> tried ${chosen} and was tackled`;
		},
	);

	const resultText =
		resultLines.length === 0
			? "Nobody tried to dribble this round."
			: resultLines.join("\n");

	const scores = sortedScores(game.scores);
	const scoreboard =
		scores.length === 0
			? "No scores yet."
			: scores
					.map(([id, score], i) => `${i + 1}. <@${id}> — ${score} pts`)
					.join("\n");

	const container = new Container()
		.setColor(COLORS.goal)
		.addComponents(
			new TextDisplay().setContent(
				`### 🏃 Round ${game.round}/${DRIBBLE_ROUNDS} result`,
			),
			new TextDisplay().setContent(
				`Defender came from **${directionLabel(defender)}**. The way through was **${directionLabel(correct)}**.`,
			),
			divider(),
			new TextDisplay().setContent(`**This round**\n${resultText}`),
			divider(),
			new TextDisplay().setContent(`**Scoreboard**\n${scoreboard}`),
		);

	if (game.round < game.totalRounds) {
		container.addComponents(
			divider(),
			new TextDisplay().setContent("Next round soon..."),
		);
	}

	return { components: [container], ...V2 };
}

export function buildDribbleFinishedMessage(game: DribbleGame) {
	const finalScores = sortedScores(game.scores);
	const rewardLines = finalScores.map(([userId, score], i) => {
		let coins = DRIBBLE_REWARDS.participant;
		if (i === 0) coins = DRIBBLE_REWARDS.first;
		else if (i === 1) coins = DRIBBLE_REWARDS.second;
		else if (i === 2) coins = DRIBBLE_REWARDS.third;
		return `${i + 1}. <@${userId}> — ${score} pts — 🪙 ${coins} coins`;
	});

	const rewardsText = rewardLines.length
		? rewardLines.join("\n")
		: "No one played, so no coins were awarded.";

	const topMention = finalScores[0]?.[0]
		? `<@${finalScores[0][0]}>`
		: "No winner";

	const container = new Container()
		.setColor(COLORS.finished)
		.addComponents(
			new TextDisplay().setContent(`### 🏆 ${topMention} wins!`),
			divider(),
			new TextDisplay().setContent(
				`**Final scores & rewards**\n${rewardsText}`,
			),
		);

	return { components: [container], ...V2 };
}
