import { Command, type CommandContext, Declare } from "seyfert";
import { getUser } from "../game/persistence/users";
import { isExpiredInteraction } from "../game/shared/utils";

@Declare({
	name: "coins",
	description: "🪙 Check your coin balance and stats",
})
export default class CoinsCommand extends Command {
	override async run(ctx: CommandContext) {
		const stats = getUser(ctx.author.id);
		await ctx.write({
			content:
				`🪙 **${ctx.author.toString()}**, you have **${stats.coins}** coins.\n` +
				`Duels: ${stats.wins} wins / ${stats.duelsPlayed} played · ` +
				`Stadiums: ${stats.stadiumGamesPlayed} played · ` +
				`Dribbles: ${stats.dribbleGamesPlayed} played`,
		});
	}

	override onRunError(ctx: CommandContext, error: unknown) {
		if (isExpiredInteraction(error)) {
			ctx.client.logger.warn("[commands/coins] Expired interaction");
			return;
		}
		throw error;
	}
}
