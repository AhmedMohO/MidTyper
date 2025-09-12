import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    cssCodeSplit: true,
    sourcemap: false,
    chunkSizeWarningLimit: 250,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes("node_modules")) return;

          if (id.includes("react-dom") || id.includes("react-router-dom") || id.includes("react")) {
            return "react-core";
          }
          if (id.includes("framer-motion")) {
            return "motion";
          }
          if (id.includes("i18next") || id.includes("react-i18next") || id.includes("i18next-browser-languagedetector")) {
            return "i18n";
          }
          if (
            id.includes("@radix-ui") ||
            id.includes("class-variance-authority") ||
            id.includes("tailwind-merge") ||
            id.includes("sonner") ||
            id.includes("cmdk") ||
            id.includes("embla-carousel-react")
          ) {
            return "ui";
          }
          if (id.includes("recharts") || id.includes("react-resizable-panels") || id.includes("react-day-picker")) {
            return "charts";
          }
          if (id.includes("lucide-react")) {
            return "icons";
          }

          // fallback vendor chunk per package
          const match = id.match(/node_modules\\\\([^\\\\/]+)/) || id.match(/node_modules\/([^\\/]+)/);
          if (match && match[1]) return `vendor-${match[1]}`;
        },
      },
    },
  },
});
