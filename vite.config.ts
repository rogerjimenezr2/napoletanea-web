// Vite configuration for Vercel deployment
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  preset: "node-server",
  vite: {
    server: {
      allowedHosts: "all",
    },
  },
});

