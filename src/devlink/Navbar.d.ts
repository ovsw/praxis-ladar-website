import * as React from "react";
import * as Types from "./types";

declare function Navbar(props: {
  as?: React.ElementType;
  terminRuntimeProps?: Types.Devlink.RuntimeProps;
  ctaButton?: Types.Devlink.Slot;
}): React.JSX.Element;
