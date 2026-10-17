import { declineCrossbarChallenge } from "../game/engines/crossbar";
import { createButtonHandler } from "./handler-factory";

export default createButtonHandler(
	"crossbar:decline:",
	"challenge",
	(ctx, challenge) => declineCrossbarChallenge(ctx, challenge),
);
