import 'dotenv/config';
import { z } from 'zod';

const DEFAULT_PORT = 3333;
const DEFAULT_DATABASE_PORT = 3306;

const envSchema = z.object({
  NODE_ENV: z
    .enum(['development', 'staging', 'productions'])
    .default('development'),
  PORT: z.coerce.number().default(DEFAULT_PORT),
  DB_PORT: z.coerce.number().default(DEFAULT_DATABASE_PORT),
  DB_HOST: z.string().default('localhost'),
  DB_USERNAME: z.string(),
  DB_PASSWORD: z.string(),
  DB_NAME: z.string(),
});

const _env = envSchema.safeParse(process.env);
if (!_env.success) {
  console.error('Invalid environment variables!', _env.error.format());
  throw new Error('Invalid environment variables!');
}

const env = _env.data;
export { env };
