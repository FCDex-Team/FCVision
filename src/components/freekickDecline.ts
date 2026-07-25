import { declineFreekickChallenge } from "../game/freekick-engine";
import { createButtonHandler } from "./handler-factory";

export default createButtonHandler(
	"freekick:decline:",
	"challenge",
	(ctx, challenge) => declineFreekickChallenge(ctx, challenge),
);
