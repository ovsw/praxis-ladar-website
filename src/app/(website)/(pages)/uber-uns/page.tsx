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
