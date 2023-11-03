import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";

const config = defineConfig({
  projectId: "anmky5yg",
  dataset: "production",
  title: "Praxis Ladar Website",
  apiVersion: "2023-11-03",
  basePath: "/admin",
  plugins: [deskTool()],
});

export default config;
