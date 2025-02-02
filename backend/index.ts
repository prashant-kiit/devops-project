import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

// In-memory data store
let items: { id: number, name: string }[] = [];
let currentId = 1;

// Create
app.post("/items", (req: Request, res: Response) => {
  const { name } = req.body;
  const newItem = { id: currentId++, name };
  items.push(newItem);
  res.status(201).json(newItem);
});

// Read All
app.get("/items", (req: Request, res: Response) => {
  res.status(200).json(items);
});

// Read One
app.get("/items/:id", (req: Request, res: Response) => {
  const item = items.find((i) => i.id === parseInt(req.params.id));
  if (item) {
    res.status(200).json(item);
  } else {
    res.status(404).json({ message: "Item not found" });
  }
});

// Update
app.put("/items/:id", (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const { name } = req.body;
  const itemIndex = items.findIndex((i) => i.id === id);

  if (itemIndex !== -1) {
    items[itemIndex].name = name;
    res.status(200).json(items[itemIndex]);
  } else {
    res.status(404).json({ message: "Item not found" });
  }
});

// Delete
app.delete("/items/:id", (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  items = items.filter((i) => i.id !== id);
  res.status(204).send();
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
