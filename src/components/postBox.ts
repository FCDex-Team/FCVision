import { handleBoxPick } from "../game/engines/post";
import { createButtonHandler } from "./handler-factory";

export default createButtonHandler(
	"post:box:",
	"match",
	(ctx, match) => {
		const parts = ctx.customId.split(":");
		const box = Number(parts[3] ?? Number.NaN);
		if (Number.isNaN(box)) {
			return ctx.write({ content: "Invalid box.", flags: 64 });
		}
		return handleBoxPick(ctx, match, box);
	},
	(customId) => customId.split(":")[2] ?? "",
);
