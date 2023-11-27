import { SectionFullImage, SectionKontakt } from "@/devlink";
import React from "react";
import ButtonRuntimeProps from "../../components/ButtonRuntimeProps";

export default function Kontakt() {
  return (
    <>
      <SectionKontakt buttonsSlot={<ButtonRuntimeProps cta={false} />} />
      <SectionFullImage />
    </>
  );
}
