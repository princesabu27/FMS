import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "/FMS/",
  plugins: [tailwindcss()],
  server: {
    host: "0.0.0.0",
    port: 5173,
    strictPort: true,
  },
  build: {
    rollupOptions: {
      input: {
        main: "index.html",
        budget: "src/Other/Budget.html",
        goal: "src/Other/goal.html",
        home: "src/Other/home.html",
        report: "src/Other/report.html",
        subscription: "src/Other/Subscription.html",
        transaction: "src/Other/Transaction.html",
      },
    },
  },
});
