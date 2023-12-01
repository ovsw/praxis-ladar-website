import { SectionAmbiente } from "@/devlink";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ambiente | Praxis Ladar",
  description: "Eine angenehme und moderne Umgebung",
};
export default function page() {
  return (
    <>
      <SectionAmbiente />
    </>
  );
}
