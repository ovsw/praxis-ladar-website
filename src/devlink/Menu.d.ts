import * as React from "react";
import * as Types from "./types";

declare function Menu(props: {
  as?: React.ElementType;
  homeLink?: Types.Basic.Link;
  ambienteLink?: Types.Basic.Link;
  behandlungLink?: Types.Basic.Link;
  uberUnsLink?: Types.Basic.Link;
  teamLink?: Types.Basic.Link;
  jobsLink?: Types.Basic.Link;
  kontaktLink?: Types.Basic.Link;
  logoLink?: Types.Basic.Link;
}): React.JSX.Element;
