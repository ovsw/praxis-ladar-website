import { SectionFullImage, SectionKontakt } from "@/devlink";
import React from "react";
import ButtonRuntimeProps from "../../components/ButtonRuntimeProps";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt | Praxis Ladar",
  description:
    "Online Termin Buchen. Email: praxis-ladar@t-online.de Tel. 07441-4222",
};

export default function Kontakt() {
  return (
    <>
      <SectionKontakt buttonsSlot={<ButtonRuntimeProps cta={false} />} />
      <SectionFullImage />
    </>
  );
}
