import { type CommandContext, Declare, SubCommand } from "seyfert";
import { createLobby, toPlayerInfo } from "../game/engine";

@Declare({
	name: "play",
	description: "Open a Post lobby for anyone in the server to join",
})
export default class PlaySubCommand extends SubCommand {
	async run(ctx: CommandContext) {
		await createLobby(ctx, toPlayerInfo(ctx.author));
	}
}
