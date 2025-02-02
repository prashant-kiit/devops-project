import { Request, Response } from "express";

// In-memory data store
export let currentId = 1;
export let items: { id: number; name: string }[] = [];

export const postItems = (req: Request, res: Response) => {
  const { name } = req.body;
  const newItem = { id: currentId++, name };
  items.push(newItem);
  res.status(201).json(newItem);
};

export const getItems = (req: Request, res: Response) => {
  res.status(200).json(items);
};

export const getItemById = (req: Request, res: Response) => {
  const item = items.find((i) => i.id === parseInt(req.params.id));
  if (item) {
    res.status(200).json(item);
  } else {
    res.status(404).json({ message: "Item not found" });
  }
};

export const putItemById = (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const { name } = req.body;
  const itemIndex = items.findIndex((i) => i.id === id);

  if (itemIndex !== -1) {
    items[itemIndex].name = name;
    res.status(200).json(items[itemIndex]);
  } else {
    res.status(404).json({ message: "Item not found" });
  }
};

export const deleteItemById = (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  items = items.filter((i) => i.id !== id);
  res.status(204).send();
};
