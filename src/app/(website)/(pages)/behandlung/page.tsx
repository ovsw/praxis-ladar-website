import React from "react";
import { SectionBehandlung, BehandlungItemMobile } from "@/devlink";
import servicesArray from "@/app/(website)/data/services";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Behandlung | Praxis Ladar",
  description:
    "In unserer Zahnarztpraxis setzen wir auf hochmoderne Technologie, um Ihr Wohlbefinden und Ihre Zahngesundheit zu fördern. Bei uns erwartet Sie eine zeitgemäße Zahnmedizin für ein strahlendes Lächeln und eine sorgenfreie Behandlung.",
};

export default function ServicesPage() {
  const servicesListMarkup = servicesArray.map((service, key) => {
    return (
      <BehandlungItemMobile
        key={key}
        link={{ href: `/behandlung/${service.Slug}` }}
        text={service.Name}
      />
    );
  });
  return (
    <>
      <SectionBehandlung listSlot={servicesListMarkup} />
    </>
  );
}
