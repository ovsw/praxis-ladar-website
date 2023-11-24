import * as React from "react";
import * as Types from "./types";

declare function CtaButton(props: {
  as?: React.ElementType;
  runtimeProps?: Types.Devlink.RuntimeProps;
  text?: React.ReactNode;
  link?: Types.Basic.Link;
}): React.JSX.Element;
