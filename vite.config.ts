import { defineConfig } from "vite";
import { join } from "path";

import reactRefresh from "@vitejs/plugin-react-refresh";

export default defineConfig({
  plugins: [reactRefresh()],
  resolve: {
    alias: {
      "~": join(__dirname, "src"),
    },
  },
});
