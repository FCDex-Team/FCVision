import { type CommandContext, Declare, SubCommand } from "seyfert";
import { createFreekickLobby } from "../game/engines/freekick";
import { toPlayerInfo } from "../game/engines/post";

@Declare({
	name: "play",
	description: "Open a freekick lobby for anyone to join",
})
export default class FreekickPlaySubCommand extends SubCommand {
	async run(ctx: CommandContext) {
		await createFreekickLobby(ctx, toPlayerInfo(ctx.author));
	}
}
