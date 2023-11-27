import { SectionBehandlung, BehandlungItemMobile } from "@/devlink";
import React from "react";

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
