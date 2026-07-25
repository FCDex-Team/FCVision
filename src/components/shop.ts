import { ComponentCommand, type ComponentContext } from "seyfert";
import { MessageFlags } from "seyfert/lib/types";
import { addCoins, getUser } from "../game/db";
import { getShopItem, getShopItems } from "../game/shop";
import { buildShopMessage } from "../game/ui-shop";

export default class ShopComponent extends ComponentCommand {
	componentType = "Button" as const;

	override filter(ctx: ComponentContext<typeof this.componentType>) {
		return ctx.customId.startsWith("shop:");
	}

	override async run(ctx: ComponentContext<typeof this.componentType>) {
		const parts = ctx.customId.split(":");
		const action = parts[1];

		if (action === "buy") {
			return handleBuy(ctx, parts[2]);
		}

		if (action === "back" || action === "next") {
			return handlePage(ctx, action, Number(parts[2] ?? 0));
		}

		await ctx.write({
			content: "Unknown shop action.",
			flags: MessageFlags.Ephemeral,
		});
	}
}

async function handleBuy(
	ctx: ComponentContext<"Button">,
	itemId: string | undefined,
): Promise<void> {
	if (!itemId) {
		await ctx.write({
			content: "Invalid item.",
			flags: MessageFlags.Ephemeral,
		});
		return;
	}

	const item = getShopItem(itemId);
	if (!item) {
		await ctx.write({
			content: "That item no longer exists.",
			flags: MessageFlags.Ephemeral,
		});
		return;
	}

	const user = getUser(ctx.author.id);
	if (user.coins < item.price) {
		await ctx.write({
			content: `🪙 You need **${item.price}** coins to buy **${item.name}**. You have **${user.coins}**.`,
			flags: MessageFlags.Ephemeral,
		});
		return;
	}

	addCoins(ctx.author.id, -item.price);

	if (item.roleId) {
		const guildId = ctx.guildId;
		if (!guildId) {
			await ctx.write({
				content: `✅ You bought **${item.name}**! The role could not be assigned because this is not a server.`,
				flags: MessageFlags.Ephemeral,
			});
			return;
		}

		try {
			await ctx.client.members.addRole(guildId, ctx.author.id, item.roleId);
			await ctx.write({
				content: `✅ You bought **${item.name}** for 🪙 ${item.price} and received <@&${item.roleId}>!`,
				flags: MessageFlags.Ephemeral,
			});
		} catch {
			await ctx.write({
				content: `✅ You bought **${item.name}** for 🪙 ${item.price}, but the role could not be assigned. Make sure the bot has **Manage Roles** and its top role is above <@&${item.roleId}>.`,
				flags: MessageFlags.Ephemeral,
			});
		}
		return;
	}

	await ctx.write({
		content: `✅ You bought **${item.name}** for 🪙 ${item.price}!`,
		flags: MessageFlags.Ephemeral,
	});
}

async function handlePage(
	ctx: ComponentContext<"Button">,
	action: "back" | "next",
	currentPage: number,
): Promise<void> {
	const items = getShopItems();
	const delta = action === "back" ? -1 : 1;
	const newPage = Math.max(0, currentPage + delta);
	await ctx.editOrReply(buildShopMessage(items, newPage));
}
