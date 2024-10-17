"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function BigHeader({
  as: _Component = _Builtin.Section,
  text1 = "Über uns",
}) {
  return (
    <_Component
      className="hero for-about"
      grid={{
        type: "section",
      }}
      tag="div"
    >
      <_Builtin.Block className="hero-container separate top" tag="div">
        <_Builtin.Block className="about-hero-title" tag="div">
          <_Builtin.Block className="perspective-wrapper horizontal" tag="div">
            <_Builtin.Heading className="heading-1" tag="h1">
              {"Über"}
              <_Builtin.Span className="outlined" data-outlined="dark">
                {"Uns"}
              </_Builtin.Span>
            </_Builtin.Heading>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block className="spacer-medium" tag="div" />
      </_Builtin.Block>
    </_Component>
  );
}
