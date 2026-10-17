import { existsSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { open } from "lmdb";

export const DATA_DIR = join(process.cwd(), "data");
const LMDB_PATH = join(DATA_DIR, "fcvision.lmdb");

if (!existsSync(DATA_DIR)) mkdirSync(DATA_DIR, { recursive: true });

const root = open<unknown, string>({ path: LMDB_PATH, compression: true });

export const usersDb = root.openDB<unknown, string>({ name: "users" });
export const shopDb = root.openDB<unknown, string>({ name: "shop" });
const metaDb = root.openDB<boolean, string>({ name: "meta" });

/**
 * One-time import of the legacy JSON files. Guarded by a meta flag so a
 * later deletion of a row never re-imports stale data.
 */
export function importLegacyJson(
	flag: string,
	jsonFile: string,
	apply: (parsed: unknown) => void,
): void {
	if (metaDb.get(flag)) return;
	if (existsSync(jsonFile)) {
		try {
			apply(JSON.parse(readFileSync(jsonFile, "utf-8")));
		} catch (error) {
			console.error(`[db] Failed to import ${jsonFile}:`, error);
			return;
		}
	}
	metaDb.putSync(flag, true);
}

/** Resolves once every queued write is committed to disk. */
export async function flushDatabase(): Promise<void> {
	await root.flushed;
}

export function closeDatabase(): Promise<void> {
	return root.close();
}
