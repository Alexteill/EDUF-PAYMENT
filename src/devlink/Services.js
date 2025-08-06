"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./Services.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-10":{"id":"e-10","name":"","animationType":"custom","eventTypeId":"SCROLLING_IN_VIEW","action":{"id":"","actionTypeId":"GENERAL_CONTINUOUS_ACTION","config":{"actionListId":"a-6","affectedElements":{},"duration":0}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"34fe01dc-5a46-6345-e8a5-db644e05b431","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"34fe01dc-5a46-6345-e8a5-db644e05b431","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":[{"continuousParameterGroupId":"a-6-p","smoothing":50,"startsEntering":true,"addStartOffset":false,"addOffsetValue":50,"startsExiting":false,"addEndOffset":false,"endOffsetValue":50}],"createdOn":1626860473655},"e-9":{"id":"e-9","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-7","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1928"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"34fe01dc-5a46-6345-e8a5-db644e05b433","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"34fe01dc-5a46-6345-e8a5-db644e05b433","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":50,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1626765977818},"e-8":{"id":"e-8","name":"","animationType":"custom","eventTypeId":"SCROLL_OUT_OF_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2568"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"34fe01dc-5a46-6345-e8a5-db644e05b433","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"34fe01dc-5a46-6345-e8a5-db644e05b433","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":50,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1626765977820},"e-11":{"id":"e-11","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-7","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-243"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"34fe01dc-5a46-6345-e8a5-db644e05b43d","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"34fe01dc-5a46-6345-e8a5-db644e05b43d","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":50,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1732627387820},"e-12":{"id":"e-12","name":"","animationType":"preset","eventTypeId":"SCROLL_OUT_OF_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-244"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"34fe01dc-5a46-6345-e8a5-db644e05b43d","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"34fe01dc-5a46-6345-e8a5-db644e05b43d","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":50,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1732627387820},"e-13":{"id":"e-13","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-7","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-246"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"34fe01dc-5a46-6345-e8a5-db644e05b447","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"34fe01dc-5a46-6345-e8a5-db644e05b447","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":50,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1732627388236},"e-14":{"id":"e-14","name":"","animationType":"preset","eventTypeId":"SCROLL_OUT_OF_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-242"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"34fe01dc-5a46-6345-e8a5-db644e05b447","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"34fe01dc-5a46-6345-e8a5-db644e05b447","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":50,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1732627388236},"e-15":{"id":"e-15","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-7","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-234"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"34fe01dc-5a46-6345-e8a5-db644e05b451","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"34fe01dc-5a46-6345-e8a5-db644e05b451","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":50,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1732627388597},"e-16":{"id":"e-16","name":"","animationType":"preset","eventTypeId":"SCROLL_OUT_OF_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-238"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"34fe01dc-5a46-6345-e8a5-db644e05b451","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"34fe01dc-5a46-6345-e8a5-db644e05b451","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":50,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1732627388597},"e-17":{"id":"e-17","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-7","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-250"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"34fe01dc-5a46-6345-e8a5-db644e05b45b","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"34fe01dc-5a46-6345-e8a5-db644e05b45b","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":50,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1732627389532},"e-18":{"id":"e-18","name":"","animationType":"preset","eventTypeId":"SCROLL_OUT_OF_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-235"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"34fe01dc-5a46-6345-e8a5-db644e05b45b","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"34fe01dc-5a46-6345-e8a5-db644e05b45b","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":50,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1732627389532},"e-19":{"id":"e-19","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-7","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-240"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"34fe01dc-5a46-6345-e8a5-db644e05b465","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"34fe01dc-5a46-6345-e8a5-db644e05b465","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":50,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1732627389826},"e-20":{"id":"e-20","name":"","animationType":"preset","eventTypeId":"SCROLL_OUT_OF_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-245"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"34fe01dc-5a46-6345-e8a5-db644e05b465","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"34fe01dc-5a46-6345-e8a5-db644e05b465","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":50,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1732627389826}},"actionLists":{"a-6":{"id":"a-6","title":"Section Content 99 [Timeline Progress]","continuousParameterGroups":[{"id":"a-6-p","type":"SCROLL_PROGRESS","parameterLabel":"Scroll","continuousActionGroups":[{"keyframe":25,"actionItems":[{"id":"a-6-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{},"heightValue":0,"widthUnit":"PX","heightUnit":"%","locked":false}}]},{"keyframe":55,"actionItems":[{"id":"a-6-n-2","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{},"heightValue":100,"widthUnit":"PX","heightUnit":"%","locked":false}}]}]}],"createdOn":1626766527768},"a-7":{"id":"a-7","title":"Section content timeline [Scroll In]","actionItemGroups":[{"actionItems":[{"id":"a-7-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"outQuint","duration":400,"target":{},"widthValue":0,"widthUnit":"%","heightUnit":"PX","locked":false}}]},{"actionItems":[{"id":"a-7-n-2","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"outQuint","duration":400,"target":{},"widthValue":100,"widthUnit":"%","heightUnit":"PX","locked":false}}]}],"useFirstGroupAsInitialState":true,"createdOn":1626765982929},"a-8":{"id":"a-8","title":"Section content timeline [Scroll Out]","actionItemGroups":[{"actionItems":[{"id":"a-8-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"outQuint","duration":400,"target":{},"widthValue":0,"widthUnit":"%","heightUnit":"PX","locked":false}}]}],"useFirstGroupAsInitialState":false,"createdOn":1626765982929}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function Services({ as: _Component = _Builtin.Block }) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "section_services")}
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
              className={_utils.cx(_styles, "services_image-wrapper")}
              tag="div"
            >
              <_Builtin.Image
                className={_utils.cx(_styles, "services-image")}
                loading="lazy"
                width="1254"
                height="auto"
                alt=""
                src="https://cdn.prod.website-files.com/67444b8dcde8d2a8775775ed/6767e6a7fa536c3a8d8937bf_Frame%201597879417%402x.png"
              />
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "spacer-huge")}
              tag="div"
            />
            <_Builtin.Block
              className={_utils.cx(_styles, "services_component")}
              tag="div"
            >
              <_Builtin.Grid
                className={_utils.cx(_styles, "services_content")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "services_content-left")}
                  id={_utils.cx(
                    _styles,
                    "w-node-_34fe01dc-5a46-6345-e8a5-db644e05b423-4e05b41a"
                  )}
                  tag="div"
                >
                  <_Builtin.Heading
                    className={_utils.cx(_styles, "heading-style-h2")}
                    tag="h2"
                  >
                    {"Bénéficiez gratuitement de la meilleure expérience de "}
                    <_Builtin.Span className={_utils.cx(_styles, "text-span")}>
                      {"e-learning pour apprendre le français"}
                    </_Builtin.Span>
                  </_Builtin.Heading>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "spacer-xmedium")}
                    tag="div"
                  />
                  <_Builtin.Paragraph
                    className={_utils.cx(
                      _styles,
                      "text-size-xregular",
                      "text-color-alternate"
                    )}
                  >
                    {
                      "Que votre formation se déroule en présentiel (au sein de nos salles de classes) ou en distanciel (individuel en visio-conférence), EDUF vous donne accès à sa plateforme de E-learning exclusivement développée en interne."
                    }
                  </_Builtin.Paragraph>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "spacer-xxlarge")}
                    tag="div"
                  />
                  <_Builtin.Link
                    className={_utils.cx(
                      _styles,
                      "button",
                      "is-icon",
                      "background-color-alternate"
                    )}
                    button={false}
                    block="inline"
                    options={{
                      href: "#",
                    }}
                  >
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "text-size-xregular",
                        "text-weight-medium",
                        "text-color-blue"
                      )}
                      tag="div"
                    >
                      {"Choisir une formation"}
                    </_Builtin.Block>
                    <_Builtin.Image
                      className={_utils.cx(_styles, "button-icon")}
                      loading="lazy"
                      width="auto"
                      height="auto"
                      alt="Right Arrow Icon"
                      src="https://cdn.prod.website-files.com/67444b8dcde8d2a8775775ed/6744bff58a1a55f1ef3e33fb_arrow-narrow-right%20blue.svg"
                    />
                  </_Builtin.Link>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "services_content-right")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "services_timeline-wrapper")}
                    data-w-id="34fe01dc-5a46-6345-e8a5-db644e05b431"
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "services_timeline-step-wrapper"
                      )}
                      tag="div"
                    >
                      <_Builtin.Grid
                        className={_utils.cx(_styles, "services_timeline-step")}
                        data-w-id="34fe01dc-5a46-6345-e8a5-db644e05b433"
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "services_timeline-left"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block
                            className={_utils.cx(
                              _styles,
                              "services_timeline-icon-wrapper"
                            )}
                            tag="div"
                          >
                            <_Builtin.Image
                              className={_utils.cx(_styles, "services-icon")}
                              loading="lazy"
                              width="auto"
                              height="auto"
                              alt="Timeline Icon"
                              src="https://cdn.prod.website-files.com/67444b8dcde8d2a8775775ed/6745cb238cf4ebadc528a0a7_timeline%202%20icon.svg"
                            />
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "services_timeline-right"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block
                            className={_utils.cx(
                              _styles,
                              "margin-bottom",
                              "margin-xsmall"
                            )}
                            tag="div"
                          >
                            <_Builtin.Heading
                              className={_utils.cx(
                                _styles,
                                "heading-style-h6",
                                "is-secondary"
                              )}
                              tag="h3"
                            >
                              {"Tableau de bord"}
                            </_Builtin.Heading>
                          </_Builtin.Block>
                          <_Builtin.Paragraph
                            className={_utils.cx(
                              _styles,
                              "text-color-alternate"
                            )}
                          >
                            {
                              "Suivez votre progression et consulter vos statistiques (temps de connexion, taux de complétion ...)"
                            }
                          </_Builtin.Paragraph>
                        </_Builtin.Block>
                      </_Builtin.Grid>
                      <_Builtin.Grid
                        className={_utils.cx(_styles, "services_timeline-step")}
                        data-w-id="34fe01dc-5a46-6345-e8a5-db644e05b43d"
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "services_timeline-left"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block
                            className={_utils.cx(
                              _styles,
                              "services_timeline-icon-wrapper"
                            )}
                            tag="div"
                          >
                            <_Builtin.Image
                              className={_utils.cx(_styles, "services-icon")}
                              loading="lazy"
                              width="auto"
                              height="auto"
                              alt="Timeline Icon"
                              src="https://cdn.prod.website-files.com/67444b8dcde8d2a8775775ed/6745cbd756103ef341523685_timeline%202%20icon%202.svg"
                            />
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "services_timeline-right"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block
                            className={_utils.cx(
                              _styles,
                              "margin-bottom",
                              "margin-xsmall"
                            )}
                            tag="div"
                          >
                            <_Builtin.Heading
                              className={_utils.cx(
                                _styles,
                                "heading-style-h6",
                                "is-secondary"
                              )}
                              tag="h3"
                            >
                              {"Fiches de cours téléchargeables"}
                            </_Builtin.Heading>
                          </_Builtin.Block>
                          <_Builtin.Paragraph
                            className={_utils.cx(
                              _styles,
                              "text-color-alternate"
                            )}
                          >
                            {
                              "Suivez votre progression et consulter vos statistiques (temps de connexion, taux de complétion ...)"
                            }
                          </_Builtin.Paragraph>
                        </_Builtin.Block>
                      </_Builtin.Grid>
                      <_Builtin.Grid
                        className={_utils.cx(_styles, "services_timeline-step")}
                        data-w-id="34fe01dc-5a46-6345-e8a5-db644e05b447"
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "services_timeline-left"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block
                            className={_utils.cx(
                              _styles,
                              "services_timeline-icon-wrapper"
                            )}
                            tag="div"
                          >
                            <_Builtin.Image
                              className={_utils.cx(_styles, "services-icon")}
                              loading="lazy"
                              width="auto"
                              height="auto"
                              alt="Timeline Icon"
                              src="https://cdn.prod.website-files.com/67444b8dcde8d2a8775775ed/6745cbf998fb69087b57a6eb_timeline%202%20icon%203.svg"
                            />
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "services_timeline-right"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block
                            className={_utils.cx(
                              _styles,
                              "margin-bottom",
                              "margin-xsmall"
                            )}
                            tag="div"
                          >
                            <_Builtin.Heading
                              className={_utils.cx(
                                _styles,
                                "heading-style-h6",
                                "is-secondary"
                              )}
                              tag="h3"
                            >
                              {"Quizz"}
                            </_Builtin.Heading>
                          </_Builtin.Block>
                          <_Builtin.Paragraph
                            className={_utils.cx(
                              _styles,
                              "text-color-alternate"
                            )}
                          >
                            {
                              "Evaluez vos connaissances à l'aide de quizz intéractifs"
                            }
                          </_Builtin.Paragraph>
                        </_Builtin.Block>
                      </_Builtin.Grid>
                      <_Builtin.Grid
                        className={_utils.cx(_styles, "services_timeline-step")}
                        data-w-id="34fe01dc-5a46-6345-e8a5-db644e05b451"
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "services_timeline-left"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block
                            className={_utils.cx(
                              _styles,
                              "services_timeline-icon-wrapper"
                            )}
                            tag="div"
                          >
                            <_Builtin.Image
                              className={_utils.cx(_styles, "services-icon")}
                              loading="lazy"
                              width="auto"
                              height="auto"
                              alt="Timeline Icon"
                              src="https://cdn.prod.website-files.com/67444b8dcde8d2a8775775ed/6745cc1e459a91189716a113_timeline%202%20icon%204.svg"
                            />
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "services_timeline-right"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block
                            className={_utils.cx(
                              _styles,
                              "margin-bottom",
                              "margin-xsmall"
                            )}
                            tag="div"
                          >
                            <_Builtin.Heading
                              className={_utils.cx(
                                _styles,
                                "heading-style-h6",
                                "is-secondary"
                              )}
                              tag="h3"
                            >
                              {"Vidéos professionnelles"}
                            </_Builtin.Heading>
                          </_Builtin.Block>
                          <_Builtin.Paragraph
                            className={_utils.cx(
                              _styles,
                              "text-color-alternate"
                            )}
                          >
                            {
                              "Des experts vous présentent les notions clés de la formation via des vidéos de bonne qualité"
                            }
                          </_Builtin.Paragraph>
                        </_Builtin.Block>
                      </_Builtin.Grid>
                      <_Builtin.Grid
                        className={_utils.cx(_styles, "services_timeline-step")}
                        data-w-id="34fe01dc-5a46-6345-e8a5-db644e05b45b"
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "services_timeline-left"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block
                            className={_utils.cx(
                              _styles,
                              "services_timeline-icon-wrapper"
                            )}
                            tag="div"
                          >
                            <_Builtin.Image
                              className={_utils.cx(_styles, "services-icon")}
                              loading="lazy"
                              width="auto"
                              height="auto"
                              alt="Timeline Icon"
                              src="https://cdn.prod.website-files.com/67444b8dcde8d2a8775775ed/6745cc43c7ed73a6b4d13651_timeline%202%20icon%205.svg"
                            />
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "services_timeline-right"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block
                            className={_utils.cx(
                              _styles,
                              "margin-bottom",
                              "margin-xsmall"
                            )}
                            tag="div"
                          >
                            <_Builtin.Heading
                              className={_utils.cx(
                                _styles,
                                "heading-style-h6",
                                "is-secondary"
                              )}
                              tag="h3"
                            >
                              {"Accessibilité multi-support"}
                            </_Builtin.Heading>
                          </_Builtin.Block>
                          <_Builtin.Paragraph
                            className={_utils.cx(
                              _styles,
                              "text-color-alternate"
                            )}
                          >
                            {
                              "Notre plateforme est accessible depuis PC, tablettes, smartphones iOS ou Android"
                            }
                          </_Builtin.Paragraph>
                        </_Builtin.Block>
                      </_Builtin.Grid>
                      <_Builtin.Grid
                        className={_utils.cx(_styles, "services_timeline-step")}
                        data-w-id="34fe01dc-5a46-6345-e8a5-db644e05b465"
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "services_timeline-left"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block
                            className={_utils.cx(
                              _styles,
                              "services_timeline-icon-wrapper"
                            )}
                            tag="div"
                          >
                            <_Builtin.Image
                              className={_utils.cx(_styles, "services-icon")}
                              loading="lazy"
                              width="auto"
                              height="auto"
                              alt="Timeline Icon"
                              src="https://cdn.prod.website-files.com/67444b8dcde8d2a8775775ed/6745cc5f296fdde532511846_timeline%202%20icon%206.svg"
                            />
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "services_timeline-right"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block
                            className={_utils.cx(
                              _styles,
                              "margin-bottom",
                              "margin-xsmall"
                            )}
                            tag="div"
                          >
                            <_Builtin.Heading
                              className={_utils.cx(
                                _styles,
                                "heading-style-h6",
                                "is-secondary"
                              )}
                              tag="h3"
                            >
                              {"Disponibilité 24/7"}
                            </_Builtin.Heading>
                          </_Builtin.Block>
                          <_Builtin.Paragraph
                            className={_utils.cx(
                              _styles,
                              "text-color-alternate"
                            )}
                          >
                            {
                              "Notre plateforme e-learning vous permet de monter en compétences sans barrière d'horaire, où que vous soyez, et en fonction de vos disponibilités"
                            }
                          </_Builtin.Paragraph>
                        </_Builtin.Block>
                      </_Builtin.Grid>
                    </_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Grid>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
