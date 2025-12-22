import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  // Use a separate cache directory to avoid permission issues with the default .vite folder
  cacheDir: "node_modules/.vite-app",
  assetsInclude: ["**/*.glb"],
  preview: {
    allowedHosts: [
      "alexportfolio-qjca.onrender.com",
      "alexmedici.online",
      "www.alexmedici.online",
    ],
  },
  plugins: [react(), tailwindcss()],
});
