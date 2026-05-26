// Vite configuration for Vercel deployment
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  preset: "vercel",
  vite: {
    server: {
      allowedHosts: "all",
    },
  },
});

