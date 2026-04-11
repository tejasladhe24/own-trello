import { auth } from "@/lib/auth"
import { createMiddleware } from "@tanstack/react-start"
import { redirect } from "@tanstack/react-router"

export const authMiddleware = createMiddleware().server(
  async ({ request, next }) => {
    const data = await auth.api.getSession({
      headers: request.headers,
    })

    if (!data?.session || !data?.user) {
      throw redirect({ to: "/login" })
    }

    return next({
      context: {
        session: data.session,
        user: data.user,
      },
    })
  }
)
