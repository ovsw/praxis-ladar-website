"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";

const _interactionsData = JSON.parse(
  '{"events":{"e-61":{"id":"e-61","name":"","animationType":"custom","eventTypeId":"SCROLLING_IN_VIEW","action":{"id":"","actionTypeId":"GENERAL_CONTINUOUS_ACTION","config":{"actionListId":"a-8","affectedElements":{},"duration":0}},"mediaQueries":["medium","small","tiny"],"target":{"id":"f250a8c2-4623-3422-2031-e6565be05961","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"f250a8c2-4623-3422-2031-e6565be05961","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":[{"continuousParameterGroupId":"a-8-p","smoothing":97,"startsEntering":true,"addStartOffset":false,"addOffsetValue":50,"startsExiting":false,"addEndOffset":false,"endOffsetValue":50}],"createdOn":1643198571656},"e-85":{"id":"e-85","name":"","animationType":"preset","eventTypeId":"SCROLLING_IN_VIEW","action":{"id":"","actionTypeId":"GENERAL_CONTINUOUS_ACTION","config":{"actionListId":"a-8","affectedElements":{},"duration":0}},"mediaQueries":["medium","small","tiny"],"target":{"id":"013f7e94-4b70-18d2-b906-f2ba4590e224","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"013f7e94-4b70-18d2-b906-f2ba4590e224","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":[{"continuousParameterGroupId":"a-8-p","smoothing":97,"startsEntering":true,"addStartOffset":false,"addOffsetValue":50,"startsExiting":false,"addEndOffset":false,"endOffsetValue":50}],"createdOn":1699328831391},"e-104":{"id":"e-104","name":"","animationType":"preset","eventTypeId":"SCROLLING_IN_VIEW","action":{"id":"","actionTypeId":"GENERAL_CONTINUOUS_ACTION","config":{"actionListId":"a-8","affectedElements":{},"duration":0}},"mediaQueries":["medium","small","tiny"],"target":{"id":"27dca5d1-39cf-2acf-347f-fad09d94a805","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"27dca5d1-39cf-2acf-347f-fad09d94a805","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":[{"continuousParameterGroupId":"a-8-p","smoothing":97,"startsEntering":true,"addStartOffset":false,"addOffsetValue":50,"startsExiting":false,"addEndOffset":false,"endOffsetValue":50}],"createdOn":1643781860203},"e-105":{"id":"e-105","name":"","animationType":"custom","eventTypeId":"SCROLLING_IN_VIEW","action":{"id":"","actionTypeId":"GENERAL_CONTINUOUS_ACTION","config":{"actionListId":"a-41","affectedElements":{},"duration":0}},"mediaQueries":["main"],"target":{"id":"27dca5d1-39cf-2acf-347f-fad09d94a805","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"27dca5d1-39cf-2acf-347f-fad09d94a805","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":[{"continuousParameterGroupId":"a-41-p","smoothing":97,"startsEntering":true,"addStartOffset":false,"addOffsetValue":50,"startsExiting":false,"addEndOffset":false,"endOffsetValue":50}],"createdOn":1643874377808},"e-106":{"id":"e-106","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-42","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-107"}},"mediaQueries":["main"],"target":{"selector":".experience","originalId":"27dca5d1-39cf-2acf-347f-fad09d94a807","appliesTo":"CLASS"},"targets":[{"selector":".experience","originalId":"27dca5d1-39cf-2acf-347f-fad09d94a807","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":40,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1644842857446},"e-108":{"id":"e-108","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-42","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-109"}},"mediaQueries":["medium","small","tiny"],"target":{"selector":".experience","originalId":"27dca5d1-39cf-2acf-347f-fad09d94a819","appliesTo":"CLASS"},"targets":[{"selector":".experience","originalId":"27dca5d1-39cf-2acf-347f-fad09d94a819","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":12,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1644843559351},"e-112":{"id":"e-112","name":"","animationType":"preset","eventTypeId":"SCROLLING_IN_VIEW","action":{"id":"","actionTypeId":"GENERAL_CONTINUOUS_ACTION","config":{"actionListId":"a-8","affectedElements":{},"duration":0}},"mediaQueries":["medium","small","tiny"],"target":{"id":"2a005cce-7eaa-9ba1-36f4-b6983aa3230b","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"2a005cce-7eaa-9ba1-36f4-b6983aa3230b","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":[{"continuousParameterGroupId":"a-8-p","smoothing":97,"startsEntering":true,"addStartOffset":false,"addOffsetValue":50,"startsExiting":false,"addEndOffset":false,"endOffsetValue":50}],"createdOn":1695305102224},"e-137":{"id":"e-137","name":"","animationType":"preset","eventTypeId":"SCROLLING_IN_VIEW","action":{"id":"","actionTypeId":"GENERAL_CONTINUOUS_ACTION","config":{"actionListId":"a-8","affectedElements":{},"duration":0}},"mediaQueries":["medium","small","tiny"],"target":{"id":"6b9b8ac9-ef5a-61a2-e885-94ae5d8f217d","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6b9b8ac9-ef5a-61a2-e885-94ae5d8f217d","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":[{"continuousParameterGroupId":"a-8-p","smoothing":97,"startsEntering":true,"addStartOffset":false,"addOffsetValue":50,"startsExiting":false,"addEndOffset":false,"endOffsetValue":50}],"createdOn":1644484686898},"e-152":{"id":"e-152","name":"","animationType":"preset","eventTypeId":"SCROLLING_IN_VIEW","action":{"id":"","actionTypeId":"GENERAL_CONTINUOUS_ACTION","config":{"actionListId":"a-50","affectedElements":{},"duration":0}},"mediaQueries":["main"],"target":{"id":"2cb65f63-aefa-4c3e-a7f4-419383c67240","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"2cb65f63-aefa-4c3e-a7f4-419383c67240","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":[{"continuousParameterGroupId":"a-50-p","smoothing":97,"startsEntering":true,"addStartOffset":false,"addOffsetValue":50,"startsExiting":false,"addEndOffset":false,"endOffsetValue":50}],"createdOn":1699343805463},"e-153":{"id":"e-153","name":"","animationType":"preset","eventTypeId":"SCROLLING_IN_VIEW","action":{"id":"","actionTypeId":"GENERAL_CONTINUOUS_ACTION","config":{"actionListId":"a-51","affectedElements":{},"duration":0}},"mediaQueries":["medium","small","tiny"],"target":{"id":"2cb65f63-aefa-4c3e-a7f4-419383c67247","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"2cb65f63-aefa-4c3e-a7f4-419383c67247","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":[{"continuousParameterGroupId":"a-51-p","smoothing":97,"startsEntering":true,"addStartOffset":false,"addOffsetValue":50,"startsExiting":false,"addEndOffset":false,"endOffsetValue":50}],"createdOn":1699343805463},"e-222":{"id":"e-222","name":"","animationType":"preset","eventTypeId":"SCROLLING_IN_VIEW","action":{"id":"","actionTypeId":"GENERAL_CONTINUOUS_ACTION","config":{"actionListId":"a-93","affectedElements":{},"duration":0}},"mediaQueries":["medium","small","tiny"],"target":{"id":"5bb1e1e0-5544-9312-7458-4af4da2122bf","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"5bb1e1e0-5544-9312-7458-4af4da2122bf","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":[{"continuousParameterGroupId":"a-93-p","smoothing":97,"startsEntering":true,"addStartOffset":false,"addOffsetValue":50,"startsExiting":false,"addEndOffset":false,"endOffsetValue":50}],"createdOn":1700998569578}},"actionLists":{"a-8":{"id":"a-8","title":"Section Name Parallax - Mobile 3","continuousParameterGroups":[{"id":"a-8-p","type":"SCROLL_PROGRESS","parameterLabel":"Scroll","continuousActionGroups":[{"keyframe":0,"actionItems":[{"id":"a-8-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"SIBLINGS","selector":".section-heading_outlined","selectorGuids":["7351f457-bfa6-abe4-ae61-86758a6dcb45"]},"xValue":-5,"xUnit":"vw","yUnit":"PX","zUnit":"PX"}}]},{"keyframe":100,"actionItems":[{"id":"a-8-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"SIBLINGS","selector":".section-heading_outlined","selectorGuids":["7351f457-bfa6-abe4-ae61-86758a6dcb45"]},"xValue":-20,"xUnit":"vw","yUnit":"PX","zUnit":"PX"}}]}]}],"createdOn":1643198589173},"a-41":{"id":"a-41","title":"Section Name Parallax - Desktop","continuousParameterGroups":[{"id":"a-41-p","type":"SCROLL_PROGRESS","parameterLabel":"Scroll","continuousActionGroups":[{"keyframe":0,"actionItems":[{"id":"a-41-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"SIBLINGS","selector":".section-heading_outlined.outlined","selectorGuids":["7351f457-bfa6-abe4-ae61-86758a6dcb45","7351f457-bfa6-abe4-ae61-86758a6dcb5c"]},"xValue":-5,"xUnit":"vw","yUnit":"PX","zUnit":"PX"}}]},{"keyframe":100,"actionItems":[{"id":"a-41-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"SIBLINGS","selector":".section-heading_outlined.outlined","selectorGuids":["7351f457-bfa6-abe4-ae61-86758a6dcb45","7351f457-bfa6-abe4-ae61-86758a6dcb5c"]},"xValue":-8,"xUnit":"vw","yUnit":"PX","zUnit":"PX"}}]}]}],"createdOn":1643874389144},"a-42":{"id":"a-42","title":"About Page - Experience Animation - Desktop","actionItemGroups":[{"actionItems":[{"id":"a-42-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".experience-number.experience-content","selectorGuids":["e77ddf85-72eb-d31a-992f-4521f68675ad","486304c8-37e6-d80d-2042-689409281097"]},"yValue":50,"zValue":-2,"xUnit":"PX","yUnit":"%","zUnit":"vw"}},{"id":"a-42-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".experience-number.experience-content","selectorGuids":["e77ddf85-72eb-d31a-992f-4521f68675ad","486304c8-37e6-d80d-2042-689409281097"]},"value":0,"unit":""}},{"id":"a-42-n-3","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".experience-number.experience-content","selectorGuids":["e77ddf85-72eb-d31a-992f-4521f68675ad","486304c8-37e6-d80d-2042-689409281097"]},"xValue":-90,"xUnit":"deg","yUnit":"DEG","zUnit":"DEG"}},{"id":"a-42-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".infinite-image-wrapper","selectorGuids":["486304c8-37e6-d80d-2042-68940928108f"]},"yValue":50,"zValue":-2,"xUnit":"PX","yUnit":"%","zUnit":"vw"}},{"id":"a-42-n-5","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".infinite-image-wrapper","selectorGuids":["486304c8-37e6-d80d-2042-68940928108f"]},"xValue":-90,"xUnit":"deg","yUnit":"DEG","zUnit":"DEG"}},{"id":"a-42-n-6","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".infinite-image-wrapper","selectorGuids":["486304c8-37e6-d80d-2042-68940928108f"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-42-n-7","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outCubic","duration":1250,"target":{"useEventTarget":"CHILDREN","selector":".experience-number.experience-content","selectorGuids":["e77ddf85-72eb-d31a-992f-4521f68675ad","486304c8-37e6-d80d-2042-689409281097"]},"yValue":0,"zValue":0,"xUnit":"PX","yUnit":"%","zUnit":"vw"}},{"id":"a-42-n-8","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".experience-number.experience-content","selectorGuids":["e77ddf85-72eb-d31a-992f-4521f68675ad","486304c8-37e6-d80d-2042-689409281097"]},"value":1,"unit":""}},{"id":"a-42-n-9","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"outCubic","duration":1250,"target":{"useEventTarget":"CHILDREN","selector":".experience-number.experience-content","selectorGuids":["e77ddf85-72eb-d31a-992f-4521f68675ad","486304c8-37e6-d80d-2042-689409281097"]},"xValue":0,"xUnit":"deg","yUnit":"DEG","zUnit":"DEG"}},{"id":"a-42-n-10","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outCubic","duration":1250,"target":{"useEventTarget":"CHILDREN","selector":".infinite-image-wrapper","selectorGuids":["486304c8-37e6-d80d-2042-68940928108f"]},"yValue":0,"zValue":0,"xUnit":"PX","yUnit":"%","zUnit":"vw"}},{"id":"a-42-n-11","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"outCubic","duration":1250,"target":{"useEventTarget":"CHILDREN","selector":".infinite-image-wrapper","selectorGuids":["486304c8-37e6-d80d-2042-68940928108f"]},"xValue":0,"xUnit":"deg","yUnit":"DEG","zUnit":"DEG"}},{"id":"a-42-n-12","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".infinite-image-wrapper","selectorGuids":["486304c8-37e6-d80d-2042-68940928108f"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1644842865953},"a-50":{"id":"a-50","title":"Ambiente Section Name Paralax 3","continuousParameterGroups":[{"id":"a-50-p","type":"SCROLL_PROGRESS","parameterLabel":"Scroll","continuousActionGroups":[{"keyframe":2,"actionItems":[{"id":"a-50-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".section-heading_outlined.outlined-white","selectorGuids":["7351f457-bfa6-abe4-ae61-86758a6dcb45","f03229e9-ced0-5e53-9414-ab827dc0ed65"]},"xValue":-10,"xUnit":"vw","yUnit":"PX","zUnit":"PX"}}]},{"keyframe":100,"actionItems":[{"id":"a-50-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".section-heading_outlined.outlined-white","selectorGuids":["7351f457-bfa6-abe4-ae61-86758a6dcb45","f03229e9-ced0-5e53-9414-ab827dc0ed65"]},"xValue":40,"xUnit":"vw","yUnit":"PX","zUnit":"PX"}}]}]}],"createdOn":1643198589173},"a-51":{"id":"a-51","title":"Section Name Parallax - Mobile 5","continuousParameterGroups":[{"id":"a-51-p","type":"SCROLL_PROGRESS","parameterLabel":"Scroll","continuousActionGroups":[{"keyframe":0,"actionItems":[{"id":"a-51-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"SIBLINGS","selector":".section-heading_outlined","selectorGuids":["7351f457-bfa6-abe4-ae61-86758a6dcb45"]},"xValue":-5,"xUnit":"vw","yUnit":"PX","zUnit":"PX"}}]},{"keyframe":100,"actionItems":[{"id":"a-51-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"SIBLINGS","selector":".section-heading_outlined","selectorGuids":["7351f457-bfa6-abe4-ae61-86758a6dcb45"]},"xValue":-20,"xUnit":"vw","yUnit":"PX","zUnit":"PX"}}]}]}],"createdOn":1643198589173},"a-93":{"id":"a-93","title":"Section Name Parallax - Mobile 8","continuousParameterGroups":[{"id":"a-93-p","type":"SCROLL_PROGRESS","parameterLabel":"Scroll","continuousActionGroups":[{"keyframe":0,"actionItems":[{"id":"a-93-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"SIBLINGS","selector":".section-heading_outlined","selectorGuids":["7351f457-bfa6-abe4-ae61-86758a6dcb45"]},"xValue":-5,"xUnit":"vw","yUnit":"PX","zUnit":"PX"}}]},{"keyframe":100,"actionItems":[{"id":"a-93-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"SIBLINGS","selector":".section-heading_outlined","selectorGuids":["7351f457-bfa6-abe4-ae61-86758a6dcb45"]},"xValue":-20,"xUnit":"vw","yUnit":"PX","zUnit":"PX"}}]}]}],"createdOn":1643198589173}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function Statistics({ as: _Component = _Builtin.Section }) {
  _interactions.useInteractions(_interactionsData);

  return (
    <_Component
      grid={{
        type: "section",
      }}
      tag="div"
    >
      <_Builtin.Block
        className="padding-global background-color-brand-2"
        tag="div"
      >
        <_Builtin.Block className="container-large" tag="div">
          <_Builtin.Block className="padding-section-medium" tag="div">
            <_Builtin.Block className="section-heading_wrapper" tag="div">
              <_Builtin.Heading className="heading-2 absolute lower" tag="h2">
                {"Erfahrung"}
              </_Builtin.Heading>
              <_Builtin.Block
                className="section-heading_outlined outlined nopadbottom"
                tag="div"
                data-outlined="dark"
              >
                {"Erfahrung"}
              </_Builtin.Block>
              <_Builtin.Block
                className="section-heading_outlined-trigger"
                data-w-id="27dca5d1-39cf-2acf-347f-fad09d94a805"
                tag="div"
              />
            </_Builtin.Block>
            <_Builtin.Block className="experience-container" tag="div">
              <_Builtin.Block className="experience" tag="div">
                <_Builtin.Block className="perspective-wrapper" tag="div">
                  <_Builtin.Block
                    className="experience-number experience-content"
                    tag="div"
                  >
                    {"24 "}
                    <_Builtin.Span
                      className="experience-content-text smaller-outline outlined"
                      data-outlined="dark thin"
                    >
                      {"Jahre Erfahrung"}
                    </_Builtin.Span>
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block className="experience padding-1" tag="div">
                <_Builtin.Block className="perspective-wrapper" tag="div">
                  <_Builtin.Block
                    className="experience-number experience-content"
                    tag="div"
                  >
                    {"1 "}
                    <_Builtin.Span
                      className="experience-content-text smaller-outline outlined"
                      data-outlined="dark thin"
                    >
                      {"Designpreis"}
                    </_Builtin.Span>
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block className="experience padding-2" tag="div">
                <_Builtin.Block className="perspective-wrapper" tag="div">
                  <_Builtin.Block
                    className="experience-number experience-content"
                    tag="div"
                  >
                    {"4 "}
                    <_Builtin.Span
                      className="experience-content-text smaller-outline outlined"
                      data-outlined="dark thin"
                    >
                      {"Experten"}
                    </_Builtin.Span>
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block className="experience padding-3" tag="div">
                <_Builtin.Block className="perspective-wrapper" tag="div">
                  <_Builtin.Block
                    className="experience-number experience-content"
                    tag="div"
                  >
                    {"12,000 "}
                    <_Builtin.Span className="experience-content-text smaller-outline outlined">
                      {"Zufriedene Kunden"}
                    </_Builtin.Span>
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block className="experience" tag="div">
                <_Builtin.Block
                  className="perspective-wrapper horizontal center"
                  tag="div"
                >
                  <_Builtin.Block className="infinite-image-wrapper" tag="div">
                    <_Builtin.Image
                      className="full-width-image"
                      loading="lazy"
                      width="auto"
                      height="auto"
                      alt=""
                      src="https://cdn.prod.website-files.com/65459ab6440c1238e7ede277/6549b60b86ec4fa694013e7f_infinite_icon.svg"
                    />
                  </_Builtin.Block>
                  <_Builtin.Block
                    className="experience-number experience-content smaller"
                    tag="div"
                  >
                    <_Builtin.Span
                      className="experience-content-text smaller-outline outlined smaller"
                      data-outlined="dark thin"
                    >
                      {"Leidenschaft für unsere Patienten"}
                    </_Builtin.Span>
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
