import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./TeamRosterItem.module.css";

export function TeamRosterItem({
  as: _Component = _Builtin.Block,
  image = "",
  name = "First Last Name",
  role = "Position / Role /Title",
}) {
  return (
    <_Component className={_utils.cx(_styles, "team6_item")} tag="div">
      <_Builtin.Block
        className={_utils.cx(_styles, "", "team6_image-wrapper")}
        tag="div"
      >
        <_Builtin.Image
          className={_utils.cx(_styles, "team6_image")}
          height="auto"
          loading="lazy"
          width="auto"
          bind="14be8e06-c5bc-5a55-7997-b23196434f9e"
          alt=""
          src={image}
        />
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(
          _styles,
          "text-size-large",
          "text-weight-semibold"
        )}
        tag="div"
        bind="14be8e06-c5bc-5a55-7997-b23196434fa0"
      >
        {name}
      </_Builtin.Block>
      <_Builtin.Paragraph bind="14be8e06-c5bc-5a55-7997-b23196434fa1">
        {role}
      </_Builtin.Paragraph>
      <_Builtin.Block
        className={_utils.cx(_styles, "spacer-xsmall")}
        tag="div"
      />
    </_Component>
  );
}
