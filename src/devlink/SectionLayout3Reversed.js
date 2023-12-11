import React from "react";
import * as _Builtin from "./_Builtin";
import { ButtonPrimary } from "./ButtonPrimary";
import { ButtonSecondary } from "./ButtonSecondary";

export function SectionLayout3Reversed({ as: _Component = _Builtin.Block }) {
  return (
    <_Component className="section_layout194" tag="section">
      <_Builtin.Block
        className="padding-global is-nopad-left-landscape"
        tag="div"
      >
        <_Builtin.Block className="container-large" tag="div">
          <_Builtin.Block className="padding-section-custom-1" tag="div">
            <_Builtin.Grid className="layout194-cust-1_component" tag="div">
              <_Builtin.Block
                className="layout194-cust-1_image-wrapper"
                tag="div"
              >
                <_Builtin.Image
                  className="layout194-cust-1_image absolute"
                  loading="eager"
                  width="auto"
                  height="auto"
                  alt="die vier Zahnärzte des Praxis Ladar-Teams"
                  src="https://uploads-ssl.webflow.com/65459ab6440c1238e7ede277/6549b3129dd89da74f9168ad_3L9A3368-en-sm-2.webp"
                />
              </_Builtin.Block>
              <_Builtin.Block className="layout194-cust-1_content" tag="div">
                <_Builtin.Block className="text-block" tag="div">
                  {"Jeder Patient"}
                </_Builtin.Block>
                <_Builtin.Heading className="heading-style-h3" tag="h2">
                  {"liegt uns am Herzen"}
                </_Builtin.Heading>
                <_Builtin.Block className="spacer-xsmall" tag="div" />
                <_Builtin.Block className="divider-line left dark" tag="div" />
                <_Builtin.Block className="spacer-xsmall" tag="div" />
                <_Builtin.Paragraph>
                  {
                    "In unserer Zahnarztpraxis liegt uns jeder Patient am Herzen."
                  }
                </_Builtin.Paragraph>
                <_Builtin.Block className="spacer-xsmall" tag="div" />
                <_Builtin.Paragraph>
                  {
                    "Ihr Wohlbefinden und Ihre Gesundheit sind unsere oberste Priorität, denn wir sind hier, um Ihr strahlendes Lächeln zu erhalten und zu fördern."
                  }
                </_Builtin.Paragraph>
                <_Builtin.Block className="spacer-xsmall" tag="div" />
                <_Builtin.Block className="buttons-wrapper" tag="div">
                  <ButtonPrimary
                    link={{
                      href: "#artze",
                    }}
                    text="Ärzte"
                  />
                  <ButtonSecondary
                    text="Team"
                    link={{
                      href: "#team",
                    }}
                  />
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Grid>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
