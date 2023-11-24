import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./StickyFeature.module.css";

export function StickyFeature({ as: _Component = _Builtin.Section }) {
  return (
    <_Component
      className={_utils.cx(_styles, "sticky-feature")}
      grid={{
        type: "section",
      }}
      tag="section"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "sticky-container")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "sticky-image-wrapper")}
          tag="div"
        >
          <_Builtin.Image
            className={_utils.cx(_styles, "sticky-image")}
            loading="eager"
            width="auto"
            height="auto"
            alt="ZWP 2019 Designpreis Zahnärztliche Gemeinschaftspraxis Ladar Dr. Desirée Ladar, Dr. Emil Ladar, Freudenstadt"
            src="https://uploads-ssl.webflow.com/65459ab6440c1238e7ede277/6549b625f6f2d8dee1e293d9_designpreis-2019.jpg"
          />
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "about-description-container", "nopad")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "description-item")}
            tag="div"
          >
            <_Builtin.Image
              className={_utils.cx(_styles, "zwp-logo")}
              loading="lazy"
              width="277.5"
              height="auto"
              alt="ZWP-Logo"
              src="https://uploads-ssl.webflow.com/65459ab6440c1238e7ede277/6549b626f6f2d8dee1e293df_zwp-logo.webp"
            />
            <_Builtin.Block
              className={_utils.cx(_styles, "description-item-header")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "description-header-text")}
                tag="div"
              >
                {"2019 Designpreis"}
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "description-item-paragraph",
                "narrow",
                "is-mobile-leftaligned"
              )}
              tag="div"
            >
              <_Builtin.Heading
                className={_utils.cx(_styles, "award-subheading")}
                tag="h2"
              >
                {
                  "Zahnärztliche Gemeinschaftspraxis Ladar Dr. Desirée Ladar, Dr. Emil Ladar, Freudenstadt"
                }
              </_Builtin.Heading>
              <_Builtin.Paragraph
                className={_utils.cx(_styles, "paragraph", "p-mb")}
              >
                {
                  "Wer mit dem Schwarzwald lediglich Bäume und Bollenhüte verbindet, wird durch die Gemeinschaftspraxis Ladar in Freudenstadt seinen Horizont erweitert sehen. "
                }
                <br />
              </_Builtin.Paragraph>
              <_Builtin.Paragraph
                className={_utils.cx(_styles, "paragraph", "p-mb")}
              >
                {
                  "Das kühn-kühle Gebäude nahe desBahnhofes wurde speziell konzipiert, um eine auf die Bedürfnisse der Arbeitswelt maßgeschneiderte Umgebung zu schaffen. "
                }
              </_Builtin.Paragraph>
              <_Builtin.Paragraph
                className={_utils.cx(_styles, "paragraph", "p-mb")}
              >
                {
                  "Die Architekten des Büros W:Architekten (Freudenstadt) übernahmen neben dem Gebäude selbst auch diePlanung der Praxis von Dr. Desirée und Dr. Emil Ladar."
                }
              </_Builtin.Paragraph>
              <_Builtin.Paragraph
                className={_utils.cx(_styles, "paragraph", "p-mb")}
              >
                {
                  "Hier stehen dreiwichtige Aspekte im Vordergrund: Wohlfühlambiente, Funktionalität und Form. Dementsprechend wurden für die mondän elegante Praxis zwei Farbweltendefiniert: Die beruhigenden Töne Beige, Taupe, Metallic-Roségold undDunkelbraun im Empfangsbereich und im Wartezimmer zum einen erwecken den Eindruck einer Lounge, wie man sie auch in New York oder London finden könnte. "
                }
              </_Builtin.Paragraph>
              <_Builtin.Paragraph className={_utils.cx(_styles, "paragraph")}>
                {
                  "Als besonderes Highlight gestaltet sich hier das handgefertigte 3D-Kunstwerkhinter dem markanten Tresen, wofür echte Lotusblätter einzeln zu einemflüssigen Unikat bearbeitet wurden. "
                }
              </_Builtin.Paragraph>
              <_Builtin.Paragraph className={_utils.cx(_styles, "paragraph")}>
                {
                  "Zum anderen sorgen Weißtöne in den Behandlungszimmern, dem Büro und im Personalraum für eine helle, freundliche und saubere Umgebung. Die Architekten dieser Praxis vollbrachten es inFreudenstadt, Funktionalität und Form einer eleganten Wohlfühlatmosphäre beizuordnen – ganz ohne Bäume und Bollenhüte."
                }
              </_Builtin.Paragraph>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
