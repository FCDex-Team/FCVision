import { acceptFreekickChallenge } from "../game/engines/freekick";
import { createButtonHandler } from "./handler-factory";

export default createButtonHandler(
	"freekick:accept:",
	"challenge",
	(ctx, challenge) => acceptFreekickChallenge(ctx, challenge),
);
