import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const appInfoCollection = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/AppInfo" }),
  schema: z.object({
    appName: z.string(),
    appLogoPath: z.string(),
    appLogoOrientation: z.union([z.literal("square"), z.literal("landscape")]),
    appAnswer: z.union([z.literal("Yes"), z.literal("No"), z.literal("Maybe")]),
    brandUrl: z.string().optional(),
  }),
});

export const collections = {
  AppInfo: appInfoCollection,
};
