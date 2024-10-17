"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function SectionFullImage({ as: _Component = _Builtin.Section }) {
  return (
    <_Component
      grid={{
        type: "section",
      }}
      tag="div"
    >
      <_Builtin.Block className="container-xxl" tag="div">
        <_Builtin.Block className="padding-section-medium" tag="div">
          <_Builtin.Image
            loading="lazy"
            width="auto"
            height="auto"
            alt="die Zahnmedizinische Mitarbeiter des Praxis Ladar-Teams"
            src="https://cdn.prod.website-files.com/65459ab6440c1238e7ede277/6549b3567190493455f008a6_3L9A3020%20(1).jpg"
          />
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
