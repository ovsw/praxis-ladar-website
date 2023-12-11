import React from "react";
import { SectionTeamRoster, TeamRosterItem } from "@/devlink";
import { getStaffMembers } from "../../../../../sanity/sanity-utils";

export default async function SectionTeamRosterWrapper() {
  const teamDataArray = await getStaffMembers();
  // @tss-ignore
  const teamListMarkup = teamDataArray.map((teamMember) => {
    return (
      <TeamRosterItem
        key={teamMember._id}
        name={teamMember.name}
        role={teamMember.jobtitle}
        image={teamMember.wfImage}
      />
    );
  });
  return (
    <div>
      <SectionTeamRoster teamListSlot={teamListMarkup} />
    </div>
  );
}
