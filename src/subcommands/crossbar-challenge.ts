import {
	type CommandContext,
	createUserOption,
	Declare,
	Options,
	SubCommand,
} from "seyfert";
import { MessageFlags } from "seyfert/lib/types";
import { createCrossbarChallenge } from "../game/crossbar-engine";
import { toPlayerInfo } from "../game/engine";

const options = {
	opponent: createUserOption({
		description: "Who do you want to challenge to a crossbar challenge?",
		required: true,
	}),
};

@Declare({
	name: "challenge",
	description: "Challenge another player to a crossbar challenge",
})
@Options(options)
export default class CrossbarChallengeSubCommand extends SubCommand {
	async run(ctx: CommandContext<typeof options>) {
		const target = ctx.options.opponent;

		if (target.bot) {
			return ctx.write({
				content: "🤖 You can't challenge a bot!",
				flags: MessageFlags.Ephemeral,
			});
		}

		if (target.id === ctx.author.id) {
			return ctx.write({
				content: "⚽ You can't challenge yourself!",
				flags: MessageFlags.Ephemeral,
			});
		}

		await createCrossbarChallenge(
			ctx,
			toPlayerInfo(ctx.author),
			toPlayerInfo(target),
		);
	}
}
