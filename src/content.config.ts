import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const portfolio = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/portfolio' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    category: z.string(),
    year: z.number(),
    client: z.string(),
    scope: z.string(),
    shortDescription: z.string(),
    overview: z.string(),
    challenge: z.string(),
    approach: z.string(),
    result: z.string(),
    thumbnail: z.string(),
    heroImage: z.string(),
    galleryImages: z.array(z.string()),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    category: z.string(),
    date: z.string(),
    shortDescription: z.string(),
    description: z.string(),
    thumbnail: z.string(),
    heroImage: z.string(),
    featured: z.boolean().default(false),
    related: z.array(z.string()).default([]),
  }),
});

export const collections = {
  portfolio,
  blog,
};
