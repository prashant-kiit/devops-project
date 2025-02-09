import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import router from "./routes/routes";
import dotenv from "dotenv";

const environment = process.env.ENV;
dotenv.config({ path: `../../.env.${environment}` });
export const app = express();
export const port = process.env.PORT;

app.use(cors());
app.use(bodyParser.json());

app.use("/app", router);

app.listen(port, () => {
  console.log(`Server started on port http://localhost:${port} in ${environment} mode`);
});

export default app;
