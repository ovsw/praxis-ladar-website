"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import { BehandlungItemMobile } from "./BehandlungItemMobile";
import { ButtonPrimary } from "./ButtonPrimary";

const _interactionsData = JSON.parse(
  '{"events":{"e-61":{"id":"e-61","name":"","animationType":"custom","eventTypeId":"SCROLLING_IN_VIEW","action":{"id":"","actionTypeId":"GENERAL_CONTINUOUS_ACTION","config":{"actionListId":"a-8","affectedElements":{},"duration":0}},"mediaQueries":["medium","small","tiny"],"target":{"id":"f250a8c2-4623-3422-2031-e6565be05961","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"f250a8c2-4623-3422-2031-e6565be05961","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":[{"continuousParameterGroupId":"a-8-p","smoothing":97,"startsEntering":true,"addStartOffset":false,"addOffsetValue":50,"startsExiting":false,"addEndOffset":false,"endOffsetValue":50}],"createdOn":1643198571656},"e-82":{"id":"e-82","name":"","animationType":"preset","eventTypeId":"SCROLLING_IN_VIEW","action":{"id":"","actionTypeId":"GENERAL_CONTINUOUS_ACTION","config":{"actionListId":"a-30","affectedElements":{},"duration":0}},"mediaQueries":["main"],"target":{"id":"013f7e94-4b70-18d2-b906-f2ba4590e21e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"013f7e94-4b70-18d2-b906-f2ba4590e21e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":[{"continuousParameterGroupId":"a-30-p","smoothing":97,"startsEntering":true,"addStartOffset":false,"addOffsetValue":-30,"startsExiting":false,"addEndOffset":false,"endOffsetValue":-10}],"createdOn":1699328831391},"e-83":{"id":"e-83","name":"","animationType":"preset","eventTypeId":"SCROLLING_IN_VIEW","action":{"id":"","actionTypeId":"GENERAL_CONTINUOUS_ACTION","config":{"actionListId":"a-31","affectedElements":{},"duration":0}},"mediaQueries":["main"],"target":{"id":"013f7e94-4b70-18d2-b906-f2ba4590e21e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"013f7e94-4b70-18d2-b906-f2ba4590e21e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":[{"continuousParameterGroupId":"a-31-p","smoothing":1,"startsEntering":true,"addStartOffset":false,"addOffsetValue":50,"startsExiting":false,"addEndOffset":false,"endOffsetValue":50}],"createdOn":1699328831391},"e-84":{"id":"e-84","name":"","animationType":"preset","eventTypeId":"SCROLLING_IN_VIEW","action":{"id":"","actionTypeId":"GENERAL_CONTINUOUS_ACTION","config":{"actionListId":"a-32","affectedElements":{},"duration":0}},"mediaQueries":["main"],"target":{"id":"013f7e94-4b70-18d2-b906-f2ba4590e21e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"013f7e94-4b70-18d2-b906-f2ba4590e21e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":[{"continuousParameterGroupId":"a-32-p","smoothing":97,"startsEntering":true,"addStartOffset":false,"addOffsetValue":50,"startsExiting":false,"addEndOffset":false,"endOffsetValue":50}],"createdOn":1699328831391},"e-85":{"id":"e-85","name":"","animationType":"preset","eventTypeId":"SCROLLING_IN_VIEW","action":{"id":"","actionTypeId":"GENERAL_CONTINUOUS_ACTION","config":{"actionListId":"a-8","affectedElements":{},"duration":0}},"mediaQueries":["medium","small","tiny"],"target":{"id":"013f7e94-4b70-18d2-b906-f2ba4590e224","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"013f7e94-4b70-18d2-b906-f2ba4590e224","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":[{"continuousParameterGroupId":"a-8-p","smoothing":97,"startsEntering":true,"addStartOffset":false,"addOffsetValue":50,"startsExiting":false,"addEndOffset":false,"endOffsetValue":50}],"createdOn":1699328831391},"e-104":{"id":"e-104","name":"","animationType":"preset","eventTypeId":"SCROLLING_IN_VIEW","action":{"id":"","actionTypeId":"GENERAL_CONTINUOUS_ACTION","config":{"actionListId":"a-8","affectedElements":{},"duration":0}},"mediaQueries":["medium","small","tiny"],"target":{"id":"27dca5d1-39cf-2acf-347f-fad09d94a805","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"27dca5d1-39cf-2acf-347f-fad09d94a805","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":[{"continuousParameterGroupId":"a-8-p","smoothing":97,"startsEntering":true,"addStartOffset":false,"addOffsetValue":50,"startsExiting":false,"addEndOffset":false,"endOffsetValue":50}],"createdOn":1643781860203},"e-105":{"id":"e-105","name":"","animationType":"custom","eventTypeId":"SCROLLING_IN_VIEW","action":{"id":"","actionTypeId":"GENERAL_CONTINUOUS_ACTION","config":{"actionListId":"a-41","affectedElements":{},"duration":0}},"mediaQueries":["main"],"target":{"id":"27dca5d1-39cf-2acf-347f-fad09d94a805","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"27dca5d1-39cf-2acf-347f-fad09d94a805","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":[{"continuousParameterGroupId":"a-41-p","smoothing":97,"startsEntering":true,"addStartOffset":false,"addOffsetValue":50,"startsExiting":false,"addEndOffset":false,"endOffsetValue":50}],"createdOn":1643874377808},"e-112":{"id":"e-112","name":"","animationType":"preset","eventTypeId":"SCROLLING_IN_VIEW","action":{"id":"","actionTypeId":"GENERAL_CONTINUOUS_ACTION","config":{"actionListId":"a-8","affectedElements":{},"duration":0}},"mediaQueries":["medium","small","tiny"],"target":{"id":"2a005cce-7eaa-9ba1-36f4-b6983aa3230b","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"2a005cce-7eaa-9ba1-36f4-b6983aa3230b","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":[{"continuousParameterGroupId":"a-8-p","smoothing":97,"startsEntering":true,"addStartOffset":false,"addOffsetValue":50,"startsExiting":false,"addEndOffset":false,"endOffsetValue":50}],"createdOn":1695305102224},"e-137":{"id":"e-137","name":"","animationType":"preset","eventTypeId":"SCROLLING_IN_VIEW","action":{"id":"","actionTypeId":"GENERAL_CONTINUOUS_ACTION","config":{"actionListId":"a-8","affectedElements":{},"duration":0}},"mediaQueries":["medium","small","tiny"],"target":{"id":"6b9b8ac9-ef5a-61a2-e885-94ae5d8f217d","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6b9b8ac9-ef5a-61a2-e885-94ae5d8f217d","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":[{"continuousParameterGroupId":"a-8-p","smoothing":97,"startsEntering":true,"addStartOffset":false,"addOffsetValue":50,"startsExiting":false,"addEndOffset":false,"endOffsetValue":50}],"createdOn":1644484686898},"e-152":{"id":"e-152","name":"","animationType":"preset","eventTypeId":"SCROLLING_IN_VIEW","action":{"id":"","actionTypeId":"GENERAL_CONTINUOUS_ACTION","config":{"actionListId":"a-50","affectedElements":{},"duration":0}},"mediaQueries":["main"],"target":{"id":"2cb65f63-aefa-4c3e-a7f4-419383c67240","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"2cb65f63-aefa-4c3e-a7f4-419383c67240","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":[{"continuousParameterGroupId":"a-50-p","smoothing":97,"startsEntering":true,"addStartOffset":false,"addOffsetValue":50,"startsExiting":false,"addEndOffset":false,"endOffsetValue":50}],"createdOn":1699343805463},"e-153":{"id":"e-153","name":"","animationType":"preset","eventTypeId":"SCROLLING_IN_VIEW","action":{"id":"","actionTypeId":"GENERAL_CONTINUOUS_ACTION","config":{"actionListId":"a-51","affectedElements":{},"duration":0}},"mediaQueries":["medium","small","tiny"],"target":{"id":"2cb65f63-aefa-4c3e-a7f4-419383c67247","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"2cb65f63-aefa-4c3e-a7f4-419383c67247","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":[{"continuousParameterGroupId":"a-51-p","smoothing":97,"startsEntering":true,"addStartOffset":false,"addOffsetValue":50,"startsExiting":false,"addEndOffset":false,"endOffsetValue":50}],"createdOn":1699343805463},"e-222":{"id":"e-222","name":"","animationType":"preset","eventTypeId":"SCROLLING_IN_VIEW","action":{"id":"","actionTypeId":"GENERAL_CONTINUOUS_ACTION","config":{"actionListId":"a-93","affectedElements":{},"duration":0}},"mediaQueries":["medium","small","tiny"],"target":{"id":"5bb1e1e0-5544-9312-7458-4af4da2122bf","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"5bb1e1e0-5544-9312-7458-4af4da2122bf","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":[{"continuousParameterGroupId":"a-93-p","smoothing":97,"startsEntering":true,"addStartOffset":false,"addOffsetValue":50,"startsExiting":false,"addEndOffset":false,"endOffsetValue":50}],"createdOn":1700998569578}},"actionLists":{"a-8":{"id":"a-8","title":"Section Name Parallax - Mobile 3","continuousParameterGroups":[{"id":"a-8-p","type":"SCROLL_PROGRESS","parameterLabel":"Scroll","continuousActionGroups":[{"keyframe":0,"actionItems":[{"id":"a-8-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"SIBLINGS","selector":".section-heading_outlined","selectorGuids":["7351f457-bfa6-abe4-ae61-86758a6dcb45"]},"xValue":-5,"xUnit":"vw","yUnit":"PX","zUnit":"PX"}}]},{"keyframe":100,"actionItems":[{"id":"a-8-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"SIBLINGS","selector":".section-heading_outlined","selectorGuids":["7351f457-bfa6-abe4-ae61-86758a6dcb45"]},"xValue":-20,"xUnit":"vw","yUnit":"PX","zUnit":"PX"}}]}]}],"createdOn":1643198589173},"a-30":{"id":"a-30","title":"Home Services n2 5","continuousParameterGroups":[{"id":"a-30-p","type":"SCROLL_PROGRESS","parameterLabel":"Scroll","continuousActionGroups":[{"keyframe":1,"actionItems":[{"id":"a-30-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","id":"013f7e94-4b70-18d2-b906-f2ba4590e241"},"yValue":-100,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-30-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","id":"013f7e94-4b70-18d2-b906-f2ba4590e28a"},"yValue":-100,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]},{"keyframe":4,"actionItems":[{"id":"a-30-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","id":"013f7e94-4b70-18d2-b906-f2ba4590e244"},"value":0,"unit":""}}]},{"keyframe":22,"actionItems":[{"id":"a-30-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","id":"013f7e94-4b70-18d2-b906-f2ba4590e244"},"value":1,"unit":""}},{"id":"a-30-n-5","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","id":"013f7e94-4b70-18d2-b906-f2ba4590e241"},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-30-n-6","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","id":"013f7e94-4b70-18d2-b906-f2ba4590e24f"},"yValue":-100,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]},{"keyframe":25,"actionItems":[{"id":"a-30-n-7","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","id":"013f7e94-4b70-18d2-b906-f2ba4590e28d"},"value":0,"unit":""}}]},{"keyframe":31,"actionItems":[{"id":"a-30-n-8","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","id":"013f7e94-4b70-18d2-b906-f2ba4590e252"},"value":0,"unit":""}},{"id":"a-30-n-9","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","id":"013f7e94-4b70-18d2-b906-f2ba4590e28d"},"value":1,"unit":""}}]},{"keyframe":37,"actionItems":[{"id":"a-30-n-10","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","id":"013f7e94-4b70-18d2-b906-f2ba4590e28a"},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-30-n-11","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","id":"013f7e94-4b70-18d2-b906-f2ba4590e298"},"yValue":-100,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]},{"keyframe":41,"actionItems":[{"id":"a-30-n-12","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","id":"013f7e94-4b70-18d2-b906-f2ba4590e24f"},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-30-n-13","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","id":"013f7e94-4b70-18d2-b906-f2ba4590e25d"},"yValue":-100,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-30-n-14","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","id":"013f7e94-4b70-18d2-b906-f2ba4590e252"},"value":1,"unit":""}},{"id":"a-30-n-15","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","id":"013f7e94-4b70-18d2-b906-f2ba4590e29b"},"value":0,"unit":""}}]},{"keyframe":45,"actionItems":[{"id":"a-30-n-16","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","id":"013f7e94-4b70-18d2-b906-f2ba4590e260"},"value":0,"unit":""}}]},{"keyframe":47,"actionItems":[{"id":"a-30-n-17","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","id":"013f7e94-4b70-18d2-b906-f2ba4590e298"},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-30-n-18","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","id":"013f7e94-4b70-18d2-b906-f2ba4590e2a6"},"yValue":-100,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-30-n-19","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","id":"013f7e94-4b70-18d2-b906-f2ba4590e29b"},"value":1,"unit":""}}]},{"keyframe":52,"actionItems":[{"id":"a-30-n-20","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","id":"013f7e94-4b70-18d2-b906-f2ba4590e25d"},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-30-n-21","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","id":"013f7e94-4b70-18d2-b906-f2ba4590e26b"},"yValue":-100,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-30-n-22","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","id":"013f7e94-4b70-18d2-b906-f2ba4590e260"},"value":1,"unit":""}},{"id":"a-30-n-23","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","id":"013f7e94-4b70-18d2-b906-f2ba4590e2a9"},"value":0,"unit":""}}]},{"keyframe":56,"actionItems":[{"id":"a-30-n-24","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","id":"013f7e94-4b70-18d2-b906-f2ba4590e2a6"},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-30-n-25","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","id":"013f7e94-4b70-18d2-b906-f2ba4590e2b4"},"yValue":-100,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-30-n-26","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","id":"013f7e94-4b70-18d2-b906-f2ba4590e2a9"},"value":1,"unit":""}},{"id":"a-30-n-27","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","id":"013f7e94-4b70-18d2-b906-f2ba4590e26e"},"value":0,"unit":""}}]},{"keyframe":64,"actionItems":[{"id":"a-30-n-28","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","id":"013f7e94-4b70-18d2-b906-f2ba4590e26b"},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-30-n-29","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","id":"013f7e94-4b70-18d2-b906-f2ba4590e279"},"yValue":-100,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-30-n-30","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","id":"013f7e94-4b70-18d2-b906-f2ba4590e26e"},"value":1,"unit":""}},{"id":"a-30-n-31","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","id":"013f7e94-4b70-18d2-b906-f2ba4590e2b7"},"value":0,"unit":""}}]},{"keyframe":67,"actionItems":[{"id":"a-30-n-32","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","id":"013f7e94-4b70-18d2-b906-f2ba4590e27c"},"value":0,"unit":""}}]},{"keyframe":70,"actionItems":[{"id":"a-30-n-33","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","id":"013f7e94-4b70-18d2-b906-f2ba4590e2b4"},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-30-n-34","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","id":"013f7e94-4b70-18d2-b906-f2ba4590e2c2"},"yValue":-100,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-30-n-35","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","id":"013f7e94-4b70-18d2-b906-f2ba4590e2b7"},"value":1,"unit":""}}]},{"keyframe":72,"actionItems":[{"id":"a-30-n-36","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","id":"013f7e94-4b70-18d2-b906-f2ba4590e2c5"},"value":0,"unit":""}}]},{"keyframe":74,"actionItems":[{"id":"a-30-n-37","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","id":"013f7e94-4b70-18d2-b906-f2ba4590e279"},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-30-n-38","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","id":"013f7e94-4b70-18d2-b906-f2ba4590e27c"},"value":1,"unit":""}}]},{"keyframe":79,"actionItems":[{"id":"a-30-n-39","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","id":"013f7e94-4b70-18d2-b906-f2ba4590e2c2"},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-30-n-40","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","id":"013f7e94-4b70-18d2-b906-f2ba4590e2c5"},"value":1,"unit":""}}]}]}],"createdOn":1650909163594},"a-31":{"id":"a-31","title":"Home Services - Main Container Move 7","continuousParameterGroups":[{"id":"a-31-p","type":"SCROLL_PROGRESS","parameterLabel":"Scroll","continuousActionGroups":[{"keyframe":26,"actionItems":[{"id":"a-31-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","id":"013f7e94-4b70-18d2-b906-f2ba4590e23d"},"yValue":0,"xUnit":"PX","yUnit":"vh","zUnit":"PX"}}]},{"keyframe":76,"actionItems":[{"id":"a-31-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","id":"013f7e94-4b70-18d2-b906-f2ba4590e23d"},"yValue":1,"xUnit":"PX","yUnit":"vh","zUnit":"PX"}}]}]}],"createdOn":1643624410959},"a-32":{"id":"a-32","title":"Section Name Parallax - Home Services - Desktop 7","continuousParameterGroups":[{"id":"a-32-p","type":"SCROLL_PROGRESS","parameterLabel":"Scroll","continuousActionGroups":[{"keyframe":0,"actionItems":[{"id":"a-32-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","id":"013f7e94-4b70-18d2-b906-f2ba4590e225"},"xValue":-5,"xUnit":"vw","yUnit":"PX","zUnit":"PX"}}]},{"keyframe":100,"actionItems":[{"id":"a-32-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","id":"013f7e94-4b70-18d2-b906-f2ba4590e225"},"xValue":-8,"xUnit":"vw","yUnit":"PX","zUnit":"PX"}}]}]}],"createdOn":1643626135880},"a-41":{"id":"a-41","title":"Section Name Parallax - Desktop","continuousParameterGroups":[{"id":"a-41-p","type":"SCROLL_PROGRESS","parameterLabel":"Scroll","continuousActionGroups":[{"keyframe":0,"actionItems":[{"id":"a-41-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"SIBLINGS","selector":".section-heading_outlined.outlined","selectorGuids":["7351f457-bfa6-abe4-ae61-86758a6dcb45","7351f457-bfa6-abe4-ae61-86758a6dcb5c"]},"xValue":-5,"xUnit":"vw","yUnit":"PX","zUnit":"PX"}}]},{"keyframe":100,"actionItems":[{"id":"a-41-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"SIBLINGS","selector":".section-heading_outlined.outlined","selectorGuids":["7351f457-bfa6-abe4-ae61-86758a6dcb45","7351f457-bfa6-abe4-ae61-86758a6dcb5c"]},"xValue":-8,"xUnit":"vw","yUnit":"PX","zUnit":"PX"}}]}]}],"createdOn":1643874389144},"a-50":{"id":"a-50","title":"Ambiente Section Name Paralax 3","continuousParameterGroups":[{"id":"a-50-p","type":"SCROLL_PROGRESS","parameterLabel":"Scroll","continuousActionGroups":[{"keyframe":2,"actionItems":[{"id":"a-50-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".section-heading_outlined.outlined-white","selectorGuids":["7351f457-bfa6-abe4-ae61-86758a6dcb45","f03229e9-ced0-5e53-9414-ab827dc0ed65"]},"xValue":-10,"xUnit":"vw","yUnit":"PX","zUnit":"PX"}}]},{"keyframe":100,"actionItems":[{"id":"a-50-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".section-heading_outlined.outlined-white","selectorGuids":["7351f457-bfa6-abe4-ae61-86758a6dcb45","f03229e9-ced0-5e53-9414-ab827dc0ed65"]},"xValue":40,"xUnit":"vw","yUnit":"PX","zUnit":"PX"}}]}]}],"createdOn":1643198589173},"a-51":{"id":"a-51","title":"Section Name Parallax - Mobile 5","continuousParameterGroups":[{"id":"a-51-p","type":"SCROLL_PROGRESS","parameterLabel":"Scroll","continuousActionGroups":[{"keyframe":0,"actionItems":[{"id":"a-51-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"SIBLINGS","selector":".section-heading_outlined","selectorGuids":["7351f457-bfa6-abe4-ae61-86758a6dcb45"]},"xValue":-5,"xUnit":"vw","yUnit":"PX","zUnit":"PX"}}]},{"keyframe":100,"actionItems":[{"id":"a-51-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"SIBLINGS","selector":".section-heading_outlined","selectorGuids":["7351f457-bfa6-abe4-ae61-86758a6dcb45"]},"xValue":-20,"xUnit":"vw","yUnit":"PX","zUnit":"PX"}}]}]}],"createdOn":1643198589173},"a-93":{"id":"a-93","title":"Section Name Parallax - Mobile 8","continuousParameterGroups":[{"id":"a-93-p","type":"SCROLL_PROGRESS","parameterLabel":"Scroll","continuousActionGroups":[{"keyframe":0,"actionItems":[{"id":"a-93-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"SIBLINGS","selector":".section-heading_outlined","selectorGuids":["7351f457-bfa6-abe4-ae61-86758a6dcb45"]},"xValue":-5,"xUnit":"vw","yUnit":"PX","zUnit":"PX"}}]},{"keyframe":100,"actionItems":[{"id":"a-93-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"SIBLINGS","selector":".section-heading_outlined","selectorGuids":["7351f457-bfa6-abe4-ae61-86758a6dcb45"]},"xValue":-20,"xUnit":"vw","yUnit":"PX","zUnit":"PX"}}]}]}],"createdOn":1643198589173}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function SectionBehandlung({
  as: _Component = _Builtin.Section,
  listSlot,
}) {
  _interactions.useInteractions(_interactionsData);

  return (
    <_Component
      className="section_sticky-lines-large"
      grid={{
        type: "section",
      }}
      tag="section"
      bind="88eae6a5-0f0d-535c-9a61-305dd8bdd527"
      id="behandlung"
    >
      <_Builtin.Block className="container-xxl" tag="div">
        <_Builtin.Block
          className="home-services-container"
          data-w-id="013f7e94-4b70-18d2-b906-f2ba4590e21e"
          tag="div"
        >
          <_Builtin.Block
            className="about-animated_full-height-text-container"
            tag="div"
          >
            <_Builtin.Block className="section-heading_wrapper" tag="div">
              <_Builtin.Heading className="heading-2 absolute" tag="h2">
                {"Behandlung"}
              </_Builtin.Heading>
              <_Builtin.Block
                className="section-heading_outlined-trigger"
                data-w-id="013f7e94-4b70-18d2-b906-f2ba4590e224"
                tag="div"
              />
              <_Builtin.Block
                className="section-heading_outlined outlined smaller"
                data-w-id="013f7e94-4b70-18d2-b906-f2ba4590e225"
                tag="div"
                data-outlined="dark"
              >
                {"Behandlung"}
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className="about-animated_line-animations-container-mobile home-services"
              tag="div"
            >
              {listSlot ?? (
                <>
                  <BehandlungItemMobile />
                  <BehandlungItemMobile />
                  <BehandlungItemMobile />
                  <BehandlungItemMobile />
                  <BehandlungItemMobile />
                  <BehandlungItemMobile />
                  <BehandlungItemMobile />
                  <BehandlungItemMobile />
                </>
              )}
            </_Builtin.Block>
            <_Builtin.Block className="max-width-small" tag="div">
              <_Builtin.Paragraph className="paragraph is-left-aligned-mobile">
                <_Builtin.Strong>
                  {"Modernste Praxisausstattung"}
                </_Builtin.Strong>
                <br />
                <br />
                {
                  "Wir setzen auf hochmoderne Technologie, um Ihr Wohlbefinden und Ihre Zahngesundheit zu fördern."
                }
              </_Builtin.Paragraph>
              <_Builtin.Block className="spacer-xsmall" tag="div" />
              <_Builtin.Paragraph className="paragraph is-left-aligned-mobile">
                {
                  "Bei uns erwartet Sie eine zeitgemäße Zahnmedizin für ein strahlendes Lächeln und eine sorgenfreie Behandlung."
                }
              </_Builtin.Paragraph>
              <_Builtin.Block className="spacer-xsmall" tag="div" />
            </_Builtin.Block>
            <ButtonPrimary
              text="Kontakt"
              link={{
                href: "/kontakt",
              }}
            />
          </_Builtin.Block>
          <_Builtin.Block
            className="home-services-animation-container"
            data-w-id="013f7e94-4b70-18d2-b906-f2ba4590e23d"
            tag="div"
          >
            <_Builtin.Block className="animation-line-column" tag="div">
              <_Builtin.Block className="animation-item" tag="div">
                <_Builtin.Block className="outer-line-wrapper" tag="div">
                  <_Builtin.Block
                    className="line-wrapper alt"
                    data-w-id="013f7e94-4b70-18d2-b906-f2ba4590e241"
                    tag="div"
                  >
                    <_Builtin.Block className="vertical-line" tag="div" />
                    <_Builtin.Block className="line-circle" tag="div" />
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Link
                  className="animation-item-text link"
                  data-w-id="013f7e94-4b70-18d2-b906-f2ba4590e244"
                  button={false}
                  block="inline"
                  options={{
                    href: "/behandlung/prophylaxe",
                  }}
                >
                  <_Builtin.Block className="" tag="div">
                    {"Prophylaxe"}
                  </_Builtin.Block>
                  <_Builtin.Block className="more-info-wrapper" tag="div">
                    <_Builtin.Block className="more-info" tag="div">
                      {"mehrinfos"}
                    </_Builtin.Block>
                    <_Builtin.Block
                      className="secondary-btn-arrow-wrapper dark small"
                      tag="div"
                    >
                      <_Builtin.Image
                        className="arrow-right white show-on-mobile"
                        loading="lazy"
                        width="auto"
                        height="auto"
                        alt="Arrow Right icon"
                        src="https://cdn.prod.website-files.com/65459ab6440c1238e7ede277/6549b3446e46215a12ab49d4_arrow_dark.svg"
                      />
                      <_Builtin.Image
                        className="arrow-right translate-left hide-on-mobile"
                        loading="lazy"
                        width="auto"
                        height="auto"
                        alt="Arrow Right icon"
                        src="https://cdn.prod.website-files.com/65459ab6440c1238e7ede277/6549b3446e46215a12ab49d3_arrow_white.svg"
                      />
                    </_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.Link>
              </_Builtin.Block>
              <_Builtin.Block className="animation-item" tag="div">
                <_Builtin.Block className="outer-line-wrapper" tag="div">
                  <_Builtin.Block
                    className="line-wrapper short"
                    data-w-id="013f7e94-4b70-18d2-b906-f2ba4590e24f"
                    tag="div"
                  >
                    <_Builtin.Block className="vertical-line" tag="div" />
                    <_Builtin.Block className="line-circle" tag="div" />
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Link
                  className="animation-item-text link"
                  data-w-id="013f7e94-4b70-18d2-b906-f2ba4590e252"
                  button={false}
                  block="inline"
                  options={{
                    href: "/behandlung/asthetische-zahnheilkunde",
                  }}
                >
                  <_Builtin.Block className="" tag="div">
                    {"Ästhetische Zahnheilkunde"}
                  </_Builtin.Block>
                  <_Builtin.Block className="more-info-wrapper" tag="div">
                    <_Builtin.Block className="more-info" tag="div">
                      {"mehrinfos"}
                    </_Builtin.Block>
                    <_Builtin.Block
                      className="secondary-btn-arrow-wrapper dark small"
                      tag="div"
                    >
                      <_Builtin.Image
                        className="arrow-right white show-on-mobile"
                        loading="lazy"
                        width="auto"
                        height="auto"
                        alt="Arrow Right icon"
                        src="https://cdn.prod.website-files.com/65459ab6440c1238e7ede277/6549b3446e46215a12ab49d4_arrow_dark.svg"
                      />
                      <_Builtin.Image
                        className="arrow-right translate-left hide-on-mobile"
                        loading="lazy"
                        width="auto"
                        height="auto"
                        alt="Arrow Right icon"
                        src="https://cdn.prod.website-files.com/65459ab6440c1238e7ede277/6549b3446e46215a12ab49d3_arrow_white.svg"
                      />
                    </_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.Link>
              </_Builtin.Block>
              <_Builtin.Block className="animation-item" tag="div">
                <_Builtin.Block className="outer-line-wrapper" tag="div">
                  <_Builtin.Block
                    className="line-wrapper short"
                    data-w-id="013f7e94-4b70-18d2-b906-f2ba4590e25d"
                    tag="div"
                  >
                    <_Builtin.Block className="vertical-line" tag="div" />
                    <_Builtin.Block className="line-circle" tag="div" />
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Link
                  className="animation-item-text link"
                  data-w-id="013f7e94-4b70-18d2-b906-f2ba4590e260"
                  button={false}
                  block="inline"
                  options={{
                    href: "/behandlung/parodontologie",
                  }}
                >
                  <_Builtin.Block className="text-block-5" tag="div">
                    {"Parodontitis"}
                  </_Builtin.Block>
                  <_Builtin.Block className="more-info-wrapper" tag="div">
                    <_Builtin.Block className="more-info" tag="div">
                      {"mehrinfos"}
                    </_Builtin.Block>
                    <_Builtin.Block
                      className="secondary-btn-arrow-wrapper dark small"
                      tag="div"
                    >
                      <_Builtin.Image
                        className="arrow-right white show-on-mobile"
                        loading="lazy"
                        width="auto"
                        height="auto"
                        alt="Arrow Right icon"
                        src="https://cdn.prod.website-files.com/65459ab6440c1238e7ede277/6549b3446e46215a12ab49d4_arrow_dark.svg"
                      />
                      <_Builtin.Image
                        className="arrow-right translate-left hide-on-mobile"
                        loading="lazy"
                        width="auto"
                        height="auto"
                        alt="Arrow Right icon"
                        src="https://cdn.prod.website-files.com/65459ab6440c1238e7ede277/6549b3446e46215a12ab49d3_arrow_white.svg"
                      />
                    </_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.Link>
              </_Builtin.Block>
              <_Builtin.Block className="animation-item" tag="div">
                <_Builtin.Block className="outer-line-wrapper" tag="div">
                  <_Builtin.Block
                    className="line-wrapper short"
                    data-w-id="013f7e94-4b70-18d2-b906-f2ba4590e26b"
                    tag="div"
                  >
                    <_Builtin.Block className="vertical-line" tag="div" />
                    <_Builtin.Block className="line-circle" tag="div" />
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Link
                  className="animation-item-text link"
                  data-w-id="013f7e94-4b70-18d2-b906-f2ba4590e26e"
                  button={false}
                  block="inline"
                  options={{
                    href: "/behandlung/funktionsanalytische-massnahmen",
                  }}
                >
                  <_Builtin.Block className="text-size-xlarge" tag="div">
                    {"Funktionsanalytische-massnahmen"}
                  </_Builtin.Block>
                  <_Builtin.Block className="more-info-wrapper" tag="div">
                    <_Builtin.Block className="more-info" tag="div">
                      {"mehrinfos"}
                    </_Builtin.Block>
                    <_Builtin.Block
                      className="secondary-btn-arrow-wrapper dark small"
                      tag="div"
                    >
                      <_Builtin.Image
                        className="arrow-right white show-on-mobile"
                        loading="lazy"
                        width="auto"
                        height="auto"
                        alt="Arrow Right icon"
                        src="https://cdn.prod.website-files.com/65459ab6440c1238e7ede277/6549b3446e46215a12ab49d4_arrow_dark.svg"
                      />
                      <_Builtin.Image
                        className="arrow-right translate-left hide-on-mobile"
                        loading="lazy"
                        width="auto"
                        height="auto"
                        alt="Arrow Right icon"
                        src="https://cdn.prod.website-files.com/65459ab6440c1238e7ede277/6549b3446e46215a12ab49d3_arrow_white.svg"
                      />
                    </_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.Link>
              </_Builtin.Block>
              <_Builtin.Block className="animation-item" tag="div">
                <_Builtin.Block className="outer-line-wrapper" tag="div">
                  <_Builtin.Block
                    className="line-wrapper short"
                    data-w-id="013f7e94-4b70-18d2-b906-f2ba4590e279"
                    tag="div"
                  >
                    <_Builtin.Block className="vertical-line" tag="div" />
                    <_Builtin.Block className="line-circle" tag="div" />
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Link
                  className="animation-item-text link"
                  data-w-id="013f7e94-4b70-18d2-b906-f2ba4590e27c"
                  button={false}
                  block="inline"
                  options={{
                    href: "/behandlung/wurzelbehandlung-unter-mikroskop",
                  }}
                >
                  <_Builtin.Block tag="div">
                    {"Wurzel-"}
                    <br />
                    {"behandlung"}
                  </_Builtin.Block>
                  <_Builtin.Block className="more-info-wrapper" tag="div">
                    <_Builtin.Block className="more-info" tag="div">
                      {"mehrinfos"}
                    </_Builtin.Block>
                    <_Builtin.Block
                      className="secondary-btn-arrow-wrapper dark small"
                      tag="div"
                    >
                      <_Builtin.Image
                        className="arrow-right white show-on-mobile"
                        loading="lazy"
                        width="auto"
                        height="auto"
                        alt="Arrow Right icon"
                        src="https://cdn.prod.website-files.com/65459ab6440c1238e7ede277/6549b3446e46215a12ab49d4_arrow_dark.svg"
                      />
                      <_Builtin.Image
                        className="arrow-right translate-left hide-on-mobile"
                        loading="lazy"
                        width="auto"
                        height="auto"
                        alt="Arrow Right icon"
                        src="https://cdn.prod.website-files.com/65459ab6440c1238e7ede277/6549b3446e46215a12ab49d3_arrow_white.svg"
                      />
                    </_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.Link>
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block className="animation-line-column" tag="div">
              <_Builtin.Block className="animation-item" tag="div">
                <_Builtin.Block className="outer-line-wrapper" tag="div">
                  <_Builtin.Block
                    className="line-wrapper long alt"
                    data-w-id="013f7e94-4b70-18d2-b906-f2ba4590e28a"
                    tag="div"
                  >
                    <_Builtin.Block className="vertical-line" tag="div" />
                    <_Builtin.Block className="line-circle" tag="div" />
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Link
                  className="servicelink"
                  data-w-id="013f7e94-4b70-18d2-b906-f2ba4590e28d"
                  button={false}
                  block="inline"
                  options={{
                    href: "/behandlung/bleaching",
                  }}
                >
                  <_Builtin.Block className="animation-item-text" tag="div">
                    {"Bleaching"}
                  </_Builtin.Block>
                  <_Builtin.Block className="more-info-wrapper" tag="div">
                    <_Builtin.Block className="more-info" tag="div">
                      {"mehrinfos"}
                    </_Builtin.Block>
                    <_Builtin.Block
                      className="secondary-btn-arrow-wrapper dark small"
                      tag="div"
                    >
                      <_Builtin.Image
                        className="arrow-right white show-on-mobile"
                        loading="lazy"
                        width="auto"
                        height="auto"
                        alt="Arrow Right icon"
                        src="https://cdn.prod.website-files.com/65459ab6440c1238e7ede277/6549b3446e46215a12ab49d4_arrow_dark.svg"
                      />
                      <_Builtin.Image
                        className="arrow-right translate-left hide-on-mobile"
                        loading="lazy"
                        width="auto"
                        height="auto"
                        alt="Arrow Right icon"
                        src="https://cdn.prod.website-files.com/65459ab6440c1238e7ede277/6549b3446e46215a12ab49d3_arrow_white.svg"
                      />
                    </_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.Link>
              </_Builtin.Block>
              <_Builtin.Block className="animation-item" tag="div">
                <_Builtin.Block className="outer-line-wrapper" tag="div">
                  <_Builtin.Block
                    className="line-wrapper short"
                    data-w-id="013f7e94-4b70-18d2-b906-f2ba4590e298"
                    tag="div"
                  >
                    <_Builtin.Block className="vertical-line" tag="div" />
                    <_Builtin.Block className="line-circle" tag="div" />
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Link
                  className="animation-item-text link"
                  data-w-id="013f7e94-4b70-18d2-b906-f2ba4590e29b"
                  button={false}
                  block="inline"
                  options={{
                    href: "/behandlung/implantologie",
                  }}
                >
                  <_Builtin.Block className="" tag="div">
                    {"Implantologie"}
                  </_Builtin.Block>
                  <_Builtin.Block className="more-info-wrapper" tag="div">
                    <_Builtin.Block className="more-info" tag="div">
                      {"mehrinfos"}
                    </_Builtin.Block>
                    <_Builtin.Block
                      className="secondary-btn-arrow-wrapper dark small"
                      tag="div"
                    >
                      <_Builtin.Image
                        className="arrow-right white show-on-mobile"
                        loading="lazy"
                        width="auto"
                        height="auto"
                        alt="Arrow Right icon"
                        src="https://cdn.prod.website-files.com/65459ab6440c1238e7ede277/6549b3446e46215a12ab49d4_arrow_dark.svg"
                      />
                      <_Builtin.Image
                        className="arrow-right translate-left hide-on-mobile"
                        loading="lazy"
                        width="auto"
                        height="auto"
                        alt="Arrow Right icon"
                        src="https://cdn.prod.website-files.com/65459ab6440c1238e7ede277/6549b3446e46215a12ab49d3_arrow_white.svg"
                      />
                    </_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.Link>
              </_Builtin.Block>
              <_Builtin.Block className="animation-item" tag="div">
                <_Builtin.Block className="outer-line-wrapper" tag="div">
                  <_Builtin.Block
                    className="line-wrapper short"
                    data-w-id="013f7e94-4b70-18d2-b906-f2ba4590e2a6"
                    tag="div"
                  >
                    <_Builtin.Block className="vertical-line" tag="div" />
                    <_Builtin.Block className="line-circle" tag="div" />
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Link
                  className="animation-item-text link"
                  data-w-id="013f7e94-4b70-18d2-b906-f2ba4590e2a9"
                  button={false}
                  block="inline"
                  options={{
                    href: "/behandlung/zahnersatzversorgung",
                  }}
                >
                  <_Builtin.Block tag="div">
                    {"Zahnersatz-versorgung"}
                  </_Builtin.Block>
                  <_Builtin.Block className="more-info-wrapper" tag="div">
                    <_Builtin.Block className="more-info" tag="div">
                      {"mehrinfos"}
                    </_Builtin.Block>
                    <_Builtin.Block
                      className="secondary-btn-arrow-wrapper dark small"
                      tag="div"
                    >
                      <_Builtin.Image
                        className="arrow-right white show-on-mobile"
                        loading="lazy"
                        width="auto"
                        height="auto"
                        alt="Arrow Right icon"
                        src="https://cdn.prod.website-files.com/65459ab6440c1238e7ede277/6549b3446e46215a12ab49d4_arrow_dark.svg"
                      />
                      <_Builtin.Image
                        className="arrow-right translate-left hide-on-mobile"
                        loading="lazy"
                        width="auto"
                        height="auto"
                        alt="Arrow Right icon"
                        src="https://cdn.prod.website-files.com/65459ab6440c1238e7ede277/6549b3446e46215a12ab49d3_arrow_white.svg"
                      />
                    </_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.Link>
              </_Builtin.Block>
              <_Builtin.Block className="animation-item" tag="div">
                <_Builtin.Block className="outer-line-wrapper" tag="div">
                  <_Builtin.Block
                    className="line-wrapper short"
                    data-w-id="013f7e94-4b70-18d2-b906-f2ba4590e2b4"
                    tag="div"
                  >
                    <_Builtin.Block className="vertical-line" tag="div" />
                    <_Builtin.Block className="line-circle" tag="div" />
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Link
                  className="animation-item-text link"
                  data-w-id="013f7e94-4b70-18d2-b906-f2ba4590e2b7"
                  button={false}
                  block="inline"
                  options={{
                    href: "/behandlung/kinderzahnheilkunde",
                  }}
                >
                  <_Builtin.Block tag="div">
                    {"Kinderzahn-medizin"}
                  </_Builtin.Block>
                  <_Builtin.Block className="more-info-wrapper" tag="div">
                    <_Builtin.Block className="more-info" tag="div">
                      {"mehrinfos"}
                    </_Builtin.Block>
                    <_Builtin.Block
                      className="secondary-btn-arrow-wrapper dark small"
                      tag="div"
                    >
                      <_Builtin.Image
                        className="arrow-right white show-on-mobile"
                        loading="lazy"
                        width="auto"
                        height="auto"
                        alt="Arrow Right icon"
                        src="https://cdn.prod.website-files.com/65459ab6440c1238e7ede277/6549b3446e46215a12ab49d4_arrow_dark.svg"
                      />
                      <_Builtin.Image
                        className="arrow-right translate-left hide-on-mobile"
                        loading="lazy"
                        width="auto"
                        height="auto"
                        alt="Arrow Right icon"
                        src="https://cdn.prod.website-files.com/65459ab6440c1238e7ede277/6549b3446e46215a12ab49d3_arrow_white.svg"
                      />
                    </_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.Link>
              </_Builtin.Block>
              <_Builtin.Block className="animation-item" tag="div">
                <_Builtin.Block className="outer-line-wrapper" tag="div">
                  <_Builtin.Block
                    className="line-wrapper short"
                    data-w-id="013f7e94-4b70-18d2-b906-f2ba4590e2c2"
                    tag="div"
                  >
                    <_Builtin.Block className="vertical-line" tag="div" />
                    <_Builtin.Block className="line-circle" tag="div" />
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Link
                  className="animation-item-text link"
                  data-w-id="013f7e94-4b70-18d2-b906-f2ba4590e2c5"
                  button={false}
                  block="inline"
                  options={{
                    href: "/behandlung/inraoral-scanner",
                  }}
                >
                  <_Builtin.Block tag="div">
                    {"Inraoral-scanner"}
                  </_Builtin.Block>
                  <_Builtin.Block className="more-info-wrapper" tag="div">
                    <_Builtin.Block className="more-info" tag="div">
                      {"mehrinfos"}
                    </_Builtin.Block>
                    <_Builtin.Block
                      className="secondary-btn-arrow-wrapper dark small"
                      tag="div"
                    >
                      <_Builtin.Image
                        className="arrow-right white show-on-mobile"
                        loading="lazy"
                        width="auto"
                        height="auto"
                        alt="Arrow Right icon"
                        src="https://cdn.prod.website-files.com/65459ab6440c1238e7ede277/6549b3446e46215a12ab49d4_arrow_dark.svg"
                      />
                      <_Builtin.Image
                        className="arrow-right translate-left hide-on-mobile"
                        loading="lazy"
                        width="auto"
                        height="auto"
                        alt="Arrow Right icon"
                        src="https://cdn.prod.website-files.com/65459ab6440c1238e7ede277/6549b3446e46215a12ab49d3_arrow_white.svg"
                      />
                    </_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.Link>
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
