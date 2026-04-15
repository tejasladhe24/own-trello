import { env } from "@/env"
import { drizzle } from "drizzle-orm/node-postgres"
import { Pool } from "pg"
import { schema as authSchema } from "./auth-schema"
import { schema as boardSchema } from "./board-schema"

const pool = new Pool({
  connectionString: env.DATABASE_URL,
})

export const db = drizzle(pool, {
  schema: {
    ...authSchema,
    ...boardSchema,
  },
})
