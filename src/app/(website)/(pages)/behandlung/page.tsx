import React from "react";
import { SectionBehandlung, BehandlungItemMobile } from "@/devlink";
import servicesArray from "@/app/(website)/data/services";

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
