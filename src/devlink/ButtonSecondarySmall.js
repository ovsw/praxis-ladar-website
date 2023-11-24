import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./ButtonSecondarySmall.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-64":{"id":"e-64","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-28","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-65"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"f250a8c2-4623-3422-2031-e6565be05963","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"f250a8c2-4623-3422-2031-e6565be05963","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":100,"scrollOffsetUnit":"PX","delay":null,"direction":null,"effectIn":null},"createdOn":1643199288177},"e-60":{"id":"e-60","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-28","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-104"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"f250a8c2-4623-3422-2031-e6565be0596d","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"f250a8c2-4623-3422-2031-e6565be0596d","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":100,"scrollOffsetUnit":"PX","delay":null,"direction":null,"effectIn":null},"createdOn":1643200660840},"e-62":{"id":"e-62","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-28","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-67"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"f250a8c2-4623-3422-2031-e6565be05977","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"f250a8c2-4623-3422-2031-e6565be05977","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":100,"scrollOffsetUnit":"PX","delay":null,"direction":null,"effectIn":null},"createdOn":1643200645373},"e-129":{"id":"e-129","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-24","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-131"}},"mediaQueries":["main"],"target":{"id":"655763d7bb2251ae9b5428dc|1ca2d62a-9e6c-d58b-163f-4a0ca7370e50","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"655763d7bb2251ae9b5428dc|1ca2d62a-9e6c-d58b-163f-4a0ca7370e50","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1697269270304},"e-131":{"id":"e-131","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-25","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-129"}},"mediaQueries":["main"],"target":{"id":"655763d7bb2251ae9b5428dc|1ca2d62a-9e6c-d58b-163f-4a0ca7370e50","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"655763d7bb2251ae9b5428dc|1ca2d62a-9e6c-d58b-163f-4a0ca7370e50","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1697269270304},"e-174":{"id":"e-174","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-24","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-175"}},"mediaQueries":["main"],"target":{"id":"c6e81b9e-8d4e-2200-020d-50a5e70bbaba","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"c6e81b9e-8d4e-2200-020d-50a5e70bbaba","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1699368999826},"e-175":{"id":"e-175","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-25","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-174"}},"mediaQueries":["main"],"target":{"id":"c6e81b9e-8d4e-2200-020d-50a5e70bbaba","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"c6e81b9e-8d4e-2200-020d-50a5e70bbaba","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1699368999826},"e-176":{"id":"e-176","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-24","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-177"}},"mediaQueries":["main"],"target":{"id":"d6a38168-0cb5-a9ed-79e5-0092226aff8f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"d6a38168-0cb5-a9ed-79e5-0092226aff8f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1699369299078},"e-177":{"id":"e-177","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-25","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-176"}},"mediaQueries":["main"],"target":{"id":"d6a38168-0cb5-a9ed-79e5-0092226aff8f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"d6a38168-0cb5-a9ed-79e5-0092226aff8f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1699369299078},"e-178":{"id":"e-178","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-24","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-179"}},"mediaQueries":["main"],"target":{"id":"cac7d0aa-70c6-4c14-d24f-04158f1e717e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"cac7d0aa-70c6-4c14-d24f-04158f1e717e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1699369317996},"e-179":{"id":"e-179","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-25","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-178"}},"mediaQueries":["main"],"target":{"id":"cac7d0aa-70c6-4c14-d24f-04158f1e717e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"cac7d0aa-70c6-4c14-d24f-04158f1e717e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1699369317996},"e-180":{"id":"e-180","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-24","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-181"}},"mediaQueries":["main"],"target":{"id":"23d62c30-6695-44e8-7619-d5671e52d109","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"23d62c30-6695-44e8-7619-d5671e52d109","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1699369430077},"e-181":{"id":"e-181","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-25","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-180"}},"mediaQueries":["main"],"target":{"id":"23d62c30-6695-44e8-7619-d5671e52d109","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"23d62c30-6695-44e8-7619-d5671e52d109","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1699369430077},"e-182":{"id":"e-182","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-60","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-183"}},"mediaQueries":["main"],"target":{"id":"ff3149aa-762b-64df-34c0-c24387fbbeb8","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"ff3149aa-762b-64df-34c0-c24387fbbeb8","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1699369671589},"e-183":{"id":"e-183","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-61","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-182"}},"mediaQueries":["main"],"target":{"id":"ff3149aa-762b-64df-34c0-c24387fbbeb8","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"ff3149aa-762b-64df-34c0-c24387fbbeb8","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1699369671589},"e-184":{"id":"e-184","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-62","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-185"}},"mediaQueries":["main"],"target":{"id":"eebb0e5b-24af-b468-c852-cc4d9dd8f084","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"eebb0e5b-24af-b468-c852-cc4d9dd8f084","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1699369802376},"e-185":{"id":"e-185","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-63","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-184"}},"mediaQueries":["main"],"target":{"id":"eebb0e5b-24af-b468-c852-cc4d9dd8f084","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"eebb0e5b-24af-b468-c852-cc4d9dd8f084","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1699369802376},"e-195":{"id":"e-195","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-76","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-196"}},"mediaQueries":["main"],"target":{"id":"d18dc05e-c7eb-987d-6d52-af3d15f0bd96","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"d18dc05e-c7eb-987d-6d52-af3d15f0bd96","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1700059944694},"e-196":{"id":"e-196","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-77","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-195"}},"mediaQueries":["main"],"target":{"id":"d18dc05e-c7eb-987d-6d52-af3d15f0bd96","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"d18dc05e-c7eb-987d-6d52-af3d15f0bd96","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1700059944694},"e-203":{"id":"e-203","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-84","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-204"}},"mediaQueries":["main"],"target":{"id":"655763d7bb2251ae9b542860|6cc85872-cf00-8bd6-cc58-7acc26b4a4a0","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"655763d7bb2251ae9b542860|6cc85872-cf00-8bd6-cc58-7acc26b4a4a0","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1700224122016},"e-204":{"id":"e-204","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-85","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-203"}},"mediaQueries":["main"],"target":{"id":"655763d7bb2251ae9b542860|6cc85872-cf00-8bd6-cc58-7acc26b4a4a0","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"655763d7bb2251ae9b542860|6cc85872-cf00-8bd6-cc58-7acc26b4a4a0","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1700224122016}},"actionLists":{"a-28":{"id":"a-28","title":"Benefit Animation - Mobile","actionItemGroups":[{"actionItems":[{"id":"a-28-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".primary-button_wrapper","selectorGuids":["57985817-075c-07f9-e1b8-554c9d176f2d"]},"xValue":-130,"xUnit":"%","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"id":"a-28-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".primary-button_wrapper","selectorGuids":["57985817-075c-07f9-e1b8-554c9d176f2d"]},"xValue":-130,"xUnit":"%","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"id":"a-28-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":1000,"target":{"useEventTarget":"CHILDREN","selector":".primary-button_wrapper","selectorGuids":["57985817-075c-07f9-e1b8-554c9d176f2d"]},"xValue":0,"xUnit":"%","yUnit":"PX","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1643199295867},"a-24":{"id":"a-24","title":"Primary Btn - Hover In 5","actionItemGroups":[{"actionItems":[{"id":"a-24-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".primary-button_shadow","selectorGuids":["19ec02a4-7fbc-1c24-b767-1a58c034b7a6"]},"xValue":0,"yValue":0,"xUnit":"px","yUnit":"px","zUnit":"PX"}},{"id":"a-24-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".primary-button-text.absolute","selectorGuids":["57985817-075c-07f9-e1b8-554c9d176f2b","19ec02a4-7fbc-1c24-b767-1a58c034b7b5"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-24-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".primary-button-text","selectorGuids":["57985817-075c-07f9-e1b8-554c9d176f2b"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]},{"actionItems":[{"id":"a-24-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".primary-button_shadow","selectorGuids":["19ec02a4-7fbc-1c24-b767-1a58c034b7a6"]},"xValue":-6,"yValue":-4,"xUnit":"px","yUnit":"px","zUnit":"PX"}},{"id":"a-24-n-5","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".primary-button-text.absolute","selectorGuids":["57985817-075c-07f9-e1b8-554c9d176f2b","19ec02a4-7fbc-1c24-b767-1a58c034b7b5"]},"yValue":-100,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-24-n-6","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".primary-button-text","selectorGuids":["57985817-075c-07f9-e1b8-554c9d176f2b"]},"yValue":-100,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1644558693074},"a-25":{"id":"a-25","title":"Primary Btn - Hover Out 5","actionItemGroups":[{"actionItems":[{"id":"a-25-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".primary-button_shadow","selectorGuids":["19ec02a4-7fbc-1c24-b767-1a58c034b7a6"]},"xValue":0,"yValue":0,"xUnit":"px","yUnit":"px","zUnit":"PX"}},{"id":"a-25-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".primary-button-text.absolute","selectorGuids":["57985817-075c-07f9-e1b8-554c9d176f2b","19ec02a4-7fbc-1c24-b767-1a58c034b7b5"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-25-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".primary-button-text","selectorGuids":["57985817-075c-07f9-e1b8-554c9d176f2b"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1644558693074},"a-60":{"id":"a-60","title":"Primary Btn - Hover In 7","actionItemGroups":[{"actionItems":[{"id":"a-60-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".primary-button_shadow","selectorGuids":["19ec02a4-7fbc-1c24-b767-1a58c034b7a6"]},"xValue":0,"yValue":0,"xUnit":"px","yUnit":"px","zUnit":"PX"}},{"id":"a-60-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".primary-button-text.absolute","selectorGuids":["57985817-075c-07f9-e1b8-554c9d176f2b","19ec02a4-7fbc-1c24-b767-1a58c034b7b5"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-60-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".primary-button-text","selectorGuids":["57985817-075c-07f9-e1b8-554c9d176f2b"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]},{"actionItems":[{"id":"a-60-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".primary-button_shadow","selectorGuids":["19ec02a4-7fbc-1c24-b767-1a58c034b7a6"]},"xValue":-6,"yValue":-4,"xUnit":"px","yUnit":"px","zUnit":"PX"}},{"id":"a-60-n-5","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".primary-button-text.absolute","selectorGuids":["57985817-075c-07f9-e1b8-554c9d176f2b","19ec02a4-7fbc-1c24-b767-1a58c034b7b5"]},"yValue":-100,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-60-n-6","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".primary-button-text","selectorGuids":["57985817-075c-07f9-e1b8-554c9d176f2b"]},"yValue":-100,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1644558693074},"a-61":{"id":"a-61","title":"Primary Btn - Hover Out 7","actionItemGroups":[{"actionItems":[{"id":"a-61-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".primary-button_shadow","selectorGuids":["19ec02a4-7fbc-1c24-b767-1a58c034b7a6"]},"xValue":0,"yValue":0,"xUnit":"px","yUnit":"px","zUnit":"PX"}},{"id":"a-61-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".primary-button-text.absolute","selectorGuids":["57985817-075c-07f9-e1b8-554c9d176f2b","19ec02a4-7fbc-1c24-b767-1a58c034b7b5"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-61-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".primary-button-text","selectorGuids":["57985817-075c-07f9-e1b8-554c9d176f2b"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1644558693074},"a-62":{"id":"a-62","title":"Primary Btn - Hover In 8","actionItemGroups":[{"actionItems":[{"id":"a-62-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".primary-button_shadow","selectorGuids":["19ec02a4-7fbc-1c24-b767-1a58c034b7a6"]},"xValue":0,"yValue":0,"xUnit":"px","yUnit":"px","zUnit":"PX"}},{"id":"a-62-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".primary-button-text.absolute","selectorGuids":["57985817-075c-07f9-e1b8-554c9d176f2b","19ec02a4-7fbc-1c24-b767-1a58c034b7b5"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-62-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".primary-button-text","selectorGuids":["57985817-075c-07f9-e1b8-554c9d176f2b"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]},{"actionItems":[{"id":"a-62-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".primary-button_shadow","selectorGuids":["19ec02a4-7fbc-1c24-b767-1a58c034b7a6"]},"xValue":-6,"yValue":-4,"xUnit":"px","yUnit":"px","zUnit":"PX"}},{"id":"a-62-n-5","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".primary-button-text.absolute","selectorGuids":["57985817-075c-07f9-e1b8-554c9d176f2b","19ec02a4-7fbc-1c24-b767-1a58c034b7b5"]},"yValue":-100,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-62-n-6","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".primary-button-text","selectorGuids":["57985817-075c-07f9-e1b8-554c9d176f2b"]},"yValue":-100,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1644558693074},"a-63":{"id":"a-63","title":"Primary Btn - Hover Out 8","actionItemGroups":[{"actionItems":[{"id":"a-63-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".primary-button_shadow","selectorGuids":["19ec02a4-7fbc-1c24-b767-1a58c034b7a6"]},"xValue":0,"yValue":0,"xUnit":"px","yUnit":"px","zUnit":"PX"}},{"id":"a-63-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".primary-button-text.absolute","selectorGuids":["57985817-075c-07f9-e1b8-554c9d176f2b","19ec02a4-7fbc-1c24-b767-1a58c034b7b5"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-63-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".primary-button-text","selectorGuids":["57985817-075c-07f9-e1b8-554c9d176f2b"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1644558693074},"a-76":{"id":"a-76","title":"Primary Btn - Hover In 9","actionItemGroups":[{"actionItems":[{"id":"a-76-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".primary-button_shadow","selectorGuids":["19ec02a4-7fbc-1c24-b767-1a58c034b7a6"]},"xValue":0,"yValue":0,"xUnit":"px","yUnit":"px","zUnit":"PX"}},{"id":"a-76-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".primary-button-text.absolute","selectorGuids":["57985817-075c-07f9-e1b8-554c9d176f2b","19ec02a4-7fbc-1c24-b767-1a58c034b7b5"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-76-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".primary-button-text","selectorGuids":["57985817-075c-07f9-e1b8-554c9d176f2b"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]},{"actionItems":[{"id":"a-76-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".primary-button_shadow","selectorGuids":["19ec02a4-7fbc-1c24-b767-1a58c034b7a6"]},"xValue":-6,"yValue":-4,"xUnit":"px","yUnit":"px","zUnit":"PX"}},{"id":"a-76-n-5","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".primary-button-text.absolute","selectorGuids":["57985817-075c-07f9-e1b8-554c9d176f2b","19ec02a4-7fbc-1c24-b767-1a58c034b7b5"]},"yValue":-100,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-76-n-6","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".primary-button-text","selectorGuids":["57985817-075c-07f9-e1b8-554c9d176f2b"]},"yValue":-100,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1644558693074},"a-77":{"id":"a-77","title":"Primary Btn - Hover Out 9","actionItemGroups":[{"actionItems":[{"id":"a-77-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".primary-button_shadow","selectorGuids":["19ec02a4-7fbc-1c24-b767-1a58c034b7a6"]},"xValue":0,"yValue":0,"xUnit":"px","yUnit":"px","zUnit":"PX"}},{"id":"a-77-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".primary-button-text.absolute","selectorGuids":["57985817-075c-07f9-e1b8-554c9d176f2b","19ec02a4-7fbc-1c24-b767-1a58c034b7b5"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-77-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".primary-button-text","selectorGuids":["57985817-075c-07f9-e1b8-554c9d176f2b"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1644558693074},"a-84":{"id":"a-84","title":"Primary Btn - Hover In 10","actionItemGroups":[{"actionItems":[{"id":"a-84-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".primary-button_shadow","selectorGuids":["19ec02a4-7fbc-1c24-b767-1a58c034b7a6"]},"xValue":0,"yValue":0,"xUnit":"px","yUnit":"px","zUnit":"PX"}},{"id":"a-84-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".primary-button-text.absolute","selectorGuids":["57985817-075c-07f9-e1b8-554c9d176f2b","19ec02a4-7fbc-1c24-b767-1a58c034b7b5"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-84-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".primary-button-text","selectorGuids":["57985817-075c-07f9-e1b8-554c9d176f2b"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]},{"actionItems":[{"id":"a-84-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".primary-button_shadow","selectorGuids":["19ec02a4-7fbc-1c24-b767-1a58c034b7a6"]},"xValue":-6,"yValue":-4,"xUnit":"px","yUnit":"px","zUnit":"PX"}},{"id":"a-84-n-5","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".primary-button-text.absolute","selectorGuids":["57985817-075c-07f9-e1b8-554c9d176f2b","19ec02a4-7fbc-1c24-b767-1a58c034b7b5"]},"yValue":-100,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-84-n-6","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".primary-button-text","selectorGuids":["57985817-075c-07f9-e1b8-554c9d176f2b"]},"yValue":-100,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1644558693074},"a-85":{"id":"a-85","title":"Primary Btn - Hover Out 10","actionItemGroups":[{"actionItems":[{"id":"a-85-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".primary-button_shadow","selectorGuids":["19ec02a4-7fbc-1c24-b767-1a58c034b7a6"]},"xValue":0,"yValue":0,"xUnit":"px","yUnit":"px","zUnit":"PX"}},{"id":"a-85-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".primary-button-text.absolute","selectorGuids":["57985817-075c-07f9-e1b8-554c9d176f2b","19ec02a4-7fbc-1c24-b767-1a58c034b7b5"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-85-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".primary-button-text","selectorGuids":["57985817-075c-07f9-e1b8-554c9d176f2b"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1644558693074}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function ButtonSecondarySmall({ as: _Component = _Builtin.Link }) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(
        _styles,
        "primary-button_component",
        "is-secondary",
        "is-small"
      )}
      data-w-id="23d62c30-6695-44e8-7619-d5671e52d109"
      button={false}
      sym-bind='{"link":{"type":"Select","val":{"from":{"type":"Variable","val":"data"},"prop":"84454f3a-fc94-f8a2-3a36-bea31a2d1019"}}}'
      bind="33356b5b-ef8d-880f-e0fa-9a881add0d85"
      options={{
        href: "#",
      }}
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "primary-button_wrapper")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "primary-button-text")}
          tag="div"
          sym-bind='{"children":{"type":"Select","val":{"from":{"type":"Variable","val":"data"},"prop":"9af92d9b-99ef-d3ee-2a96-5296e1494665"}}}'
        >
          {"Mehr"}
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "primary-button-text", "absolute")}
          tag="div"
          sym-bind='{"children":{"type":"Select","val":{"from":{"type":"Variable","val":"data"},"prop":"9af92d9b-99ef-d3ee-2a96-5296e1494665"}}}'
        >
          {"Mehr"}
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(
          _styles,
          "primary-button_background",
          "is-secondary"
        )}
        tag="div"
      />
      <_Builtin.Block
        className={_utils.cx(_styles, "primary-button_shadow")}
        tag="div"
      />
    </_Component>
  );
}
