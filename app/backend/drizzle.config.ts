import { defineConfig } from "drizzle-kit";
import config from "./config";

console.log("drizzle", config.DATABASE_URL);

export default defineConfig({
  schema: "./src/database/model",
  out: "./src/database/migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: config.DATABASE_URL!,
  },
});
