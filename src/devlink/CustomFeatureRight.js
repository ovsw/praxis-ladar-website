"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function CustomFeatureRight({ as: _Component = _Builtin.Section }) {
  return (
    <_Component
      className="section_layout194"
      grid={{
        type: "section",
      }}
      tag="div"
    >
      <_Builtin.Block className="padding-global is-nopad-left" tag="div">
        <_Builtin.Block className="container-large" tag="div">
          <_Builtin.Block className="padding-section-custom-1" tag="div">
            <_Builtin.Grid className="layout194_component" tag="div">
              <_Builtin.Block className="layout194_image-wrapper" tag="div">
                <_Builtin.Image
                  className="layout194_image"
                  loading="eager"
                  width="auto"
                  height="auto"
                  alt="Dr. Desirée Ladar und Dr. Emil Ladar"
                  src="https://cdn.prod.website-files.com/65459ab6440c1238e7ede277/6549b5d4e7cf511712ebfef4_emil-desiree.jpg"
                />
              </_Builtin.Block>
              <_Builtin.Block className="layout194_content" tag="div">
                <_Builtin.Heading className="heading-style-h3" tag="h2">
                  {"Persönliche Aufmerksamkeit"}
                </_Builtin.Heading>
                <_Builtin.Block className="spacer-xsmall" tag="div" />
                <_Builtin.Block className="divider-line left dark" tag="div" />
                <_Builtin.Block className="spacer-xsmall" tag="div" />
                <_Builtin.Paragraph>
                  {
                    "Das individuelle persönliche Beratungsgespräch und die ausführliche medizinische Untersuchung vor jeder therapeutischen Maßnahme besitzt in unserer Praxis einen hohen Stellenwert."
                  }
                </_Builtin.Paragraph>
              </_Builtin.Block>
            </_Builtin.Grid>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
