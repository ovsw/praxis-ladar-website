import * as React from "react";
import * as Types from "./types";

declare function SectionLongContent(props: {
  as?: React.ElementType;
  image?: Types.Asset.Image;
  headingText?: React.ReactNode;
  richTextSlot?: Types.Devlink.Slot;
  buttons?: Types.Devlink.Slot;
  eyebrowText?: React.ReactNode;
  topImageSlot?: Types.Devlink.Slot;
  hasBottomButtons?: Types.Visibility.VisibilityConditions;
  hasTopImage?: Types.Visibility.VisibilityConditions;
}): React.JSX.Element;
