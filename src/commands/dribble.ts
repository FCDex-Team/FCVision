import { Command, type CommandContext, Declare } from "seyfert";
import { startDribbleGame } from "../game/engines/dribble";

@Declare({
	name: "dribble",
	description: "⚡ Dribbling reaction race — be the fastest to click GO!",
})
export default class DribbleCommand extends Command {
	override async run(ctx: CommandContext) {
		await startDribbleGame(ctx);
	}
}
