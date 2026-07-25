import { ActionRow, Button, Container, TextDisplay } from "seyfert";
import { ButtonStyle } from "seyfert/lib/types";
import { COLORS, CROSSBAR_ATTEMPTS } from "./constants";
import type { CrossbarMatch, PlayerInfo } from "./types";
import { divider, V2 } from "./utils";

interface CrossbarChallenge {
	challenger: PlayerInfo;
	opponent: PlayerInfo;
	id: string;
}

interface CrossbarLobby {
	host: PlayerInfo;
	id: string;
}

function scoreLine(match: CrossbarMatch): string {
	const [a, b] = match.players;
	const [hitsA, hitsB] = match.hits;
	return `**${a.mention}**  \`${hitsA}/${CROSSBAR_ATTEMPTS}\`  —  \`${hitsB}/${CROSSBAR_ATTEMPTS}\`  **${b.mention}**`;
}

export function buildCrossbarChallengeMessage(challenge: CrossbarChallenge) {
	const container = new Container()
		.setColor(COLORS.pending)
		.addComponents(
			new TextDisplay().setContent("### ⚽ Crossbar Challenge!"),
			new TextDisplay().setContent(
				`${challenge.challenger.mention} has challenged ${challenge.opponent.mention} to a crossbar challenge!`,
			),
			divider(),
			new TextDisplay().setContent(
				`${challenge.opponent.mention}, do you accept?`,
			),
			new ActionRow<Button>().setComponents(
				new Button()
					.setCustomId(`crossbar:accept:${challenge.id}`)
					.setLabel("Accept")
					.setEmoji("⚽")
					.setStyle(ButtonStyle.Success),
				new Button()
					.setCustomId(`crossbar:decline:${challenge.id}`)
					.setLabel("Decline")
					.setEmoji("🚫")
					.setStyle(ButtonStyle.Danger),
			),
		);

	return { components: [container], ...V2 };
}

export function buildCrossbarLobbyMessage(lobby: CrossbarLobby) {
	const container = new Container()
		.setColor(COLORS.pending)
		.addComponents(
			new TextDisplay().setContent("### ⚽ Crossbar Challenge — Open Lobby"),
			new TextDisplay().setContent(
				`${lobby.host.mention} is looking for an opponent for a crossbar challenge!`,
			),
			divider(),
			new TextDisplay().setContent("Click **Join Match** to take them on."),
			new ActionRow<Button>().setComponents(
				new Button()
					.setCustomId(`crossbar:lobby:join:${lobby.id}`)
					.setLabel("Join Match")
					.setEmoji("⚽")
					.setStyle(ButtonStyle.Success),
				new Button()
					.setCustomId(`crossbar:lobby:cancel:${lobby.id}`)
					.setLabel("Cancel")
					.setEmoji("🚫")
					.setStyle(ButtonStyle.Secondary),
			),
		);

	return { components: [container], ...V2 };
}

export function buildCrossbarResolvedMessage(
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
			new TextDisplay().setContent("### ⚽ Crossbar Challenge"),
			new TextDisplay().setContent(text),
		);

	return { components: [container], ...V2 };
}

export function buildCrossbarTurnMessage(match: CrossbarMatch) {
	const currentPlayer = match.players[match.currentPlayerIndex];
	const attemptNumber = match.attempts[match.currentPlayerIndex] + 1;

	const button = new Button()
		.setCustomId(`crossbar:shoot:${match.id}`)
		.setLabel(`Shoot! (${attemptNumber}/${CROSSBAR_ATTEMPTS})`)
		.setEmoji("⚽")
		.setStyle(ButtonStyle.Success);

	const container = new Container()
		.setColor(COLORS.inProgress)
		.addComponents(
			new TextDisplay().setContent("### ⚽ Crossbar Challenge"),
			new TextDisplay().setContent(scoreLine(match)),
			divider(),
			new TextDisplay().setContent(
				`It's ${currentPlayer.mention}'s turn — attempt **${attemptNumber}/${CROSSBAR_ATTEMPTS}**.`,
			),
			new ActionRow<Button>().setComponents(button),
		);

	return { components: [container], ...V2 };
}

export function buildCrossbarResultMessage(match: CrossbarMatch, hit: boolean) {
	const currentPlayer = match.players[match.currentPlayerIndex];
	const resultText = hit
		? `### 🎯 CLANG! ${currentPlayer.mention} hits the crossbar!`
		: `### 😬 ${currentPlayer.mention} missed the crossbar.`;

	const container = new Container()
		.setColor(hit ? COLORS.goal : COLORS.save)
		.addComponents(
			new TextDisplay().setContent(resultText),
			divider(),
			new TextDisplay().setContent(scoreLine(match)),
		);

	return { components: [container], ...V2 };
}

export function buildCrossbarFinishedMessage(match: CrossbarMatch) {
	const [a, b] = match.players;
	const [hitsA, hitsB] = match.hits;
	let winner: PlayerInfo | undefined;
	if (hitsA !== hitsB) winner = hitsA > hitsB ? a : b;

	const container = new Container()
		.setColor(COLORS.finished)
		.addComponents(
			new TextDisplay().setContent(
				winner ? `### 🏆 ${winner.mention} wins!` : "### 🤝 It's a draw!",
			),
			divider(),
			new TextDisplay().setContent(scoreLine(match)),
			divider(),
			new TextDisplay().setContent("GG! Play again with `/crossbar`"),
		);

	return { components: [container], ...V2 };
}
