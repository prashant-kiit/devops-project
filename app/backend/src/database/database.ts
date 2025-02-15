import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import config from "../../config";

const connectionString = config.DATABASE_URL;

const client = postgres(connectionString as string, { prepare: false });
const db = drizzle(client);

console.log("Database connected at", connectionString);

export default db;
