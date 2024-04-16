import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client/web';

export const clientdb = createClient({ url: process.env.DATABASE_URL || '', authToken: process.env.DATABASE_AUTH_TOKEN });

export const db = drizzle(clientdb);
