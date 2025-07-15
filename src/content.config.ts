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

const wtfsCollection = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/WTFs" }),
  schema: z.object({
    app: z.string(),
    wtfs: z.array(
      z.object({
        wtf: z.string(),
        srcUrl: z.string().url(),
      })
    ),
  }),
});

export const collections = {
  AppInfo: appInfoCollection,
  WTFs: wtfsCollection,
};
