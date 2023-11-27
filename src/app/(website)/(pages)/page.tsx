//import Image from "next/image";
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

import servicesArray from "@/app/(website)/data/services";

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
      <SectionHero />
      <CustomFeature1 />
      <SectionUberUns />
      <SectionAmbiente />
      <SectionBehandlung listSlot={servicesListMarkup} />
      <SectionPraxisteam />
      <SectionFullImage />
    </main>
  );
}
