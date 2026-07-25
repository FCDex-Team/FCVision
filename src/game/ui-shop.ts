import { ActionRow, Button, Container, TextDisplay } from "seyfert";
import { ButtonStyle } from "seyfert/lib/types";
import { COLORS } from "./constants";
import type { ShopItem } from "./shop";
import { divider, V2 } from "./utils";

export const SHOP_ITEMS_PER_PAGE = 5;

export function buildShopMessage(items: ShopItem[], page: number) {
	const totalPages = Math.max(1, Math.ceil(items.length / SHOP_ITEMS_PER_PAGE));
	const safePage = Math.max(0, Math.min(page, totalPages - 1));
	const start = safePage * SHOP_ITEMS_PER_PAGE;
	const pageItems = items.slice(start, start + SHOP_ITEMS_PER_PAGE);

	const container = new Container()
		.setColor(COLORS.pending)
		.addComponents(
			new TextDisplay().setContent("### 🛒 FCVision Shop"),
			new TextDisplay().setContent(
				`Browse items below. Use your coins to buy rewards and roles. Page ${safePage + 1}/${totalPages}.`,
			),
			divider(),
		);

	if (pageItems.length === 0) {
		container.addComponents(
			new TextDisplay().setContent("The shop is empty right now."),
		);
	} else {
		for (const item of pageItems) {
			const roleText = item.roleId ? `\n🎁 Grants <@&${item.roleId}>` : "";
			container.addComponents(
				new TextDisplay().setContent(
					`**${item.name}** — 🪙 ${item.price}\n${item.description}${roleText}`,
				),
				new ActionRow<Button>().setComponents(
					new Button()
						.setCustomId(`shop:buy:${item.id}`)
						.setLabel(`Buy ${item.name}`)
						.setEmoji("🛒")
						.setStyle(ButtonStyle.Success),
				),
				divider(),
			);
		}
	}

	const navRow = new ActionRow<Button>().setComponents(
		new Button()
			.setCustomId(`shop:back:${safePage}`)
			.setLabel("Back <")
			.setStyle(ButtonStyle.Secondary)
			.setDisabled(safePage === 0),
		new Button()
			.setCustomId(`shop:next:${safePage}`)
			.setLabel("Next >")
			.setStyle(ButtonStyle.Secondary)
			.setDisabled(safePage >= totalPages - 1),
	);
	container.addComponents(navRow);

	return { components: [container], ...V2 };
}

export function buildShopEmptyMessage() {
	const container = new Container()
		.setColor(COLORS.pending)
		.addComponents(
			new TextDisplay().setContent("### 🛒 FCVision Shop"),
			new TextDisplay().setContent(
				"The shop is empty. Admins can add items with `/shop create`.",
			),
		);

	return { components: [container], ...V2 };
}
