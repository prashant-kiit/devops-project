import { dirname, resolve as _resolve } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default {
  entry: "./index.ts",
  output: {
    filename: "bundle.js",
    path: _resolve(__dirname, "../../dist/backend/server"),
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  target: "node",
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  mode: "development",
  stats: "minimal", // ✅ Correct way to set stats
};