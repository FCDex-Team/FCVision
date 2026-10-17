import { createEvent, type UsingClient } from "seyfert";
import type { ShardReconnectData } from "seyfert/lib/websocket";

export default createEvent({
	data: { name: "SHARD_RECONNECT" as never, once: false },
	run: (data: ShardReconnectData, client: UsingClient, shardId?: number) => {
		client.logger.info(
			`[Shard #${shardId ?? data?.shardId ?? 0}] Successfully reconnected to Discord gateway.`,
		);
	},
});
