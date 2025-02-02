const path = require("path");

module.exports = {
  entry: "./backend/index.ts", // Adjust entry point if needed
  output: {
    filename: "bundle.js", // Output JavaScript file
    path: path.resolve(__dirname, "dist"), // Output directory
  },
  resolve: {
    extensions: [".ts", ".js"],
    // Allow TypeScript and JavaScript imports without file extensions
  },
  target: "node",
  module: {
    rules: [
      {
        test: /\.ts$/, // Match all .ts files
        use: "ts-loader", // Use ts-loader to compile TypeScript
        exclude: /node_modules/,
      },
    ],
  },
  mode: "development", // You can change to 'production' when ready for production
};
