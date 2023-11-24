import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./SectionLayout3.module.css";

export function SectionLayout3({ as: _Component = _Builtin.Block }) {
  return (
    <_Component
      className={_utils.cx(_styles, "section_layout3")}
      tag="section"
      bind="b221ef5f-ad2e-adb3-64db-3f86291bf901"
    >
      <_Builtin.Grid
        className={_utils.cx(_styles, "layout3_component", "reversed")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "layout3_content", "reversed")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "margin-bottom", "margin-small")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "text-size-xlarge")}
              tag="div"
              sym-bind='{"children":{"type":"Select","val":{"from":{"type":"Variable","val":"data"},"prop":"7edef7c4-3d89-0893-3bce-873b9f7d246c"}}}'
            >
              {"Jeder Patient"}
            </_Builtin.Block>
            <_Builtin.Heading
              className={_utils.cx(_styles, "hello-heading")}
              tag="h2"
              sym-bind='{"children":{"type":"Select","val":{"from":{"type":"Variable","val":"data"},"prop":"2d82316e-9b1d-049a-7b5e-90eaa165e9ef"}}}'
            >
              {"liegt uns am Herzen"}
            </_Builtin.Heading>
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "hero-slideshow_line-divider",
                "left",
                "dark"
              )}
              tag="div"
            />
          </_Builtin.Block>
          <_Builtin.Paragraph
            className={_utils.cx(_styles, "paragraph")}
            sym-bind='{"children":{"type":"Select","val":{"from":{"type":"Variable","val":"data"},"prop":"d3c35774-577b-c130-bfce-ef4688422925"}}}'
          >
            {
              "Neben fachlicher Kompetenz werden Sie bei uns ein herzliches Team vorfinden, bei dem Sie sich rundum wohlfühlen können"
            }
          </_Builtin.Paragraph>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "layout3_image-wrapper")}
          tag="div"
        >
          <_Builtin.Image
            className={_utils.cx(_styles, "layout3_image")}
            loading="lazy"
            width="auto"
            height="auto"
            sym-bind='{"img":{"type":"Select","val":{"from":{"type":"Variable","val":"data"},"prop":"7387bf1d-036b-68a3-8d0c-5e6a062c6d44"}}}'
            alt="das gesamte Zahnarztteam der Praxis Ladar"
            src="https://uploads-ssl.webflow.com/65459ab6440c1238e7ede277/6549b2ef41f8a92cdb1b8958_3L9A3045.webp"
          />
        </_Builtin.Block>
      </_Builtin.Grid>
    </_Component>
  );
}
