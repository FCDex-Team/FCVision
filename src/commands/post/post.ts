import { Command, Declare, Options } from "seyfert";
import ChallengeSubCommand from "../../subcommands/challenge";
import PlaySubCommand from "../../subcommands/play";

@Declare({
	name: "post",
	description: "⚽ Play Post — a 3x3 penalty shootout minigame!",
})
@Options([ChallengeSubCommand, PlaySubCommand])
export default class PostCommand extends Command {}
