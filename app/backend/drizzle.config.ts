import { defineConfig } from "drizzle-kit";
import config from "./config";

export default defineConfig({
  schema: "./src/database/model",
  out: "./dist/database/migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: config.DATABASE_URL!,
  },
});
