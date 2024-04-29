import { drizzle } from 'drizzle-orm/mysql2';
import mysql from 'mysql2/promise';
import { env } from '@/env';

const connection = await mysql.createConnection({
  port: env.DB_PORT,
  host: env.DB_HOST,
  user: env.DB_USERNAME,
  password: env.DB_PASSWORD,
  database: env.DB_NAME,
});
const db = drizzle(connection);

export { connection, db };
