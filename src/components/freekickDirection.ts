import { handleFreekickDirection } from "../game/engines/freekick";
import type { Direction } from "../game/shared/types";
import { createButtonHandler } from "./handler-factory";

export default createButtonHandler(
	"freekick:dir:",
	"freekick",
	(ctx, match) => {
		const parts = ctx.customId.split(":");
		const direction = parts[3] as Direction;
		if (!direction) {
			return ctx.write({ content: "Invalid direction.", flags: 64 });
		}
		return handleFreekickDirection(ctx, match, direction);
	},
	(customId) => customId.split(":")[2] ?? "",
);
