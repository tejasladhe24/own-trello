import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/(app)/_/")({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/(app)/_/"!</div>
}
