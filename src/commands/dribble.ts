import { Command, type CommandContext, Declare } from "seyfert";
import { startDribbleGame } from "../game/dribble-engine";

@Declare({
	name: "dribble",
	description: "⚡ Dribbling reaction race — be the fastest to click GO!",
})
export default class DribbleCommand extends Command {
	override async run(ctx: CommandContext) {
		await startDribbleGame(ctx);
	}
}
