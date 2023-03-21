// vite.config.js

import { defineConfig } from "vite";
import path from "path";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  base: "./", // Set the base directory to the root directory
  root: "./src", // Set the root directory to the src directory
  // Other configurations...
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/"),
    },
  },
  plugins: [vue()],
});
