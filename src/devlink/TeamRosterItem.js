"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function TeamRosterItem({
  as: _Component = _Builtin.Block,
  image = "",
  name = "First Last Name",
  role = "Position / Role /Title",
}) {
  return (
    <_Component className="team6_item" tag="div">
      <_Builtin.Block className=" team6_image-wrapper" tag="div">
        <_Builtin.Image
          className="team6_image"
          height="auto"
          loading="lazy"
          width="auto"
          bind="14be8e06-c5bc-5a55-7997-b23196434f9e"
          alt=""
          src={image}
        />
      </_Builtin.Block>
      <_Builtin.Block
        className="text-size-large text-weight-semibold"
        tag="div"
        bind="14be8e06-c5bc-5a55-7997-b23196434fa0"
      >
        {name}
      </_Builtin.Block>
      <_Builtin.Paragraph bind="14be8e06-c5bc-5a55-7997-b23196434fa1">
        {role}
      </_Builtin.Paragraph>
      <_Builtin.Block className="spacer-xsmall" tag="div" />
    </_Component>
  );
}
