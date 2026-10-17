import { importLegacyJson, shopDb } from "./database";

export interface ShopItem {
	id: string;
	name: string;
	description: string;
	price: number;
	roleId?: string;
}

interface LegacyShopData {
	items?: ShopItem[];
}

importLegacyJson("legacy-shop-imported", "data/shop.json", (parsed) => {
	for (const item of (parsed as LegacyShopData).items ?? []) {
		shopDb.putSync(item.id, item);
	}
});

// Ids are time-prefixed base36, so key order matches creation order.
const items: ShopItem[] = [];
for (const { value } of shopDb.getRange()) {
	items.push(value as ShopItem);
}

export function getShopItems(): ShopItem[] {
	return [...items];
}

export function getShopItem(id: string): ShopItem | undefined {
	return items.find((item) => item.id === id);
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
	items.push(item);
	void shopDb
		.put(item.id, item)
		.catch((error) =>
			console.error("[shop] Failed to save item:", item.id, error),
		);
	return item;
}

export function deleteShopItem(id: string): boolean {
	const index = items.findIndex((item) => item.id === id);
	if (index === -1) return false;
	items.splice(index, 1);
	void shopDb
		.remove(id)
		.catch((error) =>
			console.error("[shop] Failed to delete item:", id, error),
		);
	return true;
}
