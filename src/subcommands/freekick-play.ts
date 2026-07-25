import { type CommandContext, Declare, SubCommand } from "seyfert";
import { toPlayerInfo } from "../game/engine";
import { createFreekickLobby } from "../game/freekick-engine";

@Declare({
	name: "play",
	description: "Open a freekick lobby for anyone to join",
})
export default class FreekickPlaySubCommand extends SubCommand {
	async run(ctx: CommandContext) {
		await createFreekickLobby(ctx, toPlayerInfo(ctx.author));
	}
}
