import { acceptChallenge } from "../game/engine";
import { createButtonHandler } from "./handler-factory";

export default createButtonHandler(
	"post:challenge:accept:",
	"challenge",
	(ctx, challenge) => acceptChallenge(ctx, challenge),
);
