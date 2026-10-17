import { declineFreekickChallenge } from "../game/engines/freekick";
import { createButtonHandler } from "./handler-factory";

export default createButtonHandler(
	"freekick:decline:",
	"challenge",
	(ctx, challenge) => declineFreekickChallenge(ctx, challenge),
);
