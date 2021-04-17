import { defineConfig } from "vite";
import { join } from "path";

import reactRefresh from "@vitejs/plugin-react-refresh";

export default defineConfig({
  plugins: [reactRefresh()],
  server: {
    proxy: {
      "/api": {
        target: "https://covid19-api.org/api/",
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, ""),
      },
    },
  },
  resolve: {
    alias: {
      "~": join(__dirname, "src"),
    },
  },
});
