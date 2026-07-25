import {
	type CommandContext,
	createUserOption,
	Declare,
	Options,
	SubCommand,
} from "seyfert";
import { MessageFlags } from "seyfert/lib/types";
import { createChallenge, toPlayerInfo } from "../game/engine";

const options = {
	opponent: createUserOption({
		description: "Who do you want to challenge to a Post shootout?",
		required: true,
	}),
};

@Declare({
	name: "challenge",
	description: "Challenge another player to a 1v1 Post shootout",
})
@Options(options)
export default class ChallengeSubCommand extends SubCommand {
	async run(ctx: CommandContext<typeof options>) {
		const target = ctx.options.opponent;

		if (target.bot) {
			return ctx.write({
				content: "🤖 You can't challenge a bot to a shootout!",
				flags: MessageFlags.Ephemeral,
			});
		}

		if (target.id === ctx.author.id) {
			return ctx.write({
				content: "⚽ You can't challenge yourself! Find a real opponent.",
				flags: MessageFlags.Ephemeral,
			});
		}

		await createChallenge(ctx, toPlayerInfo(ctx.author), toPlayerInfo(target));
	}
}
