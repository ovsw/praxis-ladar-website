import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./OldFooter.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-21":{"id":"e-21","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-18","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-44"}},"mediaQueries":["main"],"target":{"selector":".menu-link","originalId":"b919e661-8b51-a329-cf4d-3b80ef57b749","appliesTo":"CLASS"},"targets":[{"selector":".menu-link","originalId":"b919e661-8b51-a329-cf4d-3b80ef57b749","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1643709888541},"e-44":{"id":"e-44","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-16","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-21"}},"mediaQueries":["main"],"target":{"selector":".menu-link","originalId":"b919e661-8b51-a329-cf4d-3b80ef57b749","appliesTo":"CLASS"},"targets":[{"selector":".menu-link","originalId":"b919e661-8b51-a329-cf4d-3b80ef57b749","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1643709888542},"e-30":{"id":"e-30","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-18","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-25"}},"mediaQueries":["main"],"target":{"id":"26c375eb-323e-4426-fbae-ad28d9471526","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"26c375eb-323e-4426-fbae-ad28d9471526","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1699328746120},"e-31":{"id":"e-31","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-18","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-42"}},"mediaQueries":["main"],"target":{"id":"26c375eb-323e-4426-fbae-ad28d9471538","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"26c375eb-323e-4426-fbae-ad28d9471538","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1699328746120},"e-46":{"id":"e-46","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-18","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-32"}},"mediaQueries":["main"],"target":{"id":"26c375eb-323e-4426-fbae-ad28d947154a","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"26c375eb-323e-4426-fbae-ad28d947154a","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1699328746120},"e-39":{"id":"e-39","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-18","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-40"}},"mediaQueries":["main"],"target":{"selector":".menu-link","originalId":"26c375eb-323e-4426-fbae-ad28d9471514","appliesTo":"CLASS"},"targets":[{"selector":".menu-link","originalId":"26c375eb-323e-4426-fbae-ad28d9471514","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1699328746120},"e-40":{"id":"e-40","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-16","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-39"}},"mediaQueries":["main"],"target":{"selector":".menu-link","originalId":"26c375eb-323e-4426-fbae-ad28d9471514","appliesTo":"CLASS"},"targets":[{"selector":".menu-link","originalId":"26c375eb-323e-4426-fbae-ad28d9471514","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1699328746120},"e-22":{"id":"e-22","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-18","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-24"}},"mediaQueries":["main"],"target":{"id":"26c375eb-323e-4426-fbae-ad28d9471541","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"26c375eb-323e-4426-fbae-ad28d9471541","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1699328746120},"e-20":{"id":"e-20","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-18","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-33"}},"mediaQueries":["main"],"target":{"id":"26c375eb-323e-4426-fbae-ad28d947152f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"26c375eb-323e-4426-fbae-ad28d947152f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1699328746120},"e-89":{"id":"e-89","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-11","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-101"}},"mediaQueries":["main"],"target":{"selector":".white-link","originalId":"e30db50a-08bd-a1a0-86ad-25e43f75236c","appliesTo":"CLASS"},"targets":[{"selector":".white-link","originalId":"e30db50a-08bd-a1a0-86ad-25e43f75236c","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1644904671487},"e-101":{"id":"e-101","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-12","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-89"}},"mediaQueries":["main"],"target":{"selector":".white-link","originalId":"e30db50a-08bd-a1a0-86ad-25e43f75236c","appliesTo":"CLASS"},"targets":[{"selector":".white-link","originalId":"e30db50a-08bd-a1a0-86ad-25e43f75236c","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1644904671489},"e-93":{"id":"e-93","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-11","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-87"}},"mediaQueries":["main"],"target":{"selector":".footer-link-wrapper","originalId":"11133d59-2707-2088-608b-cae1f81ad8be","appliesTo":"CLASS"},"targets":[{"selector":".footer-link-wrapper","originalId":"11133d59-2707-2088-608b-cae1f81ad8be","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1644576104472},"e-87":{"id":"e-87","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-12","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-93"}},"mediaQueries":["main"],"target":{"selector":".footer-link-wrapper","originalId":"11133d59-2707-2088-608b-cae1f81ad8be","appliesTo":"CLASS"},"targets":[{"selector":".footer-link-wrapper","originalId":"11133d59-2707-2088-608b-cae1f81ad8be","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1644576104472},"e-95":{"id":"e-95","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-11","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-103"}},"mediaQueries":["main"],"target":{"selector":".secondary-button","originalId":"65466717b6d1ea542cbc343d|9ed5b0ed-ebc1-8c5f-4668-d73c6dbcb917","appliesTo":"CLASS"},"targets":[{"selector":".secondary-button","originalId":"65466717b6d1ea542cbc343d|9ed5b0ed-ebc1-8c5f-4668-d73c6dbcb917","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1644904548529},"e-103":{"id":"e-103","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-12","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-95"}},"mediaQueries":["main"],"target":{"selector":".secondary-button","originalId":"65466717b6d1ea542cbc343d|9ed5b0ed-ebc1-8c5f-4668-d73c6dbcb917","appliesTo":"CLASS"},"targets":[{"selector":".secondary-button","originalId":"65466717b6d1ea542cbc343d|9ed5b0ed-ebc1-8c5f-4668-d73c6dbcb917","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1644904548531},"e-99":{"id":"e-99","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-36","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-97"}},"mediaQueries":["main"],"target":{"selector":".footer-link-wrapper","originalId":"e30db50a-08bd-a1a0-86ad-25e43f75232d","appliesTo":"CLASS"},"targets":[{"selector":".footer-link-wrapper","originalId":"e30db50a-08bd-a1a0-86ad-25e43f75232d","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1644563556807},"e-97":{"id":"e-97","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-33","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-99"}},"mediaQueries":["main"],"target":{"selector":".footer-link-wrapper","originalId":"e30db50a-08bd-a1a0-86ad-25e43f75232d","appliesTo":"CLASS"},"targets":[{"selector":".footer-link-wrapper","originalId":"e30db50a-08bd-a1a0-86ad-25e43f75232d","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1644563556808},"e-91":{"id":"e-91","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-35","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-88"}},"mediaQueries":["main"],"target":{"selector":".social","originalId":"d70baf08-cf20-8bb8-eba3-72787c42b6ac","appliesTo":"CLASS"},"targets":[{"selector":".social","originalId":"d70baf08-cf20-8bb8-eba3-72787c42b6ac","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1699328863076},"e-88":{"id":"e-88","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-34","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-91"}},"mediaQueries":["main"],"target":{"selector":".social","originalId":"d70baf08-cf20-8bb8-eba3-72787c42b6ac","appliesTo":"CLASS"},"targets":[{"selector":".social","originalId":"d70baf08-cf20-8bb8-eba3-72787c42b6ac","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1699328863076},"e-94":{"id":"e-94","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-11","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-102"}},"mediaQueries":["main"],"target":{"selector":".social","originalId":"11133d59-2707-2088-608b-cae1f81ad90c","appliesTo":"CLASS"},"targets":[{"selector":".social","originalId":"11133d59-2707-2088-608b-cae1f81ad90c","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1644576104472},"e-102":{"id":"e-102","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-12","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-94"}},"mediaQueries":["main"],"target":{"selector":".social","originalId":"11133d59-2707-2088-608b-cae1f81ad90c","appliesTo":"CLASS"},"targets":[{"selector":".social","originalId":"11133d59-2707-2088-608b-cae1f81ad90c","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1644576104472},"e-98":{"id":"e-98","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-35","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-100"}},"mediaQueries":["main"],"target":{"selector":".social","originalId":"e30db50a-08bd-a1a0-86ad-25e43f75234f","appliesTo":"CLASS"},"targets":[{"selector":".social","originalId":"e30db50a-08bd-a1a0-86ad-25e43f75234f","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1644564039915},"e-100":{"id":"e-100","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-34","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-98"}},"mediaQueries":["main"],"target":{"selector":".social","originalId":"e30db50a-08bd-a1a0-86ad-25e43f75234f","appliesTo":"CLASS"},"targets":[{"selector":".social","originalId":"e30db50a-08bd-a1a0-86ad-25e43f75234f","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1644564039917},"e-90":{"id":"e-90","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-11","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-86"}},"mediaQueries":["main"],"target":{"selector":".white-link","originalId":"d70baf08-cf20-8bb8-eba3-72787c42b6b7","appliesTo":"CLASS"},"targets":[{"selector":".white-link","originalId":"d70baf08-cf20-8bb8-eba3-72787c42b6b7","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1699328863076},"e-86":{"id":"e-86","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-12","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-90"}},"mediaQueries":["main"],"target":{"selector":".white-link","originalId":"d70baf08-cf20-8bb8-eba3-72787c42b6b7","appliesTo":"CLASS"},"targets":[{"selector":".white-link","originalId":"d70baf08-cf20-8bb8-eba3-72787c42b6b7","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1699328863076},"e-92":{"id":"e-92","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-36","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-96"}},"mediaQueries":["main"],"target":{"selector":".footer-link-wrapper","originalId":"d70baf08-cf20-8bb8-eba3-72787c42b679","appliesTo":"CLASS"},"targets":[{"selector":".footer-link-wrapper","originalId":"d70baf08-cf20-8bb8-eba3-72787c42b679","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1699328863076},"e-96":{"id":"e-96","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-33","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-92"}},"mediaQueries":["main"],"target":{"selector":".footer-link-wrapper","originalId":"d70baf08-cf20-8bb8-eba3-72787c42b679","appliesTo":"CLASS"},"targets":[{"selector":".footer-link-wrapper","originalId":"d70baf08-cf20-8bb8-eba3-72787c42b679","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1699328863076},"e-189":{"id":"e-189","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-66","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-190"}},"mediaQueries":["main"],"target":{"selector":".social","originalId":"b274ccb7-2d9a-10c4-a6d5-1d38c823b5dc","appliesTo":"CLASS"},"targets":[{"selector":".social","originalId":"b274ccb7-2d9a-10c4-a6d5-1d38c823b5dc","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1699457735655},"e-190":{"id":"e-190","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-67","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-189"}},"mediaQueries":["main"],"target":{"selector":".social","originalId":"b274ccb7-2d9a-10c4-a6d5-1d38c823b5dc","appliesTo":"CLASS"},"targets":[{"selector":".social","originalId":"b274ccb7-2d9a-10c4-a6d5-1d38c823b5dc","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1699457735655},"e-191":{"id":"e-191","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-68","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-192"}},"mediaQueries":["main"],"target":{"selector":".white-link","originalId":"b274ccb7-2d9a-10c4-a6d5-1d38c823b5e7","appliesTo":"CLASS"},"targets":[{"selector":".white-link","originalId":"b274ccb7-2d9a-10c4-a6d5-1d38c823b5e7","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1699457735655},"e-192":{"id":"e-192","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-69","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-191"}},"mediaQueries":["main"],"target":{"selector":".white-link","originalId":"b274ccb7-2d9a-10c4-a6d5-1d38c823b5e7","appliesTo":"CLASS"},"targets":[{"selector":".white-link","originalId":"b274ccb7-2d9a-10c4-a6d5-1d38c823b5e7","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1699457735655},"e-193":{"id":"e-193","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-70","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-194"}},"mediaQueries":["main"],"target":{"selector":".footer-link-wrapper","originalId":"b274ccb7-2d9a-10c4-a6d5-1d38c823b5a9","appliesTo":"CLASS"},"targets":[{"selector":".footer-link-wrapper","originalId":"b274ccb7-2d9a-10c4-a6d5-1d38c823b5a9","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1699457735655},"e-194":{"id":"e-194","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-71","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-193"}},"mediaQueries":["main"],"target":{"selector":".footer-link-wrapper","originalId":"b274ccb7-2d9a-10c4-a6d5-1d38c823b5a9","appliesTo":"CLASS"},"targets":[{"selector":".footer-link-wrapper","originalId":"b274ccb7-2d9a-10c4-a6d5-1d38c823b5a9","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1699457735655}},"actionLists":{"a-18":{"id":"a-18","title":"Manu Link Hover In 2","actionItemGroups":[{"actionItems":[{"id":"a-18-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".menu-background-image","selectorGuids":["9d015204-d92e-e364-97e5-1f0713b8325e"]},"value":0,"unit":""}},{"id":"a-18-n-2","actionTypeId":"STYLE_FILTER","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".image.for-menu","selectorGuids":["7351f457-bfa6-abe4-ae61-86758a6dcb48","9d015204-d92e-e364-97e5-1f0713b8326b"]},"filters":[{"type":"saturate","filterId":"c1af","value":99,"unit":"%"}]}},{"id":"a-18-n-3","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".menu-number-text","selectorGuids":["9d015204-d92e-e364-97e5-1f0713b8325f"]},"globalSwatchId":"","rValue":255,"bValue":255,"gValue":255,"aValue":0.5}},{"id":"a-18-n-4","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".big-text.for-menu","selectorGuids":["9d015204-d92e-e364-97e5-1f0713b83266","9d015204-d92e-e364-97e5-1f0713b8326a"]},"globalSwatchId":"","rValue":255,"bValue":255,"gValue":255,"aValue":0.5}}]},{"actionItems":[{"id":"a-18-n-5","actionTypeId":"STYLE_FILTER","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".image.for-menu","selectorGuids":["7351f457-bfa6-abe4-ae61-86758a6dcb48","9d015204-d92e-e364-97e5-1f0713b8326b"]},"filters":[{"type":"saturate","filterId":"6ab0","value":99,"unit":"%"}]}}]},{"actionItems":[{"id":"a-18-n-6","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":1000,"target":{"useEventTarget":"CHILDREN","selector":".menu-background-image","selectorGuids":["9d015204-d92e-e364-97e5-1f0713b8325e"]},"value":1,"unit":""}},{"id":"a-18-n-7","actionTypeId":"STYLE_FILTER","config":{"delay":0,"easing":"ease","duration":30000,"target":{"useEventTarget":"CHILDREN","selector":".image.for-menu","selectorGuids":["7351f457-bfa6-abe4-ae61-86758a6dcb48","9d015204-d92e-e364-97e5-1f0713b8326b"]},"filters":[{"type":"saturate","filterId":"813e","value":99,"unit":"%"}]}},{"id":"a-18-n-8","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"ease","duration":1000,"target":{"useEventTarget":"CHILDREN","selector":".menu-number-text","selectorGuids":["9d015204-d92e-e364-97e5-1f0713b8325f"]},"globalSwatchId":"","rValue":255,"bValue":255,"gValue":255,"aValue":1}},{"id":"a-18-n-9","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"ease","duration":1000,"target":{"useEventTarget":"CHILDREN","selector":".big-text.for-menu","selectorGuids":["9d015204-d92e-e364-97e5-1f0713b83266","9d015204-d92e-e364-97e5-1f0713b8326a"]},"globalSwatchId":"","rValue":255,"bValue":255,"gValue":255,"aValue":1}}]}],"useFirstGroupAsInitialState":true,"createdOn":1643709900825},"a-16":{"id":"a-16","title":"Manu Link Hover Out","actionItemGroups":[{"actionItems":[{"id":"a-16-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":1000,"target":{"useEventTarget":"CHILDREN","selector":".menu-background-image","selectorGuids":["9d015204-d92e-e364-97e5-1f0713b8325e"]},"value":0,"unit":""}},{"id":"a-16-n-2","actionTypeId":"STYLE_FILTER","config":{"delay":0,"easing":"ease","duration":1000,"target":{"useEventTarget":"CHILDREN","selector":".image.for-menu","selectorGuids":["7351f457-bfa6-abe4-ae61-86758a6dcb48","9d015204-d92e-e364-97e5-1f0713b8326b"]},"filters":[{"type":"saturate","filterId":"83b1","value":0,"unit":"%"}]}},{"id":"a-16-n-3","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"ease","duration":1000,"target":{"useEventTarget":"CHILDREN","selector":".menu-number-text","selectorGuids":["9d015204-d92e-e364-97e5-1f0713b8325f"]},"globalSwatchId":"","rValue":255,"bValue":255,"gValue":255,"aValue":0.5}},{"id":"a-16-n-4","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"ease","duration":1000,"target":{"useEventTarget":"CHILDREN","selector":".big-text.for-menu","selectorGuids":["9d015204-d92e-e364-97e5-1f0713b83266","9d015204-d92e-e364-97e5-1f0713b8326a"]},"globalSwatchId":"","rValue":255,"bValue":255,"gValue":255,"aValue":0.5}}]}],"useFirstGroupAsInitialState":false,"createdOn":1643709900825},"a-11":{"id":"a-11","title":"Cursor - Hover In","actionItemGroups":[{"actionItems":[{"id":"a-11-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{},"widthValue":25,"heightValue":25,"widthUnit":"px","heightUnit":"px","locked":false}}]},{"actionItems":[{"id":"a-11-n-2","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":400,"target":{},"widthValue":75,"heightValue":75,"widthUnit":"px","heightUnit":"px","locked":false}}]}],"useFirstGroupAsInitialState":true,"createdOn":1644847102447},"a-12":{"id":"a-12","title":"Cursor - Hover Out","actionItemGroups":[{"actionItems":[{"id":"a-12-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":400,"target":{},"widthValue":25,"heightValue":25,"widthUnit":"px","heightUnit":"px","locked":false}}]}],"useFirstGroupAsInitialState":false,"createdOn":1644847102447},"a-36":{"id":"a-36","title":"Footer Link - Hover In 2","actionItemGroups":[{"actionItems":[{"id":"a-36-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".footer-link","selectorGuids":["9e47f4b5-abb7-c8b4-f2c6-72f989b1f56e"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-36-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".footer-link.absolute","selectorGuids":["9e47f4b5-abb7-c8b4-f2c6-72f989b1f56e","9e47f4b5-abb7-c8b4-f2c6-72f989b1f586"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]},{"actionItems":[{"id":"a-36-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".footer-link","selectorGuids":["9e47f4b5-abb7-c8b4-f2c6-72f989b1f56e"]},"yValue":-100,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-36-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".footer-link.absolute","selectorGuids":["9e47f4b5-abb7-c8b4-f2c6-72f989b1f56e","9e47f4b5-abb7-c8b4-f2c6-72f989b1f586"]},"yValue":-100,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1644563566613},"a-33":{"id":"a-33","title":"Footer Link - Hover Out 2","actionItemGroups":[{"actionItems":[{"id":"a-33-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".footer-link","selectorGuids":["9e47f4b5-abb7-c8b4-f2c6-72f989b1f56e"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-33-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".footer-link.absolute","selectorGuids":["9e47f4b5-abb7-c8b4-f2c6-72f989b1f56e","9e47f4b5-abb7-c8b4-f2c6-72f989b1f586"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1644563566613},"a-35":{"id":"a-35","title":"Social Icon - Hover In 2","actionItemGroups":[{"actionItems":[{"id":"a-35-n","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"d70baf08-cf20-8bb8-eba3-72787c42b6ac"},"xValue":1,"yValue":1,"locked":true}}]},{"actionItems":[{"id":"a-35-n-2","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":true,"id":"d70baf08-cf20-8bb8-eba3-72787c42b6ac"},"xValue":1.2,"yValue":1.2,"locked":true}}]}],"useFirstGroupAsInitialState":true,"createdOn":1644564051277},"a-34":{"id":"a-34","title":"Social Icon - Hover Out","actionItemGroups":[{"actionItems":[{"id":"a-34-n","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":true,"id":"e30db50a-08bd-a1a0-86ad-25e43f75234f"},"xValue":1,"yValue":1,"locked":true}}]}],"useFirstGroupAsInitialState":false,"createdOn":1644564051277},"a-66":{"id":"a-66","title":"Social Icon - Hover In 3","actionItemGroups":[{"actionItems":[{"id":"a-66-n","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"b274ccb7-2d9a-10c4-a6d5-1d38c823b5dc"},"xValue":1,"yValue":1,"locked":true}}]},{"actionItems":[{"id":"a-66-n-2","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":true,"id":"b274ccb7-2d9a-10c4-a6d5-1d38c823b5dc"},"xValue":1.2,"yValue":1.2,"locked":true}}]}],"useFirstGroupAsInitialState":true,"createdOn":1644564051277},"a-67":{"id":"a-67","title":"Social Icon - Hover Out 2","actionItemGroups":[{"actionItems":[{"id":"a-67-n","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":true,"id":"655763d7bb2251ae9b542860|e30db50a-08bd-a1a0-86ad-25e43f75234f"},"xValue":1,"yValue":1,"locked":true}}]}],"useFirstGroupAsInitialState":false,"createdOn":1644564051277},"a-68":{"id":"a-68","title":"Cursor - Hover In 2","actionItemGroups":[{"actionItems":[{"id":"a-68-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{},"widthValue":25,"heightValue":25,"widthUnit":"px","heightUnit":"px","locked":false}}]},{"actionItems":[{"id":"a-68-n-2","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":400,"target":{},"widthValue":75,"heightValue":75,"widthUnit":"px","heightUnit":"px","locked":false}}]}],"useFirstGroupAsInitialState":true,"createdOn":1644847102447},"a-69":{"id":"a-69","title":"Cursor - Hover Out 2","actionItemGroups":[{"actionItems":[{"id":"a-69-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":400,"target":{},"widthValue":25,"heightValue":25,"widthUnit":"px","heightUnit":"px","locked":false}}]}],"useFirstGroupAsInitialState":false,"createdOn":1644847102447},"a-70":{"id":"a-70","title":"Footer Link - Hover In 3","actionItemGroups":[{"actionItems":[{"id":"a-70-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".footer-link","selectorGuids":["9e47f4b5-abb7-c8b4-f2c6-72f989b1f56e"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-70-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".footer-link.absolute","selectorGuids":["9e47f4b5-abb7-c8b4-f2c6-72f989b1f56e","9e47f4b5-abb7-c8b4-f2c6-72f989b1f586"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]},{"actionItems":[{"id":"a-70-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".footer-link","selectorGuids":["9e47f4b5-abb7-c8b4-f2c6-72f989b1f56e"]},"yValue":-100,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-70-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".footer-link.absolute","selectorGuids":["9e47f4b5-abb7-c8b4-f2c6-72f989b1f56e","9e47f4b5-abb7-c8b4-f2c6-72f989b1f586"]},"yValue":-100,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1644563566613},"a-71":{"id":"a-71","title":"Footer Link - Hover Out 3","actionItemGroups":[{"actionItems":[{"id":"a-71-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".footer-link","selectorGuids":["9e47f4b5-abb7-c8b4-f2c6-72f989b1f56e"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-71-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".footer-link.absolute","selectorGuids":["9e47f4b5-abb7-c8b4-f2c6-72f989b1f56e","9e47f4b5-abb7-c8b4-f2c6-72f989b1f586"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1644563566613}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function OldFooter({ as: _Component = _Builtin.Section }) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "footer")}
      grid={{
        type: "section",
      }}
      tag="footer"
      bind="e30db50a-08bd-a1a0-86ad-25e43f752314"
      id="footer"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "footer-container")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "upper-footer")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "lets-talk-container")}
            tag="div"
          >
            <_Builtin.Image
              className={_utils.cx(_styles, "lets-talk-image")}
              loading="eager"
              width="auto"
              height="auto"
              alt=""
              src="https://uploads-ssl.webflow.com/65459ab6440c1238e7ede277/6549b3654d837081160a66c2_3L9A3368-en-sm-clr.jpg"
            />
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "div-block-3",
                "footer-mobile-text",
                "custom"
              )}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "flex-mobile", "hidden")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "big-text", "for-footer")}
                  tag="div"
                >
                  {"Lass uns"}
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "big-text",
                    "for-footer",
                    "relative"
                  )}
                  tag="div"
                >
                  {"reden"}
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(
                  _styles,
                  "footer-secondary-button-wrapper"
                )}
                tag="div"
              >
                <_Builtin.Link
                  className={_utils.cx(_styles, "secondary-button")}
                  button={false}
                  sym-bind='{"link":{"type":"Select","val":{"from":{"type":"Variable","val":"data"},"prop":"dc7992bf-f933-623a-c912-78e633f8e3e8"}}}'
                  bind="0d820513-e4d5-6073-caa5-30a6350ed556"
                  options={{
                    href: "#",
                  }}
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "secondary-btn-text-wrapper")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "secondary-button-text",
                        "for-footer"
                      )}
                      tag="div"
                      sym-bind='{"children":{"type":"Select","val":{"from":{"type":"Variable","val":"data"},"prop":"744dc146-b5c7-8279-1a9e-aecb2fdb76c6"}}}'
                    >
                      {"Kontakt"}
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "secondary-button-text",
                        "for-footer",
                        "absolute"
                      )}
                      tag="div"
                      sym-bind='{"children":{"type":"Select","val":{"from":{"type":"Variable","val":"data"},"prop":"744dc146-b5c7-8279-1a9e-aecb2fdb76c6"}}}'
                    >
                      {"Kontakt"}
                    </_Builtin.Block>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(
                      _styles,
                      "secondary-btn-arrow-wrapper",
                      "for-footer"
                    )}
                    tag="div"
                  >
                    <_Builtin.Image
                      className={_utils.cx(_styles, "arrow-right", "white")}
                      loading="lazy"
                      width="auto"
                      height="auto"
                      alt=""
                      src="https://uploads-ssl.webflow.com/65466717b6d1ea542cbc3459/65466717b6d1ea542cbc3475_arrow_white.svg"
                    />
                    <_Builtin.Image
                      className={_utils.cx(
                        _styles,
                        "arrow-right",
                        "translate-left"
                      )}
                      loading="lazy"
                      width="auto"
                      height="auto"
                      alt=""
                      src="https://uploads-ssl.webflow.com/65466717b6d1ea542cbc3459/65466717b6d1ea542cbc3479_arrow_dark.svg"
                    />
                  </_Builtin.Block>
                </_Builtin.Link>
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "main-links")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "footer-links-container")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(
                  _styles,
                  "footer-links-column",
                  "sideline-on-mobile"
                )}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "footer-link", "title")}
                  tag="div"
                >
                  {"Praxis Ladar"}
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "footer-link-column-grid")}
                  tag="div"
                >
                  <_Builtin.Link
                    className={_utils.cx(
                      _styles,
                      "footer-link-wrapper",
                      "solo"
                    )}
                    button={false}
                    options={{
                      href: "#",
                    }}
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "footer-link")}
                      tag="div"
                    >
                      {"Home"}
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "footer-link", "absolute")}
                      tag="div"
                    >
                      {"Home"}
                    </_Builtin.Block>
                  </_Builtin.Link>
                  <_Builtin.Link
                    className={_utils.cx(
                      _styles,
                      "footer-link-wrapper",
                      "solo"
                    )}
                    button={false}
                    options={{
                      href: "#",
                    }}
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "footer-link")}
                      tag="div"
                    >
                      {"Behandlung"}
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "footer-link", "absolute")}
                      tag="div"
                    >
                      {"Behandlung"}
                    </_Builtin.Block>
                  </_Builtin.Link>
                  <_Builtin.Link
                    className={_utils.cx(
                      _styles,
                      "footer-link-wrapper",
                      "solo"
                    )}
                    button={false}
                    options={{
                      href: "#",
                    }}
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "footer-link")}
                      tag="div"
                    >
                      {"Über uns"}
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "footer-link", "absolute")}
                      tag="div"
                    >
                      {"Über uns"}
                    </_Builtin.Block>
                  </_Builtin.Link>
                  <_Builtin.Link
                    className={_utils.cx(
                      _styles,
                      "footer-link-wrapper",
                      "solo"
                    )}
                    button={false}
                    options={{
                      href: "#",
                    }}
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "footer-link")}
                      tag="div"
                    >
                      {"Ambiente"}
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "footer-link", "absolute")}
                      tag="div"
                    >
                      {"Ambiente"}
                    </_Builtin.Block>
                  </_Builtin.Link>
                  <_Builtin.Link
                    className={_utils.cx(
                      _styles,
                      "footer-link-wrapper",
                      "solo"
                    )}
                    button={false}
                    options={{
                      href: "#",
                    }}
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "footer-link")}
                      tag="div"
                    >
                      {"Team"}
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "footer-link", "absolute")}
                      tag="div"
                    >
                      {"Team"}
                    </_Builtin.Block>
                  </_Builtin.Link>
                  <_Builtin.Link
                    className={_utils.cx(
                      _styles,
                      "footer-link-wrapper",
                      "solo"
                    )}
                    button={false}
                    options={{
                      href: "#",
                    }}
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "footer-link")}
                      tag="div"
                    >
                      {"Kontakt"}
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "footer-link", "absolute")}
                      tag="div"
                    >
                      {"Kontakt"}
                    </_Builtin.Block>
                  </_Builtin.Link>
                  <_Builtin.Link
                    className={_utils.cx(
                      _styles,
                      "footer-link-wrapper",
                      "solo"
                    )}
                    button={false}
                    options={{
                      href: "#",
                    }}
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "footer-link")}
                      tag="div"
                    >
                      {"Wir Suchen Dich"}
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "footer-link", "absolute")}
                      tag="div"
                    >
                      {"Wir Suchen Dich"}
                    </_Builtin.Block>
                  </_Builtin.Link>
                  <_Builtin.Link
                    className={_utils.cx(
                      _styles,
                      "footer-link-wrapper",
                      "solo"
                    )}
                    button={false}
                    options={{
                      href: "#",
                    }}
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "footer-link")}
                      tag="div"
                    >
                      {"Impressum"}
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "footer-link", "absolute")}
                      tag="div"
                    >
                      {"Impressum"}
                    </_Builtin.Block>
                  </_Builtin.Link>
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(
                  _styles,
                  "footer-links-column",
                  "sideline-on-mobile"
                )}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "footer-link", "title")}
                  tag="div"
                >
                  {"Behandlung"}
                </_Builtin.Block>
                <_Builtin.NotSupported _atom="DynamoWrapper" />
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "socials-and-newsletter-container")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "socials")}
                tag="div"
              >
                <_Builtin.Link
                  className={_utils.cx(_styles, "social")}
                  button={false}
                  options={{
                    href: "https://www.facebook.com/",
                    target: "_blank",
                  }}
                >
                  <_Builtin.Image
                    className={_utils.cx(_styles, "image", "social-footer")}
                    loading="lazy"
                    width="auto"
                    height="auto"
                    alt="Facebook icon"
                    src="https://uploads-ssl.webflow.com/65459ab6440c1238e7ede277/6549b3654d837081160a66bf_akar-icons_facebook-fill.svg"
                  />
                </_Builtin.Link>
                <_Builtin.Link
                  className={_utils.cx(_styles, "social")}
                  button={false}
                  options={{
                    href: "https://www.instagram.com/",
                    target: "_blank",
                  }}
                >
                  <_Builtin.Image
                    className={_utils.cx(_styles, "image", "social-footer")}
                    loading="lazy"
                    width="auto"
                    height="auto"
                    alt="Instagram icon"
                    src="https://uploads-ssl.webflow.com/65459ab6440c1238e7ede277/6549b3654d837081160a66c1_akar-icons_instagram-fill.svg"
                  />
                </_Builtin.Link>
                <_Builtin.Link
                  className={_utils.cx(_styles, "social")}
                  button={false}
                  options={{
                    href: "https://www.twitter.com/",
                    target: "_blank",
                  }}
                >
                  <_Builtin.Image
                    className={_utils.cx(_styles, "image", "social-footer")}
                    loading="lazy"
                    width="auto"
                    height="auto"
                    alt="Twitter icon"
                    src="https://uploads-ssl.webflow.com/65459ab6440c1238e7ede277/6549b3654d837081160a66c0_akar-icons_twitter-fill.svg"
                  />
                </_Builtin.Link>
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "lower-footer")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "footer-line")}
            tag="div"
          />
          <_Builtin.Block
            className={_utils.cx(_styles, "lower-footer-item")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "footer-link",
                "secondary",
                "smaller"
              )}
              tag="div"
            >
              {"©2023 "}
              <_Builtin.Link
                className={_utils.cx(_styles, "white-link")}
                button={false}
                options={{
                  href: "#",
                  target: "_blank",
                }}
              >
                {"Praxis Ladar"}
              </_Builtin.Link>
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(
              _styles,
              "footer-link",
              "secondary",
              "smaller"
            )}
            tag="div"
          >
            {"Mit ❤️ von "}
            <_Builtin.Link
              className={_utils.cx(_styles, "white-link")}
              button={false}
              options={{
                href: "#",
                target: "_blank",
              }}
            >
              {"Studio ROVST "}
            </_Builtin.Link>
            {"geschaffen"}
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
