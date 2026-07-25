import { joinFreekickLobby } from "../game/freekick-engine";
import { createButtonHandler } from "./handler-factory";

export default createButtonHandler(
	"freekick:lobby:join:",
	"lobby",
	(ctx, lobby) => joinFreekickLobby(ctx, lobby),
);
