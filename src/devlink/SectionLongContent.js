import React from "react";
import * as _Builtin from "./_Builtin";

export function SectionLongContent({
  as: _Component = _Builtin.Block,
  image = "",
  headingText = "Heading",
  richTextSlot,
  buttons,
  eyebrowText = "Behandlung",
  topImageSlot,
  hasBottomButtons = true,
  hasTopImage = true,
}) {
  return (
    <_Component className="section_layout89" tag="section">
      <_Builtin.Block className="padding-global" tag="div">
        <_Builtin.Block className="container-medium" tag="div">
          <_Builtin.Block className="padding-section-large" tag="div">
            <_Builtin.Block
              className="layout89_image-wrapper services"
              tag="div"
            >
              {topImageSlot ??
                (hasTopImage ? (
                  <_Builtin.Image
                    className="layout89_image"
                    loading="lazy"
                    width="auto"
                    height="auto"
                    bind="704e5c74-5fc2-82d8-fc24-984a606c62d1"
                    alt=""
                    src={image}
                  />
                ) : null)}
            </_Builtin.Block>
            <_Builtin.Block className="service-content" tag="div">
              <_Builtin.Grid className="layout89_component services" tag="div">
                <_Builtin.Block className="layout89_content-left" tag="div">
                  <_Builtin.Block className="sticky-heading" tag="div">
                    <_Builtin.Block tag="div">{eyebrowText}</_Builtin.Block>
                    <_Builtin.Block className="spacer-xxsmall" tag="div" />
                    <_Builtin.Heading
                      className="service-hero smaller-mobile"
                      tag="h1"
                      bind="704e5c74-5fc2-82d8-fc24-984a606c62c7"
                    >
                      {headingText}
                    </_Builtin.Heading>
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block className="layout89_content-right" tag="div">
                  <_Builtin.Block className="rte-long" tag="div">
                    {richTextSlot}
                  </_Builtin.Block>
                  {hasBottomButtons ? (
                    <_Builtin.Block className="spacer-medium" tag="div" />
                  ) : null}
                  {hasBottomButtons ? (
                    <_Builtin.Block className="button-group" tag="div">
                      {buttons}
                    </_Builtin.Block>
                  ) : null}
                </_Builtin.Block>
              </_Builtin.Grid>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
