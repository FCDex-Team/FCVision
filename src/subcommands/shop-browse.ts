import { type CommandContext, Declare, SubCommand } from "seyfert";
import { getShopItems } from "../game/shop";
import { buildShopEmptyMessage, buildShopMessage } from "../game/ui-shop";

@Declare({
	name: "browse",
	description: "🛒 Browse the shop and buy items",
})
export default class ShopBrowseSubCommand extends SubCommand {
	async run(ctx: CommandContext) {
		const items = getShopItems();
		if (items.length === 0) {
			await ctx.write(buildShopEmptyMessage());
			return;
		}
		await ctx.write(buildShopMessage(items, 0));
	}
}
