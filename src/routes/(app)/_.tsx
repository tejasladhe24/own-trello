import { getSession } from "@/server/auth"
import { createFileRoute, Outlet, redirect } from "@tanstack/react-router"

export const Route = createFileRoute("/(app)/_")({
  component: RouteComponent,
  loader: async () => {
    const data = await getSession()

    if (!data.session) {
      throw redirect({ to: "/login" })
    }
  },
})

function RouteComponent() {
  return <Outlet />
}
