import * as React from "react";
import * as Types from "./types";

declare function ButtonPrimary(props: {
  as?: React.ElementType;
  link?: Types.Basic.Link;
  text?: React.ReactNode;
  runtimeProps?: Types.Devlink.RuntimeProps;
}): React.JSX.Element;
