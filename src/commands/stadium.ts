import { Command, type CommandContext, Declare } from "seyfert";
import { startStadiumGame } from "../game/stadium-engine";

@Declare({
	name: "stadium",
	description: "🏟️ What stadium is this? Multiplayer quiz with coin rewards!",
})
export default class StadiumCommand extends Command {
	override async run(ctx: CommandContext) {
		await startStadiumGame(ctx);
	}
}
