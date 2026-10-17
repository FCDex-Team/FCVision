import { acceptCrossbarChallenge } from "../game/engines/crossbar";
import { createButtonHandler } from "./handler-factory";

export default createButtonHandler(
	"crossbar:accept:",
	"challenge",
	(ctx, challenge) => acceptCrossbarChallenge(ctx, challenge),
);
