import * as React from "react";
import * as Types from "./types";

declare function TeamRosterItem(props: {
  as?: React.ElementType;
  image?: Types.Asset.Image;
  name?: React.ReactNode;
  role?: React.ReactNode;
}): React.JSX.Element;
