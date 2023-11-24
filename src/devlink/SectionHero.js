import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import { ButtonPrimary } from "./ButtonPrimary";
import * as _utils from "./utils";
import _styles from "./SectionHero.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-113":{"id":"e-113","name":"","animationType":"preset","eventTypeId":"SLIDER_ACTIVE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-21","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-114"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"655763d7bb2251ae9b542913|84e95e10-6a06-a9ca-d37f-f92489bdee1a","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"655763d7bb2251ae9b542913|84e95e10-6a06-a9ca-d37f-f92489bdee1a","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1697700881122},"e-114":{"id":"e-114","name":"","animationType":"preset","eventTypeId":"SLIDER_INACTIVE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-22","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-113"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"655763d7bb2251ae9b542913|84e95e10-6a06-a9ca-d37f-f92489bdee1a","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"655763d7bb2251ae9b542913|84e95e10-6a06-a9ca-d37f-f92489bdee1a","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1697700881122},"e-115":{"id":"e-115","name":"","animationType":"preset","eventTypeId":"SLIDER_ACTIVE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-23","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-116"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"655763d7bb2251ae9b542913|84e95e10-6a06-a9ca-d37f-f92489bdee1d","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"655763d7bb2251ae9b542913|84e95e10-6a06-a9ca-d37f-f92489bdee1d","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1697700881122},"e-116":{"id":"e-116","name":"","animationType":"preset","eventTypeId":"SLIDER_INACTIVE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-22","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-115"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"655763d7bb2251ae9b542913|84e95e10-6a06-a9ca-d37f-f92489bdee1d","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"655763d7bb2251ae9b542913|84e95e10-6a06-a9ca-d37f-f92489bdee1d","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1697700881122},"e-117":{"id":"e-117","name":"","animationType":"preset","eventTypeId":"SLIDER_ACTIVE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-21","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-118"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"655763d7bb2251ae9b542913|84e95e10-6a06-a9ca-d37f-f92489bdee20","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"655763d7bb2251ae9b542913|84e95e10-6a06-a9ca-d37f-f92489bdee20","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1697700881122},"e-118":{"id":"e-118","name":"","animationType":"preset","eventTypeId":"SLIDER_INACTIVE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-22","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-117"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"655763d7bb2251ae9b542913|84e95e10-6a06-a9ca-d37f-f92489bdee20","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"655763d7bb2251ae9b542913|84e95e10-6a06-a9ca-d37f-f92489bdee20","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1697700881122},"e-119":{"id":"e-119","name":"","animationType":"preset","eventTypeId":"SLIDER_ACTIVE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-23","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-120"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"655763d7bb2251ae9b542913|84e95e10-6a06-a9ca-d37f-f92489bdee23","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"655763d7bb2251ae9b542913|84e95e10-6a06-a9ca-d37f-f92489bdee23","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1697700881122},"e-120":{"id":"e-120","name":"","animationType":"preset","eventTypeId":"SLIDER_INACTIVE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-22","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-119"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"655763d7bb2251ae9b542913|84e95e10-6a06-a9ca-d37f-f92489bdee23","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"655763d7bb2251ae9b542913|84e95e10-6a06-a9ca-d37f-f92489bdee23","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1697700881122},"e-154":{"id":"e-154","name":"","animationType":"preset","eventTypeId":"SLIDER_ACTIVE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-52","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-155"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"2cb65f63-aefa-4c3e-a7f4-419383c6724b","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"2cb65f63-aefa-4c3e-a7f4-419383c6724b","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1699343805463},"e-155":{"id":"e-155","name":"","animationType":"preset","eventTypeId":"SLIDER_INACTIVE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-53","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-154"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"2cb65f63-aefa-4c3e-a7f4-419383c6724b","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"2cb65f63-aefa-4c3e-a7f4-419383c6724b","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1699343805463},"e-156":{"id":"e-156","name":"","animationType":"preset","eventTypeId":"SLIDER_ACTIVE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-54","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-157"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"2cb65f63-aefa-4c3e-a7f4-419383c6724e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"2cb65f63-aefa-4c3e-a7f4-419383c6724e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1699343805463},"e-157":{"id":"e-157","name":"","animationType":"preset","eventTypeId":"SLIDER_INACTIVE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-53","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-156"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"2cb65f63-aefa-4c3e-a7f4-419383c6724e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"2cb65f63-aefa-4c3e-a7f4-419383c6724e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1699343805463},"e-158":{"id":"e-158","name":"","animationType":"preset","eventTypeId":"SLIDER_ACTIVE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-52","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-159"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"2cb65f63-aefa-4c3e-a7f4-419383c67251","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"2cb65f63-aefa-4c3e-a7f4-419383c67251","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1699343805463},"e-159":{"id":"e-159","name":"","animationType":"preset","eventTypeId":"SLIDER_INACTIVE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-53","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-158"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"2cb65f63-aefa-4c3e-a7f4-419383c67251","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"2cb65f63-aefa-4c3e-a7f4-419383c67251","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1699343805463},"e-160":{"id":"e-160","name":"","animationType":"preset","eventTypeId":"SLIDER_ACTIVE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-54","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-161"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"2cb65f63-aefa-4c3e-a7f4-419383c67254","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"2cb65f63-aefa-4c3e-a7f4-419383c67254","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1699343805463},"e-161":{"id":"e-161","name":"","animationType":"preset","eventTypeId":"SLIDER_INACTIVE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-53","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-160"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"2cb65f63-aefa-4c3e-a7f4-419383c67254","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"2cb65f63-aefa-4c3e-a7f4-419383c67254","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1699343805463},"e-162":{"id":"e-162","name":"","animationType":"preset","eventTypeId":"SLIDER_ACTIVE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-54","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-163"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"2cb65f63-aefa-4c3e-a7f4-419383c67257","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"2cb65f63-aefa-4c3e-a7f4-419383c67257","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1699343805463},"e-163":{"id":"e-163","name":"","animationType":"preset","eventTypeId":"SLIDER_INACTIVE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-53","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-162"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"2cb65f63-aefa-4c3e-a7f4-419383c67257","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"2cb65f63-aefa-4c3e-a7f4-419383c67257","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1699343805463},"e-164":{"id":"e-164","name":"","animationType":"preset","eventTypeId":"SLIDER_ACTIVE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-54","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-165"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"2cb65f63-aefa-4c3e-a7f4-419383c6725a","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"2cb65f63-aefa-4c3e-a7f4-419383c6725a","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1699343805463},"e-165":{"id":"e-165","name":"","animationType":"preset","eventTypeId":"SLIDER_INACTIVE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-53","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-164"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"2cb65f63-aefa-4c3e-a7f4-419383c6725a","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"2cb65f63-aefa-4c3e-a7f4-419383c6725a","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1699343805463},"e-166":{"id":"e-166","name":"","animationType":"preset","eventTypeId":"SLIDER_ACTIVE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-55","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-167"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"46916aa6-e573-5d16-cb90-769113f34069","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"46916aa6-e573-5d16-cb90-769113f34069","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1699344048959},"e-167":{"id":"e-167","name":"","animationType":"preset","eventTypeId":"SLIDER_INACTIVE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-56","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-166"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"46916aa6-e573-5d16-cb90-769113f34069","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"46916aa6-e573-5d16-cb90-769113f34069","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1699344048959},"e-168":{"id":"e-168","name":"","animationType":"preset","eventTypeId":"SLIDER_ACTIVE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-57","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-169"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"46916aa6-e573-5d16-cb90-769113f3406c","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"46916aa6-e573-5d16-cb90-769113f3406c","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1699344048959},"e-169":{"id":"e-169","name":"","animationType":"preset","eventTypeId":"SLIDER_INACTIVE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-56","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-168"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"46916aa6-e573-5d16-cb90-769113f3406c","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"46916aa6-e573-5d16-cb90-769113f3406c","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1699344048959},"e-170":{"id":"e-170","name":"","animationType":"preset","eventTypeId":"SLIDER_ACTIVE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-55","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-171"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"46916aa6-e573-5d16-cb90-769113f3406f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"46916aa6-e573-5d16-cb90-769113f3406f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1699344048959},"e-171":{"id":"e-171","name":"","animationType":"preset","eventTypeId":"SLIDER_INACTIVE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-56","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-170"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"46916aa6-e573-5d16-cb90-769113f3406f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"46916aa6-e573-5d16-cb90-769113f3406f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1699344048959},"e-172":{"id":"e-172","name":"","animationType":"preset","eventTypeId":"SLIDER_ACTIVE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-57","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-173"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"46916aa6-e573-5d16-cb90-769113f34072","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"46916aa6-e573-5d16-cb90-769113f34072","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1699344048959},"e-173":{"id":"e-173","name":"","animationType":"preset","eventTypeId":"SLIDER_INACTIVE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-56","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-172"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"46916aa6-e573-5d16-cb90-769113f34072","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"46916aa6-e573-5d16-cb90-769113f34072","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1699344048959}},"actionLists":{"a-21":{"id":"a-21","title":"Slide Zoom In 2","actionItemGroups":[{"actionItems":[{"id":"a-21-n","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"easeIn","duration":7000,"target":{"useEventTarget":"CHILDREN","selector":".big-slideshow_slide-img","selectorGuids":["19ec02a4-7fbc-1c24-b767-1a58c034b7a5"]},"xValue":1.1,"yValue":1.1,"locked":true}}]}],"useFirstGroupAsInitialState":false,"createdOn":1551984238244},"a-22":{"id":"a-22","title":"Slide Out 2","actionItemGroups":[{"actionItems":[{"id":"a-22-n","actionTypeId":"TRANSFORM_SCALE","config":{"delay":3000,"easing":"easeOut","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".big-slideshow_slide-img","selectorGuids":["19ec02a4-7fbc-1c24-b767-1a58c034b7a5"]},"xValue":1,"yValue":1,"locked":true}}]}],"useFirstGroupAsInitialState":false,"createdOn":1551984238244},"a-23":{"id":"a-23","title":"Slide Zoom Out 2","actionItemGroups":[{"actionItems":[{"id":"a-23-n","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"easeIn","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".big-slideshow_slide-img","selectorGuids":["19ec02a4-7fbc-1c24-b767-1a58c034b7a5"]},"xValue":1.1,"yValue":1.1,"locked":true}}]},{"actionItems":[{"id":"a-23-n-2","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"easeIn","duration":7000,"target":{"useEventTarget":"CHILDREN","selector":".big-slideshow_slide-img","selectorGuids":["19ec02a4-7fbc-1c24-b767-1a58c034b7a5"]},"xValue":1,"yValue":1,"locked":true}}]}],"useFirstGroupAsInitialState":false,"createdOn":1551984238244},"a-52":{"id":"a-52","title":"Slide Zoom Out 4","actionItemGroups":[{"actionItems":[{"id":"a-52-n","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"easeIn","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".big-slideshow_slide-img","selectorGuids":["19ec02a4-7fbc-1c24-b767-1a58c034b7a5"]},"xValue":1.1,"yValue":1.1,"locked":true}}]},{"actionItems":[{"id":"a-52-n-2","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"easeIn","duration":7000,"target":{"useEventTarget":"CHILDREN","selector":".big-slideshow_slide-img","selectorGuids":["19ec02a4-7fbc-1c24-b767-1a58c034b7a5"]},"xValue":1,"yValue":1,"locked":true}}]}],"useFirstGroupAsInitialState":false,"createdOn":1551984238244},"a-53":{"id":"a-53","title":"Slide Out 4","actionItemGroups":[{"actionItems":[{"id":"a-53-n","actionTypeId":"TRANSFORM_SCALE","config":{"delay":3000,"easing":"easeOut","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".big-slideshow_slide-img","selectorGuids":["19ec02a4-7fbc-1c24-b767-1a58c034b7a5"]},"xValue":1,"yValue":1,"locked":true}}]}],"useFirstGroupAsInitialState":false,"createdOn":1551984238244},"a-54":{"id":"a-54","title":"Slide Zoom In 4","actionItemGroups":[{"actionItems":[{"id":"a-54-n","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"easeIn","duration":7000,"target":{"useEventTarget":"CHILDREN","selector":".big-slideshow_slide-img","selectorGuids":["19ec02a4-7fbc-1c24-b767-1a58c034b7a5"]},"xValue":1.1,"yValue":1.1,"locked":true}}]}],"useFirstGroupAsInitialState":false,"createdOn":1551984238244},"a-55":{"id":"a-55","title":"Slide Zoom In 5","actionItemGroups":[{"actionItems":[{"id":"a-55-n","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"easeIn","duration":7000,"target":{"useEventTarget":"CHILDREN","selector":".big-slideshow_slide-img","selectorGuids":["19ec02a4-7fbc-1c24-b767-1a58c034b7a5"]},"xValue":1.1,"yValue":1.1,"locked":true}}]}],"useFirstGroupAsInitialState":false,"createdOn":1551984238244},"a-56":{"id":"a-56","title":"Slide Out 5","actionItemGroups":[{"actionItems":[{"id":"a-56-n","actionTypeId":"TRANSFORM_SCALE","config":{"delay":3000,"easing":"easeOut","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".big-slideshow_slide-img","selectorGuids":["19ec02a4-7fbc-1c24-b767-1a58c034b7a5"]},"xValue":1,"yValue":1,"locked":true}}]}],"useFirstGroupAsInitialState":false,"createdOn":1551984238244},"a-57":{"id":"a-57","title":"Slide Zoom Out 5","actionItemGroups":[{"actionItems":[{"id":"a-57-n","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"easeIn","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".big-slideshow_slide-img","selectorGuids":["19ec02a4-7fbc-1c24-b767-1a58c034b7a5"]},"xValue":1.1,"yValue":1.1,"locked":true}}]},{"actionItems":[{"id":"a-57-n-2","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"easeIn","duration":7000,"target":{"useEventTarget":"CHILDREN","selector":".big-slideshow_slide-img","selectorGuids":["19ec02a4-7fbc-1c24-b767-1a58c034b7a5"]},"xValue":1,"yValue":1,"locked":true}}]}],"useFirstGroupAsInitialState":false,"createdOn":1551984238244}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function SectionHero({ as: _Component = _Builtin.Block }) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(
        _styles,
        "section_hero-slideshow",
        "no-pointer-events"
      )}
      tag="section"
    >
      <_Builtin.SliderWrapper
        className={_utils.cx(_styles, "hero-slideshow")}
        data-delay="5000"
        data-animation="fade"
        data-autoplay="1"
        data-duration="2000"
        data-infinite="1"
        navSpacing={3}
        navShadow={false}
        autoplay={true}
        delay={5000}
        iconArrows={true}
        animation="fade"
        navNumbers={false}
        easing="ease"
        navRound={true}
        hideArrows={false}
        disableSwipe={false}
        duration={2000}
        infinite={true}
        autoMax={0}
        navInvert={false}
      >
        <_Builtin.SliderMask>
          <_Builtin.SliderSlide
            className={_utils.cx(_styles, "big-slideshow_slide")}
            data-w-id="46916aa6-e573-5d16-cb90-769113f34069"
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "big-slideshow_slide-content")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "big-slideshow_slide-img")}
                tag="div"
              />
            </_Builtin.Block>
          </_Builtin.SliderSlide>
          <_Builtin.SliderSlide
            className={_utils.cx(_styles, "big-slideshow_slide")}
            data-w-id="46916aa6-e573-5d16-cb90-769113f3406c"
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "big-slideshow_slide-content")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "big-slideshow_slide-img", "two")}
                tag="div"
              />
            </_Builtin.Block>
          </_Builtin.SliderSlide>
          <_Builtin.SliderSlide
            className={_utils.cx(_styles, "big-slideshow_slide")}
            data-w-id="46916aa6-e573-5d16-cb90-769113f3406f"
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
                  "three"
                )}
                tag="div"
              />
            </_Builtin.Block>
          </_Builtin.SliderSlide>
          <_Builtin.SliderSlide
            className={_utils.cx(_styles, "big-slideshow_slide")}
            data-w-id="46916aa6-e573-5d16-cb90-769113f34072"
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
                  "four"
                )}
                tag="div"
              />
            </_Builtin.Block>
          </_Builtin.SliderSlide>
        </_Builtin.SliderMask>
        <_Builtin.SliderArrow
          className={_utils.cx(_styles, "pointer-events", "hidden-mobile")}
          dir="left"
        >
          <_Builtin.Icon
            widget={{
              type: "icon",
              icon: "slider-left",
            }}
            bind="b5887afa-e9e3-4b6f-9ca5-13e2a58d12e5"
          />
        </_Builtin.SliderArrow>
        <_Builtin.SliderArrow
          className={_utils.cx(_styles, "pointer-events", "hidden-mobile")}
          dir="right"
        >
          <_Builtin.Icon
            widget={{
              type: "icon",
              icon: "slider-right",
            }}
            bind="b5887afa-e9e3-4b6f-9ca5-13e2a58d12e7"
          />
        </_Builtin.SliderArrow>
        <_Builtin.SliderNav
          className={_utils.cx(_styles, "hero-slideshow_slide-nav", "hidden")}
        />
      </_Builtin.SliderWrapper>
      <_Builtin.Block
        className={_utils.cx(_styles, "hero-slideshow_text-wrapper")}
        tag="div"
      >
        <_Builtin.Heading
          className={_utils.cx(
            _styles,
            "heading-style-h2",
            "text-align-center"
          )}
          tag="h1"
        >
          <_Builtin.Span className={_utils.cx(_styles, "text-span")}>
            {"Zahnarztpraxis"}
          </_Builtin.Span>{" "}
          <br />
          {"Ladar & Kollegen"}
        </_Builtin.Heading>
        <_Builtin.Block
          className={_utils.cx(_styles, "spacer-xsmall")}
          tag="div"
        />
        <_Builtin.Block
          className={_utils.cx(_styles, "hero-slideshow_line-divider")}
          tag="div"
        />
        <_Builtin.Block
          className={_utils.cx(_styles, "spacer-xsmall")}
          tag="div"
        />
        <_Builtin.Paragraph className={_utils.cx(_styles, "text-align-center")}>
          {"Ihre Spezialisten für Implantologie, "}
          <br />
          {"Ästhetische Zahnheilkunde, Parodontologie, Endodontie"}
        </_Builtin.Paragraph>
        <_Builtin.Block
          className={_utils.cx(_styles, "spacer-small")}
          tag="div"
        />
        <ButtonPrimary />
        <_Builtin.Block className={_utils.cx(_styles, "icon-wrap")} tag="div">
          <_Builtin.Block
            className={_utils.cx(_styles, "icon-scroll")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "scroll-dot")}
              tag="div"
            />
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
