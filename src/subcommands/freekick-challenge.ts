import {
	type CommandContext,
	createUserOption,
	Declare,
	Options,
	SubCommand,
} from "seyfert";
import { MessageFlags } from "seyfert/lib/types";
import { toPlayerInfo } from "../game/engine";
import { createFreekickChallenge } from "../game/freekick-engine";

const options = {
	opponent: createUserOption({
		description: "Who do you want to challenge to a freekick shootout?",
		required: true,
	}),
};

@Declare({
	name: "challenge",
	description: "Challenge another player to a freekick shootout",
})
@Options(options)
export default class FreekickChallengeSubCommand extends SubCommand {
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
				content: "🦵 You can't challenge yourself!",
				flags: MessageFlags.Ephemeral,
			});
		}

		await createFreekickChallenge(
			ctx,
			toPlayerInfo(ctx.author),
			toPlayerInfo(target),
		);
	}
}
