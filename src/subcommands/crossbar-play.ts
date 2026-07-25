import { type CommandContext, Declare, SubCommand } from "seyfert";
import { createCrossbarLobby } from "../game/crossbar-engine";
import { toPlayerInfo } from "../game/engine";

@Declare({
	name: "play",
	description: "Open a crossbar challenge lobby for anyone to join",
})
export default class CrossbarPlaySubCommand extends SubCommand {
	async run(ctx: CommandContext) {
		await createCrossbarLobby(ctx, toPlayerInfo(ctx.author));
	}
}
