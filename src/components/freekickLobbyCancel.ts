import { cancelFreekickLobby } from "../game/freekick-engine";
import { createButtonHandler } from "./handler-factory";

export default createButtonHandler(
	"freekick:lobby:cancel:",
	"lobby",
	(ctx, lobby) => cancelFreekickLobby(ctx, lobby),
);
