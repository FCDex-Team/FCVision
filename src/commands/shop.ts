import { Command, Declare, Options } from "seyfert";
import ShopBrowseSubCommand from "../subcommands/shop-browse";
import ShopCreateSubCommand from "../subcommands/shop-create";

@Declare({
	name: "shop",
	description: "🛒 Buy items and roles with your coins",
})
@Options([ShopBrowseSubCommand, ShopCreateSubCommand])
export default class ShopCommand extends Command {}
