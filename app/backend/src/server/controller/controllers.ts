import { Request, Response } from "express";
import {
  deleteItemWhereId,
  insertItem,
  selectAllItems,
  selectItemWhereId,
  updateItemWhereId,
} from "../repository/repository";

export const postItem = async (req: Request, res: Response) => {
  const { name } = req.body;
  const newItem = { name };
  const newItemId = await insertItem(newItem);
  res.status(201).json({ id: newItemId });
};

export const getItems = async (req: Request, res: Response) => {
  const items = await selectAllItems();
  res.status(200).json(items);
};

export const getItemById = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const item = await selectItemWhereId(id);
  if (item) {
    res.status(200).json(item);
  } else {
    res.status(404).json({
      message: "Not found",
      error: "Item is not found",
    });
  }
};

export const putItemById = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const { name } = req.body;
  const updatedItemId = await updateItemWhereId(id, name);

  if (updatedItemId) {
    res.status(201).json({ id: updatedItemId });
  } else {
    res.status(404).json({
      message: "Not found",
      error: "Item is not found",
    });
  }
};

export const deleteItemById = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  await deleteItemWhereId(id);
  res.status(204).send();
};
