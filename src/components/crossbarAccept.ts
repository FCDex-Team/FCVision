import { acceptCrossbarChallenge } from "../game/crossbar-engine";
import { createButtonHandler } from "./handler-factory";

export default createButtonHandler(
	"crossbar:accept:",
	"challenge",
	(ctx, challenge) => acceptCrossbarChallenge(ctx, challenge),
);
