import express, { Request, Response } from "express";
import { app, port } from "..";
import {
  deleteItemById,
  getItemById,
  getItems,
  postItems,
  putItemById,
} from "../controller/controllers";

export const router = express.Router();

// Create
router.post("/items", postItems);

// Read All
router.get("/items", getItems);

// Read One
router.get("/items/:id", getItemById);

// Update
router.put("/items/:id", putItemById);

// Delete
router.delete("/items/:id", deleteItemById);

export default router;
