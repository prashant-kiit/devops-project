import { eq } from "drizzle-orm";
import db from "../../database/database";
import { InsertItem, item, SelectItem } from "../../database/model/item";

export const insertItem = async (newItem: InsertItem) => {
  const newItemIdsReturned = await db
    .insert(item)
    .values(newItem)
    .returning({ newItemIdsReturned: item.id });
  return newItemIdsReturned[0];
};

export const selectAllItems = async () => {
  const items = await db.select().from(item);
  return items;
};

export const selectItemWhereId = async (id: SelectItem["id"]) => {
  const selectedItemsReturned = await db
    .select()
    .from(item)
    .where(eq(item.id, id));
  if (selectedItemsReturned.length === 0) return null;
  return selectedItemsReturned[0];
};

export const updateItemWhereId = async (
  id: SelectItem["id"],
  name: SelectItem["name"]
) => {
  const updatedIdsReturned = await db
    .update(item)
    .set({ name: name })
    .where(eq(item.id, id))
    .returning({ updatedIdReturned: item.id });
  if (updatedIdsReturned.length === 0) return null;
  return updatedIdsReturned[0];
};

export const deleteItemWhereId = async (id: SelectItem["id"]) => {
  await db.delete(item).where(eq(item.id, id));
};
