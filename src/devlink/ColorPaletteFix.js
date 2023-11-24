import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./ColorPaletteFix.module.css";

export function ColorPaletteFix({ as: _Component = _Builtin.Grid }) {
  return (
    <_Component
      className={_utils.cx(_styles, "styleguide_grid-colours")}
      tag="div"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "rl-styleguide_color", "is-black")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "rl-styleguide_label")}
          tag="div"
        >
          {"is-black"}
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "rl-styleguide_color", "is-white")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "rl-styleguide_label")}
          tag="div"
        >
          {"is-white"}
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "rl-styleguide_color", "is-gray")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "rl-styleguide_label")}
          tag="div"
        >
          {"is-gray"}
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "rl-styleguide_color", "is-brand-1")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "rl-styleguide_label")}
          tag="div"
        >
          {"is-brand-1"}
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "rl-styleguide_color", "is-brand-2")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "rl-styleguide_label")}
          tag="div"
        >
          {"is-brand-2"}
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
