import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import { ButtonPrimary } from "./ButtonPrimary";

const _interactionsData = JSON.parse(
  '{"events":{"e-21":{"id":"e-21","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-18","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-44"}},"mediaQueries":["main"],"target":{"selector":".menu-link","originalId":"b919e661-8b51-a329-cf4d-3b80ef57b749","appliesTo":"CLASS"},"targets":[{"selector":".menu-link","originalId":"b919e661-8b51-a329-cf4d-3b80ef57b749","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1643709888541},"e-44":{"id":"e-44","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-16","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-21"}},"mediaQueries":["main"],"target":{"selector":".menu-link","originalId":"b919e661-8b51-a329-cf4d-3b80ef57b749","appliesTo":"CLASS"},"targets":[{"selector":".menu-link","originalId":"b919e661-8b51-a329-cf4d-3b80ef57b749","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1643709888542},"e-30":{"id":"e-30","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-18","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-25"}},"mediaQueries":["main"],"target":{"id":"26c375eb-323e-4426-fbae-ad28d9471526","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"26c375eb-323e-4426-fbae-ad28d9471526","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1699328746120},"e-31":{"id":"e-31","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-18","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-42"}},"mediaQueries":["main"],"target":{"id":"26c375eb-323e-4426-fbae-ad28d9471538","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"26c375eb-323e-4426-fbae-ad28d9471538","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1699328746120},"e-46":{"id":"e-46","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-18","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-32"}},"mediaQueries":["main"],"target":{"id":"26c375eb-323e-4426-fbae-ad28d947154a","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"26c375eb-323e-4426-fbae-ad28d947154a","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1699328746120},"e-39":{"id":"e-39","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-18","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-40"}},"mediaQueries":["main"],"target":{"selector":".menu-link","originalId":"26c375eb-323e-4426-fbae-ad28d9471514","appliesTo":"CLASS"},"targets":[{"selector":".menu-link","originalId":"26c375eb-323e-4426-fbae-ad28d9471514","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1699328746120},"e-40":{"id":"e-40","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-16","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-39"}},"mediaQueries":["main"],"target":{"selector":".menu-link","originalId":"26c375eb-323e-4426-fbae-ad28d9471514","appliesTo":"CLASS"},"targets":[{"selector":".menu-link","originalId":"26c375eb-323e-4426-fbae-ad28d9471514","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1699328746120},"e-22":{"id":"e-22","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-18","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-24"}},"mediaQueries":["main"],"target":{"id":"26c375eb-323e-4426-fbae-ad28d9471541","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"26c375eb-323e-4426-fbae-ad28d9471541","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1699328746120},"e-20":{"id":"e-20","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-18","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-33"}},"mediaQueries":["main"],"target":{"id":"26c375eb-323e-4426-fbae-ad28d947152f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"26c375eb-323e-4426-fbae-ad28d947152f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1699328746120},"e-61":{"id":"e-61","name":"","animationType":"custom","eventTypeId":"SCROLLING_IN_VIEW","action":{"id":"","actionTypeId":"GENERAL_CONTINUOUS_ACTION","config":{"actionListId":"a-8","affectedElements":{},"duration":0}},"mediaQueries":["medium","small","tiny"],"target":{"id":"f250a8c2-4623-3422-2031-e6565be05961","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"f250a8c2-4623-3422-2031-e6565be05961","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":[{"continuousParameterGroupId":"a-8-p","smoothing":97,"startsEntering":true,"addStartOffset":false,"addOffsetValue":50,"startsExiting":false,"addEndOffset":false,"endOffsetValue":50}],"createdOn":1643198571656},"e-85":{"id":"e-85","name":"","animationType":"preset","eventTypeId":"SCROLLING_IN_VIEW","action":{"id":"","actionTypeId":"GENERAL_CONTINUOUS_ACTION","config":{"actionListId":"a-8","affectedElements":{},"duration":0}},"mediaQueries":["medium","small","tiny"],"target":{"id":"013f7e94-4b70-18d2-b906-f2ba4590e224","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"013f7e94-4b70-18d2-b906-f2ba4590e224","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":[{"continuousParameterGroupId":"a-8-p","smoothing":97,"startsEntering":true,"addStartOffset":false,"addOffsetValue":50,"startsExiting":false,"addEndOffset":false,"endOffsetValue":50}],"createdOn":1699328831391},"e-104":{"id":"e-104","name":"","animationType":"preset","eventTypeId":"SCROLLING_IN_VIEW","action":{"id":"","actionTypeId":"GENERAL_CONTINUOUS_ACTION","config":{"actionListId":"a-8","affectedElements":{},"duration":0}},"mediaQueries":["medium","small","tiny"],"target":{"id":"27dca5d1-39cf-2acf-347f-fad09d94a805","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"27dca5d1-39cf-2acf-347f-fad09d94a805","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":[{"continuousParameterGroupId":"a-8-p","smoothing":97,"startsEntering":true,"addStartOffset":false,"addOffsetValue":50,"startsExiting":false,"addEndOffset":false,"endOffsetValue":50}],"createdOn":1643781860203},"e-105":{"id":"e-105","name":"","animationType":"custom","eventTypeId":"SCROLLING_IN_VIEW","action":{"id":"","actionTypeId":"GENERAL_CONTINUOUS_ACTION","config":{"actionListId":"a-41","affectedElements":{},"duration":0}},"mediaQueries":["main"],"target":{"id":"27dca5d1-39cf-2acf-347f-fad09d94a805","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"27dca5d1-39cf-2acf-347f-fad09d94a805","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":[{"continuousParameterGroupId":"a-41-p","smoothing":97,"startsEntering":true,"addStartOffset":false,"addOffsetValue":50,"startsExiting":false,"addEndOffset":false,"endOffsetValue":50}],"createdOn":1643874377808},"e-112":{"id":"e-112","name":"","animationType":"preset","eventTypeId":"SCROLLING_IN_VIEW","action":{"id":"","actionTypeId":"GENERAL_CONTINUOUS_ACTION","config":{"actionListId":"a-8","affectedElements":{},"duration":0}},"mediaQueries":["medium","small","tiny"],"target":{"id":"2a005cce-7eaa-9ba1-36f4-b6983aa3230b","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"2a005cce-7eaa-9ba1-36f4-b6983aa3230b","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":[{"continuousParameterGroupId":"a-8-p","smoothing":97,"startsEntering":true,"addStartOffset":false,"addOffsetValue":50,"startsExiting":false,"addEndOffset":false,"endOffsetValue":50}],"createdOn":1695305102224},"e-137":{"id":"e-137","name":"","animationType":"preset","eventTypeId":"SCROLLING_IN_VIEW","action":{"id":"","actionTypeId":"GENERAL_CONTINUOUS_ACTION","config":{"actionListId":"a-8","affectedElements":{},"duration":0}},"mediaQueries":["medium","small","tiny"],"target":{"id":"6b9b8ac9-ef5a-61a2-e885-94ae5d8f217d","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6b9b8ac9-ef5a-61a2-e885-94ae5d8f217d","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":[{"continuousParameterGroupId":"a-8-p","smoothing":97,"startsEntering":true,"addStartOffset":false,"addOffsetValue":50,"startsExiting":false,"addEndOffset":false,"endOffsetValue":50}],"createdOn":1644484686898},"e-135":{"id":"e-135","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-11","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-130"}},"mediaQueries":["main"],"target":{"selector":".mail-link","originalId":"6b9b8ac9-ef5a-61a2-e885-94ae5d8f21eb","appliesTo":"CLASS"},"targets":[{"selector":".mail-link","originalId":"6b9b8ac9-ef5a-61a2-e885-94ae5d8f21eb","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1644906179536},"e-130":{"id":"e-130","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-12","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-135"}},"mediaQueries":["main"],"target":{"selector":".mail-link","originalId":"6b9b8ac9-ef5a-61a2-e885-94ae5d8f21eb","appliesTo":"CLASS"},"targets":[{"selector":".mail-link","originalId":"6b9b8ac9-ef5a-61a2-e885-94ae5d8f21eb","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1644906179540},"e-152":{"id":"e-152","name":"","animationType":"preset","eventTypeId":"SCROLLING_IN_VIEW","action":{"id":"","actionTypeId":"GENERAL_CONTINUOUS_ACTION","config":{"actionListId":"a-50","affectedElements":{},"duration":0}},"mediaQueries":["main"],"target":{"id":"2cb65f63-aefa-4c3e-a7f4-419383c67240","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"2cb65f63-aefa-4c3e-a7f4-419383c67240","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":[{"continuousParameterGroupId":"a-50-p","smoothing":97,"startsEntering":true,"addStartOffset":false,"addOffsetValue":50,"startsExiting":false,"addEndOffset":false,"endOffsetValue":50}],"createdOn":1699343805463},"e-153":{"id":"e-153","name":"","animationType":"preset","eventTypeId":"SCROLLING_IN_VIEW","action":{"id":"","actionTypeId":"GENERAL_CONTINUOUS_ACTION","config":{"actionListId":"a-51","affectedElements":{},"duration":0}},"mediaQueries":["medium","small","tiny"],"target":{"id":"2cb65f63-aefa-4c3e-a7f4-419383c67247","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"2cb65f63-aefa-4c3e-a7f4-419383c67247","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":[{"continuousParameterGroupId":"a-51-p","smoothing":97,"startsEntering":true,"addStartOffset":false,"addOffsetValue":50,"startsExiting":false,"addEndOffset":false,"endOffsetValue":50}],"createdOn":1699343805463},"e-222":{"id":"e-222","name":"","animationType":"preset","eventTypeId":"SCROLLING_IN_VIEW","action":{"id":"","actionTypeId":"GENERAL_CONTINUOUS_ACTION","config":{"actionListId":"a-93","affectedElements":{},"duration":0}},"mediaQueries":["medium","small","tiny"],"target":{"id":"5bb1e1e0-5544-9312-7458-4af4da2122bf","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"5bb1e1e0-5544-9312-7458-4af4da2122bf","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":[{"continuousParameterGroupId":"a-93-p","smoothing":97,"startsEntering":true,"addStartOffset":false,"addOffsetValue":50,"startsExiting":false,"addEndOffset":false,"endOffsetValue":50}],"createdOn":1700998569578}},"actionLists":{"a-18":{"id":"a-18","title":"Manu Link Hover In 2","actionItemGroups":[{"actionItems":[{"id":"a-18-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".menu-background-image","selectorGuids":["9d015204-d92e-e364-97e5-1f0713b8325e"]},"value":0,"unit":""}},{"id":"a-18-n-2","actionTypeId":"STYLE_FILTER","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".image.for-menu","selectorGuids":["7351f457-bfa6-abe4-ae61-86758a6dcb48","9d015204-d92e-e364-97e5-1f0713b8326b"]},"filters":[{"type":"saturate","filterId":"c1af","value":99,"unit":"%"}]}},{"id":"a-18-n-3","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".menu-number-text","selectorGuids":["9d015204-d92e-e364-97e5-1f0713b8325f"]},"globalSwatchId":"","rValue":255,"bValue":255,"gValue":255,"aValue":0.5}},{"id":"a-18-n-4","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".big-text.for-menu","selectorGuids":["9d015204-d92e-e364-97e5-1f0713b83266","9d015204-d92e-e364-97e5-1f0713b8326a"]},"globalSwatchId":"","rValue":255,"bValue":255,"gValue":255,"aValue":0.5}}]},{"actionItems":[{"id":"a-18-n-5","actionTypeId":"STYLE_FILTER","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".image.for-menu","selectorGuids":["7351f457-bfa6-abe4-ae61-86758a6dcb48","9d015204-d92e-e364-97e5-1f0713b8326b"]},"filters":[{"type":"saturate","filterId":"6ab0","value":99,"unit":"%"}]}}]},{"actionItems":[{"id":"a-18-n-6","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":1000,"target":{"useEventTarget":"CHILDREN","selector":".menu-background-image","selectorGuids":["9d015204-d92e-e364-97e5-1f0713b8325e"]},"value":1,"unit":""}},{"id":"a-18-n-7","actionTypeId":"STYLE_FILTER","config":{"delay":0,"easing":"ease","duration":30000,"target":{"useEventTarget":"CHILDREN","selector":".image.for-menu","selectorGuids":["7351f457-bfa6-abe4-ae61-86758a6dcb48","9d015204-d92e-e364-97e5-1f0713b8326b"]},"filters":[{"type":"saturate","filterId":"813e","value":99,"unit":"%"}]}},{"id":"a-18-n-8","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"ease","duration":1000,"target":{"useEventTarget":"CHILDREN","selector":".menu-number-text","selectorGuids":["9d015204-d92e-e364-97e5-1f0713b8325f"]},"globalSwatchId":"","rValue":255,"bValue":255,"gValue":255,"aValue":1}},{"id":"a-18-n-9","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"ease","duration":1000,"target":{"useEventTarget":"CHILDREN","selector":".big-text.for-menu","selectorGuids":["9d015204-d92e-e364-97e5-1f0713b83266","9d015204-d92e-e364-97e5-1f0713b8326a"]},"globalSwatchId":"","rValue":255,"bValue":255,"gValue":255,"aValue":1}}]}],"useFirstGroupAsInitialState":true,"createdOn":1643709900825},"a-16":{"id":"a-16","title":"Manu Link Hover Out","actionItemGroups":[{"actionItems":[{"id":"a-16-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":1000,"target":{"useEventTarget":"CHILDREN","selector":".menu-background-image","selectorGuids":["9d015204-d92e-e364-97e5-1f0713b8325e"]},"value":0,"unit":""}},{"id":"a-16-n-2","actionTypeId":"STYLE_FILTER","config":{"delay":0,"easing":"ease","duration":1000,"target":{"useEventTarget":"CHILDREN","selector":".image.for-menu","selectorGuids":["7351f457-bfa6-abe4-ae61-86758a6dcb48","9d015204-d92e-e364-97e5-1f0713b8326b"]},"filters":[{"type":"saturate","filterId":"83b1","value":0,"unit":"%"}]}},{"id":"a-16-n-3","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"ease","duration":1000,"target":{"useEventTarget":"CHILDREN","selector":".menu-number-text","selectorGuids":["9d015204-d92e-e364-97e5-1f0713b8325f"]},"globalSwatchId":"","rValue":255,"bValue":255,"gValue":255,"aValue":0.5}},{"id":"a-16-n-4","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"ease","duration":1000,"target":{"useEventTarget":"CHILDREN","selector":".big-text.for-menu","selectorGuids":["9d015204-d92e-e364-97e5-1f0713b83266","9d015204-d92e-e364-97e5-1f0713b8326a"]},"globalSwatchId":"","rValue":255,"bValue":255,"gValue":255,"aValue":0.5}}]}],"useFirstGroupAsInitialState":false,"createdOn":1643709900825},"a-8":{"id":"a-8","title":"Section Name Parallax - Mobile 3","continuousParameterGroups":[{"id":"a-8-p","type":"SCROLL_PROGRESS","parameterLabel":"Scroll","continuousActionGroups":[{"keyframe":0,"actionItems":[{"id":"a-8-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"SIBLINGS","selector":".section-heading_outlined","selectorGuids":["7351f457-bfa6-abe4-ae61-86758a6dcb45"]},"xValue":-5,"xUnit":"vw","yUnit":"PX","zUnit":"PX"}}]},{"keyframe":100,"actionItems":[{"id":"a-8-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"SIBLINGS","selector":".section-heading_outlined","selectorGuids":["7351f457-bfa6-abe4-ae61-86758a6dcb45"]},"xValue":-20,"xUnit":"vw","yUnit":"PX","zUnit":"PX"}}]}]}],"createdOn":1643198589173},"a-41":{"id":"a-41","title":"Section Name Parallax - Desktop","continuousParameterGroups":[{"id":"a-41-p","type":"SCROLL_PROGRESS","parameterLabel":"Scroll","continuousActionGroups":[{"keyframe":0,"actionItems":[{"id":"a-41-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"SIBLINGS","selector":".section-heading_outlined.outlined","selectorGuids":["7351f457-bfa6-abe4-ae61-86758a6dcb45","7351f457-bfa6-abe4-ae61-86758a6dcb5c"]},"xValue":-5,"xUnit":"vw","yUnit":"PX","zUnit":"PX"}}]},{"keyframe":100,"actionItems":[{"id":"a-41-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"SIBLINGS","selector":".section-heading_outlined.outlined","selectorGuids":["7351f457-bfa6-abe4-ae61-86758a6dcb45","7351f457-bfa6-abe4-ae61-86758a6dcb5c"]},"xValue":-8,"xUnit":"vw","yUnit":"PX","zUnit":"PX"}}]}]}],"createdOn":1643874389144},"a-11":{"id":"a-11","title":"Cursor - Hover In","actionItemGroups":[{"actionItems":[{"id":"a-11-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{},"widthValue":25,"heightValue":25,"widthUnit":"px","heightUnit":"px","locked":false}}]},{"actionItems":[{"id":"a-11-n-2","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":400,"target":{},"widthValue":75,"heightValue":75,"widthUnit":"px","heightUnit":"px","locked":false}}]}],"useFirstGroupAsInitialState":true,"createdOn":1644847102447},"a-12":{"id":"a-12","title":"Cursor - Hover Out","actionItemGroups":[{"actionItems":[{"id":"a-12-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":400,"target":{},"widthValue":25,"heightValue":25,"widthUnit":"px","heightUnit":"px","locked":false}}]}],"useFirstGroupAsInitialState":false,"createdOn":1644847102447},"a-50":{"id":"a-50","title":"Ambiente Section Name Paralax 3","continuousParameterGroups":[{"id":"a-50-p","type":"SCROLL_PROGRESS","parameterLabel":"Scroll","continuousActionGroups":[{"keyframe":2,"actionItems":[{"id":"a-50-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".section-heading_outlined.outlined-white","selectorGuids":["7351f457-bfa6-abe4-ae61-86758a6dcb45","f03229e9-ced0-5e53-9414-ab827dc0ed65"]},"xValue":-10,"xUnit":"vw","yUnit":"PX","zUnit":"PX"}}]},{"keyframe":100,"actionItems":[{"id":"a-50-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".section-heading_outlined.outlined-white","selectorGuids":["7351f457-bfa6-abe4-ae61-86758a6dcb45","f03229e9-ced0-5e53-9414-ab827dc0ed65"]},"xValue":40,"xUnit":"vw","yUnit":"PX","zUnit":"PX"}}]}]}],"createdOn":1643198589173},"a-51":{"id":"a-51","title":"Section Name Parallax - Mobile 5","continuousParameterGroups":[{"id":"a-51-p","type":"SCROLL_PROGRESS","parameterLabel":"Scroll","continuousActionGroups":[{"keyframe":0,"actionItems":[{"id":"a-51-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"SIBLINGS","selector":".section-heading_outlined","selectorGuids":["7351f457-bfa6-abe4-ae61-86758a6dcb45"]},"xValue":-5,"xUnit":"vw","yUnit":"PX","zUnit":"PX"}}]},{"keyframe":100,"actionItems":[{"id":"a-51-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"SIBLINGS","selector":".section-heading_outlined","selectorGuids":["7351f457-bfa6-abe4-ae61-86758a6dcb45"]},"xValue":-20,"xUnit":"vw","yUnit":"PX","zUnit":"PX"}}]}]}],"createdOn":1643198589173},"a-93":{"id":"a-93","title":"Section Name Parallax - Mobile 8","continuousParameterGroups":[{"id":"a-93-p","type":"SCROLL_PROGRESS","parameterLabel":"Scroll","continuousActionGroups":[{"keyframe":0,"actionItems":[{"id":"a-93-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"SIBLINGS","selector":".section-heading_outlined","selectorGuids":["7351f457-bfa6-abe4-ae61-86758a6dcb45"]},"xValue":-5,"xUnit":"vw","yUnit":"PX","zUnit":"PX"}}]},{"keyframe":100,"actionItems":[{"id":"a-93-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"SIBLINGS","selector":".section-heading_outlined","selectorGuids":["7351f457-bfa6-abe4-ae61-86758a6dcb45"]},"xValue":-20,"xUnit":"vw","yUnit":"PX","zUnit":"PX"}}]}]}],"createdOn":1643198589173}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function SectionKontakt({
  as: _Component = _Builtin.Section,
  buttonsSlot,
}) {
  _interactions.useInteractions(_interactionsData);

  return (
    <_Component
      className="hero for-contact"
      grid={{
        type: "section",
      }}
      tag="div"
    >
      <_Builtin.Block className="contact-container" tag="div">
        <_Builtin.Block className="contact-image-wrapper" tag="div" />
        <_Builtin.Block className="hero-container for-contact" tag="div">
          <_Builtin.Block className="align-center" tag="div">
            <_Builtin.Block className="spacer-large" tag="div" />
            <_Builtin.Heading className="heading-3 smaller-contact" tag="h1">
              {"KontaKt"}
            </_Builtin.Heading>
            <_Builtin.Block className="contact-image-wrapper-mobile" tag="div">
              <_Builtin.Image
                className="image zero-saturation-image"
                loading="lazy"
                width="auto"
                height="auto"
                alt=""
                src="https://uploads-ssl.webflow.com/65459ab6440c1238e7ede277/6549b2ef41f8a92cdb1b895d_Kontakt---DSC03973.webp"
              />
            </_Builtin.Block>
            <_Builtin.Block
              className="section-heading_wrapper for-contact"
              tag="div"
            >
              <_Builtin.Block
                className="section-heading_outlined outlined"
                tag="div"
              >
                {"Kontakt"}
              </_Builtin.Block>
              <_Builtin.Heading className="heading-2 absolute" tag="h2">
                {"Kontakt"}
              </_Builtin.Heading>
              <_Builtin.Block
                className="section-heading_outlined-trigger"
                data-w-id="6b9b8ac9-ef5a-61a2-e885-94ae5d8f217d"
                tag="div"
              />
            </_Builtin.Block>
            <_Builtin.Block className="contact-paragraph" tag="div">
              <_Builtin.Paragraph className="paragraph">
                {"Gemeinschaftspraxis Ladar Desiree & Emil"}
                <br />
                {"Hindenburgstr. 2"}
                <br />
                {"72250 Freudenstadt"}
                <br />
                <br />
                {"Termine nach Vereinbarung."}
                <br />
                {"Alle Kassen und Privat."}
                <br />
                <br />
                {"Unsere Sprechzeiten:"}
              </_Builtin.Paragraph>
            </_Builtin.Block>
            <_Builtin.Block className="price-table" tag="div">
              <_Builtin.Block className="price-table_row cc-header" tag="div">
                <_Builtin.Block
                  className="price-table_cell cc-header first"
                  tag="div"
                />
                <_Builtin.Block
                  className="price-table_cell cc-header"
                  tag="div"
                >
                  <_Builtin.Block className="u-text-semibold" tag="div">
                    {"Morgen"}
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block
                  className="price-table_cell cc-header second"
                  tag="div"
                >
                  <_Builtin.Block className="u-text-semibold" tag="div">
                    {"Nachmittag"}
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block className="price-table_options" tag="div">
                <_Builtin.Block className="pricing-table_mobile-nav" tag="div">
                  <_Builtin.Link
                    className="pricing-table_mobile-nav-btn"
                    button={false}
                    id="price-card-left"
                    options={{
                      href: "#",
                    }}
                  >
                    <_Builtin.HtmlEmbed
                      className="pricing-table_mobile-nav-icon"
                      bind="1fc63648-bf5d-0e16-4ffc-48e4cd1dd3dc"
                      value="%3Csvg%20viewbox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M22.1538%2011.9819H1.81972%22%20stroke%3D%22currentColor%22%20stroke-width%3D%223%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%3Cpath%20d%3D%22M11.9863%2022.1535L1.82043%2011.9865L11.9863%201.81946%22%20stroke%3D%22currentColor%22%20stroke-width%3D%223%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%3C%2Fsvg%3E"
                    />
                    <_Builtin.Block className="u-sr-only" tag="div">
                      {"previous slide"}
                    </_Builtin.Block>
                  </_Builtin.Link>
                  <_Builtin.Link
                    className="pricing-table_mobile-nav-btn"
                    button={false}
                    id="price-card-right"
                    options={{
                      href: "#",
                    }}
                  >
                    <_Builtin.HtmlEmbed
                      className="pricing-table_mobile-nav-icon"
                      bind="1fc63648-bf5d-0e16-4ffc-48e4cd1dd3e0"
                      value="%3Csvg%20viewbox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M1.81934%2011.9819H22.1534%22%20stroke%3D%22currentColor%22%20stroke-width%3D%223%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%3Cpath%20d%3D%22M11.9863%2022.1535L22.1522%2011.9865L11.9863%201.81946%22%20stroke%3D%22currentColor%22%20stroke-width%3D%223%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%3C%2Fsvg%3E"
                    />
                    <_Builtin.Block className="u-sr-only" tag="div">
                      {"next slide"}
                    </_Builtin.Block>
                  </_Builtin.Link>
                </_Builtin.Block>
                <_Builtin.Block
                  className="swiper cc-price-table"
                  tag="div"
                  id="price-card-slider"
                >
                  <_Builtin.Block
                    className="swiper-wrapper cc-price-table"
                    tag="div"
                  >
                    <_Builtin.Block
                      className="swiper-slide cc-price-table"
                      tag="div"
                    >
                      <_Builtin.Block className="price-table_row" tag="div">
                        <_Builtin.Block
                          className="price-table_cell cc-title"
                          tag="div"
                        >
                          <_Builtin.Block className="u-text-semibold" tag="div">
                            <_Builtin.Span className="u-text-semibold">
                              {"Montag"}
                            </_Builtin.Span>
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block className="price-table_cell" tag="div">
                          <_Builtin.Block className=" text-block-6" tag="div">
                            {"8.00 – 12.30 Uhr"}
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block className="price-table_cell" tag="div">
                          <_Builtin.Block className="text-block-7" tag="div">
                            {"14.30 – 18.00 Uhr"}
                          </_Builtin.Block>
                        </_Builtin.Block>
                      </_Builtin.Block>
                    </_Builtin.Block>
                    <_Builtin.Block
                      className="swiper-slide cc-price-table"
                      tag="div"
                    >
                      <_Builtin.Block className="price-table_row" tag="div">
                        <_Builtin.Block
                          className="price-table_cell cc-title"
                          tag="div"
                        >
                          <_Builtin.Block className="u-text-semibold" tag="div">
                            <_Builtin.Span className="u-text-semibold">
                              {"Dienstag"}
                            </_Builtin.Span>
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block className="price-table_cell" tag="div">
                          <_Builtin.Block tag="div">
                            {"8.00 – 14.00 Uhr"}
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block className="price-table_cell" tag="div">
                          <_Builtin.Block tag="div">{"—"}</_Builtin.Block>
                        </_Builtin.Block>
                      </_Builtin.Block>
                    </_Builtin.Block>
                    <_Builtin.Block
                      className="swiper-slide cc-price-table"
                      tag="div"
                    >
                      <_Builtin.Block className="price-table_row" tag="div">
                        <_Builtin.Block
                          className="price-table_cell cc-title"
                          tag="div"
                        >
                          <_Builtin.Block className="u-text-semibold" tag="div">
                            <_Builtin.Span className="u-text-semibold">
                              {"Mittwoch"}
                            </_Builtin.Span>
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block className="price-table_cell" tag="div">
                          <_Builtin.Block tag="div">
                            {"8.00 – 12.30 Uhr"}
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block className="price-table_cell" tag="div">
                          <_Builtin.Block tag="div">
                            {"14.00 – 18.00 Uhr"}
                          </_Builtin.Block>
                        </_Builtin.Block>
                      </_Builtin.Block>
                    </_Builtin.Block>
                    <_Builtin.Block
                      className="swiper-slide cc-price-table"
                      tag="div"
                    >
                      <_Builtin.Block className="price-table_row" tag="div">
                        <_Builtin.Block
                          className="price-table_cell cc-title"
                          tag="div"
                        >
                          <_Builtin.Block className="u-text-semibold" tag="div">
                            <_Builtin.Span className="u-text-semibold">
                              {"Donnerstag"}
                            </_Builtin.Span>
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block className="price-table_cell" tag="div">
                          <_Builtin.Block tag="div">
                            {"8.00 – 12.30 Uhr"}
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block className="price-table_cell" tag="div">
                          <_Builtin.Block tag="div">
                            {"14.00 – 18.00 Uhr"}
                          </_Builtin.Block>
                        </_Builtin.Block>
                      </_Builtin.Block>
                    </_Builtin.Block>
                    <_Builtin.Block
                      className="swiper-slide cc-price-table"
                      tag="div"
                    >
                      <_Builtin.Block className="price-table_row" tag="div">
                        <_Builtin.Block
                          className="price-table_cell cc-title"
                          tag="div"
                        >
                          <_Builtin.Block className="u-text-semibold" tag="div">
                            <_Builtin.Span className="u-text-semibold">
                              {"Freitag"}
                            </_Builtin.Span>
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block className="price-table_cell" tag="div">
                          <_Builtin.Block tag="div">
                            {"8.00 – 13.00 Uhr"}
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block className="price-table_cell" tag="div">
                          <_Builtin.Block tag="div">{"—"}</_Builtin.Block>
                        </_Builtin.Block>
                      </_Builtin.Block>
                    </_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className="margin-top margin-medium hidden"
              tag="div"
            >
              <_Builtin.Block className="button-group" tag="div">
                {buttonsSlot ?? (
                  <ButtonPrimary
                    link={{
                      href: "#",
                    }}
                    text="Online Termin Buchen"
                  />
                )}
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className="contact-line transparent-background"
              tag="div"
            >
              <_Builtin.Block className="inner-contact-line" tag="div" />
            </_Builtin.Block>
            <_Builtin.Block className="contact-info-container" tag="div">
              <_Builtin.Block className="mail-wrapper" tag="div">
                <_Builtin.Link
                  className="mail-link"
                  button={false}
                  options={{
                    href: "mailto:praxis-ladar@t-online.de",
                  }}
                >
                  {"praxis-ladar@t-online.de"}
                </_Builtin.Link>
              </_Builtin.Block>
              <_Builtin.Block className="mail-wrapper" tag="div">
                <_Builtin.Link
                  className="mail-link"
                  button={false}
                  options={{
                    href: "mailto:praxis-ladar@t-online.de",
                  }}
                >
                  {"Tel. 07441-4222"}
                </_Builtin.Link>
              </_Builtin.Block>
              <_Builtin.Block className="mail-wrapper" tag="div">
                <_Builtin.Block className="mail-link" tag="div">
                  {"Fax. 07441-51124"}
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block className="spacer-xsmall" tag="div" />
              <_Builtin.Grid className="footer3_social-list" tag="div">
                <_Builtin.Link
                  className="footer3_social-link is-dark"
                  button={false}
                  options={{
                    href: "https://www.facebook.com/p/Zahnarztpraxis-Ladar-Desiree-Emil-100057178940974/",
                    target: "_blank",
                  }}
                >
                  <_Builtin.HtmlEmbed
                    className="icon-embed-small"
                    value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20aria-hidden%3D%22true%22%20role%3D%22img%22%20class%3D%22iconify%20iconify--ph%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20preserveAspectRatio%3D%22xMidYMid%20meet%22%20viewBox%3D%220%200%20256%20256%22%3E%3Cpath%20fill%3D%22currentColor%22%20d%3D%22M128%2026a102%20102%200%201%200%20102%20102A102.12%20102.12%200%200%200%20128%2026Zm6%20191.8V150h26a6%206%200%200%200%200-12h-26v-26a18%2018%200%200%201%2018-18h16a6%206%200%200%200%200-12h-16a30%2030%200%200%200-30%2030v26H96a6%206%200%200%200%200%2012h26v67.8a90%2090%200%201%201%2012%200Z%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E"
                  />
                </_Builtin.Link>
                <_Builtin.Link
                  className="footer3_social-link is-dark"
                  button={false}
                  options={{
                    href: "https://www.facebook.com/p/Zahnarztpraxis-Ladar-Desiree-Emil-100057178940974/",
                    target: "_blank",
                  }}
                >
                  <_Builtin.HtmlEmbed
                    className="icon-embed-small"
                    value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20aria-hidden%3D%22true%22%20role%3D%22img%22%20class%3D%22iconify%20iconify--ph%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20preserveAspectRatio%3D%22xMidYMid%20meet%22%20viewBox%3D%220%200%20256%20256%22%3E%3Cpath%20fill%3D%22currentColor%22%20d%3D%22M128%2082a46%2046%200%201%200%2046%2046a46.06%2046.06%200%200%200-46-46Zm0%2080a34%2034%200%201%201%2034-34a34%2034%200%200%201-34%2034Zm48-136H80a54.06%2054.06%200%200%200-54%2054v96a54.06%2054.06%200%200%200%2054%2054h96a54.06%2054.06%200%200%200%2054-54V80a54.06%2054.06%200%200%200-54-54Zm42%20150a42%2042%200%200%201-42%2042H80a42%2042%200%200%201-42-42V80a42%2042%200%200%201%2042-42h96a42%2042%200%200%201%2042%2042ZM190%2076a10%2010%200%201%201-10-10a10%2010%200%200%201%2010%2010Z%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E"
                  />
                </_Builtin.Link>
              </_Builtin.Grid>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}