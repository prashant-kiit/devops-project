import { Request, Response } from "express";
import {
  deleteItemWhereId,
  insertItem,
  selectAllItems,
  selectItemWhereId,
  updateItemWhereId,
} from "../repository/repository";

let currentId = 4;
export const postItem = (req: Request, res: Response) => {
  const { name } = req.body;
  const newItem = { id: currentId++, name };
  const newItemId = insertItem(newItem);
  res.status(201).json({ id: newItemId });
};

export const getItems = (req: Request, res: Response) => {
  const items = selectAllItems();
  res.status(200).json(items);
};

export const getItemById = (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const item = selectItemWhereId(id);
  if (item) {
    res.status(200).json(item);
  } else {
    res.status(404).json({
      message: "Not found",
      error: "Item is not found",
    });
  }
};

export const putItemById = (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const { name } = req.body;
  const updatedItemId = updateItemWhereId(id, name);

  if (updatedItemId) {
    res.status(201).json({ id: updatedItemId });
  } else {
    res.status(404).json({
      message: "Not found",
      error: "Item is not found",
    });
  }
};

export const deleteItemById = (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  deleteItemWhereId(id);
  res.status(204).send();
};
