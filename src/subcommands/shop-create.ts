import {
	type CommandContext,
	createNumberOption,
	createRoleOption,
	createStringOption,
	Declare,
	Options,
	SubCommand,
} from "seyfert";
import { MessageFlags, PermissionFlagsBits } from "seyfert/lib/types";
import { createShopItem } from "../game/shop";

const options = {
	name: createStringOption({
		description: "Name of the shop item",
		required: true,
	}),
	price: createNumberOption({
		description: "Price in coins",
		required: true,
	}),
	description: createStringOption({
		description: "Description shown in the shop",
		required: true,
	}),
	role: createRoleOption({
		description: "Optional role granted when someone buys this item",
		required: false,
	}),
};

@Declare({
	name: "create",
	description: "🔒 Create a new shop item (admin only)",
})
@Options(options)
export default class ShopCreateSubCommand extends SubCommand {
	async run(ctx: CommandContext<typeof options>) {
		if (!ctx.member?.permissions.has([PermissionFlagsBits.Administrator])) {
			await ctx.write({
				content: "🔒 You need Administrator permission to create shop items.",
				flags: MessageFlags.Ephemeral,
			});
			return;
		}

		const { name, price, description, role } = ctx.options;
		const item = createShopItem(
			name,
			price,
			description,
			role?.id ?? undefined,
		);
		await ctx.write({
			content: `✅ Created **${item.name}** for 🪙 ${item.price}.${item.roleId ? ` Grants <@&${item.roleId}>.` : ""}`,
			flags: MessageFlags.Ephemeral,
		});
	}
}
