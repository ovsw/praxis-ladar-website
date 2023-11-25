import Image from "next/image";
// import styles from "./page.module.css";
import {
  CustomFeature1,
  SectionAmbiente,
  SectionBehandlung,
  SectionHero,
  SectionPraxisteam,
  SectionUberUns,
  SectionFullImage,
} from "@/devlink";

export default function Home() {
  return (
    <main>
      <SectionHero />
      <CustomFeature1 />
      <SectionUberUns />
      <SectionAmbiente />
      <SectionBehandlung />
      <SectionPraxisteam />
      <SectionFullImage />
    </main>
  );
}
