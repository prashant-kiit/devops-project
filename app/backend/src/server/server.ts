import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import router from "./routes/routes";
import config from "../../config";

const app = express();
const port = config.BACKEND_PORT;

app.use(cors());
app.use(bodyParser.json());

app.use("/app", router);

app.listen(port, () => {
  console.log(`Server started on port http://localhost:${port}`);
});

export default app;
