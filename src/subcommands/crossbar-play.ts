import { type CommandContext, Declare, SubCommand } from "seyfert";
import { createCrossbarLobby } from "../game/engines/crossbar";
import { toPlayerInfo } from "../game/engines/post";

@Declare({
	name: "play",
	description: "Open a crossbar challenge lobby for anyone to join",
})
export default class CrossbarPlaySubCommand extends SubCommand {
	async run(ctx: CommandContext) {
		await createCrossbarLobby(ctx, toPlayerInfo(ctx.author));
	}
}
