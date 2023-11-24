import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./Menu.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-16":{"id":"e-16","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-11","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-15"}},"mediaQueries":["main"],"target":{"selector":".navbar-logo-container","originalId":"79a57036-0792-5d21-37c0-6f0e45ed6a76","appliesTo":"CLASS"},"targets":[{"selector":".navbar-logo-container","originalId":"79a57036-0792-5d21-37c0-6f0e45ed6a76","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1644904376758},"e-15":{"id":"e-15","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-12","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-16"}},"mediaQueries":["main"],"target":{"selector":".navbar-logo-container","originalId":"79a57036-0792-5d21-37c0-6f0e45ed6a76","appliesTo":"CLASS"},"targets":[{"selector":".navbar-logo-container","originalId":"79a57036-0792-5d21-37c0-6f0e45ed6a76","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1644904376761},"e-17":{"id":"e-17","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-11","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-199"}},"mediaQueries":["main"],"target":{"selector":".navbar-logo-container","originalId":"96701deb-006f-0be5-1c6e-2944fcce420e","appliesTo":"CLASS"},"targets":[{"selector":".navbar-logo-container","originalId":"96701deb-006f-0be5-1c6e-2944fcce420e","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1699328732532},"e-9":{"id":"e-9","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-12","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-62"}},"mediaQueries":["main"],"target":{"selector":".navbar-logo-container","originalId":"96701deb-006f-0be5-1c6e-2944fcce420e","appliesTo":"CLASS"},"targets":[{"selector":".navbar-logo-container","originalId":"96701deb-006f-0be5-1c6e-2944fcce420e","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1699328732532},"e-18":{"id":"e-18","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-11","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-10"}},"mediaQueries":["main"],"target":{"selector":".menu-button","originalId":"79a57036-0792-5d21-37c0-6f0e45ed6a79","appliesTo":"CLASS"},"targets":[{"selector":".menu-button","originalId":"79a57036-0792-5d21-37c0-6f0e45ed6a79","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1644904418212},"e-10":{"id":"e-10","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-12","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-67"}},"mediaQueries":["main"],"target":{"selector":".menu-button","originalId":"79a57036-0792-5d21-37c0-6f0e45ed6a79","appliesTo":"CLASS"},"targets":[{"selector":".menu-button","originalId":"79a57036-0792-5d21-37c0-6f0e45ed6a79","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1644904418214},"e-7":{"id":"e-7","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-13","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-8"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"96701deb-006f-0be5-1c6e-2944fcce4211","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"96701deb-006f-0be5-1c6e-2944fcce4211","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1699328732532},"e-14":{"id":"e-14","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-14","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-64"}},"mediaQueries":["main"],"target":{"id":"96701deb-006f-0be5-1c6e-2944fcce4211","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"96701deb-006f-0be5-1c6e-2944fcce4211","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1699328732532},"e-13":{"id":"e-13","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-15","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-65"}},"mediaQueries":["main"],"target":{"id":"96701deb-006f-0be5-1c6e-2944fcce4211","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"96701deb-006f-0be5-1c6e-2944fcce4211","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1699328732532},"e-11":{"id":"e-11","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-11","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-201"}},"mediaQueries":["main"],"target":{"selector":".menu-button","originalId":"96701deb-006f-0be5-1c6e-2944fcce4211","appliesTo":"CLASS"},"targets":[{"selector":".menu-button","originalId":"96701deb-006f-0be5-1c6e-2944fcce4211","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1699328732532},"e-12":{"id":"e-12","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-12","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-61"}},"mediaQueries":["main"],"target":{"selector":".menu-button","originalId":"96701deb-006f-0be5-1c6e-2944fcce4211","appliesTo":"CLASS"},"targets":[{"selector":".menu-button","originalId":"96701deb-006f-0be5-1c6e-2944fcce4211","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1699328732532},"e-35":{"id":"e-35","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-20","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-41"}},"mediaQueries":["main"],"target":{"selector":".menu-social","originalId":"b919e661-8b51-a329-cf4d-3b80ef57b777","appliesTo":"CLASS"},"targets":[{"selector":".menu-social","originalId":"b919e661-8b51-a329-cf4d-3b80ef57b777","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1644572989313},"e-41":{"id":"e-41","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-19","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-35"}},"mediaQueries":["main"],"target":{"selector":".menu-social","originalId":"b919e661-8b51-a329-cf4d-3b80ef57b777","appliesTo":"CLASS"},"targets":[{"selector":".menu-social","originalId":"b919e661-8b51-a329-cf4d-3b80ef57b777","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1644572989315},"e-47":{"id":"e-47","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-20","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-27"}},"mediaQueries":["main"],"target":{"selector":".menu-social","originalId":"26c375eb-323e-4426-fbae-ad28d9471554","appliesTo":"CLASS"},"targets":[{"selector":".menu-social","originalId":"26c375eb-323e-4426-fbae-ad28d9471554","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1699328746120},"e-27":{"id":"e-27","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-19","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-47"}},"mediaQueries":["main"],"target":{"selector":".menu-social","originalId":"26c375eb-323e-4426-fbae-ad28d9471554","appliesTo":"CLASS"},"targets":[{"selector":".menu-social","originalId":"26c375eb-323e-4426-fbae-ad28d9471554","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1699328746120},"e-45":{"id":"e-45","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-11","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-28"}},"mediaQueries":["main"],"target":{"selector":".menu-link","originalId":"b919e661-8b51-a329-cf4d-3b80ef57b749","appliesTo":"CLASS"},"targets":[{"selector":".menu-link","originalId":"b919e661-8b51-a329-cf4d-3b80ef57b749","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1644904505522},"e-28":{"id":"e-28","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-12","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-45"}},"mediaQueries":["main"],"target":{"selector":".menu-link","originalId":"b919e661-8b51-a329-cf4d-3b80ef57b749","appliesTo":"CLASS"},"targets":[{"selector":".menu-link","originalId":"b919e661-8b51-a329-cf4d-3b80ef57b749","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1644904505524},"e-21":{"id":"e-21","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-18","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-44"}},"mediaQueries":["main"],"target":{"selector":".menu-link","originalId":"b919e661-8b51-a329-cf4d-3b80ef57b749","appliesTo":"CLASS"},"targets":[{"selector":".menu-link","originalId":"b919e661-8b51-a329-cf4d-3b80ef57b749","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1643709888541},"e-44":{"id":"e-44","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-16","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-21"}},"mediaQueries":["main"],"target":{"selector":".menu-link","originalId":"b919e661-8b51-a329-cf4d-3b80ef57b749","appliesTo":"CLASS"},"targets":[{"selector":".menu-link","originalId":"b919e661-8b51-a329-cf4d-3b80ef57b749","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1643709888542},"e-23":{"id":"e-23","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-11","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-36"}},"mediaQueries":["main"],"target":{"selector":".menu-social","originalId":"b919e661-8b51-a329-cf4d-3b80ef57b777","appliesTo":"CLASS"},"targets":[{"selector":".menu-social","originalId":"b919e661-8b51-a329-cf4d-3b80ef57b777","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1644904479194},"e-36":{"id":"e-36","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-12","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-23"}},"mediaQueries":["main"],"target":{"selector":".menu-social","originalId":"b919e661-8b51-a329-cf4d-3b80ef57b777","appliesTo":"CLASS"},"targets":[{"selector":".menu-social","originalId":"b919e661-8b51-a329-cf4d-3b80ef57b777","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1644904479197},"e-29":{"id":"e-29","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-14","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-26"}},"mediaQueries":["main"],"target":{"id":"26c375eb-323e-4426-fbae-ad28d947150e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"26c375eb-323e-4426-fbae-ad28d947150e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1699328746120},"e-26":{"id":"e-26","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-15","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-29"}},"mediaQueries":["main"],"target":{"id":"26c375eb-323e-4426-fbae-ad28d947150e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"26c375eb-323e-4426-fbae-ad28d947150e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1699328746120},"e-37":{"id":"e-37","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-17","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-43"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"26c375eb-323e-4426-fbae-ad28d947150e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"26c375eb-323e-4426-fbae-ad28d947150e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1699328746120},"e-38":{"id":"e-38","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-11","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-60"}},"mediaQueries":["main"],"target":{"selector":".menu-link","originalId":"26c375eb-323e-4426-fbae-ad28d9471514","appliesTo":"CLASS"},"targets":[{"selector":".menu-link","originalId":"26c375eb-323e-4426-fbae-ad28d9471514","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1699328746120},"e-19":{"id":"e-19","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-12","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-38"}},"mediaQueries":["main"],"target":{"selector":".menu-link","originalId":"26c375eb-323e-4426-fbae-ad28d9471514","appliesTo":"CLASS"},"targets":[{"selector":".menu-link","originalId":"26c375eb-323e-4426-fbae-ad28d9471514","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1699328746120},"e-30":{"id":"e-30","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-18","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-25"}},"mediaQueries":["main"],"target":{"id":"26c375eb-323e-4426-fbae-ad28d9471526","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"26c375eb-323e-4426-fbae-ad28d9471526","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1699328746120},"e-31":{"id":"e-31","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-18","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-42"}},"mediaQueries":["main"],"target":{"id":"26c375eb-323e-4426-fbae-ad28d9471538","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"26c375eb-323e-4426-fbae-ad28d9471538","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1699328746120},"e-46":{"id":"e-46","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-18","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-32"}},"mediaQueries":["main"],"target":{"id":"26c375eb-323e-4426-fbae-ad28d947154a","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"26c375eb-323e-4426-fbae-ad28d947154a","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1699328746120},"e-39":{"id":"e-39","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-18","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-40"}},"mediaQueries":["main"],"target":{"selector":".menu-link","originalId":"26c375eb-323e-4426-fbae-ad28d9471514","appliesTo":"CLASS"},"targets":[{"selector":".menu-link","originalId":"26c375eb-323e-4426-fbae-ad28d9471514","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1699328746120},"e-40":{"id":"e-40","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-16","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-39"}},"mediaQueries":["main"],"target":{"selector":".menu-link","originalId":"26c375eb-323e-4426-fbae-ad28d9471514","appliesTo":"CLASS"},"targets":[{"selector":".menu-link","originalId":"26c375eb-323e-4426-fbae-ad28d9471514","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1699328746120},"e-22":{"id":"e-22","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-18","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-24"}},"mediaQueries":["main"],"target":{"id":"26c375eb-323e-4426-fbae-ad28d9471541","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"26c375eb-323e-4426-fbae-ad28d9471541","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1699328746120},"e-20":{"id":"e-20","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-18","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-33"}},"mediaQueries":["main"],"target":{"id":"26c375eb-323e-4426-fbae-ad28d947152f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"26c375eb-323e-4426-fbae-ad28d947152f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1699328746120},"e-34":{"id":"e-34","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-11","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-48"}},"mediaQueries":["main"],"target":{"selector":".menu-social","originalId":"26c375eb-323e-4426-fbae-ad28d9471554","appliesTo":"CLASS"},"targets":[{"selector":".menu-social","originalId":"26c375eb-323e-4426-fbae-ad28d9471554","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1699328746120},"e-48":{"id":"e-48","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-12","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-34"}},"mediaQueries":["main"],"target":{"selector":".menu-social","originalId":"26c375eb-323e-4426-fbae-ad28d9471554","appliesTo":"CLASS"},"targets":[{"selector":".menu-social","originalId":"26c375eb-323e-4426-fbae-ad28d9471554","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1699328746120}},"actionLists":{"a-11":{"id":"a-11","title":"Cursor - Hover In","actionItemGroups":[{"actionItems":[{"id":"a-11-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{},"widthValue":25,"heightValue":25,"widthUnit":"px","heightUnit":"px","locked":false}}]},{"actionItems":[{"id":"a-11-n-2","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":400,"target":{},"widthValue":75,"heightValue":75,"widthUnit":"px","heightUnit":"px","locked":false}}]}],"useFirstGroupAsInitialState":true,"createdOn":1644847102447},"a-12":{"id":"a-12","title":"Cursor - Hover Out","actionItemGroups":[{"actionItems":[{"id":"a-12-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":400,"target":{},"widthValue":25,"heightValue":25,"widthUnit":"px","heightUnit":"px","locked":false}}]}],"useFirstGroupAsInitialState":false,"createdOn":1644847102447},"a-13":{"id":"a-13","title":"Open Menu 2","actionItemGroups":[{"actionItems":[{"id":"a-13-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".menu","selectorGuids":["9d015204-d92e-e364-97e5-1f0713b83262"]},"value":0,"unit":""}},{"id":"a-13-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".menu","selectorGuids":["9d015204-d92e-e364-97e5-1f0713b83262"]},"value":"none"}}]},{"actionItems":[{"id":"a-13-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".menu","selectorGuids":["9d015204-d92e-e364-97e5-1f0713b83262"]},"value":"block"}}]},{"actionItems":[{"id":"a-13-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":500,"target":{"selector":".menu","selectorGuids":["9d015204-d92e-e364-97e5-1f0713b83262"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1643710275298},"a-14":{"id":"a-14","title":"Menu Icon - Hover In 2","actionItemGroups":[{"actionItems":[{"id":"a-14-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".bottom-menu-line","selectorGuids":["57985817-075c-07f9-e1b8-554c9d176f33"]},"widthValue":56,"widthUnit":"%","heightUnit":"PX","locked":false}}]},{"actionItems":[{"id":"a-14-n-2","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".bottom-menu-line","selectorGuids":["57985817-075c-07f9-e1b8-554c9d176f33"]},"widthValue":100,"widthUnit":"%","heightUnit":"PX","locked":false}}]}],"useFirstGroupAsInitialState":true,"createdOn":1644572646150},"a-15":{"id":"a-15","title":"Menu Icon - Hover Out 2","actionItemGroups":[{"actionItems":[{"id":"a-15-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".bottom-menu-line","selectorGuids":["57985817-075c-07f9-e1b8-554c9d176f33"]},"widthValue":56,"widthUnit":"%","heightUnit":"PX","locked":false}}]}],"useFirstGroupAsInitialState":false,"createdOn":1644572646150},"a-20":{"id":"a-20","title":"Menu - Social Link Hover In","actionItemGroups":[{"actionItems":[{"id":"a-20-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".menu-social-text","selectorGuids":["9d015204-d92e-e364-97e5-1f0713b83260"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-20-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".menu-social-text.absolute","selectorGuids":["9d015204-d92e-e364-97e5-1f0713b83260","9d015204-d92e-e364-97e5-1f0713b8326d"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]},{"actionItems":[{"id":"a-20-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-social-text","selectorGuids":["9d015204-d92e-e364-97e5-1f0713b83260"]},"yValue":-100,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-20-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-social-text.absolute","selectorGuids":["9d015204-d92e-e364-97e5-1f0713b83260","9d015204-d92e-e364-97e5-1f0713b8326d"]},"yValue":-100,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1644572996556},"a-19":{"id":"a-19","title":"Menu - Social Link Hover Out","actionItemGroups":[{"actionItems":[{"id":"a-19-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-social-text","selectorGuids":["9d015204-d92e-e364-97e5-1f0713b83260"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-19-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-social-text.absolute","selectorGuids":["9d015204-d92e-e364-97e5-1f0713b83260","9d015204-d92e-e364-97e5-1f0713b8326d"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1644572996556},"a-18":{"id":"a-18","title":"Manu Link Hover In 2","actionItemGroups":[{"actionItems":[{"id":"a-18-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".menu-background-image","selectorGuids":["9d015204-d92e-e364-97e5-1f0713b8325e"]},"value":0,"unit":""}},{"id":"a-18-n-2","actionTypeId":"STYLE_FILTER","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".image.for-menu","selectorGuids":["7351f457-bfa6-abe4-ae61-86758a6dcb48","9d015204-d92e-e364-97e5-1f0713b8326b"]},"filters":[{"type":"saturate","filterId":"c1af","value":99,"unit":"%"}]}},{"id":"a-18-n-3","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".menu-number-text","selectorGuids":["9d015204-d92e-e364-97e5-1f0713b8325f"]},"globalSwatchId":"","rValue":255,"bValue":255,"gValue":255,"aValue":0.5}},{"id":"a-18-n-4","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".big-text.for-menu","selectorGuids":["9d015204-d92e-e364-97e5-1f0713b83266","9d015204-d92e-e364-97e5-1f0713b8326a"]},"globalSwatchId":"","rValue":255,"bValue":255,"gValue":255,"aValue":0.5}}]},{"actionItems":[{"id":"a-18-n-5","actionTypeId":"STYLE_FILTER","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".image.for-menu","selectorGuids":["7351f457-bfa6-abe4-ae61-86758a6dcb48","9d015204-d92e-e364-97e5-1f0713b8326b"]},"filters":[{"type":"saturate","filterId":"6ab0","value":99,"unit":"%"}]}}]},{"actionItems":[{"id":"a-18-n-6","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":1000,"target":{"useEventTarget":"CHILDREN","selector":".menu-background-image","selectorGuids":["9d015204-d92e-e364-97e5-1f0713b8325e"]},"value":1,"unit":""}},{"id":"a-18-n-7","actionTypeId":"STYLE_FILTER","config":{"delay":0,"easing":"ease","duration":30000,"target":{"useEventTarget":"CHILDREN","selector":".image.for-menu","selectorGuids":["7351f457-bfa6-abe4-ae61-86758a6dcb48","9d015204-d92e-e364-97e5-1f0713b8326b"]},"filters":[{"type":"saturate","filterId":"813e","value":99,"unit":"%"}]}},{"id":"a-18-n-8","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"ease","duration":1000,"target":{"useEventTarget":"CHILDREN","selector":".menu-number-text","selectorGuids":["9d015204-d92e-e364-97e5-1f0713b8325f"]},"globalSwatchId":"","rValue":255,"bValue":255,"gValue":255,"aValue":1}},{"id":"a-18-n-9","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"ease","duration":1000,"target":{"useEventTarget":"CHILDREN","selector":".big-text.for-menu","selectorGuids":["9d015204-d92e-e364-97e5-1f0713b83266","9d015204-d92e-e364-97e5-1f0713b8326a"]},"globalSwatchId":"","rValue":255,"bValue":255,"gValue":255,"aValue":1}}]}],"useFirstGroupAsInitialState":true,"createdOn":1643709900825},"a-16":{"id":"a-16","title":"Manu Link Hover Out","actionItemGroups":[{"actionItems":[{"id":"a-16-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":1000,"target":{"useEventTarget":"CHILDREN","selector":".menu-background-image","selectorGuids":["9d015204-d92e-e364-97e5-1f0713b8325e"]},"value":0,"unit":""}},{"id":"a-16-n-2","actionTypeId":"STYLE_FILTER","config":{"delay":0,"easing":"ease","duration":1000,"target":{"useEventTarget":"CHILDREN","selector":".image.for-menu","selectorGuids":["7351f457-bfa6-abe4-ae61-86758a6dcb48","9d015204-d92e-e364-97e5-1f0713b8326b"]},"filters":[{"type":"saturate","filterId":"83b1","value":0,"unit":"%"}]}},{"id":"a-16-n-3","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"ease","duration":1000,"target":{"useEventTarget":"CHILDREN","selector":".menu-number-text","selectorGuids":["9d015204-d92e-e364-97e5-1f0713b8325f"]},"globalSwatchId":"","rValue":255,"bValue":255,"gValue":255,"aValue":0.5}},{"id":"a-16-n-4","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"ease","duration":1000,"target":{"useEventTarget":"CHILDREN","selector":".big-text.for-menu","selectorGuids":["9d015204-d92e-e364-97e5-1f0713b83266","9d015204-d92e-e364-97e5-1f0713b8326a"]},"globalSwatchId":"","rValue":255,"bValue":255,"gValue":255,"aValue":0.5}}]}],"useFirstGroupAsInitialState":false,"createdOn":1643709900825},"a-17":{"id":"a-17","title":"Close Menu 2","actionItemGroups":[{"actionItems":[{"id":"a-17-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":500,"target":{"selector":".menu","selectorGuids":["9d015204-d92e-e364-97e5-1f0713b83262"]},"value":0,"unit":""}},{"id":"a-17-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":500,"easing":"","duration":0,"target":{"selector":".menu","selectorGuids":["9d015204-d92e-e364-97e5-1f0713b83262"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1643710275298}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function Menu({ as: _Component = _Builtin.Block }) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "menu")}
      tag="div"
      fs-scrolldisable-element="when-visible"
      bind="b919e661-8b51-a329-cf4d-3b80ef57b73f"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "navbar", "for-menu")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "navbar-inner")}
          tag="div"
        >
          <_Builtin.Link
            className={_utils.cx(_styles, "navbar-logo-container")}
            button={false}
            options={{
              href: "#",
            }}
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "navbar-logo-text")}
              tag="div"
            >
              {"Praxis Ladar"}
            </_Builtin.Block>
            <_Builtin.HtmlEmbed
              className={_utils.cx(_styles, "ladar-logo")}
              bind="8828eea5-a407-1164-6738-6895552049c8"
              value="%3Csvg%20width%3D%2250%22%20height%3D%2250%22%20viewbox%3D%220%200%20384%20384%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M99.6459%2072.448C96.4574%2071.7799%2095.8684%2069.8116%2097.7681%2066.1715C98.8531%2064.0921%20100.429%2064%20134.814%2064C154.564%2064%20171.002%2064.2841%20171.342%2064.6321C171.681%2064.9802%20171.606%2066.6229%20171.174%2068.2813C170.528%2070.7672%20169.342%2071.5947%20164.436%2072.9825C157.391%2074.9754%20155.91%2075.877%20152.761%2080.0865C150.218%2083.4841%20148.175%2089.7909%20142.147%20112.842C140.047%20120.87%20137.533%20130.47%20136.559%20134.175C135.586%20137.881%20133.354%20146.47%20131.6%20153.263C128.472%20165.374%20124.276%20181.421%20121.325%20192.561C116.196%20211.926%20115.249%20215.598%20115.249%20216.12C115.249%20216.44%20119.56%20216.711%20124.829%20216.721C131.04%20216.733%20137.298%20217.551%20142.622%20219.044C147.138%20220.312%20152.032%20221.439%20153.495%20221.551C156.321%20221.767%20156.152%20222.256%20163.945%20191.439C164.726%20188.351%20166.915%20180.014%20168.808%20172.912C176.136%20145.432%20175.91%20142.228%20166.436%20139.311C161.118%20137.673%20160.327%20136.331%20162.369%20132.417C163.455%20130.338%20165.033%20130.246%20199.666%20130.246H235.83L235.486%20133.895C235.165%20137.313%20234.761%20137.638%20229.121%20139.036C222.85%20140.59%20218.04%20144.253%20215.359%20149.513C214.09%20152.004%20210.951%20163.255%20202.876%20194.246C202.313%20196.407%20201.107%20200.954%20200.197%20204.351C199.286%20207.747%20197.046%20216.108%20195.218%20222.929C193.389%20229.75%20191.894%20235.939%20191.894%20236.683C191.894%20237.622%20194.486%20238.032%20200.379%20238.025C207.758%20238.015%20209.597%20237.583%20214.483%20234.709C221.221%20230.747%20226.598%20224.563%20230.608%20216.165L233.569%20209.965H255.981C270.969%20209.965%20278.393%20210.357%20278.393%20211.149C278.393%20213.547%20269.711%20225.304%20263.469%20231.358C247.172%20247.166%20230.173%20254.178%20208.317%20254.108C192.073%20254.055%20182.968%20251.381%20159.593%20239.798C138.509%20229.35%20135.517%20228.483%20120.723%20228.538C110.67%20228.577%20106.476%20229.117%2099.9196%20231.22C90.8645%20234.123%2081.5599%20238.626%2072.9198%20244.284C67.3116%20247.955%2067.2568%20247.965%2065.3013%20245.75C63.9545%20244.223%2063.6633%20243.059%2064.3804%20242.064C70.4617%20233.637%2071.7176%20230.434%2077.409%20208.842C80.7452%20196.182%2084.2205%20183.046%2085.1326%20179.649C86.8188%20173.363%2090.5766%20159.053%2096.6315%20135.86C98.4852%20128.758%20101.524%20117.137%20103.383%20110.035C111.689%2078.3034%20111.351%2074.9025%2099.6459%2072.448Z%22%20fill%3D%22white%22%2F%3E%0A%3Cpath%20d%3D%22M143.779%20268.912C146.203%20259.649%20148.446%20251.185%20148.763%20250.105C149.08%20249.025%20149.565%20248.14%20149.84%20248.14C150.115%20248.14%20153.654%20249.847%20157.704%20251.932C164.792%20255.582%20176.635%20260.61%20181.765%20262.15C184.824%20263.067%20184.82%20263.357%20181.596%20275.376C180.147%20280.775%20179.284%20285.382%20179.68%20285.614C180.074%20285.845%20183.282%20286.394%20186.808%20286.832C196.09%20287.987%20202.78%20290.262%20214.996%20296.422C228.788%20303.376%20240.258%20306.174%20247.504%20304.35C257.846%20301.747%20269.325%20290.633%20273.08%20279.585L274.228%20276.211H297.114C309.701%20276.211%20320%20276.615%20320%20277.109C320%20279.032%20310.131%20291.684%20303.935%20297.706C288.435%20312.766%20270.862%20320%20249.778%20320C236.842%20320%20231.111%20318.32%20213.245%20309.29C204.211%20304.724%20193.884%20300.214%20190.295%20299.266C173.573%20294.852%20153.27%20299.256%20136.816%20310.865C132.027%20314.243%20131.907%20314.267%20130.031%20312.141C128.2%20310.067%20128.279%20309.733%20131.953%20304.042C136.047%20297.699%20136.943%20295.036%20143.779%20268.912Z%22%20fill%3D%22white%22%2F%3E%0A%3Crect%20x%3D%226%22%20y%3D%226%22%20width%3D%22372%22%20height%3D%22372%22%20stroke%3D%22white%22%20stroke-width%3D%2212%22%2F%3E%0A%3C%2Fsvg%3E"
            />
          </_Builtin.Link>
          <_Builtin.Block
            className={_utils.cx(_styles, "menu-button")}
            data-w-id="26c375eb-323e-4426-fbae-ad28d947150e"
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "menu-text")}
              tag="div"
            >
              {"Schließen"}
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "top-menu-line")}
              tag="div"
            />
            <_Builtin.Block
              className={_utils.cx(_styles, "bottom-menu-line")}
              tag="div"
            />
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "menu-links-container")}
        tag="div"
      >
        <_Builtin.Link
          className={_utils.cx(_styles, "menu-link")}
          button={false}
          options={{
            href: "#",
          }}
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "menu-number-wrapper")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "menu-number-text")}
              tag="div"
            >
              {"01"}
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "menu-link-text-wrapper")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "big-text",
                "for-menu",
                "customized"
              )}
              tag="div"
            >
              {"Home"}
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "menu-background-image")}
            tag="div"
          >
            <_Builtin.Image
              className={_utils.cx(_styles, "image", "for-menu")}
              loading="lazy"
              width="auto"
              height="auto"
              alt=""
              src="https://uploads-ssl.webflow.com/65459ab6440c1238e7ede277/6549b2ef41f8a92cdb1b8970_DSC03902.JPG.jpg"
            />
          </_Builtin.Block>
        </_Builtin.Link>
        <_Builtin.Link
          className={_utils.cx(_styles, "menu-link")}
          button={false}
          options={{
            href: "#",
          }}
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "menu-number-wrapper")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "menu-number-text")}
              tag="div"
            >
              {"02"}
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "menu-link-text-wrapper")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "big-text",
                "for-menu",
                "customized"
              )}
              tag="div"
            >
              {"Ambiente"}
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "menu-background-image")}
            tag="div"
          >
            <_Builtin.Image
              className={_utils.cx(_styles, "image", "for-menu")}
              loading="lazy"
              width="auto"
              height="auto"
              alt=""
              src="https://uploads-ssl.webflow.com/65459ab6440c1238e7ede277/6549b2ef41f8a92cdb1b8951_DSC03835.JPG.webp"
            />
          </_Builtin.Block>
        </_Builtin.Link>
        <_Builtin.Link
          className={_utils.cx(_styles, "menu-link")}
          data-w-id="26c375eb-323e-4426-fbae-ad28d9471526"
          button={false}
          options={{
            href: "#",
          }}
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "menu-number-wrapper")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "menu-number-text")}
              tag="div"
            >
              {"03"}
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "menu-link-text-wrapper")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "big-text",
                "for-menu",
                "customized"
              )}
              tag="div"
            >
              {"Behandlung"}
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "menu-background-image")}
            tag="div"
          >
            <_Builtin.Image
              className={_utils.cx(_styles, "image", "for-menu")}
              loading="lazy"
              width="auto"
              height="auto"
              alt=""
              src="https://uploads-ssl.webflow.com/65459ab6440c1238e7ede277/6549b2ef41f8a92cdb1b896c_DSC03955.webp"
            />
          </_Builtin.Block>
        </_Builtin.Link>
        <_Builtin.Link
          className={_utils.cx(_styles, "menu-link")}
          data-w-id="26c375eb-323e-4426-fbae-ad28d947152f"
          button={false}
          options={{
            href: "#",
          }}
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "menu-number-wrapper", "custom")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "menu-number-text")}
              tag="div"
            >
              {"04"}
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "menu-link-text-wrapper")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "big-text",
                "for-menu",
                "customized"
              )}
              tag="div"
            >
              {"Über uns"}
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "menu-background-image")}
            tag="div"
          >
            <_Builtin.Image
              className={_utils.cx(_styles, "image", "for-menu")}
              loading="lazy"
              width="auto"
              height="auto"
              alt="das gesamte Zahnarztteam der Praxis Ladar"
              src="https://uploads-ssl.webflow.com/65459ab6440c1238e7ede277/6549b2ef41f8a92cdb1b8958_3L9A3045.webp"
            />
          </_Builtin.Block>
        </_Builtin.Link>
        <_Builtin.Link
          className={_utils.cx(_styles, "menu-link")}
          data-w-id="26c375eb-323e-4426-fbae-ad28d9471538"
          button={false}
          options={{
            href: "#",
          }}
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "menu-number-wrapper")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "menu-number-text")}
              tag="div"
            >
              {"05"}
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "menu-link-text-wrapper")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "big-text",
                "for-menu",
                "customized"
              )}
              tag="div"
            >
              {"Team"}
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "menu-background-image")}
            tag="div"
          >
            <_Builtin.Image
              className={_utils.cx(_styles, "image", "for-menu")}
              loading="lazy"
              width="auto"
              height="auto"
              alt=""
              src="https://uploads-ssl.webflow.com/65459ab6440c1238e7ede277/6549b2ef41f8a92cdb1b8962_3L9A3315.webp"
            />
          </_Builtin.Block>
        </_Builtin.Link>
        <_Builtin.Link
          className={_utils.cx(_styles, "menu-link")}
          data-w-id="26c375eb-323e-4426-fbae-ad28d9471541"
          button={false}
          options={{
            href: "#",
          }}
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "menu-number-wrapper")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "menu-number-text")}
              tag="div"
            >
              {"06"}
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "menu-link-text-wrapper")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "big-text",
                "for-menu",
                "customized"
              )}
              tag="div"
            >
              {"Jobs"}
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "menu-background-image")}
            tag="div"
          >
            <_Builtin.Image
              className={_utils.cx(_styles, "image", "for-menu")}
              loading="lazy"
              width="auto"
              height="auto"
              alt=""
              src="https://uploads-ssl.webflow.com/65459ab6440c1238e7ede277/6549b2ef41f8a92cdb1b8967_3L9A3327.webp"
            />
          </_Builtin.Block>
        </_Builtin.Link>
        <_Builtin.Link
          className={_utils.cx(_styles, "menu-link")}
          data-w-id="26c375eb-323e-4426-fbae-ad28d947154a"
          button={false}
          options={{
            href: "#",
          }}
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "menu-number-wrapper")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "menu-number-text")}
              tag="div"
            >
              {"07"}
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "menu-link-text-wrapper")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "big-text",
                "for-menu",
                "customized"
              )}
              tag="div"
            >
              {"Kontakt"}
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "menu-background-image")}
            tag="div"
          >
            <_Builtin.Image
              className={_utils.cx(_styles, "image", "for-menu")}
              loading="lazy"
              width="auto"
              height="auto"
              alt=""
              src="https://uploads-ssl.webflow.com/65459ab6440c1238e7ede277/6549b2ef41f8a92cdb1b895d_Kontakt---DSC03973.webp"
            />
          </_Builtin.Block>
        </_Builtin.Link>
      </_Builtin.Block>
      <_Builtin.Block className={_utils.cx(_styles, "menu-socials")} tag="div">
        <_Builtin.Link
          className={_utils.cx(_styles, "menu-social")}
          button={false}
          options={{
            href: "https://www.facebook.com",
            target: "_blank",
          }}
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "menu-social-text")}
            tag="div"
          >
            {"facebook"}
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "menu-social-text", "absolute")}
            tag="div"
          >
            {"facebook"}
          </_Builtin.Block>
        </_Builtin.Link>
        <_Builtin.Link
          className={_utils.cx(_styles, "menu-social")}
          button={false}
          options={{
            href: "https://www.instagram.com",
            target: "_blank",
          }}
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "menu-social-text")}
            tag="div"
          >
            {"instagram"}
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "menu-social-text", "absolute")}
            tag="div"
          >
            {"instagram"}
          </_Builtin.Block>
        </_Builtin.Link>
        <_Builtin.Link
          className={_utils.cx(_styles, "menu-social")}
          button={false}
          options={{
            href: "https://www.twitter.com",
            target: "_blank",
          }}
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "menu-social-text")}
            tag="div"
          >
            {"twitter"}
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "menu-social-text", "absolute")}
            tag="div"
          >
            {"twitter"}
          </_Builtin.Block>
        </_Builtin.Link>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "menu-underlay")}
        tag="div"
      />
    </_Component>
  );
}
