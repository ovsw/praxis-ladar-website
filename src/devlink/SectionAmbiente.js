import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./SectionAmbiente.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-61":{"id":"e-61","name":"","animationType":"custom","eventTypeId":"SCROLLING_IN_VIEW","action":{"id":"","actionTypeId":"GENERAL_CONTINUOUS_ACTION","config":{"actionListId":"a-8","affectedElements":{},"duration":0}},"mediaQueries":["medium","small","tiny"],"target":{"id":"f250a8c2-4623-3422-2031-e6565be05961","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"f250a8c2-4623-3422-2031-e6565be05961","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":[{"continuousParameterGroupId":"a-8-p","smoothing":97,"startsEntering":true,"addStartOffset":false,"addOffsetValue":50,"startsExiting":false,"addEndOffset":false,"endOffsetValue":50}],"createdOn":1643198571656},"e-85":{"id":"e-85","name":"","animationType":"preset","eventTypeId":"SCROLLING_IN_VIEW","action":{"id":"","actionTypeId":"GENERAL_CONTINUOUS_ACTION","config":{"actionListId":"a-8","affectedElements":{},"duration":0}},"mediaQueries":["medium","small","tiny"],"target":{"id":"013f7e94-4b70-18d2-b906-f2ba4590e224","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"013f7e94-4b70-18d2-b906-f2ba4590e224","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":[{"continuousParameterGroupId":"a-8-p","smoothing":97,"startsEntering":true,"addStartOffset":false,"addOffsetValue":50,"startsExiting":false,"addEndOffset":false,"endOffsetValue":50}],"createdOn":1699328831391},"e-104":{"id":"e-104","name":"","animationType":"preset","eventTypeId":"SCROLLING_IN_VIEW","action":{"id":"","actionTypeId":"GENERAL_CONTINUOUS_ACTION","config":{"actionListId":"a-8","affectedElements":{},"duration":0}},"mediaQueries":["medium","small","tiny"],"target":{"id":"27dca5d1-39cf-2acf-347f-fad09d94a805","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"27dca5d1-39cf-2acf-347f-fad09d94a805","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":[{"continuousParameterGroupId":"a-8-p","smoothing":97,"startsEntering":true,"addStartOffset":false,"addOffsetValue":50,"startsExiting":false,"addEndOffset":false,"endOffsetValue":50}],"createdOn":1643781860203},"e-105":{"id":"e-105","name":"","animationType":"custom","eventTypeId":"SCROLLING_IN_VIEW","action":{"id":"","actionTypeId":"GENERAL_CONTINUOUS_ACTION","config":{"actionListId":"a-41","affectedElements":{},"duration":0}},"mediaQueries":["main"],"target":{"id":"27dca5d1-39cf-2acf-347f-fad09d94a805","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"27dca5d1-39cf-2acf-347f-fad09d94a805","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":[{"continuousParameterGroupId":"a-41-p","smoothing":97,"startsEntering":true,"addStartOffset":false,"addOffsetValue":50,"startsExiting":false,"addEndOffset":false,"endOffsetValue":50}],"createdOn":1643874377808},"e-112":{"id":"e-112","name":"","animationType":"preset","eventTypeId":"SCROLLING_IN_VIEW","action":{"id":"","actionTypeId":"GENERAL_CONTINUOUS_ACTION","config":{"actionListId":"a-8","affectedElements":{},"duration":0}},"mediaQueries":["medium","small","tiny"],"target":{"id":"2a005cce-7eaa-9ba1-36f4-b6983aa3230b","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"2a005cce-7eaa-9ba1-36f4-b6983aa3230b","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":[{"continuousParameterGroupId":"a-8-p","smoothing":97,"startsEntering":true,"addStartOffset":false,"addOffsetValue":50,"startsExiting":false,"addEndOffset":false,"endOffsetValue":50}],"createdOn":1695305102224},"e-113":{"id":"e-113","name":"","animationType":"preset","eventTypeId":"SLIDER_ACTIVE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-21","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-114"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"655763d7bb2251ae9b542913|84e95e10-6a06-a9ca-d37f-f92489bdee1a","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"655763d7bb2251ae9b542913|84e95e10-6a06-a9ca-d37f-f92489bdee1a","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1697700881122},"e-114":{"id":"e-114","name":"","animationType":"preset","eventTypeId":"SLIDER_INACTIVE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-22","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-113"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"655763d7bb2251ae9b542913|84e95e10-6a06-a9ca-d37f-f92489bdee1a","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"655763d7bb2251ae9b542913|84e95e10-6a06-a9ca-d37f-f92489bdee1a","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1697700881122},"e-115":{"id":"e-115","name":"","animationType":"preset","eventTypeId":"SLIDER_ACTIVE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-23","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-116"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"655763d7bb2251ae9b542913|84e95e10-6a06-a9ca-d37f-f92489bdee1d","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"655763d7bb2251ae9b542913|84e95e10-6a06-a9ca-d37f-f92489bdee1d","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1697700881122},"e-116":{"id":"e-116","name":"","animationType":"preset","eventTypeId":"SLIDER_INACTIVE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-22","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-115"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"655763d7bb2251ae9b542913|84e95e10-6a06-a9ca-d37f-f92489bdee1d","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"655763d7bb2251ae9b542913|84e95e10-6a06-a9ca-d37f-f92489bdee1d","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1697700881122},"e-117":{"id":"e-117","name":"","animationType":"preset","eventTypeId":"SLIDER_ACTIVE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-21","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-118"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"655763d7bb2251ae9b542913|84e95e10-6a06-a9ca-d37f-f92489bdee20","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"655763d7bb2251ae9b542913|84e95e10-6a06-a9ca-d37f-f92489bdee20","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1697700881122},"e-118":{"id":"e-118","name":"","animationType":"preset","eventTypeId":"SLIDER_INACTIVE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-22","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-117"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"655763d7bb2251ae9b542913|84e95e10-6a06-a9ca-d37f-f92489bdee20","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"655763d7bb2251ae9b542913|84e95e10-6a06-a9ca-d37f-f92489bdee20","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1697700881122},"e-119":{"id":"e-119","name":"","animationType":"preset","eventTypeId":"SLIDER_ACTIVE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-23","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-120"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"655763d7bb2251ae9b542913|84e95e10-6a06-a9ca-d37f-f92489bdee23","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"655763d7bb2251ae9b542913|84e95e10-6a06-a9ca-d37f-f92489bdee23","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1697700881122},"e-120":{"id":"e-120","name":"","animationType":"preset","eventTypeId":"SLIDER_INACTIVE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-22","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-119"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"655763d7bb2251ae9b542913|84e95e10-6a06-a9ca-d37f-f92489bdee23","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"655763d7bb2251ae9b542913|84e95e10-6a06-a9ca-d37f-f92489bdee23","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1697700881122},"e-137":{"id":"e-137","name":"","animationType":"preset","eventTypeId":"SCROLLING_IN_VIEW","action":{"id":"","actionTypeId":"GENERAL_CONTINUOUS_ACTION","config":{"actionListId":"a-8","affectedElements":{},"duration":0}},"mediaQueries":["medium","small","tiny"],"target":{"id":"655763d7bb2251ae9b5428dc|1ca2d62a-9e6c-d58b-163f-4a0ca7370ded","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"655763d7bb2251ae9b5428dc|1ca2d62a-9e6c-d58b-163f-4a0ca7370ded","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":[{"continuousParameterGroupId":"a-8-p","smoothing":97,"startsEntering":true,"addStartOffset":false,"addOffsetValue":50,"startsExiting":false,"addEndOffset":false,"endOffsetValue":50}],"createdOn":1644484686898},"e-152":{"id":"e-152","name":"","animationType":"preset","eventTypeId":"SCROLLING_IN_VIEW","action":{"id":"","actionTypeId":"GENERAL_CONTINUOUS_ACTION","config":{"actionListId":"a-50","affectedElements":{},"duration":0}},"mediaQueries":["main"],"target":{"id":"2cb65f63-aefa-4c3e-a7f4-419383c67240","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"2cb65f63-aefa-4c3e-a7f4-419383c67240","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":[{"continuousParameterGroupId":"a-50-p","smoothing":97,"startsEntering":true,"addStartOffset":false,"addOffsetValue":50,"startsExiting":false,"addEndOffset":false,"endOffsetValue":50}],"createdOn":1699343805463},"e-153":{"id":"e-153","name":"","animationType":"preset","eventTypeId":"SCROLLING_IN_VIEW","action":{"id":"","actionTypeId":"GENERAL_CONTINUOUS_ACTION","config":{"actionListId":"a-51","affectedElements":{},"duration":0}},"mediaQueries":["medium","small","tiny"],"target":{"id":"2cb65f63-aefa-4c3e-a7f4-419383c67247","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"2cb65f63-aefa-4c3e-a7f4-419383c67247","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":[{"continuousParameterGroupId":"a-51-p","smoothing":97,"startsEntering":true,"addStartOffset":false,"addOffsetValue":50,"startsExiting":false,"addEndOffset":false,"endOffsetValue":50}],"createdOn":1699343805463},"e-154":{"id":"e-154","name":"","animationType":"preset","eventTypeId":"SLIDER_ACTIVE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-52","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-155"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"2cb65f63-aefa-4c3e-a7f4-419383c6724b","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"2cb65f63-aefa-4c3e-a7f4-419383c6724b","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1699343805463},"e-155":{"id":"e-155","name":"","animationType":"preset","eventTypeId":"SLIDER_INACTIVE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-53","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-154"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"2cb65f63-aefa-4c3e-a7f4-419383c6724b","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"2cb65f63-aefa-4c3e-a7f4-419383c6724b","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1699343805463},"e-156":{"id":"e-156","name":"","animationType":"preset","eventTypeId":"SLIDER_ACTIVE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-54","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-157"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"2cb65f63-aefa-4c3e-a7f4-419383c6724e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"2cb65f63-aefa-4c3e-a7f4-419383c6724e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1699343805463},"e-157":{"id":"e-157","name":"","animationType":"preset","eventTypeId":"SLIDER_INACTIVE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-53","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-156"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"2cb65f63-aefa-4c3e-a7f4-419383c6724e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"2cb65f63-aefa-4c3e-a7f4-419383c6724e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1699343805463},"e-158":{"id":"e-158","name":"","animationType":"preset","eventTypeId":"SLIDER_ACTIVE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-52","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-159"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"2cb65f63-aefa-4c3e-a7f4-419383c67251","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"2cb65f63-aefa-4c3e-a7f4-419383c67251","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1699343805463},"e-159":{"id":"e-159","name":"","animationType":"preset","eventTypeId":"SLIDER_INACTIVE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-53","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-158"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"2cb65f63-aefa-4c3e-a7f4-419383c67251","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"2cb65f63-aefa-4c3e-a7f4-419383c67251","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1699343805463},"e-160":{"id":"e-160","name":"","animationType":"preset","eventTypeId":"SLIDER_ACTIVE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-54","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-161"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"2cb65f63-aefa-4c3e-a7f4-419383c67254","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"2cb65f63-aefa-4c3e-a7f4-419383c67254","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1699343805463},"e-161":{"id":"e-161","name":"","animationType":"preset","eventTypeId":"SLIDER_INACTIVE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-53","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-160"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"2cb65f63-aefa-4c3e-a7f4-419383c67254","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"2cb65f63-aefa-4c3e-a7f4-419383c67254","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1699343805463},"e-162":{"id":"e-162","name":"","animationType":"preset","eventTypeId":"SLIDER_ACTIVE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-54","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-163"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"2cb65f63-aefa-4c3e-a7f4-419383c67257","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"2cb65f63-aefa-4c3e-a7f4-419383c67257","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1699343805463},"e-163":{"id":"e-163","name":"","animationType":"preset","eventTypeId":"SLIDER_INACTIVE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-53","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-162"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"2cb65f63-aefa-4c3e-a7f4-419383c67257","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"2cb65f63-aefa-4c3e-a7f4-419383c67257","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1699343805463},"e-164":{"id":"e-164","name":"","animationType":"preset","eventTypeId":"SLIDER_ACTIVE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-54","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-165"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"2cb65f63-aefa-4c3e-a7f4-419383c6725a","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"2cb65f63-aefa-4c3e-a7f4-419383c6725a","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1699343805463},"e-165":{"id":"e-165","name":"","animationType":"preset","eventTypeId":"SLIDER_INACTIVE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-53","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-164"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"2cb65f63-aefa-4c3e-a7f4-419383c6725a","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"2cb65f63-aefa-4c3e-a7f4-419383c6725a","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1699343805463},"e-166":{"id":"e-166","name":"","animationType":"preset","eventTypeId":"SLIDER_ACTIVE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-55","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-167"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"46916aa6-e573-5d16-cb90-769113f34069","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"46916aa6-e573-5d16-cb90-769113f34069","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1699344048959},"e-167":{"id":"e-167","name":"","animationType":"preset","eventTypeId":"SLIDER_INACTIVE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-56","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-166"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"46916aa6-e573-5d16-cb90-769113f34069","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"46916aa6-e573-5d16-cb90-769113f34069","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1699344048959},"e-168":{"id":"e-168","name":"","animationType":"preset","eventTypeId":"SLIDER_ACTIVE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-57","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-169"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"46916aa6-e573-5d16-cb90-769113f3406c","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"46916aa6-e573-5d16-cb90-769113f3406c","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1699344048959},"e-169":{"id":"e-169","name":"","animationType":"preset","eventTypeId":"SLIDER_INACTIVE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-56","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-168"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"46916aa6-e573-5d16-cb90-769113f3406c","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"46916aa6-e573-5d16-cb90-769113f3406c","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1699344048959},"e-170":{"id":"e-170","name":"","animationType":"preset","eventTypeId":"SLIDER_ACTIVE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-55","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-171"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"46916aa6-e573-5d16-cb90-769113f3406f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"46916aa6-e573-5d16-cb90-769113f3406f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1699344048959},"e-171":{"id":"e-171","name":"","animationType":"preset","eventTypeId":"SLIDER_INACTIVE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-56","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-170"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"46916aa6-e573-5d16-cb90-769113f3406f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"46916aa6-e573-5d16-cb90-769113f3406f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1699344048959},"e-172":{"id":"e-172","name":"","animationType":"preset","eventTypeId":"SLIDER_ACTIVE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-57","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-173"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"46916aa6-e573-5d16-cb90-769113f34072","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"46916aa6-e573-5d16-cb90-769113f34072","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1699344048959},"e-173":{"id":"e-173","name":"","animationType":"preset","eventTypeId":"SLIDER_INACTIVE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-56","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-172"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"46916aa6-e573-5d16-cb90-769113f34072","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"46916aa6-e573-5d16-cb90-769113f34072","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1699344048959}},"actionLists":{"a-8":{"id":"a-8","title":"Section Name Parallax - Mobile 3","continuousParameterGroups":[{"id":"a-8-p","type":"SCROLL_PROGRESS","parameterLabel":"Scroll","continuousActionGroups":[{"keyframe":0,"actionItems":[{"id":"a-8-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"SIBLINGS","selector":".section-heading_outlined","selectorGuids":["7351f457-bfa6-abe4-ae61-86758a6dcb45"]},"xValue":-5,"xUnit":"vw","yUnit":"PX","zUnit":"PX"}}]},{"keyframe":100,"actionItems":[{"id":"a-8-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"SIBLINGS","selector":".section-heading_outlined","selectorGuids":["7351f457-bfa6-abe4-ae61-86758a6dcb45"]},"xValue":-20,"xUnit":"vw","yUnit":"PX","zUnit":"PX"}}]}]}],"createdOn":1643198589173},"a-41":{"id":"a-41","title":"Section Name Parallax - Desktop","continuousParameterGroups":[{"id":"a-41-p","type":"SCROLL_PROGRESS","parameterLabel":"Scroll","continuousActionGroups":[{"keyframe":0,"actionItems":[{"id":"a-41-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"SIBLINGS","selector":".section-heading_outlined.outlined","selectorGuids":["7351f457-bfa6-abe4-ae61-86758a6dcb45","7351f457-bfa6-abe4-ae61-86758a6dcb5c"]},"xValue":-5,"xUnit":"vw","yUnit":"PX","zUnit":"PX"}}]},{"keyframe":100,"actionItems":[{"id":"a-41-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"SIBLINGS","selector":".section-heading_outlined.outlined","selectorGuids":["7351f457-bfa6-abe4-ae61-86758a6dcb45","7351f457-bfa6-abe4-ae61-86758a6dcb5c"]},"xValue":-8,"xUnit":"vw","yUnit":"PX","zUnit":"PX"}}]}]}],"createdOn":1643874389144},"a-21":{"id":"a-21","title":"Slide Zoom In 2","actionItemGroups":[{"actionItems":[{"id":"a-21-n","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"easeIn","duration":7000,"target":{"useEventTarget":"CHILDREN","selector":".big-slideshow_slide-img","selectorGuids":["19ec02a4-7fbc-1c24-b767-1a58c034b7a5"]},"xValue":1.1,"yValue":1.1,"locked":true}}]}],"useFirstGroupAsInitialState":false,"createdOn":1551984238244},"a-22":{"id":"a-22","title":"Slide Out 2","actionItemGroups":[{"actionItems":[{"id":"a-22-n","actionTypeId":"TRANSFORM_SCALE","config":{"delay":3000,"easing":"easeOut","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".big-slideshow_slide-img","selectorGuids":["19ec02a4-7fbc-1c24-b767-1a58c034b7a5"]},"xValue":1,"yValue":1,"locked":true}}]}],"useFirstGroupAsInitialState":false,"createdOn":1551984238244},"a-23":{"id":"a-23","title":"Slide Zoom Out 2","actionItemGroups":[{"actionItems":[{"id":"a-23-n","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"easeIn","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".big-slideshow_slide-img","selectorGuids":["19ec02a4-7fbc-1c24-b767-1a58c034b7a5"]},"xValue":1.1,"yValue":1.1,"locked":true}}]},{"actionItems":[{"id":"a-23-n-2","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"easeIn","duration":7000,"target":{"useEventTarget":"CHILDREN","selector":".big-slideshow_slide-img","selectorGuids":["19ec02a4-7fbc-1c24-b767-1a58c034b7a5"]},"xValue":1,"yValue":1,"locked":true}}]}],"useFirstGroupAsInitialState":false,"createdOn":1551984238244},"a-50":{"id":"a-50","title":"Ambiente Section Name Paralax 3","continuousParameterGroups":[{"id":"a-50-p","type":"SCROLL_PROGRESS","parameterLabel":"Scroll","continuousActionGroups":[{"keyframe":2,"actionItems":[{"id":"a-50-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".section-heading_outlined.outlined-white","selectorGuids":["7351f457-bfa6-abe4-ae61-86758a6dcb45","f03229e9-ced0-5e53-9414-ab827dc0ed65"]},"xValue":-10,"xUnit":"vw","yUnit":"PX","zUnit":"PX"}}]},{"keyframe":100,"actionItems":[{"id":"a-50-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".section-heading_outlined.outlined-white","selectorGuids":["7351f457-bfa6-abe4-ae61-86758a6dcb45","f03229e9-ced0-5e53-9414-ab827dc0ed65"]},"xValue":40,"xUnit":"vw","yUnit":"PX","zUnit":"PX"}}]}]}],"createdOn":1643198589173},"a-51":{"id":"a-51","title":"Section Name Parallax - Mobile 5","continuousParameterGroups":[{"id":"a-51-p","type":"SCROLL_PROGRESS","parameterLabel":"Scroll","continuousActionGroups":[{"keyframe":0,"actionItems":[{"id":"a-51-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"SIBLINGS","selector":".section-heading_outlined","selectorGuids":["7351f457-bfa6-abe4-ae61-86758a6dcb45"]},"xValue":-5,"xUnit":"vw","yUnit":"PX","zUnit":"PX"}}]},{"keyframe":100,"actionItems":[{"id":"a-51-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"SIBLINGS","selector":".section-heading_outlined","selectorGuids":["7351f457-bfa6-abe4-ae61-86758a6dcb45"]},"xValue":-20,"xUnit":"vw","yUnit":"PX","zUnit":"PX"}}]}]}],"createdOn":1643198589173},"a-52":{"id":"a-52","title":"Slide Zoom Out 4","actionItemGroups":[{"actionItems":[{"id":"a-52-n","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"easeIn","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".big-slideshow_slide-img","selectorGuids":["19ec02a4-7fbc-1c24-b767-1a58c034b7a5"]},"xValue":1.1,"yValue":1.1,"locked":true}}]},{"actionItems":[{"id":"a-52-n-2","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"easeIn","duration":7000,"target":{"useEventTarget":"CHILDREN","selector":".big-slideshow_slide-img","selectorGuids":["19ec02a4-7fbc-1c24-b767-1a58c034b7a5"]},"xValue":1,"yValue":1,"locked":true}}]}],"useFirstGroupAsInitialState":false,"createdOn":1551984238244},"a-53":{"id":"a-53","title":"Slide Out 4","actionItemGroups":[{"actionItems":[{"id":"a-53-n","actionTypeId":"TRANSFORM_SCALE","config":{"delay":3000,"easing":"easeOut","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".big-slideshow_slide-img","selectorGuids":["19ec02a4-7fbc-1c24-b767-1a58c034b7a5"]},"xValue":1,"yValue":1,"locked":true}}]}],"useFirstGroupAsInitialState":false,"createdOn":1551984238244},"a-54":{"id":"a-54","title":"Slide Zoom In 4","actionItemGroups":[{"actionItems":[{"id":"a-54-n","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"easeIn","duration":7000,"target":{"useEventTarget":"CHILDREN","selector":".big-slideshow_slide-img","selectorGuids":["19ec02a4-7fbc-1c24-b767-1a58c034b7a5"]},"xValue":1.1,"yValue":1.1,"locked":true}}]}],"useFirstGroupAsInitialState":false,"createdOn":1551984238244},"a-55":{"id":"a-55","title":"Slide Zoom In 5","actionItemGroups":[{"actionItems":[{"id":"a-55-n","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"easeIn","duration":7000,"target":{"useEventTarget":"CHILDREN","selector":".big-slideshow_slide-img","selectorGuids":["19ec02a4-7fbc-1c24-b767-1a58c034b7a5"]},"xValue":1.1,"yValue":1.1,"locked":true}}]}],"useFirstGroupAsInitialState":false,"createdOn":1551984238244},"a-56":{"id":"a-56","title":"Slide Out 5","actionItemGroups":[{"actionItems":[{"id":"a-56-n","actionTypeId":"TRANSFORM_SCALE","config":{"delay":3000,"easing":"easeOut","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".big-slideshow_slide-img","selectorGuids":["19ec02a4-7fbc-1c24-b767-1a58c034b7a5"]},"xValue":1,"yValue":1,"locked":true}}]}],"useFirstGroupAsInitialState":false,"createdOn":1551984238244},"a-57":{"id":"a-57","title":"Slide Zoom Out 5","actionItemGroups":[{"actionItems":[{"id":"a-57-n","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"easeIn","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".big-slideshow_slide-img","selectorGuids":["19ec02a4-7fbc-1c24-b767-1a58c034b7a5"]},"xValue":1.1,"yValue":1.1,"locked":true}}]},{"actionItems":[{"id":"a-57-n-2","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"easeIn","duration":7000,"target":{"useEventTarget":"CHILDREN","selector":".big-slideshow_slide-img","selectorGuids":["19ec02a4-7fbc-1c24-b767-1a58c034b7a5"]},"xValue":1,"yValue":1,"locked":true}}]}],"useFirstGroupAsInitialState":false,"createdOn":1551984238244}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function SectionAmbiente({ as: _Component = _Builtin.Section }) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "section_big-slideshow")}
      data-w-id="2cb65f63-aefa-4c3e-a7f4-419383c67240"
      grid={{
        type: "section",
      }}
      tag="section"
      id="ambiente"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "big-slideshow_title-container")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "section-heading_wrapper")}
          tag="div"
        >
          <_Builtin.Heading
            className={_utils.cx(_styles, "heading-2", "absolute", "white")}
            tag="h2"
          >
            {"Ambiente"}
          </_Builtin.Heading>
          <_Builtin.Block
            className={_utils.cx(
              _styles,
              "section-heading_outlined",
              "outlined-white"
            )}
            tag="div"
          >
            {"Ambiente"}
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "section-heading_outlined-trigger")}
            data-w-id="2cb65f63-aefa-4c3e-a7f4-419383c67247"
            tag="div"
          />
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(
          _styles,
          "big-slideshow_component",
          "no-pointer-events"
        )}
        tag="div"
      >
        <_Builtin.SliderWrapper
          className={_utils.cx(_styles, "big-slideshow_slider")}
          data-delay="5000"
          data-animation="fade"
          data-autoplay="1"
          data-duration="2000"
          data-infinite="1"
          navSpacing={3}
          navShadow={false}
          autoplay={true}
          delay={6000}
          iconArrows={true}
          animation="fade"
          navNumbers={false}
          easing="ease"
          navRound={true}
          hideArrows={true}
          disableSwipe={false}
          duration={2000}
          infinite={true}
          autoMax={0}
          navInvert={false}
        >
          <_Builtin.SliderMask>
            <_Builtin.SliderSlide
              className={_utils.cx(_styles, "big-slideshow_slide")}
              data-w-id="2cb65f63-aefa-4c3e-a7f4-419383c6724b"
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "big-slideshow_slide-content")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "big-slideshow_slide-img",
                    "a1"
                  )}
                  tag="div"
                />
              </_Builtin.Block>
            </_Builtin.SliderSlide>
            <_Builtin.SliderSlide
              className={_utils.cx(_styles, "big-slideshow_slide")}
              data-w-id="2cb65f63-aefa-4c3e-a7f4-419383c6724e"
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "big-slideshow_slide-content")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "big-slideshow_slide-img",
                    "a2"
                  )}
                  tag="div"
                />
              </_Builtin.Block>
            </_Builtin.SliderSlide>
            <_Builtin.SliderSlide
              className={_utils.cx(_styles, "big-slideshow_slide")}
              data-w-id="2cb65f63-aefa-4c3e-a7f4-419383c67251"
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "big-slideshow_slide-content")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "big-slideshow_slide-img",
                    "a3"
                  )}
                  tag="div"
                />
              </_Builtin.Block>
            </_Builtin.SliderSlide>
            <_Builtin.SliderSlide
              className={_utils.cx(_styles, "big-slideshow_slide")}
              data-w-id="2cb65f63-aefa-4c3e-a7f4-419383c67254"
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "big-slideshow_slide-content")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "big-slideshow_slide-img",
                    "a4"
                  )}
                  tag="div"
                />
              </_Builtin.Block>
            </_Builtin.SliderSlide>
            <_Builtin.SliderSlide
              className={_utils.cx(_styles, "big-slideshow_slide")}
              data-w-id="2cb65f63-aefa-4c3e-a7f4-419383c67257"
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "big-slideshow_slide-content")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "big-slideshow_slide-img",
                    "a5"
                  )}
                  tag="div"
                />
              </_Builtin.Block>
            </_Builtin.SliderSlide>
            <_Builtin.SliderSlide
              className={_utils.cx(_styles, "big-slideshow_slide")}
              data-w-id="2cb65f63-aefa-4c3e-a7f4-419383c6725a"
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "big-slideshow_slide-content")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "big-slideshow_slide-img",
                    "a6"
                  )}
                  tag="div"
                />
              </_Builtin.Block>
            </_Builtin.SliderSlide>
          </_Builtin.SliderMask>
          <_Builtin.SliderArrow
            className={_utils.cx(_styles, "pointer-events")}
            dir="left"
          >
            <_Builtin.Icon
              widget={{
                type: "icon",
                icon: "slider-left",
              }}
              bind="429caea4-0931-2455-4f76-e7268ffc3ba1"
            />
          </_Builtin.SliderArrow>
          <_Builtin.SliderArrow
            className={_utils.cx(_styles, "pointer-events")}
            dir="right"
          >
            <_Builtin.Icon
              widget={{
                type: "icon",
                icon: "slider-right",
              }}
              bind="429caea4-0931-2455-4f76-e7268ffc3ba3"
            />
          </_Builtin.SliderArrow>
          <_Builtin.SliderNav
            className={_utils.cx(_styles, "hero-slideshow_slide-nav")}
          />
        </_Builtin.SliderWrapper>
      </_Builtin.Block>
    </_Component>
  );
}
