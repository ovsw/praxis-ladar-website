"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";

const _interactionsData = JSON.parse(
  '{"events":{"e-223":{"id":"e-223","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-94","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-224"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"91a145ac-e242-bc72-7766-ba394afbbff0","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"91a145ac-e242-bc72-7766-ba394afbbff0","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":100,"scrollOffsetUnit":"PX","delay":null,"direction":null,"effectIn":null},"createdOn":1700998364511},"e-225":{"id":"e-225","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-94","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-226"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"066e04f2-d703-41ca-aadc-e7b695960abd","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"066e04f2-d703-41ca-aadc-e7b695960abd","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":100,"scrollOffsetUnit":"PX","delay":null,"direction":null,"effectIn":null},"createdOn":1700998364511}},"actionLists":{"a-94":{"id":"a-94","title":"Benefit Animation - Mobile 3","actionItemGroups":[{"actionItems":[{"id":"a-94-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".wrapper","selectorGuids":["f1c8cca2-621b-c90d-7e8e-338e7f452f1b"]},"xValue":-130,"xUnit":"%","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"id":"a-94-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".wrapper","selectorGuids":["f1c8cca2-621b-c90d-7e8e-338e7f452f1b"]},"xValue":-130,"xUnit":"%","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"id":"a-94-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":1000,"target":{"useEventTarget":"CHILDREN","selector":".wrapper","selectorGuids":["f1c8cca2-621b-c90d-7e8e-338e7f452f1b"]},"xValue":0,"xUnit":"%","yUnit":"PX","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1643199295867}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function BehandlungItemMobile({
  as: _Component = _Builtin.Block,
  text = "Service Name",

  link = {
    href: "#",
  },
}) {
  _interactions.useInteractions(_interactionsData);

  return (
    <_Component
      className="benefit-mobile smaller-margin"
      data-w-id="066e04f2-d703-41ca-aadc-e7b695960abd"
      tag="div"
    >
      <_Builtin.Block className="wrapper horizontal align-center" tag="div">
        <_Builtin.Block className="benefit-line-mobile" tag="div">
          <_Builtin.Block className="benefit-horizontal-line" tag="div" />
          <_Builtin.Block className="benefit-circle" tag="div" />
        </_Builtin.Block>
        <_Builtin.Link
          className="experience-wrapper"
          button={false}
          block="inline"
          options={link}
        >
          <_Builtin.Block className="animation-item-text" tag="div">
            {text}
          </_Builtin.Block>
        </_Builtin.Link>
      </_Builtin.Block>
    </_Component>
  );
}
