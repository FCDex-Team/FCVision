import {
	existsSync,
	mkdirSync,
	readFileSync,
	renameSync,
	writeFileSync,
} from "node:fs";
import { join } from "node:path";

const DATA_DIR = join(process.cwd(), "data");
const USERS_FILE = join(DATA_DIR, "users.json");
const TMP_FILE = `${USERS_FILE}.tmp`;

const MAX_SHOWN_STADIUMS = 50;

export interface UserStats {
	coins: number;
	wins: number;
	duelsPlayed: number;
	stadiumGamesPlayed: number;
	dribbleGamesPlayed: number;
	stadiumCorrect: number;
	stadiumPlayed: number;
	recentlyShownStadiums: number[];
}

type Users = Record<string, UserStats>;

function defaultUser(): UserStats {
	return {
		coins: 0,
		wins: 0,
		duelsPlayed: 0,
		stadiumGamesPlayed: 0,
		dribbleGamesPlayed: 0,
		stadiumCorrect: 0,
		stadiumPlayed: 0,
		recentlyShownStadiums: [],
	};
}

function migrateUser(user: unknown): UserStats {
	const legacy = user as Record<string, unknown> & Partial<UserStats>;
	return {
		coins: (legacy.coins as number) ?? 0,
		wins: (legacy.wins as number) ?? 0,
		duelsPlayed:
			(legacy.duelsPlayed as number) ?? (legacy.gamesPlayed as number) ?? 0,
		stadiumGamesPlayed: (legacy.stadiumGamesPlayed as number) ?? 0,
		dribbleGamesPlayed: (legacy.dribbleGamesPlayed as number) ?? 0,
		stadiumCorrect: (legacy.stadiumCorrect as number) ?? 0,
		stadiumPlayed: (legacy.stadiumPlayed as number) ?? 0,
		recentlyShownStadiums: (legacy.recentlyShownStadiums as number[]) ?? [],
	};
}

function load(): Users {
	if (!existsSync(USERS_FILE)) return {};
	try {
		const raw = readFileSync(USERS_FILE, "utf-8");
		const parsed = JSON.parse(raw) as Record<string, unknown>;
		const migrated: Users = {};
		for (const [id, user] of Object.entries(parsed)) {
			migrated[id] = migrateUser(user);
		}
		return migrated;
	} catch {
		return {};
	}
}

function save(users: Users): void {
	if (!existsSync(DATA_DIR)) mkdirSync(DATA_DIR, { recursive: true });
	try {
		writeFileSync(TMP_FILE, JSON.stringify(users, null, "\t"));
		renameSync(TMP_FILE, USERS_FILE);
	} catch (error) {
		console.error("[db] Failed to save users.json:", error);
	}
}

const cache: Users = load();

export function getUser(userId: string): UserStats {
	if (!cache[userId]) cache[userId] = defaultUser();
	return cache[userId];
}

export function addCoins(userId: string, amount: number): void {
	const user = getUser(userId);
	user.coins = Math.max(0, user.coins + amount);
	save(cache);
}

export function addWin(userId: string): void {
	const user = getUser(userId);
	user.wins++;
	save(cache);
}

export function incrementDuelsPlayed(userId: string): void {
	const user = getUser(userId);
	user.duelsPlayed++;
	save(cache);
}

export function incrementStadiumGamesPlayed(userId: string): void {
	const user = getUser(userId);
	user.stadiumGamesPlayed++;
	save(cache);
}

export function incrementDribbleGamesPlayed(userId: string): void {
	const user = getUser(userId);
	user.dribbleGamesPlayed++;
	save(cache);
}

export function recordStadiumResult(userId: string, correct: boolean): void {
	const user = getUser(userId);
	user.stadiumPlayed++;
	if (correct) user.stadiumCorrect++;
	save(cache);
}

export function getRecentlyShownStadiums(userId: string): number[] {
	return [...getUser(userId).recentlyShownStadiums];
}

export function addShownStadium(userId: string, index: number): void {
	const user = getUser(userId);
	user.recentlyShownStadiums = Array.from(
		new Set([...user.recentlyShownStadiums, index]),
	).slice(-MAX_SHOWN_STADIUMS);
	save(cache);
}

export function getLeaderboard(
	limit = 10,
): { id: string; coins: number; wins: number }[] {
	return Object.entries(cache)
		.map(([id, stats]) => ({ id, coins: stats.coins, wins: stats.wins }))
		.sort((a, b) => b.coins - a.coins || b.wins - a.wins)
		.slice(0, limit);
}
