import {
  SectionFullImage,
  SectionLongContent,
  SlideshowStaff,
} from "@/devlink";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jobs | Praxis Ladar",
  description:
    "Stellenbeschreibung: Zahnmedizinische Fachangestellte (m/w/d) für die Stuhlassistenz Auszubildende (m/w/d) zur Zahnmedizinischen Fachangestellten. Quer- und Wiedereinsteiger sind willkommen!",
};

export default function JobsPage() {
  return (
    <>
      <div className="spacer-medium" />
      <SectionLongContent
        eyebrowText="Wir"
        headingText="Suchen Dich"
        topImageSlot={<SlideshowStaff />}
        hasBottomButtons={false}
        richTextSlot={
          <div
            dangerouslySetInnerHTML={{
              __html: `<p><strong>Stellenbeschreibung</strong></p><ul role="list"><li>Zahnmedizinische Fachangestellte (m/w/d) für die Stuhlassistenz</li><li>Auszubildende (m/w/d) zur Zahnmedizinischen Fachangestellten.</li><li>Quer- und Wiedereinsteiger sind willkommen!</li></ul><p><strong>Das bietest Du:</strong></p><ul role="list"><li>Du hast eine abgeschlossene Ausbildung zur ZFA.</li><li>Du arbeitest sorgfältig und bringst ein hohes Engagement sowie eine ausgeprägte Eigenverantwortung mit.</li><li>Du hast ein freundliches und empathisches Auftreten.</li><li>Du bist ein Teamplayer mit viel Freude an Deinem Job.</li></ul><p><strong>Das bieten wir:</strong></p><ul role="list"><li>Facettenreiches Umfeld, das eine spannende und abwechslungsreiche Tätigkeit garantiert.</li><li>Unbefristetes Arbeitsverhältnis, um Dir für die Zukunft die nötige Sicherheit zu geben.</li><li>Attraktive Vergütung, die auf Deine Leistung abgestimmt ist.</li><li>Individuelle Weiterbildungsmöglichkeiten, um Dich persönlich und fachlich zu fördern.</li><li>Freundliches und sympathisches Team, das Dich gerne herzlich willkommen heißen möchte.</li></ul><h3>Du erkennst Dich wieder?</h3><p>Dann lass uns gerne Deine Bewerbungsunterlagen per E-Mail zukommen an: <a href="mailto:praxis-ladar@t-online.de">praxis-ladar@t-online.de</a></p><p><strong>Werde Teil unserer Praxis-Familie, wir freuen uns auf Dich!</strong>‍</p>`,
            }}
          />
        }
      />
      <SectionFullImage />
    </>
  );
}
