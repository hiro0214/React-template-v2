import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  root: "src",
  plugins: [react()],
  server: {
    port: 8080,
    open: true,
  },
  resolve: {
    alias: {
      "@/": `${__dirname}/src/`,
    },
  },
});
