/**
 * Content Collections Configuration
 * 
 * Defines the schema and structure for content collections.
 * This removes the deprecation warning and provides type safety.
 */

import { defineCollection, z } from 'astro:content';

// Define schema for content frontmatter
const contentSchema = z.object({
  enabled: z.boolean().default(true),
  order: z.number().default(0),
  section: z.string(),
  title: z.string().optional(),
  description: z.string().optional(),
  image: z.string().optional(),
  publishDate: z.date().optional(),
  updateDate: z.date().optional(),
});

// Define collections for each content directory
const indexCollection = defineCollection({
  type: 'content',
  schema: contentSchema,
});

const aboutCollection = defineCollection({
  type: 'content',
  schema: contentSchema,
});

const onlinePrivacyCollection = defineCollection({
  type: 'content',
  schema: contentSchema,
});

const travelSafetyCollection = defineCollection({
  type: 'content',
  schema: contentSchema,
});

const publicSafetyCollection = defineCollection({
  type: 'content',
  schema: contentSchema,
});

const digitalAdvocacyCollection = defineCollection({
  type: 'content',
  schema: contentSchema,
});

const donateCollection = defineCollection({
  type: 'content',
  schema: contentSchema,
});

const contactCollection = defineCollection({
  type: 'content',
  schema: contentSchema,
});

// Export collections
export const collections = {
  'index': indexCollection,
  'about': aboutCollection,
  'online-privacy': onlinePrivacyCollection,
  'travel-safety': travelSafetyCollection,
  'public-safety': publicSafetyCollection,
  'digital-advocacy': digitalAdvocacyCollection,
  'donate': donateCollection,
  'contact': contactCollection,
};

