import { migrate } from 'drizzle-orm/mysql2/migrator';
import { db, connection } from './database.config';

await migrate(db, { migrationsFolder: 'src/db/migrations/drizzle' });
await connection.end();
