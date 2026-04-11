import "dotenv/config"
import { defineConfig } from "drizzle-kit"

const DATABASE_URL = process.env.DATABASE_URL

if (!DATABASE_URL) throw new Error("DATABASE_URL is required by drizzle-kit")

export default defineConfig({
  schema: ["src/lib/db/auth-schema.ts"],
  out: "migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: DATABASE_URL,
  },
})
