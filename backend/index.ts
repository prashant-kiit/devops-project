import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import router from "./routes/routes";

export const app = express();
export const port = 3000;

app.use(cors());
app.use(bodyParser.json());

app.use("/app", router);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
