import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./SectionFullImage.module.css";

export function SectionFullImage({ as: _Component = _Builtin.Section }) {
  return (
    <_Component
      className={_utils.cx(_styles, "fullscreen-bottom-image")}
      grid={{
        type: "section",
      }}
      tag="div"
    >
      <_Builtin.Image
        loading="lazy"
        width="auto"
        height="auto"
        alt="die Zahnmedizinische Mitarbeiter des Praxis Ladar-Teams"
        src="https://uploads-ssl.webflow.com/65459ab6440c1238e7ede277/6549b3567190493455f008a6_3L9A3020%20(1).jpg"
      />
    </_Component>
  );
}
