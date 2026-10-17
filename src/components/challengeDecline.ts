import { declineChallenge } from "../game/engines/post";
import { createButtonHandler } from "./handler-factory";

export default createButtonHandler(
	"post:challenge:decline:",
	"challenge",
	(ctx, challenge) => declineChallenge(ctx, challenge),
);
