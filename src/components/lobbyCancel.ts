import { cancelLobby } from "../game/engine";
import { createButtonHandler } from "./handler-factory";

export default createButtonHandler(
	"post:lobby:cancel:",
	"lobby",
	(ctx, lobby) => cancelLobby(ctx, lobby),
);
