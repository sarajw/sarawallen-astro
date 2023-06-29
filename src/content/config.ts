// Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';
// Define a schema for each collection you'd like to validate.
const postsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.string(),
    heroImage: z.string(),
    caption: z.string(),
    draft: z.boolean().optional(),
  })
});
const shortCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    short: z.boolean(),
    pubDate: z.string(),
    published: z.boolean().optional(),
  })
});
const notesCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    notes: z.boolean(),
    pubDate: z.string(),
    published: z.boolean().optional(),
    draft: z.boolean().optional(),
  })
});
// Export a single `collections` object to register your collection(s)
export const collections = {
  'posts': postsCollection,
  'short': shortCollection,
  'notes': notesCollection,
};