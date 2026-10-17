import { acceptChallenge } from "../game/engines/post";
import { createButtonHandler } from "./handler-factory";

export default createButtonHandler(
	"post:challenge:accept:",
	"challenge",
	(ctx, challenge) => acceptChallenge(ctx, challenge),
);
