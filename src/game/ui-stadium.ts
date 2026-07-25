import {
	ActionRow,
	Button,
	Container,
	MediaGallery,
	MediaGalleryItem,
	TextDisplay,
} from "seyfert";
import { ButtonStyle } from "seyfert/lib/types";
import { COLORS, STADIUM_POINTS } from "./constants";
import type { Stadium } from "./stadiums";
import type { StadiumGame } from "./types";
import { divider, sortedScores, V2 } from "./utils";

export function buildStadiumIntroMessage() {
	const container = new Container()
		.setColor(COLORS.pending)
		.addComponents(
			new TextDisplay().setContent("### :stadium: What Stadium Is This?"),
			new TextDisplay().setContent(
				"5 rounds, 4 options, 15 seconds per round. Be fast — the quicker you guess correctly, the more points you earn!",
			),
			divider(),
			new TextDisplay().setContent("Round 1 starting soon..."),
		);

	return { components: [container], ...V2 };
}

export function buildStadiumRoundMessage(game: StadiumGame, stadium: Stadium) {
	const roundLabel = `${game.round}/${game.totalRounds}`;
	const buttons = stadium.options.map((option, index) =>
		new Button()
			.setCustomId(`stadium:guess:${game.id}:${index}`)
			.setLabel(option)
			.setStyle(ButtonStyle.Secondary),
	);

	const rows: ActionRow<Button>[] = [];
	for (let i = 0; i < buttons.length; i += 2) {
		rows.push(new ActionRow<Button>().setComponents(buttons.slice(i, i + 2)));
	}

	const container = new Container()
		.setColor(COLORS.inProgress)
		.addComponents(
			new TextDisplay().setContent(`### :stadium: Round ${roundLabel}`),
			new MediaGallery().addItems(
				new MediaGalleryItem()
					.setMedia(stadium.imageUrl)
					.setDescription("Guess the stadium"),
			),
			divider(),
			new TextDisplay().setContent(
				"Click the correct stadium name! You have **15 seconds**.",
			),
		);

	for (const row of rows) container.addComponents(row);

	return { components: [container], ...V2 };
}

export function buildStadiumRevealMessage(game: StadiumGame, stadium: Stadium) {
	const scores = sortedScores(game.scores);
	const scoreboard =
		scores.length === 0
			? "No one scored yet."
			: scores
					.map(([id, score], i) => `${i + 1}. <@${id}> — ${score} pts`)
					.join("\n");

	const container = new Container()
		.setColor(COLORS.goal)
		.addComponents(
			new TextDisplay().setContent(`### :white_check_mark: ${stadium.name}`),
			new MediaGallery().addItems(
				new MediaGalleryItem()
					.setMedia(stadium.imageUrl)
					.setDescription(stadium.name),
			),
			divider(),
			new TextDisplay().setContent(`**Scoreboard**\n${scoreboard}`),
		);

	if (game.round < game.totalRounds) {
		container.addComponents(
			divider(),
			new TextDisplay().setContent("Next round starting soon..."),
		);
	}

	return { components: [container], ...V2 };
}

export function buildStadiumFinishedMessage(game: StadiumGame) {
	const finalScores = sortedScores(game.scores);
	const rewardLines = finalScores.map(([userId, score], i) => {
		let coins = 10;
		if (i === 0) coins = 100;
		else if (i === 1) coins = 50;
		else if (i === 2) coins = 25;
		return `${i + 1}. <@${userId}> — ${score} pts — :coin: ${coins} coins`;
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
			new TextDisplay().setContent(`### :trophy: ${topMention} wins!`),
			divider(),
			new TextDisplay().setContent(
				`**Final scores & rewards**\n${rewardsText}`,
			),
		);

	return { components: [container], ...V2 };
}

export function stadiumPointsForPlace(place: number): number {
	if (place < 0 || place >= STADIUM_POINTS.length)
		return STADIUM_POINTS.at(-1) ?? 0;
	return STADIUM_POINTS[place] ?? 0;
}
