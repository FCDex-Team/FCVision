import { acceptFreekickChallenge } from "../game/freekick-engine";
import { createButtonHandler } from "./handler-factory";

export default createButtonHandler(
	"freekick:accept:",
	"challenge",
	(ctx, challenge) => acceptFreekickChallenge(ctx, challenge),
);
