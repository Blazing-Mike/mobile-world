import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://blazing-mike.github.io",
  base: "/mobile-world/",
  vite: {
    plugins: [tailwindcss()],
  },
});
