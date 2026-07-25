import { declineCrossbarChallenge } from "../game/crossbar-engine";
import { createButtonHandler } from "./handler-factory";

export default createButtonHandler(
	"crossbar:decline:",
	"challenge",
	(ctx, challenge) => declineCrossbarChallenge(ctx, challenge),
);
