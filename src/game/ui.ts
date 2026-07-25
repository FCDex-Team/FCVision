import { ActionRow, Button, Container, TextDisplay } from "seyfert";
import { ButtonStyle } from "seyfert/lib/types";
import {
	BOXES,
	COLORS,
	GOAL_EMOJI,
	KEEPER_EMOJI,
	MAX_ROUNDS,
	SAVE_EMOJI,
} from "./constants";
import type {
	ActiveMatch,
	PendingChallenge,
	PendingLobby,
	RoundRecord,
} from "./types";
import { divider, otherIndex, V2 } from "./utils";

// ---------------------------------------------------------------------------
// Grid
// ---------------------------------------------------------------------------

interface GridOptions {
	disabled?: boolean;
	shooterBox?: number;
	keeperBox?: number;
}

function buildGrid(
	matchId: string,
	options: GridOptions = {},
): ActionRow<Button>[] {
	const { disabled = false, shooterBox, keeperBox } = options;
	const buttons = BOXES.map((box, index) => {
		const isShooter = shooterBox === index;
		const isKeeper = keeperBox === index;

		let style = ButtonStyle.Secondary;
		let emoji = box.emoji;

		if (isShooter && isKeeper) {
			style = ButtonStyle.Danger;
			emoji = SAVE_EMOJI;
		} else if (isShooter) {
			style = ButtonStyle.Success;
			emoji = GOAL_EMOJI;
		} else if (isKeeper) {
			style = ButtonStyle.Primary;
			emoji = KEEPER_EMOJI;
		}

		return new Button()
			.setCustomId(`post:box:${matchId}:${index}`)
			.setLabel(box.label)
			.setEmoji(emoji)
			.setStyle(style)
			.setDisabled(disabled);
	});

	const rows: ActionRow<Button>[] = [];
	for (let i = 0; i < buttons.length; i += 3) {
		rows.push(new ActionRow<Button>().setComponents(buttons.slice(i, i + 3)));
	}
	return rows;
}

// ---------------------------------------------------------------------------
// Shared bits
// ---------------------------------------------------------------------------

function scoreLine(match: ActiveMatch): string {
	const [a, b] = match.players;
	const [scoreA, scoreB] = match.scores;
	return `**${a.mention}**  \`${scoreA}\`  —  \`${scoreB}\`  **${b.mention}**`;
}

function historyLine(history: RoundRecord[]): string | undefined {
	if (!history.length) return undefined;
	const icons = history
		.map((r) => (r.goal ? GOAL_EMOJI : SAVE_EMOJI))
		.join(" ");
	return `History: ${icons}`;
}

function currentShooterIndex(match: ActiveMatch): 0 | 1 {
	const sameAsFirst = match.round % 2 === 1;
	return sameAsFirst
		? match.firstShooterIndex
		: otherIndex(match.firstShooterIndex);
}

export function currentRoles(match: ActiveMatch) {
	const shooterIndex = currentShooterIndex(match);
	const keeperIndex = otherIndex(shooterIndex);
	return {
		shooterIndex,
		keeperIndex,
		shooter: match.players[shooterIndex],
		keeper: match.players[keeperIndex],
	};
}

// ---------------------------------------------------------------------------
// Challenge screens
// ---------------------------------------------------------------------------

export function buildChallengeMessage(challenge: PendingChallenge) {
	const container = new Container()
		.setColor(COLORS.pending)
		.addComponents(
			new TextDisplay().setContent("### ⚽ Post — Shootout Challenge!"),
			new TextDisplay().setContent(
				`${challenge.challenger.mention} has challenged ${challenge.opponent.mention} to a penalty shootout!`,
			),
			divider(),
			new TextDisplay().setContent(
				`${challenge.opponent.mention}, do you accept? You have 60 seconds.`,
			),
			new ActionRow<Button>().setComponents([
				new Button()
					.setCustomId(`post:challenge:accept:${challenge.id}`)
					.setLabel("Accept")
					.setEmoji("⚽")
					.setStyle(ButtonStyle.Success),
				new Button()
					.setCustomId(`post:challenge:decline:${challenge.id}`)
					.setLabel("Decline")
					.setEmoji("🚫")
					.setStyle(ButtonStyle.Danger),
			]),
		);

	return { components: [container], ...V2 };
}

export function buildChallengeResolvedMessage(
	challenge: PendingChallenge,
	reason: "declined" | "expired",
) {
	const text =
		reason === "declined"
			? `❌ ${challenge.opponent.mention} declined the challenge from ${challenge.challenger.mention}.`
			: `⌛ The challenge to ${challenge.opponent.mention} expired. ${challenge.challenger.mention}, try again with \`/post challenge\`!`;

	const container = new Container()
		.setColor(COLORS.cancelled)
		.addComponents(
			new TextDisplay().setContent("### ⚽ Post — Shootout Challenge"),
			new TextDisplay().setContent(text),
		);

	return { components: [container], ...V2 };
}

// ---------------------------------------------------------------------------
// Lobby screens
// ---------------------------------------------------------------------------

export function buildLobbyMessage(lobby: PendingLobby) {
	const container = new Container()
		.setColor(COLORS.pending)
		.addComponents(
			new TextDisplay().setContent("### ⚽ Post — Open Lobby"),
			new TextDisplay().setContent(
				`${lobby.host.mention} is looking for an opponent for a penalty shootout!`,
			),
			divider(),
			new TextDisplay().setContent(
				"Click **Join Match** to take them on. You have 90 seconds.",
			),
			new ActionRow<Button>().setComponents([
				new Button()
					.setCustomId(`post:lobby:join:${lobby.id}`)
					.setLabel("Join Match")
					.setEmoji("⚽")
					.setStyle(ButtonStyle.Success),
				new Button()
					.setCustomId(`post:lobby:cancel:${lobby.id}`)
					.setLabel("Cancel")
					.setEmoji("🚫")
					.setStyle(ButtonStyle.Secondary),
			]),
		);

	return { components: [container], ...V2 };
}

export function buildLobbyResolvedMessage(
	lobby: PendingLobby,
	reason: "cancelled" | "expired",
) {
	const text =
		reason === "cancelled"
			? `🚫 ${lobby.host.mention} closed the lobby.`
			: `⌛ Nobody joined ${lobby.host.mention}'s lobby in time. Try \`/post play\` again!`;

	const container = new Container()
		.setColor(COLORS.cancelled)
		.addComponents(
			new TextDisplay().setContent("### ⚽ Post — Open Lobby"),
			new TextDisplay().setContent(text),
		);

	return { components: [container], ...V2 };
}

// ---------------------------------------------------------------------------
// Match screens
// ---------------------------------------------------------------------------

export function buildCoinTossMessage(match: ActiveMatch) {
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

export function buildRoundMessage(match: ActiveMatch) {
	const { shooter, keeper } = currentRoles(match);
	const roundLabel =
		match.round > MAX_ROUNDS
			? `${match.round} (Sudden Death 🔥)`
			: `${match.round}/${MAX_ROUNDS}`;

	const components = [
		new TextDisplay().setContent("### ⚽ Post — Penalty Shootout"),
		new TextDisplay().setContent(
			`**Round ${roundLabel}**\n${GOAL_EMOJI} Shooting: ${shooter.mention}   ${KEEPER_EMOJI} Keeping: ${keeper.mention}`,
		),
		divider(),
		new TextDisplay().setContent(scoreLine(match)),
	];

	const history = historyLine(match.history);
	if (history) components.push(new TextDisplay().setContent(history));

	components.push(
		divider(),
		new TextDisplay().setContent(
			"Both players: pick your box below! You have **20 seconds** and your choice is secret until both are locked in. 🤫",
		),
	);

	const container = new Container()
		.setColor(COLORS.inProgress)
		.addComponents(components);
	for (const row of buildGrid(match.id)) container.addComponents(row);

	return { components: [container], ...V2 };
}

export function buildRevealMessage(match: ActiveMatch, last: RoundRecord) {
	const shooterInfo = match.players[last.shooterIndex];
	const keeperInfo = match.players[otherIndex(last.shooterIndex)];

	const resultText = last.goal
		? `### ${GOAL_EMOJI} GOAL! ${shooterInfo.mention} beats the keeper!`
		: `### ${SAVE_EMOJI} SAVED! ${keeperInfo.mention} guesses right and denies the shot!`;

	const components = [
		new TextDisplay().setContent(resultText),
		divider(),
		new TextDisplay().setContent(scoreLine(match)),
	];

	const history = historyLine(match.history);
	if (history) components.push(new TextDisplay().setContent(history));

	if (last.autoPicked.length) {
		const names = last.autoPicked
			.map((role) =>
				role === "shooter" ? shooterInfo.mention : keeperInfo.mention,
			)
			.join(" and ");
		components.push(
			new TextDisplay().setContent(
				`⏰ ${names} ran out of time — the bot picked for them!`,
			),
		);
	}

	components.push(
		divider(),
		new TextDisplay().setContent("Next round starting shortly..."),
	);

	const container = new Container()
		.setColor(last.goal ? COLORS.goal : COLORS.save)
		.addComponents(components);

	for (const row of buildGrid(match.id, {
		disabled: true,
		shooterBox: last.shooterBox,
		keeperBox: last.keeperBox,
	})) {
		container.addComponents(row);
	}

	return { components: [container], ...V2 };
}

export function buildFinishedMessage(match: ActiveMatch) {
	const [a, b] = match.players;
	const [scoreA, scoreB] = match.scores;
	const winner = scoreA === scoreB ? undefined : scoreA > scoreB ? a : b;

	const components = [
		new TextDisplay().setContent(
			winner
				? `### 🏆 ${winner.mention} wins the shootout!`
				: "### 🤝 It's a draw!",
		),
		divider(),
		new TextDisplay().setContent(scoreLine(match)),
	];

	const history = historyLine(match.history);
	if (history) components.push(new TextDisplay().setContent(history));

	components.push(
		divider(),
		new TextDisplay().setContent(
			`Played over ${match.round} round${match.round === 1 ? "" : "s"}. GG! ⚽`,
		),
	);

	const container = new Container()
		.setColor(COLORS.finished)
		.addComponents(components);

	return { components: [container], ...V2 };
}
