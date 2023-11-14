import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const url = "https://rabyea-group-backend.vercel.app";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
    proxy: {
      "/api": {
        target: `${url}`,
        changeOrigin: true,
      },
    },
  },
});
