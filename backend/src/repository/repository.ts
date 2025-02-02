// In-memory data store
let items: { id: number; name: string }[] = [];

export const insertItem = (newItem: { id: number; name: string }) => {
  items.push(newItem);
  return newItem.id;
};

export const selectAllItems = () => items;

export const selectItemWhereId = (id: number) => {
  const item = items.filter((i) => i.id === id);
  if (item.length === 0) return null;
  return item[0];
};

export const updateItemWhereId = (id: number, name: string) => {
  const item = items.filter((i) => i.id === id);
  if (item.length === 0) return null;
  item[0].name = name;
  return item[0].id;
};

export const deleteItemWhereId = (id: number) => {
  items.filter((i) => i.id !== id);
};
