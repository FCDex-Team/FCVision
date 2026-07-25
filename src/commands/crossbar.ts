import { Command, Declare, Options } from "seyfert";
import CrossbarChallengeSubCommand from "../subcommands/crossbar-challenge";
import CrossbarPlaySubCommand from "../subcommands/crossbar-play";

@Declare({
	name: "crossbar",
	description: "⚽ Crossbar challenge — test your accuracy!",
})
@Options([CrossbarChallengeSubCommand, CrossbarPlaySubCommand])
export default class CrossbarCommand extends Command {}
