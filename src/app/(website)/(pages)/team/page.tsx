// import Image from "next/image";
import {
  BigHeader,
  SectionFullImage,
  SectionLayout3Reversed,
  SectionPraxisteam,
  SectionTeamRoster,
  TeamRosterItem,
} from "@/devlink";
import teamDataArray from "@/app/(website)/_data/team";

import type { Metadata } from "next";
import SectionTeamRoster_W from "../../_components/wfWrappers/SectionTeamRoster_W";

export const metadata: Metadata = {
  title: "Team | Praxis Ladar",
  description:
    "In unserer Zahnarztpraxis liegt uns jeder Patient am Herzen. Ihr Wohlbefinden und Ihre Gesundheit sind unsere oberste Priorität, denn wir sind hier, um Ihr strahlendes Lächeln zu erhalten und zu fördern.",
};

export default function TeamPage() {
  // const teamListMarkup = teamDataArray.map((teamMember, key) => {
  //   return (
  //     <TeamRosterItem
  //       key={key}
  //       name={teamMember.Name}
  //       role={teamMember["Job Title"]}
  //       image={teamMember["Profile Picture"]}
  //     />
  //   );
  // });

  return (
    <main>
      <BigHeader />
      <SectionLayout3Reversed />
      <SectionPraxisteam />
      <SectionTeamRoster_W />
      {/* <SectionTeamRoster teamListSlot={teamListMarkup} /> */}
      <SectionFullImage />
    </main>
  );
}
