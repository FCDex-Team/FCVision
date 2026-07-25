import { ActionRow, Button, Container, TextDisplay } from "seyfert";
import { ButtonStyle } from "seyfert/lib/types";
import { COLORS, DIRECTIONS, FREEKICK_ROUNDS } from "./constants";
import type { FreekickMatch, PlayerInfo } from "./types";
import { divider, otherIndex, V2 } from "./utils";

interface FreekickChallenge {
	challenger: PlayerInfo;
	opponent: PlayerInfo;
	id: string;
}

interface FreekickLobby {
	host: PlayerInfo;
	id: string;
}

function scoreLine(match: FreekickMatch): string {
	const [a, b] = match.players;
	const [scoreA, scoreB] = match.scores;
	return `**${a.mention}**  \`${scoreA}\`  —  \`${scoreB}\`  **${b.mention}**`;
}

export function buildFreekickChallengeMessage(challenge: FreekickChallenge) {
	const container = new Container()
		.setColor(COLORS.pending)
		.addComponents(
			new TextDisplay().setContent("### 🦵 Freekick Shootout Challenge!"),
			new TextDisplay().setContent(
				`${challenge.challenger.mention} has challenged ${challenge.opponent.mention} to a freekick shootout!`,
			),
			divider(),
			new TextDisplay().setContent(
				`${challenge.opponent.mention}, do you accept?`,
			),
			new ActionRow<Button>().setComponents(
				new Button()
					.setCustomId(`freekick:accept:${challenge.id}`)
					.setLabel("Accept")
					.setEmoji("⚽")
					.setStyle(ButtonStyle.Success),
				new Button()
					.setCustomId(`freekick:decline:${challenge.id}`)
					.setLabel("Decline")
					.setEmoji("🚫")
					.setStyle(ButtonStyle.Danger),
			),
		);

	return { components: [container], ...V2 };
}

export function buildFreekickLobbyMessage(lobby: FreekickLobby) {
	const container = new Container()
		.setColor(COLORS.pending)
		.addComponents(
			new TextDisplay().setContent("### 🦵 Freekick Shootout — Open Lobby"),
			new TextDisplay().setContent(
				`${lobby.host.mention} is looking for an opponent for a freekick shootout!`,
			),
			divider(),
			new TextDisplay().setContent("Click **Join Match** to take them on."),
			new ActionRow<Button>().setComponents(
				new Button()
					.setCustomId(`freekick:lobby:join:${lobby.id}`)
					.setLabel("Join Match")
					.setEmoji("⚽")
					.setStyle(ButtonStyle.Success),
				new Button()
					.setCustomId(`freekick:lobby:cancel:${lobby.id}`)
					.setLabel("Cancel")
					.setEmoji("🚫")
					.setStyle(ButtonStyle.Secondary),
			),
		);

	return { components: [container], ...V2 };
}

export function buildFreekickResolvedMessage(
	mention: string,
	reason: "declined" | "expired" | "cancelled",
) {
	const text =
		reason === "declined"
			? `❌ ${mention} declined the challenge.`
			: reason === "cancelled"
				? `🚫 ${mention} closed the lobby.`
				: `⌛ The challenge to ${mention} expired.`;

	const container = new Container()
		.setColor(COLORS.cancelled)
		.addComponents(
			new TextDisplay().setContent("### 🦵 Freekick Shootout"),
			new TextDisplay().setContent(text),
		);

	return { components: [container], ...V2 };
}

export function buildFreekickCoinTossMessage(match: FreekickMatch) {
	const [a, b] = match.players;
	const container = new Container()
		.setColor(COLORS.pending)
		.addComponents(
			new TextDisplay().setContent("### 🪙 Flipping a coin..."),
			new TextDisplay().setContent(
				`${a.mention} vs ${b.mention} — who shoots first?`,
			),
		);

	return { components: [container], ...V2 };
}

export function currentFreekickRoles(match: FreekickMatch) {
	const sameAsFirst = match.round % 2 === 1;
	const shooterIndex = sameAsFirst
		? match.firstShooterIndex
		: otherIndex(match.firstShooterIndex);
	const keeperIndex = otherIndex(shooterIndex);
	return {
		shooterIndex,
		keeperIndex,
		shooter: match.players[shooterIndex],
		keeper: match.players[keeperIndex],
	};
}

export function buildFreekickRoundMessage(match: FreekickMatch) {
	const { shooter, keeper } = currentFreekickRoles(match);
	const roundLabel = `${match.round}/${FREEKICK_ROUNDS}`;

	const buttons = DIRECTIONS.map((dir) =>
		new Button()
			.setCustomId(`freekick:dir:${match.id}:${dir.value}`)
			.setLabel(dir.label)
			.setEmoji(dir.emoji)
			.setStyle(ButtonStyle.Secondary),
	);

	const container = new Container()
		.setColor(COLORS.inProgress)
		.addComponents(
			new TextDisplay().setContent("### 🦵 Freekick Shootout"),
			new TextDisplay().setContent(
				`**Round ${roundLabel}**\n⚽ Shooting: ${shooter.mention}   🧤 Keeping: ${keeper.mention}`,
			),
			divider(),
			new TextDisplay().setContent(scoreLine(match)),
			divider(),
			new TextDisplay().setContent("Both players: pick a direction!"),
			new ActionRow<Button>().setComponents(buttons),
		);

	return { components: [container], ...V2 };
}

export function buildFreekickRevealMessage(
	match: FreekickMatch,
	shooterDir: string,
	keeperDir: string,
	goal: boolean,
) {
	const { shooter, keeper } = currentFreekickRoles(match);
	const resultText = goal
		? `### ⚽ GOAL! ${shooter.mention} scores!`
		: `### 🧤 SAVED! ${keeper.mention} guesses right!`;

	const container = new Container()
		.setColor(goal ? COLORS.goal : COLORS.save)
		.addComponents(
			new TextDisplay().setContent(resultText),
			new TextDisplay().setContent(
				`Shot: ${shooterDir}  vs  Dive: ${keeperDir}`,
			),
			divider(),
			new TextDisplay().setContent(scoreLine(match)),
			divider(),
			new TextDisplay().setContent("Next round starting shortly..."),
		);

	return { components: [container], ...V2 };
}

export function buildFreekickFinishedMessage(match: FreekickMatch) {
	const [a, b] = match.players;
	const [scoreA, scoreB] = match.scores;
	const winner = scoreA === scoreB ? undefined : scoreA > scoreB ? a : b;

	const container = new Container()
		.setColor(COLORS.finished)
		.addComponents(
			new TextDisplay().setContent(
				winner ? `### 🏆 ${winner.mention} wins!` : "### 🤝 It's a draw!",
			),
			divider(),
			new TextDisplay().setContent(scoreLine(match)),
			divider(),
			new TextDisplay().setContent("GG! Play again with `/freekick`"),
		);

	return { components: [container], ...V2 };
}
