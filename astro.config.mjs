import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://spochart.co",
  output: "static",
  experimental: {
    contentCollectionCache: true,
  },
});
