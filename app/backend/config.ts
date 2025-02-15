import path from "path";
import dotenv from "dotenv";

const env = process.env.ENV;
dotenv.config({ path: path.resolve(`.env.${env}`) });

const config = {
  BACKEND_PORT: process.env.BACKEND_PORT,
  DATABASE_URL: process.env.DATABASE_URL,
};

export default config;
