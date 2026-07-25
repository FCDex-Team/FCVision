import { cancelCrossbarLobby } from "../game/crossbar-engine";
import { createButtonHandler } from "./handler-factory";

export default createButtonHandler(
	"crossbar:lobby:cancel:",
	"lobby",
	(ctx, lobby) => cancelCrossbarLobby(ctx, lobby),
);
