import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Cursor.module.css";

export function Cursor({ as: _Component = _Builtin.Block }) {
  return (
    <_Component
      className={_utils.cx(_styles, "cursor")}
      tag="div"
      bind="8044fec0-06c0-7e99-7df2-dce502226ab4"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "cursor-inner")}
        tag="div"
      />
    </_Component>
  );
}
