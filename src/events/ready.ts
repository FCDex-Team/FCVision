import { createEvent } from "seyfert";

export default createEvent({
	data: { name: "ready", once: true },
	run: (user, client) => {
		client.logger.info(
			`⚽ Logged in as ${user.username} — Post is ready to kick off.`,
		);
	},
});
