import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://spochart.co",
  output: "static",
  integrations: [
    sitemap(),
  ],
  experimental: {
    contentCollectionCache: true,
  },
});
