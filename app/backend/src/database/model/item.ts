import { pgTable, serial, text } from "drizzle-orm/pg-core";

export const item = pgTable("item", {
  id: serial("id").primaryKey(),
  name: text("name"),
  updatedAt: text("updated_at").default(new Date().toISOString()),
  createdAt: text("created_at").default(new Date().toISOString()),
});

export type InsertItem = typeof item.$inferInsert;
export type SelectItem = typeof item.$inferSelect;
