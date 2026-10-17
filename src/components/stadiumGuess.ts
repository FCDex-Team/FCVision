import { handleStadiumGuess } from "../game/engines/stadium";
import { createButtonHandler } from "./handler-factory";

export default createButtonHandler(
	"stadium:guess:",
	"stadium",
	(ctx, game) => {
		const parts = ctx.customId.split(":");
		const optionIndex = Number(parts[3] ?? Number.NaN);
		if (Number.isNaN(optionIndex)) {
			return ctx.write({ content: "Invalid guess.", flags: 64 });
		}
		return handleStadiumGuess(ctx, game, optionIndex);
	},
	(customId) => customId.split(":")[2] ?? "",
);
