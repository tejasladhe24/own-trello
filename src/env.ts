import z from "zod"

export const env = z
  .object({
    DATABASE_URL: z.string().min(1, { error: "DATABASE_URL is required" }),
    BETTER_AUTH_DOMAIN: z
      .string()
      .min(1, { error: "BETTER_AUTH_DOMAIN is required" }),
    BETTER_AUTH_SECRET: z
      .string()
      .min(1, { error: "BETTER_AUTH_SECRET is required" }),
    GOOGLE_CLIENT_ID: z.string().min(1, { error: "GOOGLE_CLIENT_ID" }),
    GOOGLE_CLIENT_SECRET: z.string().min(1, { error: "GOOGLE_CLIENT_SECRET" }),
  })
  .parse({
    DATABASE_URL: process.env.DATABASE_URL,
    BETTER_AUTH_DOMAIN: process.env.BETTER_AUTH_DOMAIN,
    BETTER_AUTH_SECRET: process.env.BETTER_AUTH_SECRET,
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
  })
