import { joinCrossbarLobby } from "../game/crossbar-engine";
import { createButtonHandler } from "./handler-factory";

export default createButtonHandler(
	"crossbar:lobby:join:",
	"lobby",
	(ctx, lobby) => joinCrossbarLobby(ctx, lobby),
);
