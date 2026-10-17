import { createEvent } from "seyfert";
import { GUILD_ID } from "../game/shared/constants";

/**
 * Post is exclusive to a single server. If the bot ever ends up in another
 * guild (added by mistake, left the intended server, etc.), it leaves right away.
 */
export default createEvent({
	data: { name: "guildCreate", once: false },
	run: async (guild, client) => {
		if (guild.id === GUILD_ID) return;

		client.logger.warn(
			`Leaving unauthorized guild "${guild.name}" (${guild.id}) — Post is exclusive to one server.`,
		);
		await guild.leave();
	},
});
