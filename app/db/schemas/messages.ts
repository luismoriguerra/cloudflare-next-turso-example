import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { chats } from "./chats";
import { sql } from "drizzle-orm";


export const messages = sqliteTable('messages', {
    id: integer('id').notNull().primaryKey(),
    chat_id: integer('chat_id').notNull().references(() => chats.id),
    role: text('role', { enum: ['user', ' assistant'] }).notNull(),
    content: text('content').notNull(),
    createdAt: text('createdAt').default(sql`CURRENT_TIMESTAMP`).notNull(),
});