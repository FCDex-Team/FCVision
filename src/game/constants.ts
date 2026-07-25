/**
 * The single Discord server this bot is exclusive to.
 * Commands are only registered here, and the bot leaves any other guild it joins.
 */
export const GUILD_ID = process.env.GUILD_ID ?? "";

/** Total rounds in a regular match before sudden death may kick in. */
export const MAX_ROUNDS = 5;

/** How long a player has to pick a box before the bot auto-picks for them. */
export const PICK_TIMEOUT_MS = 20_000;

/** Pause between the reveal of a round and the start of the next one. */
export const ROUND_TRANSITION_MS = 4_500;

/** Little dramatic pause for the "coin toss" before round 1 starts. */
export const COIN_TOSS_DELAY_MS = 1_800;

/** How long a challenge waits for Accept/Decline before it expires. */
export const CHALLENGE_EXPIRE_MS = 60_000;

/** How long an open lobby waits for someone to join before it expires. */
export const LOBBY_EXPIRE_MS = 90_000;

// ---------------------------------------------------------------------------
// Stadium constants
// ---------------------------------------------------------------------------

/** Number of rounds in a What-Stadium-Is-This game. */
export const STADIUM_ROUNDS = 5;

/** How long players have to guess the stadium each round. */
export const STADIUM_ROUND_MS = 15_000;

/** Pause between stadium rounds. */
export const STADIUM_TRANSITION_MS = 4_000;

/** Points awarded per stadium round by answer order. */
export const STADIUM_POINTS = [100, 75, 50, 25];

/** Coin rewards at the end of a stadium game. */
export const STADIUM_REWARDS: {
	first: number;
	second: number;
	third: number;
	participant: number;
} = {
	first: 100,
	second: 50,
	third: 25,
	participant: 10,
};

// ---------------------------------------------------------------------------
// Freekick constants
// ---------------------------------------------------------------------------

/** Rounds in a freekick shootout. */
export const FREEKICK_ROUNDS = 3;

/** Pick timeout for freekick shooter and keeper. */
export const FREEKICK_PICK_MS = 20_000;

/** Pause between freekick rounds. */
export const FREEKICK_TRANSITION_MS = 4_000;

/** Freekick direction choices. */
export const DIRECTIONS: readonly DirectionDef[] = [
	{ value: "left", emoji: "⬅️", label: "Left" },
	{ value: "center", emoji: "⬆️", label: "Center" },
	{ value: "right", emoji: "➡️", label: "Right" },
];

export interface DirectionDef {
	value: "left" | "center" | "right";
	emoji: string;
	label: string;
}

// ---------------------------------------------------------------------------
// Dribbling constants
// ---------------------------------------------------------------------------

/** Rounds in a dribbling reaction race. */
export const DRIBBLE_ROUNDS = 3;

/** Maximum random delay before the "GO!" signal appears. */
export const DRIBBLE_MAX_DELAY_MS = 5_000;

/** How long players have to click after GO! */
export const DRIBBLE_GO_WINDOW_MS = 3_000;

/** How long players have to pick a dribble direction each round. */
export const DRIBBLE_ROUND_MS = 15_000;

/** Pause between dribble rounds. */
export const DRIBBLE_TRANSITION_MS = 4_000;

// ---------------------------------------------------------------------------
// Crossbar constants
// ---------------------------------------------------------------------------

/** Attempts per player in a crossbar challenge. */
export const CROSSBAR_ATTEMPTS = 3;

/** Base chance (out of 100) to hit the crossbar. */
export const CROSSBAR_HIT_CHANCE = 35;

export interface BoxDef {
	emoji: string;
	label: string;
}

/** The 3x3 goal grid, laid out row by row (top-left to bottom-right). */
export const BOXES: readonly BoxDef[] = [
	{ emoji: "↖️", label: "Top Left" },
	{ emoji: "⬆️", label: "Top Center" },
	{ emoji: "↗️", label: "Top Right" },
	{ emoji: "⬅️", label: "Mid Left" },
	{ emoji: "🎯", label: "Center" },
	{ emoji: "➡️", label: "Mid Right" },
	{ emoji: "↙️", label: "Bottom Left" },
	{ emoji: "⬇️", label: "Bottom Center" },
	{ emoji: "↘️", label: "Bottom Right" },
];

export const GOAL_EMOJI = "⚽";
export const KEEPER_EMOJI = "🧤";
export const SAVE_EMOJI = "🧱";

/** Accent colors for the Components V2 container, per game state. */
export const COLORS = {
	pending: "#f5a623",
	inProgress: "#3498db",
	goal: "#2ecc71",
	save: "#e74c3c",
	finished: "#f1c40f",
	cancelled: "#95a5a6",
} as const;
