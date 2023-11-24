import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./BigHeader.module.css";

export function BigHeader({
  as: _Component = _Builtin.Section,
  text1 = "Über",
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "hero", "for-about")}
      grid={{
        type: "section",
      }}
      tag="div"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "wide-container", "about-hero")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "hero-container", "separate", "top")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "about-hero-title")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "perspective-wrapper",
                "horizontal"
              )}
              tag="div"
            >
              <_Builtin.Heading
                className={_utils.cx(_styles, "heading-1")}
                tag="h1"
              >
                {text1}
              </_Builtin.Heading>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
