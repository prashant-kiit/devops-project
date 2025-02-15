import path from "path";
import dotenv from "dotenv";

if (process.env.ENV === "development") {
  dotenv.config({ path: path.resolve(".env.development") });
}

const config = {
  BACKEND_PORT: process.env.BACKEND_PORT,
  DATABASE_URL: process.env.DATABASE_URL,
};

export default config;
