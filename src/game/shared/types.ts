import type { WebhookMessageStructure } from "seyfert";
import type { Stadium } from "../stadiums/data";

export interface PlayerInfo {
	id: string;
	username: string;
	mention: string;
}

export type Role = "shooter" | "keeper";
export type Direction = "left" | "center" | "right";

export interface RoundRecord {
	round: number;
	shooterIndex: 0 | 1;
	shooterBox: number;
	keeperBox: number;
	goal: boolean;
	autoPicked: Role[];
}

interface BaseSession {
	id: string;
	guildId: string;
	channelId: string;
	message?: WebhookMessageStructure;
}

export interface PendingChallenge extends BaseSession {
	kind: "challenge";
	challenger: PlayerInfo;
	opponent: PlayerInfo;
	expireTimer: ReturnType<typeof setTimeout>;
	entryFee?: number;
}

export interface PendingLobby extends BaseSession {
	kind: "lobby";
	host: PlayerInfo;
	expireTimer: ReturnType<typeof setTimeout>;
	entryFee?: number;
}

export interface ActiveMatch extends BaseSession {
	kind: "match";
	players: [PlayerInfo, PlayerInfo];
	firstShooterIndex: 0 | 1;
	round: number;
	scores: [number, number];
	history: RoundRecord[];
	picks: Partial<Record<Role, number>>;
	autoPicked: Set<Role>;
	pot?: number;
	pickTimer?: ReturnType<typeof setTimeout>;
	roundTimer?: ReturnType<typeof setTimeout>;
}

export interface StadiumGame extends BaseSession {
	kind: "stadium";
	round: number;
	totalRounds: number;
	scores: Record<string, number>;
	answeredThisRound: Set<string>;
	correctOrderThisRound: string[];
	participants: Set<string>;
	currentStadium?: Stadium;
	currentCorrectIndex?: number;
	roundTimer?: ReturnType<typeof setTimeout>;
}

export interface FreekickMatch extends BaseSession {
	kind: "freekick";
	players: [PlayerInfo, PlayerInfo];
	firstShooterIndex: 0 | 1;
	round: number;
	scores: [number, number];
	picks: Partial<Record<Role, Direction>>;
	pot?: number;
	timer?: ReturnType<typeof setTimeout>;
}

export interface DribbleGame extends BaseSession {
	kind: "dribble";
	round: number;
	totalRounds: number;
	scores: Record<string, number>;
	answeredThisRound: Set<string>;
	choicesThisRound: Record<string, Direction>;
	successThisRound: Record<string, boolean>;
	defenderDirection?: Direction;
	roundTimer?: ReturnType<typeof setTimeout>;
}

export interface CrossbarMatch extends BaseSession {
	kind: "crossbar";
	players: [PlayerInfo, PlayerInfo];
	currentPlayerIndex: 0 | 1;
	attempts: [number, number];
	hits: [number, number];
	round: number;
	maxRounds: number;
	finished: boolean;
	pot?: number;
}

export type Session =
	| PendingChallenge
	| PendingLobby
	| ActiveMatch
	| StadiumGame
	| FreekickMatch
	| DribbleGame
	| CrossbarMatch;
