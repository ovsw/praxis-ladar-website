"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function FooterServiceLink({
  as: _Component = _Builtin.Link,
  text = "Text Link",

  link = {
    href: "#",
  },
}) {
  return (
    <_Component
      className="footer3_link light"
      button={false}
      block=""
      options={link}
    >
      {text}
    </_Component>
  );
}
