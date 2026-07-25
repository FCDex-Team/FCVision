import { Command, Declare, Options } from "seyfert";
import FreekickChallengeSubCommand from "../subcommands/freekick-challenge";
import FreekickPlaySubCommand from "../subcommands/freekick-play";

@Declare({
	name: "freekick",
	description: "🦵 Freekick shootout — 1v1 direction battle!",
})
@Options([FreekickChallengeSubCommand, FreekickPlaySubCommand])
export default class FreekickCommand extends Command {}
