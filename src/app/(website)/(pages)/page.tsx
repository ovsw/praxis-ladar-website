//import Image from "next/image";
import type { Metadata } from "next";
import {
  CustomFeature1,
  SectionAmbiente,
  SectionBehandlung,
  SectionHero,
  SectionPraxisteam,
  SectionUberUns,
  SectionFullImage,
  BehandlungItemMobile,
} from "@/devlink";

import servicesArray from "@/app/(website)/_data/services";

export const metadata: Metadata = {
  title: "Home | Praxis Ladar",
  description:
    "Zahnheilkunde auf höchstem Niveau. Ihre Spezialisten für Implantologie, Ästhetische Zahnheilkunde, Parodontologie, Endodontie.",
};

export default function Home() {
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
    <main>
      <SectionHero buttonLink={{ href: "/uber-uns" }} />
      <CustomFeature1 />
      <SectionUberUns />
      <SectionAmbiente />
      <SectionBehandlung listSlot={servicesListMarkup} />
      <SectionPraxisteam />
      <SectionFullImage />
    </main>
  );
}
