import { handleCrossbarShoot } from "../game/crossbar-engine";
import { createButtonHandler } from "./handler-factory";

export default createButtonHandler(
	"crossbar:shoot:",
	"crossbar",
	(ctx, match) => handleCrossbarShoot(ctx, match),
);
