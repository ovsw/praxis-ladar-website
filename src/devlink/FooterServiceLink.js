import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./FooterServiceLink.module.css";

export function FooterServiceLink({
  as: _Component = _Builtin.Link,
  text = "Text Link",

  link = {
    href: "#",
  },
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "footer3_link", "light")}
      button={false}
      options={link}
    >
      {text}
    </_Component>
  );
}
