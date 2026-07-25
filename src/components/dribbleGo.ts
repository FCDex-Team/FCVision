import { handleDribbleDirection } from "../game/dribble-engine";
import type { Direction } from "../game/types";
import { createButtonHandler } from "./handler-factory";

export default createButtonHandler(
	"dribble:dir:",
	"dribble",
	(ctx, game) => {
		const parts = ctx.customId.split(":");
		const direction = parts[3] as Direction;
		if (!direction) {
			return ctx.write({ content: "Invalid direction.", flags: 64 });
		}
		return handleDribbleDirection(ctx, game, direction);
	},
	(customId) => customId.split(":")[2] ?? "",
);
