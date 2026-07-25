import {
	existsSync,
	mkdirSync,
	readFileSync,
	renameSync,
	writeFileSync,
} from "node:fs";
import { join } from "node:path";

const DATA_DIR = join(process.cwd(), "data");
const SHOP_FILE = join(DATA_DIR, "shop.json");
const TMP_FILE = `${SHOP_FILE}.tmp`;

export interface ShopItem {
	id: string;
	name: string;
	description: string;
	price: number;
	roleId?: string;
}

interface ShopData {
	items: ShopItem[];
}

function load(): ShopData {
	if (!existsSync(SHOP_FILE)) return { items: [] };
	try {
		const raw = readFileSync(SHOP_FILE, "utf-8");
		const parsed = JSON.parse(raw) as ShopData;
		return { items: parsed.items ?? [] };
	} catch {
		return { items: [] };
	}
}

function save(data: ShopData): void {
	if (!existsSync(DATA_DIR)) mkdirSync(DATA_DIR, { recursive: true });
	try {
		writeFileSync(TMP_FILE, JSON.stringify(data, null, "\t"));
		renameSync(TMP_FILE, SHOP_FILE);
	} catch (error) {
		console.error("[shop] Failed to save shop.json:", error);
	}
}

const cache: ShopData = load();

export function getShopItems(): ShopItem[] {
	return [...cache.items];
}

export function getShopItem(id: string): ShopItem | undefined {
	return cache.items.find((item) => item.id === id);
}

export function createShopItem(
	name: string,
	price: number,
	description: string,
	roleId?: string,
): ShopItem {
	const item: ShopItem = {
		id: `${Date.now().toString(36)}${Math.random().toString(36).slice(2, 8)}`,
		name: name.trim(),
		description: description.trim() || "No description provided.",
		price: Math.max(0, Math.floor(price)),
		roleId,
	};
	cache.items.push(item);
	save(cache);
	return item;
}

export function deleteShopItem(id: string): boolean {
	const before = cache.items.length;
	cache.items = cache.items.filter((item) => item.id !== id);
	if (cache.items.length === before) return false;
	save(cache);
	return true;
}
