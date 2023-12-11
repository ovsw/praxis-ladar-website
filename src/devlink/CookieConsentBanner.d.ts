import * as React from "react";
import * as Types from "./types";

declare function CookieConsentBanner(props: {
  as?: React.ElementType;
  denyBtn?: Types.Devlink.RuntimeProps;
  acceptBtn?: Types.Devlink.RuntimeProps;
  link?: Types.Basic.Link;
}): React.JSX.Element;
