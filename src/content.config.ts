import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const appInfoCollection = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/AppInfo" }),
  schema: z.object({
    appName: z.string(),
    appLogoPath: z.string(),
    // can we make this a strict choice of: "Square", "Landscape"
    appLogoOrientation: z.string(),
    // can we make this a strict choice of: "Yes", "No", "Maybe"
    appAnswer: z.string(),
    brandUrl: z.string().optional(),
  }),
});

export const collections = {
  AppInfo: appInfoCollection,
};
