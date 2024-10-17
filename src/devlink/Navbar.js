"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import { CtaButton } from "./CtaButton";

const _interactionsData = JSON.parse(
  '{"events":{"e-16":{"id":"e-16","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-11","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-15"}},"mediaQueries":["main"],"target":{"selector":".navbar-logo-container","originalId":"79a57036-0792-5d21-37c0-6f0e45ed6a76","appliesTo":"CLASS"},"targets":[{"selector":".navbar-logo-container","originalId":"79a57036-0792-5d21-37c0-6f0e45ed6a76","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1644904376758},"e-15":{"id":"e-15","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-12","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-16"}},"mediaQueries":["main"],"target":{"selector":".navbar-logo-container","originalId":"79a57036-0792-5d21-37c0-6f0e45ed6a76","appliesTo":"CLASS"},"targets":[{"selector":".navbar-logo-container","originalId":"79a57036-0792-5d21-37c0-6f0e45ed6a76","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1644904376761},"e-17":{"id":"e-17","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-11","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-199"}},"mediaQueries":["main"],"target":{"selector":".navbar-logo-container","originalId":"96701deb-006f-0be5-1c6e-2944fcce420e","appliesTo":"CLASS"},"targets":[{"selector":".navbar-logo-container","originalId":"96701deb-006f-0be5-1c6e-2944fcce420e","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1699328732532},"e-9":{"id":"e-9","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-12","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-62"}},"mediaQueries":["main"],"target":{"selector":".navbar-logo-container","originalId":"96701deb-006f-0be5-1c6e-2944fcce420e","appliesTo":"CLASS"},"targets":[{"selector":".navbar-logo-container","originalId":"96701deb-006f-0be5-1c6e-2944fcce420e","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1699328732532},"e-18":{"id":"e-18","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-11","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-10"}},"mediaQueries":["main"],"target":{"selector":".menu-button","originalId":"79a57036-0792-5d21-37c0-6f0e45ed6a79","appliesTo":"CLASS"},"targets":[{"selector":".menu-button","originalId":"79a57036-0792-5d21-37c0-6f0e45ed6a79","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1644904418212},"e-10":{"id":"e-10","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-12","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-67"}},"mediaQueries":["main"],"target":{"selector":".menu-button","originalId":"79a57036-0792-5d21-37c0-6f0e45ed6a79","appliesTo":"CLASS"},"targets":[{"selector":".menu-button","originalId":"79a57036-0792-5d21-37c0-6f0e45ed6a79","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1644904418214},"e-7":{"id":"e-7","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-13","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-8"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"96701deb-006f-0be5-1c6e-2944fcce4211","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"96701deb-006f-0be5-1c6e-2944fcce4211","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1699328732532},"e-14":{"id":"e-14","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-14","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-64"}},"mediaQueries":["main"],"target":{"id":"96701deb-006f-0be5-1c6e-2944fcce4211","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"96701deb-006f-0be5-1c6e-2944fcce4211","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1699328732532},"e-13":{"id":"e-13","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-15","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-65"}},"mediaQueries":["main"],"target":{"id":"96701deb-006f-0be5-1c6e-2944fcce4211","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"96701deb-006f-0be5-1c6e-2944fcce4211","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1699328732532},"e-11":{"id":"e-11","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-11","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-201"}},"mediaQueries":["main"],"target":{"selector":".menu-button","originalId":"96701deb-006f-0be5-1c6e-2944fcce4211","appliesTo":"CLASS"},"targets":[{"selector":".menu-button","originalId":"96701deb-006f-0be5-1c6e-2944fcce4211","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1699328732532},"e-12":{"id":"e-12","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-12","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-61"}},"mediaQueries":["main"],"target":{"selector":".menu-button","originalId":"96701deb-006f-0be5-1c6e-2944fcce4211","appliesTo":"CLASS"},"targets":[{"selector":".menu-button","originalId":"96701deb-006f-0be5-1c6e-2944fcce4211","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1699328732532},"e-29":{"id":"e-29","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-14","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-26"}},"mediaQueries":["main"],"target":{"id":"26c375eb-323e-4426-fbae-ad28d947150e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"26c375eb-323e-4426-fbae-ad28d947150e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1699328746120},"e-26":{"id":"e-26","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-15","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-29"}},"mediaQueries":["main"],"target":{"id":"26c375eb-323e-4426-fbae-ad28d947150e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"26c375eb-323e-4426-fbae-ad28d947150e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1699328746120}},"actionLists":{"a-11":{"id":"a-11","title":"Cursor - Hover In","actionItemGroups":[{"actionItems":[{"id":"a-11-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{},"widthValue":25,"heightValue":25,"widthUnit":"px","heightUnit":"px","locked":false}}]},{"actionItems":[{"id":"a-11-n-2","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":400,"target":{},"widthValue":75,"heightValue":75,"widthUnit":"px","heightUnit":"px","locked":false}}]}],"useFirstGroupAsInitialState":true,"createdOn":1644847102447},"a-12":{"id":"a-12","title":"Cursor - Hover Out","actionItemGroups":[{"actionItems":[{"id":"a-12-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":400,"target":{},"widthValue":25,"heightValue":25,"widthUnit":"px","heightUnit":"px","locked":false}}]}],"useFirstGroupAsInitialState":false,"createdOn":1644847102447},"a-13":{"id":"a-13","title":"Open Menu 2","actionItemGroups":[{"actionItems":[{"id":"a-13-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".menu","selectorGuids":["9d015204-d92e-e364-97e5-1f0713b83262"]},"value":0,"unit":""}},{"id":"a-13-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".menu","selectorGuids":["9d015204-d92e-e364-97e5-1f0713b83262"]},"value":"none"}}]},{"actionItems":[{"id":"a-13-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".menu","selectorGuids":["9d015204-d92e-e364-97e5-1f0713b83262"]},"value":"block"}}]},{"actionItems":[{"id":"a-13-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":500,"target":{"selector":".menu","selectorGuids":["9d015204-d92e-e364-97e5-1f0713b83262"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1643710275298},"a-14":{"id":"a-14","title":"Menu Icon - Hover In 2","actionItemGroups":[{"actionItems":[{"id":"a-14-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".bottom-menu-line","selectorGuids":["57985817-075c-07f9-e1b8-554c9d176f33"]},"widthValue":56,"widthUnit":"%","heightUnit":"PX","locked":false}}]},{"actionItems":[{"id":"a-14-n-2","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".bottom-menu-line","selectorGuids":["57985817-075c-07f9-e1b8-554c9d176f33"]},"widthValue":100,"widthUnit":"%","heightUnit":"PX","locked":false}}]}],"useFirstGroupAsInitialState":true,"createdOn":1644572646150},"a-15":{"id":"a-15","title":"Menu Icon - Hover Out 2","actionItemGroups":[{"actionItems":[{"id":"a-15-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".bottom-menu-line","selectorGuids":["57985817-075c-07f9-e1b8-554c9d176f33"]},"widthValue":56,"widthUnit":"%","heightUnit":"PX","locked":false}}]}],"useFirstGroupAsInitialState":false,"createdOn":1644572646150}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function Navbar({
  as: _Component = _Builtin.Block,
  terminRuntimeProps = {},
  ctaButton,
}) {
  _interactions.useInteractions(_interactionsData);

  return (
    <_Component
      className="navbar"
      tag="nav"
      bind="79a57036-0792-5d21-37c0-6f0e45ed6a74"
    >
      <_Builtin.Block className="navbar-inner" tag="div">
        <_Builtin.Block className="navbar-logo-text absolute" tag="div">
          {"Ladar"}
        </_Builtin.Block>
        <_Builtin.Link
          className="navbar-logo-container is-empty"
          button={false}
          block="inline"
          options={{
            href: "#",
          }}
        />
        <_Builtin.Block className="nav-right-container" tag="div">
          <_Builtin.Block tag="div">
            {ctaButton ?? <CtaButton />}
          </_Builtin.Block>
          <_Builtin.Block
            className="menu-button"
            data-w-id="96701deb-006f-0be5-1c6e-2944fcce4211"
            tag="div"
          >
            <_Builtin.Block className="menu-text" tag="div">
              {"Menü"}
            </_Builtin.Block>
            <_Builtin.Block className="top-menu-line" tag="div" />
            <_Builtin.Block className="bottom-menu-line" tag="div" />
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
