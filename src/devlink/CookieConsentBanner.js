import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";

const _interactionsData = JSON.parse(
  '{"events":{"e-229":{"id":"e-229","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-97","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-230"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".fs-cc-banner_trigger","originalId":"604754d4dda4d04793554a12|6394c3e2-9282-0a25-b671-2a9ad9fe232a","appliesTo":"CLASS"},"targets":[{"selector":".fs-cc-banner_trigger","originalId":"604754d4dda4d04793554a12|6394c3e2-9282-0a25-b671-2a9ad9fe232a","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1615288220024},"e-230":{"id":"e-230","name":"","animationType":"custom","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-98","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-229"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".fs-cc-banner_trigger","originalId":"604754d4dda4d04793554a12|6394c3e2-9282-0a25-b671-2a9ad9fe232a","appliesTo":"CLASS"},"targets":[{"selector":".fs-cc-banner_trigger","originalId":"604754d4dda4d04793554a12|6394c3e2-9282-0a25-b671-2a9ad9fe232a","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1615288220027}},"actionLists":{"a-97":{"id":"a-97","title":"Cookie Banner [SHOW]","actionItemGroups":[{"actionItems":[{"id":"a-97-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"PARENT","selector":".fs-cc-banner_component","selectorGuids":["a19112c2-c6aa-2272-49d1-5371eba6fc5f"]},"value":"none"}},{"id":"a-97-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"PARENT","selector":".fs-cc-banner_component","selectorGuids":["a19112c2-c6aa-2272-49d1-5371eba6fc5f"]},"yValue":100,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]},{"actionItems":[{"id":"a-97-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"PARENT","selector":".fs-cc-banner_component","selectorGuids":["a19112c2-c6aa-2272-49d1-5371eba6fc5f"]},"value":"flex"}},{"id":"a-97-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"PARENT","selector":".fs-cc-banner_component","selectorGuids":["a19112c2-c6aa-2272-49d1-5371eba6fc5f"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1615288223878},"a-98":{"id":"a-98","title":"Cookie Banner [HIDE]","actionItemGroups":[{"actionItems":[{"id":"a-98-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"PARENT","selector":".fs-cc-banner_component","selectorGuids":["a19112c2-c6aa-2272-49d1-5371eba6fc5f"]},"yValue":100,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]},{"actionItems":[{"id":"a-98-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"PARENT","selector":".fs-cc-banner_component","selectorGuids":["a19112c2-c6aa-2272-49d1-5371eba6fc5f"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1615288223878}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function CookieConsentBanner({
  as: _Component = _Builtin.Block,
  denyBtn = {},
  acceptBtn = {},

  link = {
    href: "https://www.praxis-ladar.de/datenschutz",
  },
}) {
  _interactions.useInteractions(_interactionsData);

  return (
    <_Component className="fs-cc-banner_component" tag="div">
      <_Builtin.Block className="fs-cc-banner_container" tag="div">
        <_Builtin.Block className="fs-cc-banner_text" tag="div">
          {
            "Um unsere Webseite praxis-ladar.de für Sie optimal zu gestalten und fortlaufend verbessern zu können, verwenden wir Cookies. Durch die weitere Nutzung der Webseite stimmen Sie der Verwendung von Cookies zu. Weitere Informationen zu Cookies erhalten Sie in unserer "
          }
          <_Builtin.Link
            className="fs-cc-banner_text-link"
            button={false}
            options={link}
          >
            {"Datenschutzerklärung"}
          </_Builtin.Link>
          {"."}
          {""}
        </_Builtin.Block>
        <_Builtin.Block className="fs-cc-banner_buttons-wrapper" tag="div">
          <_Builtin.Link
            className="fs-cc-banner_button fs-cc-button-alt"
            button={true}
            fs-cc="deny"
            options={{
              href: "#",
            }}
            {...denyBtn}
          >
            {"Deny"}
          </_Builtin.Link>
          <_Builtin.Link
            className="fs-cc-banner_button"
            button={true}
            fs-cc="allow"
            options={{
              href: "#",
            }}
            {...acceptBtn}
          >
            {"Ok"}
          </_Builtin.Link>
          <_Builtin.Block
            className="fs-cc-banner_close"
            tag="div"
            fs-cc="close"
          >
            <_Builtin.HtmlEmbed
              className="fs-cc-banner_close-icon"
              value="%3Csvg%20fill%3D%22currentColor%22%20aria-hidden%3D%22true%22%20focusable%3D%22false%22%20viewBox%3D%220%200%2016%2016%22%3E%0A%09%3Cpath%20d%3D%22M9.414%208l4.293-4.293-1.414-1.414L8%206.586%203.707%202.293%202.293%203.707%206.586%208l-4.293%204.293%201.414%201.414L8%209.414l4.293%204.293%201.414-1.414L9.414%208z%22%3E%3C%2Fpath%3E%0A%3C%2Fsvg%3E"
            />
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
