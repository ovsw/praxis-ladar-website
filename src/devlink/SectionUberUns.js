import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import { ButtonPrimary } from "./ButtonPrimary";
import * as _utils from "./utils";
import _styles from "./SectionUberUns.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-63":{"id":"e-63","name":"","animationType":"custom","eventTypeId":"SCROLLING_IN_VIEW","action":{"id":"","actionTypeId":"GENERAL_CONTINUOUS_ACTION","config":{"actionListId":"a-26","affectedElements":{},"duration":0}},"mediaQueries":["main"],"target":{"id":"f250a8c2-4623-3422-2031-e6565be05957","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"f250a8c2-4623-3422-2031-e6565be05957","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":[{"continuousParameterGroupId":"a-26-p","smoothing":97,"startsEntering":true,"addStartOffset":false,"addOffsetValue":50,"startsExiting":false,"addEndOffset":false,"endOffsetValue":50}],"createdOn":1643268432968},"e-59":{"id":"e-59","name":"","animationType":"custom","eventTypeId":"SCROLLING_IN_VIEW","action":{"id":"","actionTypeId":"GENERAL_CONTINUOUS_ACTION","config":{"actionListId":"a-27","affectedElements":{},"duration":0}},"mediaQueries":["main"],"target":{"id":"f250a8c2-4623-3422-2031-e6565be05957","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"f250a8c2-4623-3422-2031-e6565be05957","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":[{"continuousParameterGroupId":"a-27-p","smoothing":85,"startsEntering":true,"addStartOffset":true,"addOffsetValue":25,"startsExiting":false,"addEndOffset":true,"endOffsetValue":-50}],"createdOn":1643269659640},"e-61":{"id":"e-61","name":"","animationType":"custom","eventTypeId":"SCROLLING_IN_VIEW","action":{"id":"","actionTypeId":"GENERAL_CONTINUOUS_ACTION","config":{"actionListId":"a-8","affectedElements":{},"duration":0}},"mediaQueries":["medium","small","tiny"],"target":{"id":"f250a8c2-4623-3422-2031-e6565be05961","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"f250a8c2-4623-3422-2031-e6565be05961","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":[{"continuousParameterGroupId":"a-8-p","smoothing":97,"startsEntering":true,"addStartOffset":false,"addOffsetValue":50,"startsExiting":false,"addEndOffset":false,"endOffsetValue":50}],"createdOn":1643198571656},"e-64":{"id":"e-64","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-28","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-65"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"f250a8c2-4623-3422-2031-e6565be05963","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"f250a8c2-4623-3422-2031-e6565be05963","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":100,"scrollOffsetUnit":"PX","delay":null,"direction":null,"effectIn":null},"createdOn":1643199288177},"e-60":{"id":"e-60","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-28","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-104"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"f250a8c2-4623-3422-2031-e6565be0596d","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"f250a8c2-4623-3422-2031-e6565be0596d","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":100,"scrollOffsetUnit":"PX","delay":null,"direction":null,"effectIn":null},"createdOn":1643200660840},"e-62":{"id":"e-62","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-28","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-67"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"f250a8c2-4623-3422-2031-e6565be05977","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"f250a8c2-4623-3422-2031-e6565be05977","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":100,"scrollOffsetUnit":"PX","delay":null,"direction":null,"effectIn":null},"createdOn":1643200645373},"e-85":{"id":"e-85","name":"","animationType":"preset","eventTypeId":"SCROLLING_IN_VIEW","action":{"id":"","actionTypeId":"GENERAL_CONTINUOUS_ACTION","config":{"actionListId":"a-8","affectedElements":{},"duration":0}},"mediaQueries":["medium","small","tiny"],"target":{"id":"013f7e94-4b70-18d2-b906-f2ba4590e224","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"013f7e94-4b70-18d2-b906-f2ba4590e224","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":[{"continuousParameterGroupId":"a-8-p","smoothing":97,"startsEntering":true,"addStartOffset":false,"addOffsetValue":50,"startsExiting":false,"addEndOffset":false,"endOffsetValue":50}],"createdOn":1699328831391},"e-104":{"id":"e-104","name":"","animationType":"preset","eventTypeId":"SCROLLING_IN_VIEW","action":{"id":"","actionTypeId":"GENERAL_CONTINUOUS_ACTION","config":{"actionListId":"a-8","affectedElements":{},"duration":0}},"mediaQueries":["medium","small","tiny"],"target":{"id":"27dca5d1-39cf-2acf-347f-fad09d94a805","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"27dca5d1-39cf-2acf-347f-fad09d94a805","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":[{"continuousParameterGroupId":"a-8-p","smoothing":97,"startsEntering":true,"addStartOffset":false,"addOffsetValue":50,"startsExiting":false,"addEndOffset":false,"endOffsetValue":50}],"createdOn":1643781860203},"e-105":{"id":"e-105","name":"","animationType":"custom","eventTypeId":"SCROLLING_IN_VIEW","action":{"id":"","actionTypeId":"GENERAL_CONTINUOUS_ACTION","config":{"actionListId":"a-41","affectedElements":{},"duration":0}},"mediaQueries":["main"],"target":{"id":"27dca5d1-39cf-2acf-347f-fad09d94a805","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"27dca5d1-39cf-2acf-347f-fad09d94a805","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":[{"continuousParameterGroupId":"a-41-p","smoothing":97,"startsEntering":true,"addStartOffset":false,"addOffsetValue":50,"startsExiting":false,"addEndOffset":false,"endOffsetValue":50}],"createdOn":1643874377808},"e-106":{"id":"e-106","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-42","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-107"}},"mediaQueries":["main"],"target":{"selector":".experience","originalId":"27dca5d1-39cf-2acf-347f-fad09d94a807","appliesTo":"CLASS"},"targets":[{"selector":".experience","originalId":"27dca5d1-39cf-2acf-347f-fad09d94a807","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":40,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1644842857446},"e-108":{"id":"e-108","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-42","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-109"}},"mediaQueries":["medium","small","tiny"],"target":{"selector":".experience","originalId":"27dca5d1-39cf-2acf-347f-fad09d94a819","appliesTo":"CLASS"},"targets":[{"selector":".experience","originalId":"27dca5d1-39cf-2acf-347f-fad09d94a819","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":12,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1644843559351},"e-112":{"id":"e-112","name":"","animationType":"preset","eventTypeId":"SCROLLING_IN_VIEW","action":{"id":"","actionTypeId":"GENERAL_CONTINUOUS_ACTION","config":{"actionListId":"a-8","affectedElements":{},"duration":0}},"mediaQueries":["medium","small","tiny"],"target":{"id":"2a005cce-7eaa-9ba1-36f4-b6983aa3230b","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"2a005cce-7eaa-9ba1-36f4-b6983aa3230b","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":[{"continuousParameterGroupId":"a-8-p","smoothing":97,"startsEntering":true,"addStartOffset":false,"addOffsetValue":50,"startsExiting":false,"addEndOffset":false,"endOffsetValue":50}],"createdOn":1695305102224},"e-137":{"id":"e-137","name":"","animationType":"preset","eventTypeId":"SCROLLING_IN_VIEW","action":{"id":"","actionTypeId":"GENERAL_CONTINUOUS_ACTION","config":{"actionListId":"a-8","affectedElements":{},"duration":0}},"mediaQueries":["medium","small","tiny"],"target":{"id":"655763d7bb2251ae9b5428dc|1ca2d62a-9e6c-d58b-163f-4a0ca7370ded","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"655763d7bb2251ae9b5428dc|1ca2d62a-9e6c-d58b-163f-4a0ca7370ded","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":[{"continuousParameterGroupId":"a-8-p","smoothing":97,"startsEntering":true,"addStartOffset":false,"addOffsetValue":50,"startsExiting":false,"addEndOffset":false,"endOffsetValue":50}],"createdOn":1644484686898},"e-152":{"id":"e-152","name":"","animationType":"preset","eventTypeId":"SCROLLING_IN_VIEW","action":{"id":"","actionTypeId":"GENERAL_CONTINUOUS_ACTION","config":{"actionListId":"a-50","affectedElements":{},"duration":0}},"mediaQueries":["main"],"target":{"id":"2cb65f63-aefa-4c3e-a7f4-419383c67240","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"2cb65f63-aefa-4c3e-a7f4-419383c67240","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":[{"continuousParameterGroupId":"a-50-p","smoothing":97,"startsEntering":true,"addStartOffset":false,"addOffsetValue":50,"startsExiting":false,"addEndOffset":false,"endOffsetValue":50}],"createdOn":1699343805463},"e-153":{"id":"e-153","name":"","animationType":"preset","eventTypeId":"SCROLLING_IN_VIEW","action":{"id":"","actionTypeId":"GENERAL_CONTINUOUS_ACTION","config":{"actionListId":"a-51","affectedElements":{},"duration":0}},"mediaQueries":["medium","small","tiny"],"target":{"id":"2cb65f63-aefa-4c3e-a7f4-419383c67247","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"2cb65f63-aefa-4c3e-a7f4-419383c67247","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":[{"continuousParameterGroupId":"a-51-p","smoothing":97,"startsEntering":true,"addStartOffset":false,"addOffsetValue":50,"startsExiting":false,"addEndOffset":false,"endOffsetValue":50}],"createdOn":1699343805463}},"actionLists":{"a-26":{"id":"a-26","title":"Section Name Parallax - About and Projects - Desktop","continuousParameterGroups":[{"id":"a-26-p","type":"SCROLL_PROGRESS","parameterLabel":"Scroll","continuousActionGroups":[{"keyframe":0,"actionItems":[{"id":"a-26-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"id":"f250a8c2-4623-3422-2031-e6565be0595f"},"xValue":-5,"xUnit":"vw","yUnit":"PX","zUnit":"PX"}}]},{"keyframe":100,"actionItems":[{"id":"a-26-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"id":"f250a8c2-4623-3422-2031-e6565be0595f"},"xValue":-16,"xUnit":"vw","yUnit":"PX","zUnit":"PX"}}]}]}],"createdOn":1643198589173},"a-27":{"id":"a-27","title":"Homepage - Numbers Animation - Desktop","continuousParameterGroups":[{"id":"a-27-p","type":"SCROLL_PROGRESS","parameterLabel":"Scroll","continuousActionGroups":[{"keyframe":0,"actionItems":[{"id":"a-27-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".about-animated_item-inner","selectorGuids":["e77ddf85-72eb-d31a-992f-4521f686759b"]},"yValue":-100,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-27-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","id":"f250a8c2-4623-3422-2031-e6565be059bc"},"value":1,"unit":""}},{"id":"a-27-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","id":"f250a8c2-4623-3422-2031-e6565be059be"},"value":0,"unit":""}}]},{"keyframe":0.002,"actionItems":[{"id":"a-27-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","id":"f250a8c2-4623-3422-2031-e6565be059bc"},"value":0,"unit":""}},{"id":"a-27-n-5","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","id":"f250a8c2-4623-3422-2031-e6565be059be"},"value":1,"unit":""}}]},{"keyframe":3,"actionItems":[{"id":"a-27-n-6","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","id":"f250a8c2-4623-3422-2031-e6565be059aa"},"value":0,"unit":""}},{"id":"a-27-n-7","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","id":"f250a8c2-4623-3422-2031-e6565be059a8"},"value":1,"unit":""}}]},{"keyframe":3.002,"actionItems":[{"id":"a-27-n-8","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","id":"f250a8c2-4623-3422-2031-e6565be059aa"},"value":1,"unit":""}},{"id":"a-27-n-9","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","id":"f250a8c2-4623-3422-2031-e6565be059a8"},"value":0,"unit":""}}]},{"keyframe":6,"actionItems":[{"id":"a-27-n-10","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","id":"f250a8c2-4623-3422-2031-e6565be059be"},"value":1,"unit":""}},{"id":"a-27-n-11","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","id":"f250a8c2-4623-3422-2031-e6565be059c0"},"value":0,"unit":""}}]},{"keyframe":6.002,"actionItems":[{"id":"a-27-n-12","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","id":"f250a8c2-4623-3422-2031-e6565be059be"},"value":0,"unit":""}},{"id":"a-27-n-13","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","id":"f250a8c2-4623-3422-2031-e6565be059c0"},"value":1,"unit":""}}]},{"keyframe":12,"actionItems":[{"id":"a-27-n-14","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","id":"f250a8c2-4623-3422-2031-e6565be05998"},"value":0,"unit":""}},{"id":"a-27-n-15","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","id":"f250a8c2-4623-3422-2031-e6565be05996"},"value":1,"unit":""}},{"id":"a-27-n-16","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","id":"f250a8c2-4623-3422-2031-e6565be059c0"},"value":1,"unit":""}},{"id":"a-27-n-17","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","id":"f250a8c2-4623-3422-2031-e6565be059c2"},"value":0,"unit":""}}]},{"keyframe":12.002,"actionItems":[{"id":"a-27-n-18","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","id":"f250a8c2-4623-3422-2031-e6565be05998"},"value":1,"unit":""}},{"id":"a-27-n-19","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","id":"f250a8c2-4623-3422-2031-e6565be05996"},"value":0,"unit":""}},{"id":"a-27-n-20","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","id":"f250a8c2-4623-3422-2031-e6565be059c0"},"value":0,"unit":""}},{"id":"a-27-n-21","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","id":"f250a8c2-4623-3422-2031-e6565be059c2"},"value":1,"unit":""}}]},{"keyframe":13,"actionItems":[{"id":"a-27-n-22","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","id":"f250a8c2-4623-3422-2031-e6565be059aa"},"value":1,"unit":""}},{"id":"a-27-n-23","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","id":"f250a8c2-4623-3422-2031-e6565be059ac"},"value":0,"unit":""}}]},{"keyframe":13.002,"actionItems":[{"id":"a-27-n-24","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","id":"f250a8c2-4623-3422-2031-e6565be059aa"},"value":0,"unit":""}},{"id":"a-27-n-25","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","id":"f250a8c2-4623-3422-2031-e6565be059ac"},"value":1,"unit":""}}]},{"keyframe":18,"actionItems":[{"id":"a-27-n-26","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","id":"f250a8c2-4623-3422-2031-e6565be059c2"},"value":1,"unit":""}},{"id":"a-27-n-27","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","id":"f250a8c2-4623-3422-2031-e6565be059c4"},"value":0,"unit":""}}]},{"keyframe":18.002,"actionItems":[{"id":"a-27-n-28","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","id":"f250a8c2-4623-3422-2031-e6565be059c2"},"value":0,"unit":""}},{"id":"a-27-n-29","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","id":"f250a8c2-4623-3422-2031-e6565be059c4"},"value":1,"unit":""}}]},{"keyframe":21,"actionItems":[{"id":"a-27-n-30","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","id":"f250a8c2-4623-3422-2031-e6565be059ac"},"value":1,"unit":""}},{"id":"a-27-n-31","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","id":"f250a8c2-4623-3422-2031-e6565be059ae"},"value":0,"unit":""}}]},{"keyframe":21.002,"actionItems":[{"id":"a-27-n-32","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","id":"f250a8c2-4623-3422-2031-e6565be059ac"},"value":0,"unit":""}},{"id":"a-27-n-33","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","id":"f250a8c2-4623-3422-2031-e6565be059ae"},"value":1,"unit":""}}]},{"keyframe":24,"actionItems":[{"id":"a-27-n-34","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","id":"f250a8c2-4623-3422-2031-e6565be059c4"},"value":1,"unit":""}},{"id":"a-27-n-35","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","id":"f250a8c2-4623-3422-2031-e6565be059c6"},"value":0,"unit":""}}]},{"keyframe":24.002,"actionItems":[{"id":"a-27-n-36","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","id":"f250a8c2-4623-3422-2031-e6565be059c4"},"value":0,"unit":""}},{"id":"a-27-n-37","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","id":"f250a8c2-4623-3422-2031-e6565be059c6"},"value":1,"unit":""}}]},{"keyframe":26,"actionItems":[{"id":"a-27-n-38","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","id":"f250a8c2-4623-3422-2031-e6565be0599a"},"value":0,"unit":""}},{"id":"a-27-n-39","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","id":"f250a8c2-4623-3422-2031-e6565be05998"},"value":1,"unit":""}}]},{"keyframe":26.002,"actionItems":[{"id":"a-27-n-40","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","id":"f250a8c2-4623-3422-2031-e6565be0599a"},"value":1,"unit":""}},{"id":"a-27-n-41","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","id":"f250a8c2-4623-3422-2031-e6565be05998"},"value":0,"unit":""}}]},{"keyframe":28,"actionItems":[{"id":"a-27-n-42","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","id":"f250a8c2-4623-3422-2031-e6565be059c6"},"value":1,"unit":""}},{"id":"a-27-n-43","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","id":"f250a8c2-4623-3422-2031-e6565be059c8"},"value":0,"unit":""}}]},{"keyframe":28.002,"actionItems":[{"id":"a-27-n-44","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","id":"f250a8c2-4623-3422-2031-e6565be059c6"},"value":0,"unit":""}},{"id":"a-27-n-45","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","id":"f250a8c2-4623-3422-2031-e6565be059c8"},"value":1,"unit":""}}]},{"keyframe":30,"actionItems":[{"id":"a-27-n-46","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","id":"f250a8c2-4623-3422-2031-e6565be059b0"},"value":0,"unit":""}},{"id":"a-27-n-47","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","id":"f250a8c2-4623-3422-2031-e6565be059ae"},"value":1,"unit":""}}]},{"keyframe":30.002,"actionItems":[{"id":"a-27-n-48","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","id":"f250a8c2-4623-3422-2031-e6565be059b0"},"value":1,"unit":""}},{"id":"a-27-n-49","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","id":"f250a8c2-4623-3422-2031-e6565be059ae"},"value":0,"unit":""}}]},{"keyframe":31,"actionItems":[{"id":"a-27-n-50","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","id":"f250a8c2-4623-3422-2031-e6565be0599a"},"value":1,"unit":""}},{"id":"a-27-n-51","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","id":"f250a8c2-4623-3422-2031-e6565be0599c"},"value":0,"unit":""}}]},{"keyframe":31.002,"actionItems":[{"id":"a-27-n-52","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","id":"f250a8c2-4623-3422-2031-e6565be0599a"},"value":0,"unit":""}},{"id":"a-27-n-53","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","id":"f250a8c2-4623-3422-2031-e6565be0599c"},"value":1,"unit":""}}]},{"keyframe":32,"actionItems":[{"id":"a-27-n-54","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".about-animated_item-text","selectorGuids":["e77ddf85-72eb-d31a-992f-4521f68675ab"]},"value":0,"unit":""}},{"id":"a-27-n-55","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".about-animated_item-text","selectorGuids":["e77ddf85-72eb-d31a-992f-4521f68675ab"]},"yValue":50,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]},{"keyframe":36,"actionItems":[{"id":"a-27-n-56","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".about-animated_item-text","selectorGuids":["e77ddf85-72eb-d31a-992f-4521f68675ab"]},"value":1,"unit":""}},{"id":"a-27-n-57","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".about-animated_item-text","selectorGuids":["e77ddf85-72eb-d31a-992f-4521f68675ab"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-27-n-58","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".about-animated_item-inner","selectorGuids":["e77ddf85-72eb-d31a-992f-4521f686759b"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]}]}],"createdOn":1643031328855},"a-8":{"id":"a-8","title":"Section Name Parallax - Mobile 3","continuousParameterGroups":[{"id":"a-8-p","type":"SCROLL_PROGRESS","parameterLabel":"Scroll","continuousActionGroups":[{"keyframe":0,"actionItems":[{"id":"a-8-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"SIBLINGS","selector":".section-heading_outlined","selectorGuids":["7351f457-bfa6-abe4-ae61-86758a6dcb45"]},"xValue":-5,"xUnit":"vw","yUnit":"PX","zUnit":"PX"}}]},{"keyframe":100,"actionItems":[{"id":"a-8-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"SIBLINGS","selector":".section-heading_outlined","selectorGuids":["7351f457-bfa6-abe4-ae61-86758a6dcb45"]},"xValue":-20,"xUnit":"vw","yUnit":"PX","zUnit":"PX"}}]}]}],"createdOn":1643198589173},"a-28":{"id":"a-28","title":"Benefit Animation - Mobile","actionItemGroups":[{"actionItems":[{"id":"a-28-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".primary-button_wrapper","selectorGuids":["57985817-075c-07f9-e1b8-554c9d176f2d"]},"xValue":-130,"xUnit":"%","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"id":"a-28-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".primary-button_wrapper","selectorGuids":["57985817-075c-07f9-e1b8-554c9d176f2d"]},"xValue":-130,"xUnit":"%","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"id":"a-28-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":1000,"target":{"useEventTarget":"CHILDREN","selector":".primary-button_wrapper","selectorGuids":["57985817-075c-07f9-e1b8-554c9d176f2d"]},"xValue":0,"xUnit":"%","yUnit":"PX","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1643199295867},"a-41":{"id":"a-41","title":"Section Name Parallax - Desktop","continuousParameterGroups":[{"id":"a-41-p","type":"SCROLL_PROGRESS","parameterLabel":"Scroll","continuousActionGroups":[{"keyframe":0,"actionItems":[{"id":"a-41-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"SIBLINGS","selector":".section-heading_outlined.outlined","selectorGuids":["7351f457-bfa6-abe4-ae61-86758a6dcb45","7351f457-bfa6-abe4-ae61-86758a6dcb5c"]},"xValue":-5,"xUnit":"vw","yUnit":"PX","zUnit":"PX"}}]},{"keyframe":100,"actionItems":[{"id":"a-41-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"SIBLINGS","selector":".section-heading_outlined.outlined","selectorGuids":["7351f457-bfa6-abe4-ae61-86758a6dcb45","7351f457-bfa6-abe4-ae61-86758a6dcb5c"]},"xValue":-8,"xUnit":"vw","yUnit":"PX","zUnit":"PX"}}]}]}],"createdOn":1643874389144},"a-42":{"id":"a-42","title":"About Page - Experience Animation - Desktop","actionItemGroups":[{"actionItems":[{"id":"a-42-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".experience-number.experience-content","selectorGuids":["e77ddf85-72eb-d31a-992f-4521f68675ad","486304c8-37e6-d80d-2042-689409281097"]},"yValue":50,"zValue":-2,"xUnit":"PX","yUnit":"%","zUnit":"vw"}},{"id":"a-42-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".experience-number.experience-content","selectorGuids":["e77ddf85-72eb-d31a-992f-4521f68675ad","486304c8-37e6-d80d-2042-689409281097"]},"value":0,"unit":""}},{"id":"a-42-n-3","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".experience-number.experience-content","selectorGuids":["e77ddf85-72eb-d31a-992f-4521f68675ad","486304c8-37e6-d80d-2042-689409281097"]},"xValue":-90,"xUnit":"deg","yUnit":"DEG","zUnit":"DEG"}},{"id":"a-42-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".infinite-image-wrapper","selectorGuids":["486304c8-37e6-d80d-2042-68940928108f"]},"yValue":50,"zValue":-2,"xUnit":"PX","yUnit":"%","zUnit":"vw"}},{"id":"a-42-n-5","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".infinite-image-wrapper","selectorGuids":["486304c8-37e6-d80d-2042-68940928108f"]},"xValue":-90,"xUnit":"deg","yUnit":"DEG","zUnit":"DEG"}},{"id":"a-42-n-6","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".infinite-image-wrapper","selectorGuids":["486304c8-37e6-d80d-2042-68940928108f"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-42-n-7","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outCubic","duration":1250,"target":{"useEventTarget":"CHILDREN","selector":".experience-number.experience-content","selectorGuids":["e77ddf85-72eb-d31a-992f-4521f68675ad","486304c8-37e6-d80d-2042-689409281097"]},"yValue":0,"zValue":0,"xUnit":"PX","yUnit":"%","zUnit":"vw"}},{"id":"a-42-n-8","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".experience-number.experience-content","selectorGuids":["e77ddf85-72eb-d31a-992f-4521f68675ad","486304c8-37e6-d80d-2042-689409281097"]},"value":1,"unit":""}},{"id":"a-42-n-9","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"outCubic","duration":1250,"target":{"useEventTarget":"CHILDREN","selector":".experience-number.experience-content","selectorGuids":["e77ddf85-72eb-d31a-992f-4521f68675ad","486304c8-37e6-d80d-2042-689409281097"]},"xValue":0,"xUnit":"deg","yUnit":"DEG","zUnit":"DEG"}},{"id":"a-42-n-10","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outCubic","duration":1250,"target":{"useEventTarget":"CHILDREN","selector":".infinite-image-wrapper","selectorGuids":["486304c8-37e6-d80d-2042-68940928108f"]},"yValue":0,"zValue":0,"xUnit":"PX","yUnit":"%","zUnit":"vw"}},{"id":"a-42-n-11","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"outCubic","duration":1250,"target":{"useEventTarget":"CHILDREN","selector":".infinite-image-wrapper","selectorGuids":["486304c8-37e6-d80d-2042-68940928108f"]},"xValue":0,"xUnit":"deg","yUnit":"DEG","zUnit":"DEG"}},{"id":"a-42-n-12","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".infinite-image-wrapper","selectorGuids":["486304c8-37e6-d80d-2042-68940928108f"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1644842865953},"a-50":{"id":"a-50","title":"Ambiente Section Name Paralax 3","continuousParameterGroups":[{"id":"a-50-p","type":"SCROLL_PROGRESS","parameterLabel":"Scroll","continuousActionGroups":[{"keyframe":2,"actionItems":[{"id":"a-50-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".section-heading_outlined.outlined-white","selectorGuids":["7351f457-bfa6-abe4-ae61-86758a6dcb45","f03229e9-ced0-5e53-9414-ab827dc0ed65"]},"xValue":-10,"xUnit":"vw","yUnit":"PX","zUnit":"PX"}}]},{"keyframe":100,"actionItems":[{"id":"a-50-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".section-heading_outlined.outlined-white","selectorGuids":["7351f457-bfa6-abe4-ae61-86758a6dcb45","f03229e9-ced0-5e53-9414-ab827dc0ed65"]},"xValue":40,"xUnit":"vw","yUnit":"PX","zUnit":"PX"}}]}]}],"createdOn":1643198589173},"a-51":{"id":"a-51","title":"Section Name Parallax - Mobile 5","continuousParameterGroups":[{"id":"a-51-p","type":"SCROLL_PROGRESS","parameterLabel":"Scroll","continuousActionGroups":[{"keyframe":0,"actionItems":[{"id":"a-51-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"SIBLINGS","selector":".section-heading_outlined","selectorGuids":["7351f457-bfa6-abe4-ae61-86758a6dcb45"]},"xValue":-5,"xUnit":"vw","yUnit":"PX","zUnit":"PX"}}]},{"keyframe":100,"actionItems":[{"id":"a-51-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"SIBLINGS","selector":".section-heading_outlined","selectorGuids":["7351f457-bfa6-abe4-ae61-86758a6dcb45"]},"xValue":-20,"xUnit":"vw","yUnit":"PX","zUnit":"PX"}}]}]}],"createdOn":1643198589173}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function SectionUberUns({ as: _Component = _Builtin.Section }) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "section_about-animated")}
      grid={{
        type: "section",
      }}
      tag="section"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "about-animated_component")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "about-animated_track")}
          data-w-id="f250a8c2-4623-3422-2031-e6565be05957"
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "about-animated_container")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "about-animated_container-inner")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(
                  _styles,
                  "about-animated_full-height-text-container"
                )}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "section-heading_wrapper")}
                  tag="div"
                >
                  <_Builtin.Heading
                    className={_utils.cx(_styles, "heading-2", "absolute")}
                    tag="h2"
                  >
                    {"Über uns"}
                  </_Builtin.Heading>
                  <_Builtin.Block
                    className={_utils.cx(
                      _styles,
                      "section-heading_outlined",
                      "outlined"
                    )}
                    data-w-id="f250a8c2-4623-3422-2031-e6565be0595f"
                    tag="div"
                  >
                    {"Über uns"}
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(
                      _styles,
                      "section-heading_outlined-trigger"
                    )}
                    data-w-id="f250a8c2-4623-3422-2031-e6565be05961"
                    tag="div"
                  />
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "about-animated_line-animations-container-mobile"
                  )}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "benefit-mobile")}
                    data-w-id="f250a8c2-4623-3422-2031-e6565be05963"
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "primary-button_wrapper",
                        "horizontal",
                        "align-center"
                      )}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "benefit-line-mobile")}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "benefit-horizontal-line"
                          )}
                          tag="div"
                        />
                        <_Builtin.Block
                          className={_utils.cx(_styles, "benefit-circle")}
                          tag="div"
                        />
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(_styles, "experience-wrapper")}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(_styles, "experience-number")}
                          tag="div"
                        >
                          {"1"}
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "about-animated_item-text"
                          )}
                          tag="div"
                        >
                          {"Designpreis"}
                        </_Builtin.Block>
                      </_Builtin.Block>
                    </_Builtin.Block>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "benefit-mobile")}
                    data-w-id="f250a8c2-4623-3422-2031-e6565be0596d"
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "primary-button_wrapper",
                        "horizontal",
                        "align-center"
                      )}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(
                          _styles,
                          "benefit-line-mobile",
                          "line-2"
                        )}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "benefit-horizontal-line"
                          )}
                          tag="div"
                        />
                        <_Builtin.Block
                          className={_utils.cx(_styles, "benefit-circle")}
                          tag="div"
                        />
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(_styles, "experience-wrapper")}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(_styles, "experience-number")}
                          tag="div"
                        >
                          {"4"}
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "about-animated_item-text"
                          )}
                          tag="div"
                        >
                          {"Zahnärzte"}
                        </_Builtin.Block>
                      </_Builtin.Block>
                    </_Builtin.Block>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "benefit-mobile")}
                    data-w-id="f250a8c2-4623-3422-2031-e6565be05977"
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "primary-button_wrapper",
                        "horizontal",
                        "align-center"
                      )}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(
                          _styles,
                          "benefit-line-mobile",
                          "line-3"
                        )}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "benefit-horizontal-line"
                          )}
                          tag="div"
                        />
                        <_Builtin.Block
                          className={_utils.cx(_styles, "benefit-circle")}
                          tag="div"
                        />
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(_styles, "experience-wrapper")}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(_styles, "experience-number")}
                          tag="div"
                        >
                          {"24"}
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "about-animated_item-text"
                          )}
                          tag="div"
                        >
                          {"Langjährige Erfahrung"}
                        </_Builtin.Block>
                      </_Builtin.Block>
                    </_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Paragraph
                  className={_utils.cx(_styles, "max-width-small")}
                >
                  {
                    "In unserer Zahnarztpraxis finden Sie nicht nur fachliche Kompetenz, sondern auch ein herzliches Team, das sich darum kümmert, dass Sie sich rundum wohlfühlen. "
                  }
                </_Builtin.Paragraph>
                <_Builtin.Block
                  className={_utils.cx(_styles, "spacer-xsmall")}
                  tag="div"
                />
                <_Builtin.Paragraph
                  className={_utils.cx(_styles, "max-width-small")}
                >
                  {
                    "Vertrauen Sie uns, wir sind hier, um Ihnen ein strahlendes Lächeln und ein gutes Gefühl zu schenken."
                  }
                </_Builtin.Paragraph>
                <_Builtin.Block
                  className={_utils.cx(_styles, "spacer-medium")}
                  tag="div"
                />
                <ButtonPrimary
                  link={{
                    href: "#",
                  }}
                />
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "about-animated_items-container")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "about-animated_item")}
                  id={_utils.cx(
                    _styles,
                    "w-node-f250a8c2-4623-3422-2031-e6565be0598e-5be05956"
                  )}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "about-animated_item-inner")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "primary-button_wrapper",
                        "center"
                      )}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "vertical-line")}
                        tag="div"
                      />
                      <_Builtin.Block
                        className={_utils.cx(_styles, "line-circle")}
                        tag="div"
                      />
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "experience-number-container"
                      )}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "experience-number")}
                        tag="div"
                      >
                        {"10"}
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(
                          _styles,
                          "experience-number",
                          "absolute",
                          "first"
                        )}
                        data-w-id="f250a8c2-4623-3422-2031-e6565be05996"
                        tag="div"
                      >
                        {"1"}
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(
                          _styles,
                          "experience-number",
                          "absolute"
                        )}
                        data-w-id="f250a8c2-4623-3422-2031-e6565be05998"
                        tag="div"
                      >
                        {"2"}
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(
                          _styles,
                          "experience-number",
                          "absolute"
                        )}
                        data-w-id="f250a8c2-4623-3422-2031-e6565be0599a"
                        tag="div"
                      >
                        {"3"}
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(
                          _styles,
                          "experience-number",
                          "absolute"
                        )}
                        data-w-id="f250a8c2-4623-3422-2031-e6565be0599c"
                        tag="div"
                      >
                        {"4"}
                      </_Builtin.Block>
                    </_Builtin.Block>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "about-animated_item-text")}
                    tag="div"
                  >
                    {"Zahnärzte"}
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "about-animated_item",
                    "second"
                  )}
                  id={_utils.cx(
                    _styles,
                    "w-node-f250a8c2-4623-3422-2031-e6565be059a0-5be05956"
                  )}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "about-animated_item-inner")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "primary-button_wrapper",
                        "center"
                      )}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "vertical-line")}
                        tag="div"
                      />
                      <_Builtin.Block
                        className={_utils.cx(_styles, "line-circle")}
                        tag="div"
                      />
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "experience-number-container"
                      )}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "experience-number")}
                        tag="div"
                      >
                        {"27"}
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(
                          _styles,
                          "experience-number",
                          "absolute",
                          "first"
                        )}
                        data-w-id="f250a8c2-4623-3422-2031-e6565be059a8"
                        tag="div"
                      >
                        {"1"}
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(
                          _styles,
                          "experience-number",
                          "absolute"
                        )}
                        data-w-id="f250a8c2-4623-3422-2031-e6565be059aa"
                        tag="div"
                      >
                        {"1"}
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(
                          _styles,
                          "experience-number",
                          "absolute"
                        )}
                        data-w-id="f250a8c2-4623-3422-2031-e6565be059ac"
                        tag="div"
                      >
                        {"1"}
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(
                          _styles,
                          "experience-number",
                          "absolute"
                        )}
                        data-w-id="f250a8c2-4623-3422-2031-e6565be059ae"
                        tag="div"
                      >
                        {"1"}
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(
                          _styles,
                          "experience-number",
                          "absolute"
                        )}
                        data-w-id="f250a8c2-4623-3422-2031-e6565be059b0"
                        tag="div"
                      >
                        {"1"}
                      </_Builtin.Block>
                    </_Builtin.Block>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "about-animated_item-text")}
                    tag="div"
                  >
                    {"Designpreis"}
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "about-animated_item", "third")}
                  id={_utils.cx(
                    _styles,
                    "w-node-f250a8c2-4623-3422-2031-e6565be059b4-5be05956"
                  )}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "about-animated_item-inner")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "primary-button_wrapper",
                        "center"
                      )}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "vertical-line")}
                        tag="div"
                      />
                      <_Builtin.Block
                        className={_utils.cx(_styles, "line-circle")}
                        tag="div"
                      />
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "experience-number-container"
                      )}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "experience-number")}
                        tag="div"
                      >
                        {"159"}
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(
                          _styles,
                          "experience-number",
                          "absolute",
                          "first"
                        )}
                        data-w-id="f250a8c2-4623-3422-2031-e6565be059bc"
                        tag="div"
                      >
                        {"18"}
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(
                          _styles,
                          "experience-number",
                          "absolute"
                        )}
                        data-w-id="f250a8c2-4623-3422-2031-e6565be059be"
                        tag="div"
                      >
                        {"19"}
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(
                          _styles,
                          "experience-number",
                          "absolute"
                        )}
                        data-w-id="f250a8c2-4623-3422-2031-e6565be059c0"
                        tag="div"
                      >
                        {"20"}
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(
                          _styles,
                          "experience-number",
                          "absolute"
                        )}
                        data-w-id="f250a8c2-4623-3422-2031-e6565be059c2"
                        tag="div"
                      >
                        {"21"}
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(
                          _styles,
                          "experience-number",
                          "absolute"
                        )}
                        data-w-id="f250a8c2-4623-3422-2031-e6565be059c4"
                        tag="div"
                      >
                        {"22"}
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(
                          _styles,
                          "experience-number",
                          "absolute"
                        )}
                        data-w-id="f250a8c2-4623-3422-2031-e6565be059c6"
                        tag="div"
                      >
                        {"23"}
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(
                          _styles,
                          "experience-number",
                          "absolute"
                        )}
                        data-w-id="f250a8c2-4623-3422-2031-e6565be059c8"
                        tag="div"
                      >
                        {"24"}
                        <br />
                        {"‍"}
                      </_Builtin.Block>
                    </_Builtin.Block>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "about-animated_item-text")}
                    tag="div"
                  >
                    {"Langjährige Erfahrung"}
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
