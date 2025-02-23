import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ["lucide-react"],
  },
  server: {
    port: 5000,
  },
  preview: {
    port: 5001,
  },
  build: {
    outDir: "./dist/",
    assetsDir: "assets",
    sourcemap: true,
    minify: "terser",
    rollupOptions: {
      output: {
        manualChunks: {
          "react-vendor": ["react", "react-dom"],
          lucide: ["lucide-react"],
        },
      },
    },
  },
});
