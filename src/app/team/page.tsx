// import Image from "next/image";
import { SectionTeamRoster, TeamRosterItem } from "@/devlink";
import teamDataArray from "@/data/team";

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
      <SectionTeamRoster teamListSlot={teamListMarkup} />
    </main>
  );
}
