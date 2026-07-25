import type { CommandContext, ComponentContext } from "seyfert";
import { CHALLENGE_EXPIRE_MS, LOBBY_EXPIRE_MS } from "./constants";
import { createSession, deleteSession, generateId, getSession } from "./store";
import type { PendingChallenge, PendingLobby, PlayerInfo } from "./types";
import { EPHEMERAL, editGameMsg } from "./utils";

type StartMatchFn = (
	ctx: ComponentContext<"Button">,
	guildId: string,
	channelId: string,
	playerA: PlayerInfo,
	playerB: PlayerInfo,
) => Promise<void>;

export interface ChallengeFlowConfig {
	buildMessage: (challenge: PendingChallenge) => Record<string, unknown>;
	buildResolved: (
		challenge: PendingChallenge,
		reason: "declined" | "expired",
	) => Record<string, unknown>;
	startMatch: StartMatchFn;
}

export function createChallengeFlow(config: ChallengeFlowConfig) {
	async function expire(id: string): Promise<void> {
		const challenge = getSession(id, "challenge");
		if (!challenge) return;
		deleteSession(id);
		await editGameMsg(
			challenge.message,
			config.buildResolved(challenge, "expired"),
		);
	}

	async function create(
		ctx: CommandContext,
		challenger: PlayerInfo,
		opponent: PlayerInfo,
	): Promise<void> {
		const id = generateId();
		const challenge = createSession<PendingChallenge>({
			kind: "challenge",
			id,
			guildId: ctx.guildId ?? "",
			channelId: ctx.channelId,
			challenger,
			opponent,
			expireTimer: setTimeout(() => void expire(id), CHALLENGE_EXPIRE_MS),
		});
		await ctx.deferReply();
		challenge.message = await ctx.followup(config.buildMessage(challenge));
	}

	async function accept(
		ctx: ComponentContext<"Button">,
		challenge: PendingChallenge,
	): Promise<void> {
		if (ctx.author.id !== challenge.opponent.id) {
			return ctx.write({
				content: "This challenge isn't addressed to you!",
				...EPHEMERAL,
			});
		}
		clearTimeout(challenge.expireTimer);
		deleteSession(challenge.id);
		await ctx.deferUpdate();
		await config.startMatch(
			ctx,
			challenge.guildId,
			challenge.channelId,
			challenge.challenger,
			challenge.opponent,
		);
	}

	async function decline(
		ctx: ComponentContext<"Button">,
		challenge: PendingChallenge,
	): Promise<void> {
		if (
			ctx.author.id !== challenge.opponent.id &&
			ctx.author.id !== challenge.challenger.id
		) {
			return ctx.write({
				content: "This challenge isn't addressed to you!",
				...EPHEMERAL,
			});
		}
		clearTimeout(challenge.expireTimer);
		deleteSession(challenge.id);
		await ctx.update(config.buildResolved(challenge, "declined"));
	}

	return { create, accept, decline, expire };
}

export interface LobbyFlowConfig {
	buildMessage: (lobby: PendingLobby) => Record<string, unknown>;
	buildResolved: (
		lobby: PendingLobby,
		reason: "cancelled" | "expired",
	) => Record<string, unknown>;
	startMatch: StartMatchFn;
}

export function createLobbyFlow(config: LobbyFlowConfig) {
	async function expire(id: string): Promise<void> {
		const lobby = getSession(id, "lobby");
		if (!lobby) return;
		deleteSession(id);
		await editGameMsg(lobby.message, config.buildResolved(lobby, "expired"));
	}

	async function create(ctx: CommandContext, host: PlayerInfo): Promise<void> {
		const id = generateId();
		const lobby = createSession<PendingLobby>({
			kind: "lobby",
			id,
			guildId: ctx.guildId ?? "",
			channelId: ctx.channelId,
			host,
			expireTimer: setTimeout(() => void expire(id), LOBBY_EXPIRE_MS),
		});
		await ctx.deferReply();
		lobby.message = await ctx.followup(config.buildMessage(lobby));
	}

	async function join(
		ctx: ComponentContext<"Button">,
		lobby: PendingLobby,
	): Promise<void> {
		if (ctx.author.id === lobby.host.id) {
			return ctx.write({
				content: "You can't join your own lobby!",
				...EPHEMERAL,
			});
		}
		clearTimeout(lobby.expireTimer);
		deleteSession(lobby.id);
		await ctx.deferUpdate();
		await config.startMatch(ctx, lobby.guildId, lobby.channelId, lobby.host, {
			id: ctx.author.id,
			username: ctx.author.username,
			mention: ctx.author.toString(),
		});
	}

	async function cancel(
		ctx: ComponentContext<"Button">,
		lobby: PendingLobby,
	): Promise<void> {
		if (ctx.author.id !== lobby.host.id) {
			return ctx.write({
				content: "Only the host can cancel this lobby.",
				...EPHEMERAL,
			});
		}
		clearTimeout(lobby.expireTimer);
		deleteSession(lobby.id);
		await ctx.update(config.buildResolved(lobby, "cancelled"));
	}

	return { create, join, cancel, expire };
}
