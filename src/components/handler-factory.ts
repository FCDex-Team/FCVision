import type { ComponentContext } from "seyfert";
import { ComponentCommand } from "seyfert";
import { MessageFlags } from "seyfert/lib/types";
import { getSession } from "../game/store";
import type { Session } from "../game/types";

export function createButtonHandler<T extends Session["kind"]>(
	prefix: string,
	sessionKind: T,
	handler: (
		ctx: ComponentContext<"Button">,
		session: Extract<Session, { kind: T }>,
	) => unknown,
	extractId?: (customId: string) => string,
): typeof ComponentCommand {
	return class extends ComponentCommand {
		componentType = "Button" as const;

		override filter(ctx: ComponentContext<typeof this.componentType>) {
			return ctx.customId.startsWith(prefix);
		}

		override async run(ctx: ComponentContext<typeof this.componentType>) {
			const id = extractId
				? extractId(ctx.customId)
				: (ctx.customId.split(":").at(-1) ?? "");
			const session = getSession(id, sessionKind);

			if (!session) {
				return ctx.write({
					content: "This session has expired.",
					flags: MessageFlags.Ephemeral,
				});
			}

			await handler(ctx, session as Extract<Session, { kind: T }>);
		}
	};
}
