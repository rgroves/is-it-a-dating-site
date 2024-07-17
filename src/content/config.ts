import { z, defineCollection } from "astro:content";

const appInfoCollection = defineCollection({
  schema: z.object({
    appName: z.string(),
    appLogoPath: z.string(),
    // can we make this a strict choice of: "Square", "Landscape"
    appLogoOrientation: z.string(),
    // can we make this a strict choice of: "Yes", "No", "Maybe"
    appAnswer: z.string(),
    brandUrl: z.string().optional(),
  }),
  type: "data",
});

export const collections = {
  AppInfo: appInfoCollection,
};
