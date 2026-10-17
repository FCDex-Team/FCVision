import { handleCrossbarShoot } from "../game/engines/crossbar";
import { createButtonHandler } from "./handler-factory";

export default createButtonHandler(
	"crossbar:shoot:",
	"crossbar",
	(ctx, match) => handleCrossbarShoot(ctx, match),
);
