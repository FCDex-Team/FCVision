import { importLegacyJson, usersDb } from "./database";

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

importLegacyJson("legacy-users-imported", "data/users.json", (parsed) => {
	for (const [id, user] of Object.entries(parsed as Record<string, unknown>)) {
		usersDb.putSync(id, migrateUser(user));
	}
});

const cache = new Map<string, UserStats>();
for (const { key, value } of usersDb.getRange()) {
	cache.set(key, migrateUser(value));
}

function persist(userId: string): void {
	const user = cache.get(userId);
	if (!user) return;
	void usersDb
		.put(userId, user)
		.catch((error) =>
			console.error("[db] Failed to save user:", userId, error),
		);
}

export function getUser(userId: string): UserStats {
	let user = cache.get(userId);
	if (!user) {
		user = defaultUser();
		cache.set(userId, user);
	}
	return user;
}

export function addCoins(userId: string, amount: number): void {
	const user = getUser(userId);
	user.coins = Math.max(0, user.coins + amount);
	persist(userId);
}

export function hasEnoughCoins(userId: string, amount: number): boolean {
	return getUser(userId).coins >= amount;
}

export function addWin(userId: string): void {
	const user = getUser(userId);
	user.wins++;
	persist(userId);
}

export function incrementDuelsPlayed(userId: string): void {
	const user = getUser(userId);
	user.duelsPlayed++;
	persist(userId);
}

export function incrementStadiumGamesPlayed(userId: string): void {
	const user = getUser(userId);
	user.stadiumGamesPlayed++;
	persist(userId);
}

export function incrementDribbleGamesPlayed(userId: string): void {
	const user = getUser(userId);
	user.dribbleGamesPlayed++;
	persist(userId);
}

export function recordStadiumResult(userId: string, correct: boolean): void {
	const user = getUser(userId);
	user.stadiumPlayed++;
	if (correct) user.stadiumCorrect++;
	persist(userId);
}

export function getRecentlyShownStadiums(userId: string): number[] {
	return [...getUser(userId).recentlyShownStadiums];
}

export function addShownStadium(userId: string, index: number): void {
	const user = getUser(userId);
	user.recentlyShownStadiums = Array.from(
		new Set([...user.recentlyShownStadiums, index]),
	).slice(-MAX_SHOWN_STADIUMS);
	persist(userId);
}

export function getLeaderboard(
	limit = 10,
): { id: string; coins: number; wins: number }[] {
	return [...cache.entries()]
		.map(([id, stats]) => ({ id, coins: stats.coins, wins: stats.wins }))
		.sort((a, b) => b.coins - a.coins || b.wins - a.wins)
		.slice(0, limit);
}
