import {
	addShownStadium,
	getRecentlyShownStadiums,
} from "../persistence/users";
import { STADIUMS, type Stadium } from "./data";

const MIN_UNSEEN_POOL = 10;

const TIER_WEIGHTS: Record<number, number> = {
	1: 3,
	2: 2,
	3: 1,
};

function weightedRandom<T>(items: T[], weightFn: (item: T) => number): T {
	const weights = items.map(weightFn);
	const total = weights.reduce((sum, w) => sum + w, 0);
	let roll = Math.random() * total;
	for (let i = 0; i < items.length; i++) {
		const item = items[i];
		const weight = weights[i];
		if (item === undefined || weight === undefined) continue;
		roll -= weight;
		if (roll <= 0) return item;
	}
	const last = items.at(-1) ?? items[0];
	if (!last) throw new Error("weightedRandom: empty pool");
	return last;
}

export function selectStadium(participantIds: string[]): Stadium {
	const excluded = new Set<number>();
	for (const userId of participantIds) {
		for (const index of getRecentlyShownStadiums(userId)) {
			excluded.add(index);
		}
	}

	let pool = STADIUMS.map((stadium, index) => ({ stadium, index })).filter(
		({ index }) => !excluded.has(index),
	);

	if (pool.length < MIN_UNSEEN_POOL) {
		pool = STADIUMS.map((stadium, index) => ({ stadium, index }));
	}

	const selected = weightedRandom(
		pool,
		({ stadium }) => TIER_WEIGHTS[stadium.tier] ?? 1,
	);

	for (const userId of participantIds) {
		addShownStadium(userId, selected.index);
	}

	return selected.stadium;
}
