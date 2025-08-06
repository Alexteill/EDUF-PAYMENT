"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./Faq.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-31":{"id":"e-31","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-13","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-50"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"b87af3e4-5e9f-fcc5-5838-e65209145820","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"b87af3e4-5e9f-fcc5-5838-e65209145820","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1692696628565},"e-33":{"id":"e-33","name":"","animationType":"custom","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-14","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-57"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"b87af3e4-5e9f-fcc5-5838-e65209145820","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"b87af3e4-5e9f-fcc5-5838-e65209145820","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1692696628577},"e-34":{"id":"e-34","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-13","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-58"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"b87af3e4-5e9f-fcc5-5838-e6520914585a","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"b87af3e4-5e9f-fcc5-5838-e6520914585a","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1732726543179},"e-35":{"id":"e-35","name":"","animationType":"preset","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-14","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-54"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"b87af3e4-5e9f-fcc5-5838-e6520914585a","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"b87af3e4-5e9f-fcc5-5838-e6520914585a","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1732726543179},"e-36":{"id":"e-36","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-13","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-47"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"b87af3e4-5e9f-fcc5-5838-e6520914584a","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"b87af3e4-5e9f-fcc5-5838-e6520914584a","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1732726544003},"e-37":{"id":"e-37","name":"","animationType":"preset","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-14","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-52"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"b87af3e4-5e9f-fcc5-5838-e6520914584a","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"b87af3e4-5e9f-fcc5-5838-e6520914584a","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1732726544003},"e-38":{"id":"e-38","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-13","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-53"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"b87af3e4-5e9f-fcc5-5838-e6520914583c","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"b87af3e4-5e9f-fcc5-5838-e6520914583c","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1732726544419},"e-39":{"id":"e-39","name":"","animationType":"preset","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-14","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-51"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"b87af3e4-5e9f-fcc5-5838-e6520914583c","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"b87af3e4-5e9f-fcc5-5838-e6520914583c","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1732726544419},"e-40":{"id":"e-40","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-13","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-59"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"b87af3e4-5e9f-fcc5-5838-e6520914582e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"b87af3e4-5e9f-fcc5-5838-e6520914582e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1732726544996},"e-41":{"id":"e-41","name":"","animationType":"preset","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-14","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-55"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"b87af3e4-5e9f-fcc5-5838-e6520914582e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"b87af3e4-5e9f-fcc5-5838-e6520914582e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1732726544996},"e-90":{"id":"e-90","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-13","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-91"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"67461092218f6fb4b7fac21e|e6d9f5fc-cba8-adaa-9235-cbf825560bbd","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"67461092218f6fb4b7fac21e|e6d9f5fc-cba8-adaa-9235-cbf825560bbd","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1739537620037},"e-91":{"id":"e-91","name":"","animationType":"preset","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-14","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-90"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"67461092218f6fb4b7fac21e|e6d9f5fc-cba8-adaa-9235-cbf825560bbd","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"67461092218f6fb4b7fac21e|e6d9f5fc-cba8-adaa-9235-cbf825560bbd","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1739537620037},"e-98":{"id":"e-98","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-25","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-99"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"674714ee157f896568b6483c|68bc8b42-8d91-8d33-913c-1d4d23cedc55","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"674714ee157f896568b6483c|68bc8b42-8d91-8d33-913c-1d4d23cedc55","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1744185335889},"e-99":{"id":"e-99","name":"","animationType":"preset","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-26","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-98"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"674714ee157f896568b6483c|68bc8b42-8d91-8d33-913c-1d4d23cedc55","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"674714ee157f896568b6483c|68bc8b42-8d91-8d33-913c-1d4d23cedc55","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1744185335889},"e-110":{"id":"e-110","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-32","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-111"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"67dc0390-3d46-866f-3c04-499a41648f3c","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"67dc0390-3d46-866f-3c04-499a41648f3c","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1750089220254},"e-111":{"id":"e-111","name":"","animationType":"custom","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-33","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-110"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"67dc0390-3d46-866f-3c04-499a41648f3c","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"67dc0390-3d46-866f-3c04-499a41648f3c","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1750089220254},"e-112":{"id":"e-112","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-32","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-113"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"67dc0390-3d46-866f-3c04-499a41648f46","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"67dc0390-3d46-866f-3c04-499a41648f46","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1750089420636},"e-113":{"id":"e-113","name":"","animationType":"preset","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-33","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-112"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"67dc0390-3d46-866f-3c04-499a41648f46","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"67dc0390-3d46-866f-3c04-499a41648f46","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1750089420636},"e-114":{"id":"e-114","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-32","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-115"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"67dc0390-3d46-866f-3c04-499a41648f50","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"67dc0390-3d46-866f-3c04-499a41648f50","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1750089421098},"e-115":{"id":"e-115","name":"","animationType":"preset","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-33","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-114"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"67dc0390-3d46-866f-3c04-499a41648f50","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"67dc0390-3d46-866f-3c04-499a41648f50","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1750089421098},"e-269":{"id":"e-269","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-50","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-270"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"67461092218f6fb4b7fac21e|3819e9b4-e816-611e-2835-215a0f0a96ac","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"67461092218f6fb4b7fac21e|3819e9b4-e816-611e-2835-215a0f0a96ac","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1751624877806},"e-270":{"id":"e-270","name":"","animationType":"preset","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-51","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-269"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"67461092218f6fb4b7fac21e|3819e9b4-e816-611e-2835-215a0f0a96ac","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"67461092218f6fb4b7fac21e|3819e9b4-e816-611e-2835-215a0f0a96ac","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1751624877806},"e-271":{"id":"e-271","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-50","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-272"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"67461092218f6fb4b7fac21e|3819e9b4-e816-611e-2835-215a0f0a96b6","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"67461092218f6fb4b7fac21e|3819e9b4-e816-611e-2835-215a0f0a96b6","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1751624877806},"e-272":{"id":"e-272","name":"","animationType":"preset","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-51","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-271"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"67461092218f6fb4b7fac21e|3819e9b4-e816-611e-2835-215a0f0a96b6","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"67461092218f6fb4b7fac21e|3819e9b4-e816-611e-2835-215a0f0a96b6","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1751624877806},"e-273":{"id":"e-273","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-50","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-274"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"67461092218f6fb4b7fac21e|3819e9b4-e816-611e-2835-215a0f0a96c0","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"67461092218f6fb4b7fac21e|3819e9b4-e816-611e-2835-215a0f0a96c0","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1751624877806},"e-274":{"id":"e-274","name":"","animationType":"preset","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-51","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-273"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"67461092218f6fb4b7fac21e|3819e9b4-e816-611e-2835-215a0f0a96c0","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"67461092218f6fb4b7fac21e|3819e9b4-e816-611e-2835-215a0f0a96c0","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1751624877806},"e-275":{"id":"e-275","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-52","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-276"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"68639d989a9587b16239c119|0f8698c1-0f24-7c55-0f64-97743f30fd86","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"68639d989a9587b16239c119|0f8698c1-0f24-7c55-0f64-97743f30fd86","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1751624890106},"e-276":{"id":"e-276","name":"","animationType":"preset","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-53","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-275"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"68639d989a9587b16239c119|0f8698c1-0f24-7c55-0f64-97743f30fd86","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"68639d989a9587b16239c119|0f8698c1-0f24-7c55-0f64-97743f30fd86","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1751624890106},"e-281":{"id":"e-281","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-54","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-282"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"685d2456857bf9684540ec84|14d9c7dc-5549-f804-b999-ac12682e7de6","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"685d2456857bf9684540ec84|14d9c7dc-5549-f804-b999-ac12682e7de6","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1751624906134},"e-282":{"id":"e-282","name":"","animationType":"preset","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-55","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-281"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"685d2456857bf9684540ec84|14d9c7dc-5549-f804-b999-ac12682e7de6","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"685d2456857bf9684540ec84|14d9c7dc-5549-f804-b999-ac12682e7de6","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1751624906134},"e-287":{"id":"e-287","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-52","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-288"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"68639d989a9587b16239c119|194f1e93-2d3f-6e5c-ff2c-0f60968bc715","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"68639d989a9587b16239c119|194f1e93-2d3f-6e5c-ff2c-0f60968bc715","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1751626548597},"e-288":{"id":"e-288","name":"","animationType":"preset","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-53","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-287"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"68639d989a9587b16239c119|194f1e93-2d3f-6e5c-ff2c-0f60968bc715","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"68639d989a9587b16239c119|194f1e93-2d3f-6e5c-ff2c-0f60968bc715","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1751626548597},"e-289":{"id":"e-289","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-52","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-290"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"68639d989a9587b16239c119|c206bafe-ad65-cf4f-2cd7-3014edfcf00c","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"68639d989a9587b16239c119|c206bafe-ad65-cf4f-2cd7-3014edfcf00c","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1751626548947},"e-290":{"id":"e-290","name":"","animationType":"preset","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-53","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-289"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"68639d989a9587b16239c119|c206bafe-ad65-cf4f-2cd7-3014edfcf00c","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"68639d989a9587b16239c119|c206bafe-ad65-cf4f-2cd7-3014edfcf00c","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1751626548947},"e-291":{"id":"e-291","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-54","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-292"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"685d2456857bf9684540ec84|56b7b30e-c76e-efca-3066-ec59f0047c0f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"685d2456857bf9684540ec84|56b7b30e-c76e-efca-3066-ec59f0047c0f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1751627743301},"e-292":{"id":"e-292","name":"","animationType":"preset","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-55","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-291"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"685d2456857bf9684540ec84|56b7b30e-c76e-efca-3066-ec59f0047c0f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"685d2456857bf9684540ec84|56b7b30e-c76e-efca-3066-ec59f0047c0f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1751627743301},"e-293":{"id":"e-293","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-54","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-294"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"685d2456857bf9684540ec84|a2acda9f-ece0-6823-b9c5-85e2431040f8","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"685d2456857bf9684540ec84|a2acda9f-ece0-6823-b9c5-85e2431040f8","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1751627743851},"e-294":{"id":"e-294","name":"","animationType":"preset","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-55","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-293"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"685d2456857bf9684540ec84|a2acda9f-ece0-6823-b9c5-85e2431040f8","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"685d2456857bf9684540ec84|a2acda9f-ece0-6823-b9c5-85e2431040f8","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1751627743851}},"actionLists":{"a-13":{"id":"a-13","title":"FAQ 6 accordion [Open]","actionItemGroups":[{"actionItems":[{"id":"a-13-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"SIBLINGS","selector":".faq-blog_answer","selectorGuids":["1e15a42b-440d-5658-46ae-c3ac244356ad"]},"widthValue":100,"heightValue":0,"widthUnit":"%","heightUnit":"px","locked":false}}]},{"actionItems":[{"id":"a-13-n-2","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"SIBLINGS","selector":".faq-blog_answer","selectorGuids":["1e15a42b-440d-5658-46ae-c3ac244356ad"]},"widthValue":100,"widthUnit":"%","heightUnit":"AUTO","locked":false}},{"id":"a-13-n-3","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".faq-blog_icon-wrapper","selectorGuids":["1e15a42b-440d-5658-46ae-c3ac244356ab"]},"zValue":45,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1628385361827},"a-14":{"id":"a-14","title":"FAQ 6 accordion [Close]","actionItemGroups":[{"actionItems":[{"id":"a-14-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"SIBLINGS","selector":".faq-blog_answer","selectorGuids":["1e15a42b-440d-5658-46ae-c3ac244356ad"]},"widthValue":100,"heightValue":0,"widthUnit":"%","heightUnit":"px","locked":false}},{"id":"a-14-n-2","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".faq-blog_icon-wrapper","selectorGuids":["1e15a42b-440d-5658-46ae-c3ac244356ab"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1628385361827},"a-25":{"id":"a-25","title":"FAQ 6 accordion [Open] 2","actionItemGroups":[{"actionItems":[{"id":"a-25-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"SIBLINGS","selector":".faq-blog_answer","selectorGuids":["1e15a42b-440d-5658-46ae-c3ac244356ad"]},"widthValue":100,"heightValue":0,"widthUnit":"%","heightUnit":"px","locked":false}}]},{"actionItems":[{"id":"a-25-n-2","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"SIBLINGS","selector":".faq-blog_answer","selectorGuids":["1e15a42b-440d-5658-46ae-c3ac244356ad"]},"widthValue":100,"widthUnit":"%","heightUnit":"AUTO","locked":false}},{"id":"a-25-n-3","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".faq-blog_icon-wrapper","selectorGuids":["1e15a42b-440d-5658-46ae-c3ac244356ab"]},"zValue":45,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1628385361827},"a-26":{"id":"a-26","title":"FAQ 6 accordion [Close] 2","actionItemGroups":[{"actionItems":[{"id":"a-26-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"SIBLINGS","selector":".faq-blog_answer","selectorGuids":["1e15a42b-440d-5658-46ae-c3ac244356ad"]},"widthValue":100,"heightValue":0,"widthUnit":"%","heightUnit":"px","locked":false}},{"id":"a-26-n-2","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".faq-blog_icon-wrapper","selectorGuids":["1e15a42b-440d-5658-46ae-c3ac244356ab"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1628385361827},"a-32":{"id":"a-32","title":"FAQ 6 accordion [Open] 4","actionItemGroups":[{"actionItems":[{"id":"a-32-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".faq-blog_answer","selectorGuids":["1e15a42b-440d-5658-46ae-c3ac244356ad"]},"widthValue":100,"heightValue":0,"widthUnit":"%","heightUnit":"px","locked":false}}]},{"actionItems":[{"id":"a-32-n-2","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".faq-blog_answer","selectorGuids":["1e15a42b-440d-5658-46ae-c3ac244356ad"]},"widthValue":100,"widthUnit":"%","heightUnit":"AUTO","locked":false}},{"id":"a-32-n-3","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".accordion-icon","selectorGuids":["5a0c559b-090c-8386-4670-d2cf4c266089"]},"zValue":180,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1628385361827},"a-33":{"id":"a-33","title":"FAQ 6 accordion [Close] 4","actionItemGroups":[{"actionItems":[{"id":"a-33-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".faq-blog_answer","selectorGuids":["1e15a42b-440d-5658-46ae-c3ac244356ad"]},"widthValue":100,"heightValue":0,"widthUnit":"%","heightUnit":"px","locked":false}},{"id":"a-33-n-2","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".accordion-icon","selectorGuids":["5a0c559b-090c-8386-4670-d2cf4c266089"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1628385361827},"a-50":{"id":"a-50","title":"FAQ 6 accordion [Open] 5","actionItemGroups":[{"actionItems":[{"id":"a-50-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".faq-blog_answer","selectorGuids":["1e15a42b-440d-5658-46ae-c3ac244356ad"]},"widthValue":100,"heightValue":0,"widthUnit":"%","heightUnit":"px","locked":false}}]},{"actionItems":[{"id":"a-50-n-2","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".faq-blog_answer","selectorGuids":["1e15a42b-440d-5658-46ae-c3ac244356ad"]},"widthValue":100,"widthUnit":"%","heightUnit":"AUTO","locked":false}},{"id":"a-50-n-3","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".accordion-icon","selectorGuids":["5a0c559b-090c-8386-4670-d2cf4c266089"]},"zValue":180,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1628385361827},"a-51":{"id":"a-51","title":"FAQ 6 accordion [Close] 5","actionItemGroups":[{"actionItems":[{"id":"a-51-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".faq-blog_answer","selectorGuids":["1e15a42b-440d-5658-46ae-c3ac244356ad"]},"widthValue":100,"heightValue":0,"widthUnit":"%","heightUnit":"px","locked":false}},{"id":"a-51-n-2","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".accordion-icon","selectorGuids":["5a0c559b-090c-8386-4670-d2cf4c266089"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1628385361827},"a-52":{"id":"a-52","title":"FAQ 6 accordion [Open] 6","actionItemGroups":[{"actionItems":[{"id":"a-52-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".faq-blog_answer","selectorGuids":["1e15a42b-440d-5658-46ae-c3ac244356ad"]},"widthValue":100,"heightValue":0,"widthUnit":"%","heightUnit":"px","locked":false}}]},{"actionItems":[{"id":"a-52-n-2","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".faq-blog_answer","selectorGuids":["1e15a42b-440d-5658-46ae-c3ac244356ad"]},"widthValue":100,"widthUnit":"%","heightUnit":"AUTO","locked":false}},{"id":"a-52-n-3","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".accordion-icon","selectorGuids":["5a0c559b-090c-8386-4670-d2cf4c266089"]},"zValue":180,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1628385361827},"a-53":{"id":"a-53","title":"FAQ 6 accordion [Close] 6","actionItemGroups":[{"actionItems":[{"id":"a-53-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".faq-blog_answer","selectorGuids":["1e15a42b-440d-5658-46ae-c3ac244356ad"]},"widthValue":100,"heightValue":0,"widthUnit":"%","heightUnit":"px","locked":false}},{"id":"a-53-n-2","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".accordion-icon","selectorGuids":["5a0c559b-090c-8386-4670-d2cf4c266089"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1628385361827},"a-54":{"id":"a-54","title":"FAQ 6 accordion [Open] 7","actionItemGroups":[{"actionItems":[{"id":"a-54-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".faq-blog_answer","selectorGuids":["1e15a42b-440d-5658-46ae-c3ac244356ad"]},"widthValue":100,"heightValue":0,"widthUnit":"%","heightUnit":"px","locked":false}}]},{"actionItems":[{"id":"a-54-n-2","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".faq-blog_answer","selectorGuids":["1e15a42b-440d-5658-46ae-c3ac244356ad"]},"widthValue":100,"widthUnit":"%","heightUnit":"AUTO","locked":false}},{"id":"a-54-n-3","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".accordion-icon","selectorGuids":["5a0c559b-090c-8386-4670-d2cf4c266089"]},"zValue":180,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1628385361827},"a-55":{"id":"a-55","title":"FAQ 6 accordion [Close] 7","actionItemGroups":[{"actionItems":[{"id":"a-55-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".faq-blog_answer","selectorGuids":["1e15a42b-440d-5658-46ae-c3ac244356ad"]},"widthValue":100,"heightValue":0,"widthUnit":"%","heightUnit":"px","locked":false}},{"id":"a-55-n-2","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".accordion-icon","selectorGuids":["5a0c559b-090c-8386-4670-d2cf4c266089"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1628385361827}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function Faq({
  as: _Component = _Builtin.Block,
  textSizeXregularText = "À qui sont destinées ces formation ?",
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "section_faq-blog")}
      tag="section"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "padding-global")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "container-large")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "padding-section-large")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "faq-blog_component")}
              tag="div"
            >
              <_Builtin.Grid
                className={_utils.cx(_styles, "faq-blog_content")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "faq-blog_content-left")}
                  tag="div"
                >
                  <_Builtin.Heading
                    className={_utils.cx(
                      _styles,
                      "heading-style-h2",
                      "text-color-darkblue"
                    )}
                    tag="h2"
                  >
                    {"Les questions fréquentes de nos apprenants"}
                  </_Builtin.Heading>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "faq-blog_list")}
                  tag="div"
                >
                  <_Builtin.Grid
                    className={_utils.cx(_styles, "faq-blog_list-grid")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "faq-blog_accordion")}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "faq-blog_question")}
                        data-w-id="b87af3e4-5e9f-fcc5-5838-e65209145820"
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(_styles, "faq_question-content")}
                          tag="div"
                        >
                          <_Builtin.Block
                            className={_utils.cx(_styles, "accordion-order")}
                            tag="div"
                          >
                            {"1"}
                          </_Builtin.Block>
                          <_Builtin.Block
                            className={_utils.cx(
                              _styles,
                              "text-size-xregular",
                              "text-weight-medium",
                              "text-color-4"
                            )}
                            tag="div"
                          >
                            {textSizeXregularText}
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "faq-blog_icon-wrapper"
                          )}
                          tag="div"
                        >
                          <_Builtin.Image
                            className={_utils.cx(_styles, "accordion-icon")}
                            loading="lazy"
                            width="auto"
                            height="auto"
                            alt="Accordion Icon"
                            src="https://cdn.prod.website-files.com/67444b8dcde8d2a8775775ed/67474e30214962df7ef9bb9c_chevron-down%20blue.svg"
                          />
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(_styles, "faq-blog_answer")}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "margin-bottom",
                            "margin-small"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block
                            className={_utils.cx(_styles, "max-width-large")}
                            tag="div"
                          >
                            <_Builtin.Paragraph>
                              {
                                "Les formations proposées par EDUF sont majoritairement tout public. Quels que soient vos objectifs, vos envies, votre situation ou votre niveau, nous rendons nos formations accessibles à tout le monde."
                              }
                            </_Builtin.Paragraph>
                          </_Builtin.Block>
                        </_Builtin.Block>
                      </_Builtin.Block>
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "faq-blog_accordion")}
                      id={_utils.cx(
                        _styles,
                        "w-node-b87af3e4-5e9f-fcc5-5838-e6520914582d-09145814"
                      )}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "faq-blog_question")}
                        data-w-id="b87af3e4-5e9f-fcc5-5838-e6520914582e"
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(_styles, "faq_question-content")}
                          tag="div"
                        >
                          <_Builtin.Block
                            className={_utils.cx(_styles, "accordion-order")}
                            tag="div"
                          >
                            {"2"}
                          </_Builtin.Block>
                          <_Builtin.Block
                            className={_utils.cx(
                              _styles,
                              "text-size-xregular",
                              "text-weight-medium",
                              "text-color-4"
                            )}
                            tag="div"
                          >
                            {
                              "Une fois inscrit, quels sont les horaires des cours?"
                            }
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "faq-blog_icon-wrapper"
                          )}
                          tag="div"
                        >
                          <_Builtin.Image
                            className={_utils.cx(_styles, "accordion-icon")}
                            loading="lazy"
                            width="auto"
                            height="auto"
                            alt="Accordion Icon"
                            src="https://cdn.prod.website-files.com/67444b8dcde8d2a8775775ed/67474e30214962df7ef9bb9c_chevron-down%20blue.svg"
                          />
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(_styles, "faq-blog_answer")}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "margin-bottom",
                            "margin-small"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block
                            className={_utils.cx(_styles, "max-width-large")}
                            tag="div"
                          >
                            <_Builtin.Paragraph>
                              {
                                "Une fois votre choix de formation fait et votre inscription validée, un emploi du temps vous sera remis."
                              }
                              <br />
                              <br />
                              {
                                "Toutes nos formations sont proposées en présentiel, au sein de nos salles de classes, ou en distanciel."
                              }
                              <br />
                              <br />
                              {
                                "Votre formation peut s’effectuer sur une plage horaire comprise entre 9h00 et 20h00, en fonction de vos disponibilités."
                              }
                            </_Builtin.Paragraph>
                          </_Builtin.Block>
                        </_Builtin.Block>
                      </_Builtin.Block>
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "faq-blog_accordion")}
                      id={_utils.cx(
                        _styles,
                        "w-node-b87af3e4-5e9f-fcc5-5838-e6520914583b-09145814"
                      )}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "faq-blog_question")}
                        data-w-id="b87af3e4-5e9f-fcc5-5838-e6520914583c"
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(_styles, "faq_question-content")}
                          tag="div"
                        >
                          <_Builtin.Block
                            className={_utils.cx(_styles, "accordion-order")}
                            tag="div"
                          >
                            {"3"}
                          </_Builtin.Block>
                          <_Builtin.Block
                            className={_utils.cx(
                              _styles,
                              "text-size-xregular",
                              "text-weight-medium",
                              "text-color-4"
                            )}
                            tag="div"
                          >
                            {"Est-ce que EDUF est un organisme certifié ?"}
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "faq-blog_icon-wrapper"
                          )}
                          tag="div"
                        >
                          <_Builtin.Image
                            className={_utils.cx(_styles, "accordion-icon")}
                            loading="lazy"
                            width="auto"
                            height="auto"
                            alt="Accordion Icon"
                            src="https://cdn.prod.website-files.com/67444b8dcde8d2a8775775ed/67474e30214962df7ef9bb9c_chevron-down%20blue.svg"
                          />
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(_styles, "faq-blog_answer")}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "margin-bottom",
                            "margin-small"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block
                            className={_utils.cx(_styles, "max-width-large")}
                            tag="div"
                          >
                            <_Builtin.Paragraph>
                              {
                                "Bien entendu ! EDUF est la marque dédiée au français du groupe Hello Formation, un centre de formation certifié Qualiopi au titre de la catégorie suivante: actions de formation."
                              }
                            </_Builtin.Paragraph>
                          </_Builtin.Block>
                        </_Builtin.Block>
                      </_Builtin.Block>
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "faq-blog_accordion")}
                      id={_utils.cx(
                        _styles,
                        "w-node-b87af3e4-5e9f-fcc5-5838-e65209145849-09145814"
                      )}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "faq-blog_question")}
                        data-w-id="b87af3e4-5e9f-fcc5-5838-e6520914584a"
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(_styles, "faq_question-content")}
                          tag="div"
                        >
                          <_Builtin.Block
                            className={_utils.cx(_styles, "accordion-order")}
                            tag="div"
                          >
                            {"4"}
                          </_Builtin.Block>
                          <_Builtin.Block
                            className={_utils.cx(
                              _styles,
                              "text-size-xregular",
                              "text-weight-medium",
                              "text-color-4"
                            )}
                            tag="div"
                          >
                            {"Comment financer sa formation avec "}
                            <br />
                            {"son compte personnel de formation (CPF) ?"}
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "faq-blog_icon-wrapper"
                          )}
                          tag="div"
                        >
                          <_Builtin.Image
                            className={_utils.cx(_styles, "accordion-icon")}
                            loading="lazy"
                            width="auto"
                            height="auto"
                            alt="Accordion Icon"
                            src="https://cdn.prod.website-files.com/67444b8dcde8d2a8775775ed/67474e30214962df7ef9bb9c_chevron-down%20blue.svg"
                          />
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(_styles, "faq-blog_answer")}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "margin-bottom",
                            "margin-small"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block
                            className={_utils.cx(_styles, "max-width-large")}
                            tag="div"
                          >
                            <_Builtin.Paragraph>
                              {
                                "Le Compte Personnel de Formation est un dispositif de financement dont vous pouvez bénéficier grâce au droit à la formation."
                              }
                              <br />
                              <br />
                              {
                                "Pour bénéficier de ce financement vous devez être éligible au CPF et suivre une formation éligible."
                              }
                              <br />
                              <br />
                              {
                                "Chez EDUF, la plupart de nos formations sont éligibles au droit à la formation. Si vous souhaitez découvrir votre taux d’éligibilité au financement de la formation de votre choix avec à votre CPF, nos conseillers sont à votre disposition pour vous accompagner."
                              }
                            </_Builtin.Paragraph>
                          </_Builtin.Block>
                        </_Builtin.Block>
                      </_Builtin.Block>
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "faq-blog_accordion")}
                      id={_utils.cx(
                        _styles,
                        "w-node-b87af3e4-5e9f-fcc5-5838-e65209145859-09145814"
                      )}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "faq-blog_question")}
                        data-w-id="b87af3e4-5e9f-fcc5-5838-e6520914585a"
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(_styles, "faq_question-content")}
                          tag="div"
                        >
                          <_Builtin.Block
                            className={_utils.cx(_styles, "accordion-order")}
                            tag="div"
                          >
                            {"5"}
                          </_Builtin.Block>
                          <_Builtin.Block
                            className={_utils.cx(
                              _styles,
                              "text-size-xregular",
                              "text-weight-medium",
                              "text-color-4"
                            )}
                            tag="div"
                          >
                            {"Comment choisir sa formation ?"}
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "faq-blog_icon-wrapper"
                          )}
                          tag="div"
                        >
                          <_Builtin.Image
                            className={_utils.cx(_styles, "accordion-icon")}
                            loading="lazy"
                            width="auto"
                            height="auto"
                            alt="Accordion Icon"
                            src="https://cdn.prod.website-files.com/67444b8dcde8d2a8775775ed/67474e30214962df7ef9bb9c_chevron-down%20blue.svg"
                          />
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(_styles, "faq-blog_answer")}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "margin-bottom",
                            "margin-small"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block
                            className={_utils.cx(_styles, "max-width-large")}
                            tag="div"
                          >
                            <_Builtin.Paragraph>
                              {
                                "Afin de bien cibler votre niveau actuel et receuillir vos besoins, il est recommandé de venir vous présenter au sein de notre école et réaliser un test de positionnement. Nos conseillers pédagogiques peuvent vous guider dans votre choix de formation pour effectuer la plus adaptée à vos besoins. N'hésitez pas à "
                              }
                              <_Builtin.Link
                                button={false}
                                block=""
                                options={{
                                  href: "#",
                                  target: "_blank",
                                }}
                              >
                                {"prendre RDV"}
                              </_Builtin.Link>
                              {"."}
                            </_Builtin.Paragraph>
                          </_Builtin.Block>
                        </_Builtin.Block>
                      </_Builtin.Block>
                    </_Builtin.Block>
                  </_Builtin.Grid>
                </_Builtin.Block>
              </_Builtin.Grid>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
