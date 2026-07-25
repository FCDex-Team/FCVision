import { declineChallenge } from "../game/engine";
import { createButtonHandler } from "./handler-factory";

export default createButtonHandler(
	"post:challenge:decline:",
	"challenge",
	(ctx, challenge) => declineChallenge(ctx, challenge),
);
