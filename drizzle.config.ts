import type { Config } from 'drizzle-kit';
export default {
    schema: './app/db/schemas/*',
    driver: 'turso',
    dbCredentials: {
        url: process.env.DATABASE_URL || '',
        authToken: process.env.DATABASE_AUTH_TOKEN,
    },
    out: './drizzle',
} satisfies Config;