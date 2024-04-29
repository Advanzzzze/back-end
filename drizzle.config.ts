import type { Config } from 'drizzle-kit';
import { env } from '@/env';

export default {
  schema: './src/db/schemas/*.ts',
  out: './src/db/migrations/drizzle',
  driver: 'mysql2',
  dbCredentials: {
    port: env.DB_PORT,
    host: env.DB_HOST,
    user: env.DB_USERNAME,
    password: env.DB_PASSWORD,
    database: env.DB_NAME,
  },
} satisfies Config;
