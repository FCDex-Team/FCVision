import type { Session } from "./types";

/**
 * Everything lives in memory — no database needed for live sessions.
 * Sessions cover pending challenges, open lobbies, and active games alike.
 */
const sessions = new Map<string, Session>();

export function generateId(): string {
	return `${Date.now().toString(36)}${Math.random().toString(36).slice(2, 8)}`;
}

export function createSession<T extends Session>(session: T): T {
	sessions.set(session.id, session);
	return session;
}

export function getSession<T extends Session["kind"]>(
	id: string,
	kind: T,
): Extract<Session, { kind: T }> | undefined {
	const session = sessions.get(id);
	if (!session || session.kind !== kind) return undefined;
	return session as Extract<Session, { kind: T }>;
}

export function findSessionByChannel<T extends Session["kind"]>(
	channelId: string,
	kind: T,
): Extract<Session, { kind: T }> | undefined {
	for (const session of sessions.values()) {
		if (session.kind === kind && session.channelId === channelId) {
			return session as Extract<Session, { kind: T }>;
		}
	}
	return undefined;
}

export function deleteSession(id: string): void {
	sessions.delete(id);
}
