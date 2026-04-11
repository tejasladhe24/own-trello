import { createServerFn } from "@tanstack/react-start"
import { authMiddleware } from "@/middlewares/auth"

export const getSession = createServerFn({
  method: "GET",
})
  .middleware([authMiddleware])
  .handler(({ context }) => {
    const { session, user } = context
    return { session, user }
  })
