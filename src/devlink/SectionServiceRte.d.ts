import * as React from "react";
import * as Types from "./types";

declare function SectionServiceRte(props: {
  as?: React.ElementType;
  image?: Types.Asset.Image;
  headingText?: React.ReactNode;
  richTextSlot?: Types.Devlink.Slot;
  buttons?: Types.Devlink.Slot;
}): React.JSX.Element;
