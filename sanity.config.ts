import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import schemas from "./sanity/schemas";

const projectId = process.env.NEXT_PUBLIC_SANITY_STUDIO_PROJECT_ID || "";
const dataset = process.env.NEXT_PUBLIC_SANITY_STUDIO_DATASET || "production";
const apiVersion = process.env.NEXT_PUBLIC_SANITY_STUDIO_API_VERSION || "";
const title = process.env.NEXT_PUBLIC_SANITY_STUDIO_TITLE || "Env Title";
const basePath = process.env.NEXT_PUBLIC_SANITY_STUDIO_BASE_PATH || "/admin";

const config = defineConfig({
  projectId,
  dataset,
  title,
  apiVersion,
  basePath,
  plugins: [deskTool(), visionTool()],
  schema: { types: schemas },
});

export default config;
