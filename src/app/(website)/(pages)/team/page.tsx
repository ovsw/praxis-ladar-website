// import Image from "next/image";
import {
  BigHeader,
  SectionFullImage,
  SectionLayout3Reversed,
  SectionPraxisteam,
  SectionTeamRoster,
  TeamRosterItem,
} from "@/devlink";
import teamDataArray from "@/app/(website)/data/team";

export default function TeamPage() {
  const teamListMarkup = teamDataArray.map((teamMember, key) => {
    return (
      <TeamRosterItem
        key={key}
        name={teamMember.Name}
        role={teamMember["Job Title"]}
        image={teamMember["Profile Picture"]}
      />
    );
  });

  return (
    <main>
      <BigHeader />
      <SectionLayout3Reversed />
      <SectionPraxisteam />
      <SectionTeamRoster teamListSlot={teamListMarkup} />
      <SectionFullImage />
    </main>
  );
}
