import { joinLobby } from "../game/engines/post";
import { createButtonHandler } from "./handler-factory";

export default createButtonHandler("post:lobby:join:", "lobby", (ctx, lobby) =>
	joinLobby(ctx, lobby),
);
