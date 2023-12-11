import React from "react";
import * as _Builtin from "./_Builtin";

export function CustomFeature1({ as: _Component = _Builtin.Section }) {
  return (
    <_Component
      className="section_layout194 background-color-brand-2"
      grid={{
        type: "section",
      }}
      tag="section"
    >
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
                  {"Zahnheilkunde"}
                </_Builtin.Block>
                <_Builtin.Heading className="heading-style-h3" tag="h2">
                  {"auf höchstem Niveau"}
                </_Builtin.Heading>
                <_Builtin.Block className="spacer-xsmall" tag="div" />
                <_Builtin.Block className="divider-line left dark" tag="div" />
                <_Builtin.Block className="spacer-xsmall" tag="div" />
                <_Builtin.Paragraph>
                  {
                    "In unserer Zahnarztpraxis stehen Sie im Mittelpunkt. Wir legen nicht nur Wert auf Ihre Zahngesundheit, sondern auch auf Ihr allgemeines Wohlbefinden. "
                  }
                </_Builtin.Paragraph>
                <_Builtin.Block className="spacer-xsmall" tag="div" />
                <_Builtin.Paragraph>
                  {
                    "Unser Ziel ist es, dass Sie sich bei uns rundum wohl und gut aufgehoben fühlen."
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
