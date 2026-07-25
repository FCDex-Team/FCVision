import { joinLobby } from "../game/engine";
import { createButtonHandler } from "./handler-factory";

export default createButtonHandler("post:lobby:join:", "lobby", (ctx, lobby) =>
	joinLobby(ctx, lobby),
);
