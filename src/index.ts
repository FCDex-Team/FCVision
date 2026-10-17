import { Client } from "seyfert";
import { flushDatabase } from "./game/persistence/database";

if (!process.env.BOT_TOKEN) {
	throw new Error(
		"Missing BOT_TOKEN in your environment. Copy .env.example to .env and fill it in.",
	);
}

if (!process.env.GUILD_ID) {
	throw new Error(
		"Missing GUILD_ID in your environment. This bot is exclusive to a single server — set GUILD_ID in .env.",
	);
}

const client = new Client();

process.on("uncaughtException", (error) => {
	client.logger.fatal("[Process] Uncaught exception:", error);
	process.exit(1);
});

process.on("unhandledRejection", (reason) => {
	client.logger.fatal("[Process] Unhandled rejection:", reason);
	process.exit(1);
});

for (const signal of ["SIGINT", "SIGTERM"] as const) {
	process.on(signal, async () => {
		await flushDatabase();
		process.exit(0);
	});
}

try {
	await client.start();
	await client.uploadCommands();
	client.logger.info("⚽ FCVision is warmed up and ready on the pitch.");
} catch (error) {
	client.logger.error("Failed to start FCVision:", error);
	process.exit(1);
}
