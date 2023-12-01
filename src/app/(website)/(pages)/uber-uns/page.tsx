import {
  BigHeader,
  CustomFeature1,
  CustomFeatureLeft,
  CustomFeatureRight,
  SectionFullImage,
  SectionLayout3,
  SectionLayout3Reversed,
  SectionPraxisteam,
  Statistics,
  StickyFeature,
} from "@/devlink";
import React from "react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Über uns | Praxis Ladar",
  description:
    "Jeder Patient liegt uns am Herzen. Neben fachlicher Kompetenz werden Sie bei uns ein herzliches Team vorfinden, bei dem Sie sich rundum wohlfühlen können.",
};

export default function UberUnsPage() {
  return (
    <>
      <BigHeader />
      <SectionLayout3 />
      <CustomFeatureRight />
      <CustomFeatureLeft />
      <Statistics />
      <StickyFeature />
      <CustomFeature1 />
      <SectionFullImage />
    </>
  );
}
