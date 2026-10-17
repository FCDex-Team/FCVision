import { cancelLobby } from "../game/engines/post";
import { createButtonHandler } from "./handler-factory";

export default createButtonHandler(
	"post:lobby:cancel:",
	"lobby",
	(ctx, lobby) => cancelLobby(ctx, lobby),
);
