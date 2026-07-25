import type { WebhookMessageStructure } from "seyfert";
import { Separator } from "seyfert";
import { MessageFlags, Spacing } from "seyfert/lib/types";
import type { Direction } from "./types";

export const V2 = { flags: MessageFlags.IsComponentsV2 };

export const EPHEMERAL = { flags: MessageFlags.Ephemeral };

export function divider(spacing: Spacing = Spacing.Small) {
	return new Separator().setDivider(true).setSpacing(spacing);
}

export function sortedScores(
	scores: Record<string, number>,
): [string, number][] {
	return Object.entries(scores).sort((a, b) => b[1] - a[1]);
}

export function otherIndex(i: 0 | 1): 0 | 1 {
	return i === 0 ? 1 : 0;
}

export function otherDirection(d: Direction): Direction {
	if (d === "left") return "right";
	if (d === "right") return "left";
	return "center";
}

export async function editGameMsg(
	msg: WebhookMessageStructure | undefined,
	body: Record<string, unknown>,
): Promise<void> {
	if (!msg) return;
	try {
		await msg.edit(body as never);
	} catch {
		// best-effort edit; Discord may 404 on stale messages
	}
}

export const DRIBBLE_REWARDS: {
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
