import { z, defineCollection } from "astro:content";

const defaultCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()).optional(),
    images: z.array(z.object({
      src: z.string(),
      alt: z.string(),
    })).optional(),
  }),
});

export const collections = {
  "projects": defaultCollection,
  "posts": defaultCollection,
};
