import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./CustomFeatureLeft.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-21":{"id":"e-21","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-18","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-44"}},"mediaQueries":["main"],"target":{"selector":".menu-link","originalId":"b919e661-8b51-a329-cf4d-3b80ef57b749","appliesTo":"CLASS"},"targets":[{"selector":".menu-link","originalId":"b919e661-8b51-a329-cf4d-3b80ef57b749","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1643709888541},"e-44":{"id":"e-44","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-16","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-21"}},"mediaQueries":["main"],"target":{"selector":".menu-link","originalId":"b919e661-8b51-a329-cf4d-3b80ef57b749","appliesTo":"CLASS"},"targets":[{"selector":".menu-link","originalId":"b919e661-8b51-a329-cf4d-3b80ef57b749","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1643709888542},"e-30":{"id":"e-30","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-18","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-25"}},"mediaQueries":["main"],"target":{"id":"26c375eb-323e-4426-fbae-ad28d9471526","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"26c375eb-323e-4426-fbae-ad28d9471526","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1699328746120},"e-31":{"id":"e-31","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-18","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-42"}},"mediaQueries":["main"],"target":{"id":"26c375eb-323e-4426-fbae-ad28d9471538","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"26c375eb-323e-4426-fbae-ad28d9471538","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1699328746120},"e-46":{"id":"e-46","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-18","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-32"}},"mediaQueries":["main"],"target":{"id":"26c375eb-323e-4426-fbae-ad28d947154a","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"26c375eb-323e-4426-fbae-ad28d947154a","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1699328746120},"e-39":{"id":"e-39","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-18","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-40"}},"mediaQueries":["main"],"target":{"selector":".menu-link","originalId":"26c375eb-323e-4426-fbae-ad28d9471514","appliesTo":"CLASS"},"targets":[{"selector":".menu-link","originalId":"26c375eb-323e-4426-fbae-ad28d9471514","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1699328746120},"e-40":{"id":"e-40","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-16","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-39"}},"mediaQueries":["main"],"target":{"selector":".menu-link","originalId":"26c375eb-323e-4426-fbae-ad28d9471514","appliesTo":"CLASS"},"targets":[{"selector":".menu-link","originalId":"26c375eb-323e-4426-fbae-ad28d9471514","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1699328746120},"e-22":{"id":"e-22","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-18","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-24"}},"mediaQueries":["main"],"target":{"id":"26c375eb-323e-4426-fbae-ad28d9471541","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"26c375eb-323e-4426-fbae-ad28d9471541","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1699328746120},"e-20":{"id":"e-20","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-18","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-33"}},"mediaQueries":["main"],"target":{"id":"26c375eb-323e-4426-fbae-ad28d947152f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"26c375eb-323e-4426-fbae-ad28d947152f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1699328746120}},"actionLists":{"a-18":{"id":"a-18","title":"Manu Link Hover In 2","actionItemGroups":[{"actionItems":[{"id":"a-18-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".menu-background-image","selectorGuids":["9d015204-d92e-e364-97e5-1f0713b8325e"]},"value":0,"unit":""}},{"id":"a-18-n-2","actionTypeId":"STYLE_FILTER","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".image.for-menu","selectorGuids":["7351f457-bfa6-abe4-ae61-86758a6dcb48","9d015204-d92e-e364-97e5-1f0713b8326b"]},"filters":[{"type":"saturate","filterId":"c1af","value":99,"unit":"%"}]}},{"id":"a-18-n-3","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".menu-number-text","selectorGuids":["9d015204-d92e-e364-97e5-1f0713b8325f"]},"globalSwatchId":"","rValue":255,"bValue":255,"gValue":255,"aValue":0.5}},{"id":"a-18-n-4","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".big-text.for-menu","selectorGuids":["9d015204-d92e-e364-97e5-1f0713b83266","9d015204-d92e-e364-97e5-1f0713b8326a"]},"globalSwatchId":"","rValue":255,"bValue":255,"gValue":255,"aValue":0.5}}]},{"actionItems":[{"id":"a-18-n-5","actionTypeId":"STYLE_FILTER","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".image.for-menu","selectorGuids":["7351f457-bfa6-abe4-ae61-86758a6dcb48","9d015204-d92e-e364-97e5-1f0713b8326b"]},"filters":[{"type":"saturate","filterId":"6ab0","value":99,"unit":"%"}]}}]},{"actionItems":[{"id":"a-18-n-6","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":1000,"target":{"useEventTarget":"CHILDREN","selector":".menu-background-image","selectorGuids":["9d015204-d92e-e364-97e5-1f0713b8325e"]},"value":1,"unit":""}},{"id":"a-18-n-7","actionTypeId":"STYLE_FILTER","config":{"delay":0,"easing":"ease","duration":30000,"target":{"useEventTarget":"CHILDREN","selector":".image.for-menu","selectorGuids":["7351f457-bfa6-abe4-ae61-86758a6dcb48","9d015204-d92e-e364-97e5-1f0713b8326b"]},"filters":[{"type":"saturate","filterId":"813e","value":99,"unit":"%"}]}},{"id":"a-18-n-8","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"ease","duration":1000,"target":{"useEventTarget":"CHILDREN","selector":".menu-number-text","selectorGuids":["9d015204-d92e-e364-97e5-1f0713b8325f"]},"globalSwatchId":"","rValue":255,"bValue":255,"gValue":255,"aValue":1}},{"id":"a-18-n-9","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"ease","duration":1000,"target":{"useEventTarget":"CHILDREN","selector":".big-text.for-menu","selectorGuids":["9d015204-d92e-e364-97e5-1f0713b83266","9d015204-d92e-e364-97e5-1f0713b8326a"]},"globalSwatchId":"","rValue":255,"bValue":255,"gValue":255,"aValue":1}}]}],"useFirstGroupAsInitialState":true,"createdOn":1643709900825},"a-16":{"id":"a-16","title":"Manu Link Hover Out","actionItemGroups":[{"actionItems":[{"id":"a-16-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":1000,"target":{"useEventTarget":"CHILDREN","selector":".menu-background-image","selectorGuids":["9d015204-d92e-e364-97e5-1f0713b8325e"]},"value":0,"unit":""}},{"id":"a-16-n-2","actionTypeId":"STYLE_FILTER","config":{"delay":0,"easing":"ease","duration":1000,"target":{"useEventTarget":"CHILDREN","selector":".image.for-menu","selectorGuids":["7351f457-bfa6-abe4-ae61-86758a6dcb48","9d015204-d92e-e364-97e5-1f0713b8326b"]},"filters":[{"type":"saturate","filterId":"83b1","value":0,"unit":"%"}]}},{"id":"a-16-n-3","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"ease","duration":1000,"target":{"useEventTarget":"CHILDREN","selector":".menu-number-text","selectorGuids":["9d015204-d92e-e364-97e5-1f0713b8325f"]},"globalSwatchId":"","rValue":255,"bValue":255,"gValue":255,"aValue":0.5}},{"id":"a-16-n-4","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"ease","duration":1000,"target":{"useEventTarget":"CHILDREN","selector":".big-text.for-menu","selectorGuids":["9d015204-d92e-e364-97e5-1f0713b83266","9d015204-d92e-e364-97e5-1f0713b8326a"]},"globalSwatchId":"","rValue":255,"bValue":255,"gValue":255,"aValue":0.5}}]}],"useFirstGroupAsInitialState":false,"createdOn":1643709900825}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function CustomFeatureLeft({ as: _Component = _Builtin.Section }) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "hero", "for-about", "extrapadbotmobile")}
      grid={{
        type: "section",
      }}
      tag="div"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "wide-container", "about-hero")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "hero-container", "separate", "nopad")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(
              _styles,
              "about-hero-content",
              "grid",
              "revers"
            )}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "about-description-container",
                "is-nopad-tablet",
                "is-full-w-mobile"
              )}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "description-item")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "heading-style-h4")}
                  tag="div"
                >
                  {
                    "Ihr Vertrauen ist die Basis für eine erfolgreiche Behandlung"
                  }
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "spacer-xsmall")}
                  tag="div"
                />
                <_Builtin.Paragraph className={_utils.cx(_styles, "paragraph")}>
                  {
                    "Wir nehmen uns Zeit um Ihre Wünsche und Vorstellungen bezüglich Ihrer Behandlung gemeinsam mit Ihnen zu erarbeiten."
                  }
                  <br />
                </_Builtin.Paragraph>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "spacer-small")}
                tag="div"
              />
              <_Builtin.Block
                className={_utils.cx(_styles, "description-item")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "description-header-text",
                    "aboutsectioin",
                    "smaller"
                  )}
                  tag="div"
                >
                  <_Builtin.Strong
                    className={_utils.cx(_styles, "heading-style-h4")}
                  >
                    {"Modernste Praxisausstattung"}
                  </_Builtin.Strong>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "spacer-xsmall")}
                  tag="div"
                />
                <_Builtin.Paragraph className={_utils.cx(_styles, "paragraph")}>
                  {
                    "Unsere Praxisräume sind mit der modernsten Technik ausgestattet, damit die Behandlung für Sie so angenehm wie möglich ablaufen kann."
                  }
                </_Builtin.Paragraph>
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "image-wrapper")}
              tag="div"
            >
              <_Builtin.Image
                className={_utils.cx(_styles, "image", "sidebyside")}
                loading="eager"
                width="auto"
                height="auto"
                alt="Dr. Sandra Duma und Dr. Tobias Pfeifer"
                src="https://uploads-ssl.webflow.com/65459ab6440c1238e7ede277/6549b5f175a83233bd001c3f_3L9A3226.jpg"
              />
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
