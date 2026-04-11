import { betterAuth } from "better-auth/minimal"
import { drizzleAdapter } from "better-auth/adapters/drizzle"
import { db } from "./db"
import { env } from "@/env"

export const auth = betterAuth({
  appName: "own-trello",
  basePath: "/api/auth",
  secret: env.BETTER_AUTH_SECRET,
  socialProviders: {
    google: {
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET,
    },
  },
  database: drizzleAdapter(db, { provider: "pg" }),
  trustedOrigins: [
    // dev
    "localhost",
  ],
  advanced: {
    defaultCookieAttributes: {
      domain: env.BETTER_AUTH_DOMAIN,
      httpOnly: true,
      secure: true,
      sameSite: "lax",
    },
  },
})
