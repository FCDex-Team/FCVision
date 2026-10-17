import { createEvent, type UsingClient } from "seyfert";
import type { ShardDisconnectData } from "seyfert/lib/websocket";

const STORM_THRESHOLD = Number(process.env.RECONNECT_STORM_THRESHOLD) || 12;
const STORM_WINDOW_MS =
	Number(process.env.RECONNECT_STORM_WINDOW_MS) || 300_000;

const disconnectTimestamps: number[] = [];

export default createEvent({
	data: { name: "SHARD_DISCONNECT" as never, once: false },
	run: (data: ShardDisconnectData, client: UsingClient, shardId?: number) => {
		const now = Date.now();
		disconnectTimestamps.push(now);

		while (
			disconnectTimestamps.length > 0 &&
			disconnectTimestamps[0] !== undefined &&
			now - disconnectTimestamps[0] > STORM_WINDOW_MS
		) {
			disconnectTimestamps.shift();
		}

		client.logger.warn(
			`[Shard #${shardId ?? data?.shardId ?? 0}] Disconnected (${data?.code ?? "unknown"}): ${data?.reason || "no reason"}. (${disconnectTimestamps.length}/${STORM_THRESHOLD} in ${Math.round(STORM_WINDOW_MS / 1000)}s)`,
		);

		if (disconnectTimestamps.length >= STORM_THRESHOLD) {
			client.logger.fatal(
				`[Watchdog] Reconnect storm detected (${disconnectTimestamps.length} disconnects within ${Math.round(STORM_WINDOW_MS / 1000)}s). Exiting process to trigger clean systemd restart.`,
			);
			process.exit(1);
		}
	},
});
