import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "node:path";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: { rollupOptions: { input: { home: resolve(__dirname, "index.html"), styleguide: resolve(__dirname, "styleguide.html") } } },
});
