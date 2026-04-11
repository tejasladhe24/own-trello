import z from "zod"
import { createEnv } from "@t3-oss/env-core"

export const env = createEnv({
  server: {
    NODE_ENV: z.enum(["development", "production"]),
    DATABASE_URL: z.string().min(1, { error: "DATABASE_URL is required" }),
    APP_URL: z.string().min(1, { error: "APP_URL is required" }),
    BETTER_AUTH_DOMAIN: z
      .string()
      .min(1, { error: "BETTER_AUTH_DOMAIN is required" }),
    BETTER_AUTH_SECRET: z
      .string()
      .min(1, { error: "BETTER_AUTH_SECRET is required" }),
    GOOGLE_CLIENT_ID: z
      .string()
      .min(1, { error: "GOOGLE_CLIENT_ID is required" }),
    GOOGLE_CLIENT_SECRET: z
      .string()
      .min(1, { error: "GOOGLE_CLIENT_SECRET is required" }),
  },
  clientPrefix: "VITE_",
  client: {
    VITE_APP_URL: z.string().min(1, { error: "VITE_APP_URL is required" }),
  },
  runtimeEnv: {
    // server
    NODE_ENV: process.env.NODE_ENV,
    DATABASE_URL: process.env.DATABASE_URL,
    APP_URL: process.env.APP_URL,
    BETTER_AUTH_DOMAIN: process.env.BETTER_AUTH_DOMAIN,
    BETTER_AUTH_SECRET: process.env.BETTER_AUTH_SECRET,
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,

    // client
    VITE_APP_URL: import.meta.env.VITE_APP_URL,
  },
})
