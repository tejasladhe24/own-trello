import { env } from "@/env"
import { createAuthClient } from "better-auth/client"

export const authClient = createAuthClient({
  baseURL: typeof window === "undefined" ? env.APP_URL : env.VITE_APP_URL,
  basePath: "/api/auth",
})
