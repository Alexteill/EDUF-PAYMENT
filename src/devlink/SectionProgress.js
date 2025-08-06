"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./SectionProgress.module.css";

export function SectionProgress({ as: _Component = _Builtin.Block }) {
  return (
    <_Component className={_utils.cx(_styles, "section_progress")} tag="div">
      <_Builtin.Block
        className={_utils.cx(_styles, "padding-global")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "container-large")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(
              _styles,
              "padding-vertical",
              "padding-custom1"
            )}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "progress_component")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "text-align-center")}
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
                  {"Stages d'intégration "}
                  <_Builtin.Span className={_utils.cx(_styles, "text-span-4")}>
                    {"immersifs"}
                  </_Builtin.Span>
                </_Builtin.Heading>
                <_Builtin.Block
                  className={_utils.cx(_styles, "spacer-xmedium")}
                  tag="div"
                />
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "text-size-xregular",
                    "text-color-darkblue"
                  )}
                  tag="div"
                >
                  {
                    "Plongez au cœur de la culture française grâce à nos stages immersifs et professionnalisants. "
                  }
                  <br />
                  {
                    "Une expérience unique pour accélérer votre intégration et développer vos compétences."
                  }
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "progress_layout")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "progress_content-wrapper")}
                  id={_utils.cx(
                    _styles,
                    "w-node-_26a9064a-3dd9-9d7f-1bb4-299287981af9-87981ae9"
                  )}
                  tag="div"
                >
                  <_Builtin.Heading
                    className={_utils.cx(_styles, "heading-style-h6")}
                    tag="h3"
                  >
                    {"Apprenez la culture française en situation réelle"}
                  </_Builtin.Heading>
                  <_Builtin.Paragraph
                    className={_utils.cx(
                      _styles,
                      "text-size-xregular",
                      "text-color-7"
                    )}
                  >
                    {
                      "Nos stages d'intégration vous permettent de vivre une expérience authentique de la culture française tout en développant des compétences professionnelles valorisantes pour votre parcours."
                    }
                  </_Builtin.Paragraph>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "progress_content-list")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "progress_content-list-item"
                      )}
                      tag="div"
                    >
                      <_Builtin.HtmlEmbed
                        className={_utils.cx(_styles, "icon-embed-xsmall")}
                        value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20preserveAspectRatio%3D%22xMidYMid%20meet%22%20aria-hidden%3D%22true%22%20role%3D%22img%22%3E%0A%3Crect%20y%3D%220.00195312%22%20width%3D%2224%22%20height%3D%2224%22%20rx%3D%2212%22%20fill%3D%22%23DBE3F9%22%2F%3E%0A%3Cg%20clip-path%3D%22url(%23clip0_2884_10711)%22%3E%0A%3Cpath%20d%3D%22M11.5799%207.01661C11.7144%206.74423%2011.7816%206.60804%2011.8729%206.56453C11.9523%206.52667%2012.0445%206.52667%2012.1239%206.56453C12.2152%206.60804%2012.2824%206.74423%2012.4168%207.01661L13.6924%209.60076C13.7321%209.68117%2013.7519%209.72138%2013.781%209.7526C13.8066%209.78024%2013.8374%209.80263%2013.8716%209.81854C13.9103%209.83651%2013.9546%209.84299%2014.0434%209.85596L16.8966%2010.273C17.1971%2010.3169%2017.3473%2010.3389%2017.4168%2010.4123C17.4773%2010.4761%2017.5058%2010.5638%2017.4943%2010.651C17.481%2010.7513%2017.3723%2010.8572%2017.1547%2011.0691L15.0909%2013.0793C15.0265%2013.1419%2014.9944%2013.1732%2014.9736%2013.2105C14.9552%2013.2435%2014.9435%2013.2798%2014.9389%2013.3173C14.9338%2013.3597%2014.9414%2013.4039%2014.9565%2013.4924L15.4435%2016.3317C15.4949%2016.6312%2015.5206%2016.7809%2015.4723%2016.8698C15.4303%2016.9471%2015.3557%2017.0013%2015.2692%2017.0174C15.1697%2017.0358%2015.0353%2016.9651%2014.7664%2016.8237L12.2156%2015.4822C12.1361%2015.4405%2012.0964%2015.4196%2012.0545%2015.4113C12.0174%2015.4041%2011.9793%2015.4041%2011.9423%2015.4113C11.9004%2015.4196%2011.8606%2015.4405%2011.7812%2015.4822L9.23041%2016.8237C8.96149%2016.9651%208.82703%2017.0358%208.72761%2017.0174C8.6411%2017.0013%208.56646%2016.9471%208.52447%2016.8698C8.47621%2016.7809%208.50189%2016.6312%208.55325%2016.3317L9.04022%2013.4924C9.0554%2013.4039%209.063%2013.3597%209.05786%2013.3173C9.05331%2013.2798%209.04152%2013.2435%209.02314%2013.2105C9.00239%2013.1732%208.97022%2013.1419%208.90588%2013.0793L6.84203%2011.0691C6.62451%2010.8572%206.51575%2010.7513%206.50251%2010.651C6.491%2010.5638%206.51945%2010.4761%206.57994%2010.4123C6.64946%2010.3389%206.79969%2010.3169%207.10015%2010.273L9.95339%209.85596C10.0421%209.84299%2010.0865%209.83651%2010.1251%209.81854C10.1593%209.80263%2010.1901%209.78024%2010.2158%209.7526C10.2448%209.72138%2010.2647%209.68117%2010.3044%209.60076L11.5799%207.01661Z%22%20fill%3D%22%232C4EBE%22%20stroke%3D%22%232C4EBE%22%20stroke-width%3D%221.2%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%3C%2Fg%3E%0A%3Cdefs%3E%0A%3CclipPath%20id%3D%22clip0_2884_10711%22%3E%0A%3Crect%20width%3D%2214%22%20height%3D%2214%22%20fill%3D%22white%22%20transform%3D%22translate(5%205.00195)%22%2F%3E%0A%3C%2FclipPath%3E%0A%3C%2Fdefs%3E%0A%3C%2Fsvg%3E"
                      />
                      <_Builtin.Block
                        className={_utils.cx(_styles, "text-color-darkblue")}
                        tag="div"
                      >
                        {
                          "Immersion totale dans l'environnement culturel français"
                        }
                      </_Builtin.Block>
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "progress_content-list-item"
                      )}
                      tag="div"
                    >
                      <_Builtin.HtmlEmbed
                        className={_utils.cx(_styles, "icon-embed-xsmall")}
                        value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20preserveAspectRatio%3D%22xMidYMid%20meet%22%20aria-hidden%3D%22true%22%20role%3D%22img%22%3E%0A%3Crect%20y%3D%220.00195312%22%20width%3D%2224%22%20height%3D%2224%22%20rx%3D%2212%22%20fill%3D%22%23DBE3F9%22%2F%3E%0A%3Cg%20clip-path%3D%22url(%23clip0_2884_10711)%22%3E%0A%3Cpath%20d%3D%22M11.5799%207.01661C11.7144%206.74423%2011.7816%206.60804%2011.8729%206.56453C11.9523%206.52667%2012.0445%206.52667%2012.1239%206.56453C12.2152%206.60804%2012.2824%206.74423%2012.4168%207.01661L13.6924%209.60076C13.7321%209.68117%2013.7519%209.72138%2013.781%209.7526C13.8066%209.78024%2013.8374%209.80263%2013.8716%209.81854C13.9103%209.83651%2013.9546%209.84299%2014.0434%209.85596L16.8966%2010.273C17.1971%2010.3169%2017.3473%2010.3389%2017.4168%2010.4123C17.4773%2010.4761%2017.5058%2010.5638%2017.4943%2010.651C17.481%2010.7513%2017.3723%2010.8572%2017.1547%2011.0691L15.0909%2013.0793C15.0265%2013.1419%2014.9944%2013.1732%2014.9736%2013.2105C14.9552%2013.2435%2014.9435%2013.2798%2014.9389%2013.3173C14.9338%2013.3597%2014.9414%2013.4039%2014.9565%2013.4924L15.4435%2016.3317C15.4949%2016.6312%2015.5206%2016.7809%2015.4723%2016.8698C15.4303%2016.9471%2015.3557%2017.0013%2015.2692%2017.0174C15.1697%2017.0358%2015.0353%2016.9651%2014.7664%2016.8237L12.2156%2015.4822C12.1361%2015.4405%2012.0964%2015.4196%2012.0545%2015.4113C12.0174%2015.4041%2011.9793%2015.4041%2011.9423%2015.4113C11.9004%2015.4196%2011.8606%2015.4405%2011.7812%2015.4822L9.23041%2016.8237C8.96149%2016.9651%208.82703%2017.0358%208.72761%2017.0174C8.6411%2017.0013%208.56646%2016.9471%208.52447%2016.8698C8.47621%2016.7809%208.50189%2016.6312%208.55325%2016.3317L9.04022%2013.4924C9.0554%2013.4039%209.063%2013.3597%209.05786%2013.3173C9.05331%2013.2798%209.04152%2013.2435%209.02314%2013.2105C9.00239%2013.1732%208.97022%2013.1419%208.90588%2013.0793L6.84203%2011.0691C6.62451%2010.8572%206.51575%2010.7513%206.50251%2010.651C6.491%2010.5638%206.51945%2010.4761%206.57994%2010.4123C6.64946%2010.3389%206.79969%2010.3169%207.10015%2010.273L9.95339%209.85596C10.0421%209.84299%2010.0865%209.83651%2010.1251%209.81854C10.1593%209.80263%2010.1901%209.78024%2010.2158%209.7526C10.2448%209.72138%2010.2647%209.68117%2010.3044%209.60076L11.5799%207.01661Z%22%20fill%3D%22%232C4EBE%22%20stroke%3D%22%232C4EBE%22%20stroke-width%3D%221.2%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%3C%2Fg%3E%0A%3Cdefs%3E%0A%3CclipPath%20id%3D%22clip0_2884_10711%22%3E%0A%3Crect%20width%3D%2214%22%20height%3D%2214%22%20fill%3D%22white%22%20transform%3D%22translate(5%205.00195)%22%2F%3E%0A%3C%2FclipPath%3E%0A%3C%2Fdefs%3E%0A%3C%2Fsvg%3E"
                      />
                      <_Builtin.Block
                        className={_utils.cx(_styles, "text-color-darkblue")}
                        tag="div"
                      >
                        {"Stages en entreprises partenaires certifiées"}
                      </_Builtin.Block>
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "progress_content-list-item"
                      )}
                      tag="div"
                    >
                      <_Builtin.HtmlEmbed
                        className={_utils.cx(_styles, "icon-embed-xsmall")}
                        value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20preserveAspectRatio%3D%22xMidYMid%20meet%22%20aria-hidden%3D%22true%22%20role%3D%22img%22%3E%0A%3Crect%20y%3D%220.00195312%22%20width%3D%2224%22%20height%3D%2224%22%20rx%3D%2212%22%20fill%3D%22%23DBE3F9%22%2F%3E%0A%3Cg%20clip-path%3D%22url(%23clip0_2884_10711)%22%3E%0A%3Cpath%20d%3D%22M11.5799%207.01661C11.7144%206.74423%2011.7816%206.60804%2011.8729%206.56453C11.9523%206.52667%2012.0445%206.52667%2012.1239%206.56453C12.2152%206.60804%2012.2824%206.74423%2012.4168%207.01661L13.6924%209.60076C13.7321%209.68117%2013.7519%209.72138%2013.781%209.7526C13.8066%209.78024%2013.8374%209.80263%2013.8716%209.81854C13.9103%209.83651%2013.9546%209.84299%2014.0434%209.85596L16.8966%2010.273C17.1971%2010.3169%2017.3473%2010.3389%2017.4168%2010.4123C17.4773%2010.4761%2017.5058%2010.5638%2017.4943%2010.651C17.481%2010.7513%2017.3723%2010.8572%2017.1547%2011.0691L15.0909%2013.0793C15.0265%2013.1419%2014.9944%2013.1732%2014.9736%2013.2105C14.9552%2013.2435%2014.9435%2013.2798%2014.9389%2013.3173C14.9338%2013.3597%2014.9414%2013.4039%2014.9565%2013.4924L15.4435%2016.3317C15.4949%2016.6312%2015.5206%2016.7809%2015.4723%2016.8698C15.4303%2016.9471%2015.3557%2017.0013%2015.2692%2017.0174C15.1697%2017.0358%2015.0353%2016.9651%2014.7664%2016.8237L12.2156%2015.4822C12.1361%2015.4405%2012.0964%2015.4196%2012.0545%2015.4113C12.0174%2015.4041%2011.9793%2015.4041%2011.9423%2015.4113C11.9004%2015.4196%2011.8606%2015.4405%2011.7812%2015.4822L9.23041%2016.8237C8.96149%2016.9651%208.82703%2017.0358%208.72761%2017.0174C8.6411%2017.0013%208.56646%2016.9471%208.52447%2016.8698C8.47621%2016.7809%208.50189%2016.6312%208.55325%2016.3317L9.04022%2013.4924C9.0554%2013.4039%209.063%2013.3597%209.05786%2013.3173C9.05331%2013.2798%209.04152%2013.2435%209.02314%2013.2105C9.00239%2013.1732%208.97022%2013.1419%208.90588%2013.0793L6.84203%2011.0691C6.62451%2010.8572%206.51575%2010.7513%206.50251%2010.651C6.491%2010.5638%206.51945%2010.4761%206.57994%2010.4123C6.64946%2010.3389%206.79969%2010.3169%207.10015%2010.273L9.95339%209.85596C10.0421%209.84299%2010.0865%209.83651%2010.1251%209.81854C10.1593%209.80263%2010.1901%209.78024%2010.2158%209.7526C10.2448%209.72138%2010.2647%209.68117%2010.3044%209.60076L11.5799%207.01661Z%22%20fill%3D%22%232C4EBE%22%20stroke%3D%22%232C4EBE%22%20stroke-width%3D%221.2%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%3C%2Fg%3E%0A%3Cdefs%3E%0A%3CclipPath%20id%3D%22clip0_2884_10711%22%3E%0A%3Crect%20width%3D%2214%22%20height%3D%2214%22%20fill%3D%22white%22%20transform%3D%22translate(5%205.00195)%22%2F%3E%0A%3C%2FclipPath%3E%0A%3C%2Fdefs%3E%0A%3C%2Fsvg%3E"
                      />
                      <_Builtin.Block
                        className={_utils.cx(_styles, "text-color-darkblue")}
                        tag="div"
                      >
                        {
                          "Accompagnement personnalisé par des tuteurs expérimentés"
                        }
                      </_Builtin.Block>
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "progress_content-list-item"
                      )}
                      tag="div"
                    >
                      <_Builtin.HtmlEmbed
                        className={_utils.cx(_styles, "icon-embed-xsmall")}
                        value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20preserveAspectRatio%3D%22xMidYMid%20meet%22%20aria-hidden%3D%22true%22%20role%3D%22img%22%3E%0A%3Crect%20y%3D%220.00195312%22%20width%3D%2224%22%20height%3D%2224%22%20rx%3D%2212%22%20fill%3D%22%23DBE3F9%22%2F%3E%0A%3Cg%20clip-path%3D%22url(%23clip0_2884_10711)%22%3E%0A%3Cpath%20d%3D%22M11.5799%207.01661C11.7144%206.74423%2011.7816%206.60804%2011.8729%206.56453C11.9523%206.52667%2012.0445%206.52667%2012.1239%206.56453C12.2152%206.60804%2012.2824%206.74423%2012.4168%207.01661L13.6924%209.60076C13.7321%209.68117%2013.7519%209.72138%2013.781%209.7526C13.8066%209.78024%2013.8374%209.80263%2013.8716%209.81854C13.9103%209.83651%2013.9546%209.84299%2014.0434%209.85596L16.8966%2010.273C17.1971%2010.3169%2017.3473%2010.3389%2017.4168%2010.4123C17.4773%2010.4761%2017.5058%2010.5638%2017.4943%2010.651C17.481%2010.7513%2017.3723%2010.8572%2017.1547%2011.0691L15.0909%2013.0793C15.0265%2013.1419%2014.9944%2013.1732%2014.9736%2013.2105C14.9552%2013.2435%2014.9435%2013.2798%2014.9389%2013.3173C14.9338%2013.3597%2014.9414%2013.4039%2014.9565%2013.4924L15.4435%2016.3317C15.4949%2016.6312%2015.5206%2016.7809%2015.4723%2016.8698C15.4303%2016.9471%2015.3557%2017.0013%2015.2692%2017.0174C15.1697%2017.0358%2015.0353%2016.9651%2014.7664%2016.8237L12.2156%2015.4822C12.1361%2015.4405%2012.0964%2015.4196%2012.0545%2015.4113C12.0174%2015.4041%2011.9793%2015.4041%2011.9423%2015.4113C11.9004%2015.4196%2011.8606%2015.4405%2011.7812%2015.4822L9.23041%2016.8237C8.96149%2016.9651%208.82703%2017.0358%208.72761%2017.0174C8.6411%2017.0013%208.56646%2016.9471%208.52447%2016.8698C8.47621%2016.7809%208.50189%2016.6312%208.55325%2016.3317L9.04022%2013.4924C9.0554%2013.4039%209.063%2013.3597%209.05786%2013.3173C9.05331%2013.2798%209.04152%2013.2435%209.02314%2013.2105C9.00239%2013.1732%208.97022%2013.1419%208.90588%2013.0793L6.84203%2011.0691C6.62451%2010.8572%206.51575%2010.7513%206.50251%2010.651C6.491%2010.5638%206.51945%2010.4761%206.57994%2010.4123C6.64946%2010.3389%206.79969%2010.3169%207.10015%2010.273L9.95339%209.85596C10.0421%209.84299%2010.0865%209.83651%2010.1251%209.81854C10.1593%209.80263%2010.1901%209.78024%2010.2158%209.7526C10.2448%209.72138%2010.2647%209.68117%2010.3044%209.60076L11.5799%207.01661Z%22%20fill%3D%22%232C4EBE%22%20stroke%3D%22%232C4EBE%22%20stroke-width%3D%221.2%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%3C%2Fg%3E%0A%3Cdefs%3E%0A%3CclipPath%20id%3D%22clip0_2884_10711%22%3E%0A%3Crect%20width%3D%2214%22%20height%3D%2214%22%20fill%3D%22white%22%20transform%3D%22translate(5%205.00195)%22%2F%3E%0A%3C%2FclipPath%3E%0A%3C%2Fdefs%3E%0A%3C%2Fsvg%3E"
                      />
                      <_Builtin.Block
                        className={_utils.cx(_styles, "text-color-darkblue")}
                        tag="div"
                      >
                        {"Certification des compétences acquises"}
                      </_Builtin.Block>
                    </_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "progress_image-wrapper")}
                  id={_utils.cx(
                    _styles,
                    "w-node-_26a9064a-3dd9-9d7f-1bb4-299287981b0f-87981ae9"
                  )}
                  tag="div"
                >
                  <_Builtin.Image
                    className={_utils.cx(_styles, "progress_background-image")}
                    loading="lazy"
                    width="auto"
                    height="auto"
                    alt="Progress Background Image"
                    src="https://cdn.prod.website-files.com/67444b8dcde8d2a8775775ed/685e9be604863a7b789dd869_fb2245a2515541d0a72257bf35f02413ac4ce60d.png"
                  />
                  <_Builtin.Block
                    className={_utils.cx(_styles, "progress_image-content")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "progress_icon-wrapper")}
                      tag="div"
                    >
                      <_Builtin.HtmlEmbed
                        className={_utils.cx(_styles, "icon-embed-custom-18")}
                        value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%20171%2040%22%20fill%3D%22none%22%20preserveAspectRatio%3D%22xMidYMid%20meet%22%20aria-hidden%3D%22true%22%20role%3D%22img%22%3E%0A%3Cg%20filter%3D%22url(%23filter0_di_2884_10738)%22%3E%0A%3Cpath%20d%3D%22M17.4165%203.60896C18.0238%202.37837%2019.7786%202.37837%2020.3859%203.60895L22.8954%208.69358C23.1365%209.18224%2023.6027%209.52095%2024.142%209.59931L29.7532%2010.4147C31.1112%2010.612%2031.6535%2012.2809%2030.6708%2013.2388L26.6105%2017.1966C26.2203%2017.577%2026.0422%2018.125%2026.1343%2018.6621L27.0928%2024.2506C27.3248%2025.6032%2025.9052%2026.6346%2024.6905%2025.996L19.6717%2023.3575C19.1893%2023.1039%2018.6131%2023.1039%2018.1308%2023.3575L13.1119%2025.996C11.8973%2026.6346%2010.4776%2025.6032%2010.7096%2024.2506L11.6681%2018.6621C11.7602%2018.125%2011.5822%2017.577%2011.192%2017.1966L7.13164%2013.2388C6.14896%2012.2809%206.69122%2010.612%208.04925%2010.4147L13.6605%209.59931C14.1997%209.52095%2014.6659%209.18224%2014.9071%208.69358L17.4165%203.60896Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fg%3E%0A%3Cg%20filter%3D%22url(%23filter1_di_2884_10738)%22%3E%0A%3Cpath%20d%3D%22M50.5337%203.60896C51.141%202.37837%2052.8958%202.37837%2053.5031%203.60895L56.0125%208.69358C56.2537%209.18224%2056.7199%209.52095%2057.2592%209.59931L62.8704%2010.4147C64.2284%2010.612%2064.7707%2012.2809%2063.788%2013.2388L59.7277%2017.1966C59.3375%2017.577%2059.1594%2018.125%2059.2515%2018.6621L60.21%2024.2506C60.442%2025.6032%2059.0224%2026.6346%2057.8077%2025.996L52.7889%2023.3575C52.3065%2023.1039%2051.7303%2023.1039%2051.248%2023.3575L46.2291%2025.996C45.0145%2026.6346%2043.5948%2025.6032%2043.8268%2024.2506L44.7853%2018.6621C44.8774%2018.125%2044.6994%2017.577%2044.3091%2017.1966L40.2488%2013.2388C39.2662%2012.2809%2039.8084%2010.612%2041.1664%2010.4147L46.7777%209.59931C47.3169%209.52095%2047.7831%209.18224%2048.0243%208.69358L50.5337%203.60896Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fg%3E%0A%3Cg%20filter%3D%22url(%23filter2_di_2884_10738)%22%3E%0A%3Cpath%20d%3D%22M83.6431%203.60896C84.2504%202.37837%2086.0052%202.37837%2086.6125%203.60895L89.1219%208.69358C89.3631%209.18224%2089.8293%209.52095%2090.3686%209.59931L95.9798%2010.4147C97.3378%2010.612%2097.8801%2012.2809%2096.8974%2013.2388L92.8371%2017.1966C92.4468%2017.577%2092.2688%2018.125%2092.3609%2018.6621L93.3194%2024.2506C93.5514%2025.6032%2092.1317%2026.6346%2090.9171%2025.996L85.8983%2023.3575C85.4159%2023.1039%2084.8397%2023.1039%2084.3573%2023.3575L79.3385%2025.996C78.1238%2026.6346%2076.7042%2025.6032%2076.9362%2024.2506L77.8947%2018.6621C77.9868%2018.125%2077.8087%2017.577%2077.4185%2017.1966L73.3582%2013.2388C72.3755%2012.2809%2072.9178%2010.612%2074.2758%2010.4147L79.887%209.59931C80.4263%209.52095%2080.8925%209.18224%2081.1337%208.69358L83.6431%203.60896Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fg%3E%0A%3Cg%20filter%3D%22url(%23filter3_di_2884_10738)%22%3E%0A%3Cpath%20d%3D%22M116.76%203.60896C117.368%202.37837%20119.122%202.37837%20119.73%203.60895L122.239%208.69358C122.48%209.18224%20122.946%209.52095%20123.486%209.59931L129.097%2010.4147C130.455%2010.612%20130.997%2012.2809%20130.015%2013.2388L125.954%2017.1966C125.564%2017.577%20125.386%2018.125%20125.478%2018.6621L126.437%2024.2506C126.669%2025.6032%20125.249%2026.6346%20124.034%2025.996L119.015%2023.3575C118.533%2023.1039%20117.957%2023.1039%20117.475%2023.3575L112.456%2025.996C111.241%2026.6346%20109.821%2025.6032%20110.053%2024.2506L111.012%2018.6621C111.104%2018.125%20110.926%2017.577%20110.536%2017.1966L106.475%2013.2388C105.493%2012.2809%20106.035%2010.612%20107.393%2010.4147L113.004%209.59931C113.543%209.52095%20114.01%209.18224%20114.251%208.69358L116.76%203.60896Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fg%3E%0A%3Cg%20filter%3D%22url(%23filter4_di_2884_10738)%22%3E%0A%3Cpath%20d%3D%22M149.87%203.60896C150.477%202.37837%20152.232%202.37837%20152.839%203.60895L155.348%208.69358C155.59%209.18224%20156.056%209.52095%20156.595%209.59931L162.206%2010.4147C163.564%2010.612%20164.107%2012.2809%20163.124%2013.2388L159.064%2017.1966C158.673%2017.577%20158.495%2018.125%20158.587%2018.6621L159.546%2024.2506C159.778%2025.6032%20158.358%2026.6346%20157.144%2025.996L152.125%2023.3575C151.642%2023.1039%20151.066%2023.1039%20150.584%2023.3575L145.565%2025.996C144.35%2026.6346%20142.931%2025.6032%20143.163%2024.2506L144.121%2018.6621C144.213%2018.125%20144.035%2017.577%20143.645%2017.1966L139.585%2013.2388C138.602%2012.2809%20139.144%2010.612%20140.502%2010.4147L146.114%209.59931C146.653%209.52095%20147.119%209.18224%20147.36%208.69358L149.87%203.60896Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fg%3E%0A%3Cdefs%3E%0A%3Cfilter%20id%3D%22filter0_di_2884_10738%22%20x%3D%220.0100446%22%20y%3D%222.68604%22%20width%3D%2237.7846%22%20height%3D%2236.7494%22%20filterUnits%3D%22userSpaceOnUse%22%20color-interpolation-filters%3D%22sRGB%22%3E%0A%3CfeFlood%20flood-opacity%3D%220%22%20result%3D%22BackgroundImageFix%22%2F%3E%0A%3CfeColorMatrix%20in%3D%22SourceAlpha%22%20type%3D%22matrix%22%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200%22%20result%3D%22hardAlpha%22%2F%3E%0A%3CfeOffset%20dy%3D%226.62277%22%2F%3E%0A%3CfeGaussianBlur%20stdDeviation%3D%223.31138%22%2F%3E%0A%3CfeComposite%20in2%3D%22hardAlpha%22%20operator%3D%22out%22%2F%3E%0A%3CfeColorMatrix%20type%3D%22matrix%22%20values%3D%220%200%200%200%201%200%200%200%200%200.615686%200%200%200%200%200%200%200%200%200.24%200%22%2F%3E%0A%3CfeBlend%20mode%3D%22normal%22%20in2%3D%22BackgroundImageFix%22%20result%3D%22effect1_dropShadow_2884_10738%22%2F%3E%0A%3CfeBlend%20mode%3D%22normal%22%20in%3D%22SourceGraphic%22%20in2%3D%22effect1_dropShadow_2884_10738%22%20result%3D%22shape%22%2F%3E%0A%3CfeColorMatrix%20in%3D%22SourceAlpha%22%20type%3D%22matrix%22%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200%22%20result%3D%22hardAlpha%22%2F%3E%0A%3CfeOffset%20dx%3D%223.31138%22%20dy%3D%223.31138%22%2F%3E%0A%3CfeGaussianBlur%20stdDeviation%3D%223.31138%22%2F%3E%0A%3CfeComposite%20in2%3D%22hardAlpha%22%20operator%3D%22arithmetic%22%20k2%3D%22-1%22%20k3%3D%221%22%2F%3E%0A%3CfeColorMatrix%20type%3D%22matrix%22%20values%3D%220%200%200%200%201%200%200%200%200%201%200%200%200%200%201%200%200%200%200.4%200%22%2F%3E%0A%3CfeBlend%20mode%3D%22normal%22%20in2%3D%22shape%22%20result%3D%22effect2_innerShadow_2884_10738%22%2F%3E%0A%3C%2Ffilter%3E%0A%3Cfilter%20id%3D%22filter1_di_2884_10738%22%20x%3D%2233.1272%22%20y%3D%222.68604%22%20width%3D%2237.7846%22%20height%3D%2236.7494%22%20filterUnits%3D%22userSpaceOnUse%22%20color-interpolation-filters%3D%22sRGB%22%3E%0A%3CfeFlood%20flood-opacity%3D%220%22%20result%3D%22BackgroundImageFix%22%2F%3E%0A%3CfeColorMatrix%20in%3D%22SourceAlpha%22%20type%3D%22matrix%22%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200%22%20result%3D%22hardAlpha%22%2F%3E%0A%3CfeOffset%20dy%3D%226.62277%22%2F%3E%0A%3CfeGaussianBlur%20stdDeviation%3D%223.31138%22%2F%3E%0A%3CfeComposite%20in2%3D%22hardAlpha%22%20operator%3D%22out%22%2F%3E%0A%3CfeColorMatrix%20type%3D%22matrix%22%20values%3D%220%200%200%200%201%200%200%200%200%200.615686%200%200%200%200%200%200%200%200%200.24%200%22%2F%3E%0A%3CfeBlend%20mode%3D%22normal%22%20in2%3D%22BackgroundImageFix%22%20result%3D%22effect1_dropShadow_2884_10738%22%2F%3E%0A%3CfeBlend%20mode%3D%22normal%22%20in%3D%22SourceGraphic%22%20in2%3D%22effect1_dropShadow_2884_10738%22%20result%3D%22shape%22%2F%3E%0A%3CfeColorMatrix%20in%3D%22SourceAlpha%22%20type%3D%22matrix%22%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200%22%20result%3D%22hardAlpha%22%2F%3E%0A%3CfeOffset%20dx%3D%223.31138%22%20dy%3D%223.31138%22%2F%3E%0A%3CfeGaussianBlur%20stdDeviation%3D%223.31138%22%2F%3E%0A%3CfeComposite%20in2%3D%22hardAlpha%22%20operator%3D%22arithmetic%22%20k2%3D%22-1%22%20k3%3D%221%22%2F%3E%0A%3CfeColorMatrix%20type%3D%22matrix%22%20values%3D%220%200%200%200%201%200%200%200%200%201%200%200%200%200%201%200%200%200%200.4%200%22%2F%3E%0A%3CfeBlend%20mode%3D%22normal%22%20in2%3D%22shape%22%20result%3D%22effect2_innerShadow_2884_10738%22%2F%3E%0A%3C%2Ffilter%3E%0A%3Cfilter%20id%3D%22filter2_di_2884_10738%22%20x%3D%2266.2366%22%20y%3D%222.68604%22%20width%3D%2237.7846%22%20height%3D%2236.7494%22%20filterUnits%3D%22userSpaceOnUse%22%20color-interpolation-filters%3D%22sRGB%22%3E%0A%3CfeFlood%20flood-opacity%3D%220%22%20result%3D%22BackgroundImageFix%22%2F%3E%0A%3CfeColorMatrix%20in%3D%22SourceAlpha%22%20type%3D%22matrix%22%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200%22%20result%3D%22hardAlpha%22%2F%3E%0A%3CfeOffset%20dy%3D%226.62277%22%2F%3E%0A%3CfeGaussianBlur%20stdDeviation%3D%223.31138%22%2F%3E%0A%3CfeComposite%20in2%3D%22hardAlpha%22%20operator%3D%22out%22%2F%3E%0A%3CfeColorMatrix%20type%3D%22matrix%22%20values%3D%220%200%200%200%201%200%200%200%200%200.615686%200%200%200%200%200%200%200%200%200.24%200%22%2F%3E%0A%3CfeBlend%20mode%3D%22normal%22%20in2%3D%22BackgroundImageFix%22%20result%3D%22effect1_dropShadow_2884_10738%22%2F%3E%0A%3CfeBlend%20mode%3D%22normal%22%20in%3D%22SourceGraphic%22%20in2%3D%22effect1_dropShadow_2884_10738%22%20result%3D%22shape%22%2F%3E%0A%3CfeColorMatrix%20in%3D%22SourceAlpha%22%20type%3D%22matrix%22%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200%22%20result%3D%22hardAlpha%22%2F%3E%0A%3CfeOffset%20dx%3D%223.31138%22%20dy%3D%223.31138%22%2F%3E%0A%3CfeGaussianBlur%20stdDeviation%3D%223.31138%22%2F%3E%0A%3CfeComposite%20in2%3D%22hardAlpha%22%20operator%3D%22arithmetic%22%20k2%3D%22-1%22%20k3%3D%221%22%2F%3E%0A%3CfeColorMatrix%20type%3D%22matrix%22%20values%3D%220%200%200%200%201%200%200%200%200%201%200%200%200%200%201%200%200%200%200.4%200%22%2F%3E%0A%3CfeBlend%20mode%3D%22normal%22%20in2%3D%22shape%22%20result%3D%22effect2_innerShadow_2884_10738%22%2F%3E%0A%3C%2Ffilter%3E%0A%3Cfilter%20id%3D%22filter3_di_2884_10738%22%20x%3D%2299.3538%22%20y%3D%222.68604%22%20width%3D%2237.7846%22%20height%3D%2236.7494%22%20filterUnits%3D%22userSpaceOnUse%22%20color-interpolation-filters%3D%22sRGB%22%3E%0A%3CfeFlood%20flood-opacity%3D%220%22%20result%3D%22BackgroundImageFix%22%2F%3E%0A%3CfeColorMatrix%20in%3D%22SourceAlpha%22%20type%3D%22matrix%22%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200%22%20result%3D%22hardAlpha%22%2F%3E%0A%3CfeOffset%20dy%3D%226.62277%22%2F%3E%0A%3CfeGaussianBlur%20stdDeviation%3D%223.31138%22%2F%3E%0A%3CfeComposite%20in2%3D%22hardAlpha%22%20operator%3D%22out%22%2F%3E%0A%3CfeColorMatrix%20type%3D%22matrix%22%20values%3D%220%200%200%200%201%200%200%200%200%200.615686%200%200%200%200%200%200%200%200%200.24%200%22%2F%3E%0A%3CfeBlend%20mode%3D%22normal%22%20in2%3D%22BackgroundImageFix%22%20result%3D%22effect1_dropShadow_2884_10738%22%2F%3E%0A%3CfeBlend%20mode%3D%22normal%22%20in%3D%22SourceGraphic%22%20in2%3D%22effect1_dropShadow_2884_10738%22%20result%3D%22shape%22%2F%3E%0A%3CfeColorMatrix%20in%3D%22SourceAlpha%22%20type%3D%22matrix%22%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200%22%20result%3D%22hardAlpha%22%2F%3E%0A%3CfeOffset%20dx%3D%223.31138%22%20dy%3D%223.31138%22%2F%3E%0A%3CfeGaussianBlur%20stdDeviation%3D%223.31138%22%2F%3E%0A%3CfeComposite%20in2%3D%22hardAlpha%22%20operator%3D%22arithmetic%22%20k2%3D%22-1%22%20k3%3D%221%22%2F%3E%0A%3CfeColorMatrix%20type%3D%22matrix%22%20values%3D%220%200%200%200%201%200%200%200%200%201%200%200%200%200%201%200%200%200%200.4%200%22%2F%3E%0A%3CfeBlend%20mode%3D%22normal%22%20in2%3D%22shape%22%20result%3D%22effect2_innerShadow_2884_10738%22%2F%3E%0A%3C%2Ffilter%3E%0A%3Cfilter%20id%3D%22filter4_di_2884_10738%22%20x%3D%22132.463%22%20y%3D%222.68604%22%20width%3D%2237.7846%22%20height%3D%2236.7494%22%20filterUnits%3D%22userSpaceOnUse%22%20color-interpolation-filters%3D%22sRGB%22%3E%0A%3CfeFlood%20flood-opacity%3D%220%22%20result%3D%22BackgroundImageFix%22%2F%3E%0A%3CfeColorMatrix%20in%3D%22SourceAlpha%22%20type%3D%22matrix%22%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200%22%20result%3D%22hardAlpha%22%2F%3E%0A%3CfeOffset%20dy%3D%226.62277%22%2F%3E%0A%3CfeGaussianBlur%20stdDeviation%3D%223.31138%22%2F%3E%0A%3CfeComposite%20in2%3D%22hardAlpha%22%20operator%3D%22out%22%2F%3E%0A%3CfeColorMatrix%20type%3D%22matrix%22%20values%3D%220%200%200%200%201%200%200%200%200%200.615686%200%200%200%200%200%200%200%200%200.24%200%22%2F%3E%0A%3CfeBlend%20mode%3D%22normal%22%20in2%3D%22BackgroundImageFix%22%20result%3D%22effect1_dropShadow_2884_10738%22%2F%3E%0A%3CfeBlend%20mode%3D%22normal%22%20in%3D%22SourceGraphic%22%20in2%3D%22effect1_dropShadow_2884_10738%22%20result%3D%22shape%22%2F%3E%0A%3CfeColorMatrix%20in%3D%22SourceAlpha%22%20type%3D%22matrix%22%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200%22%20result%3D%22hardAlpha%22%2F%3E%0A%3CfeOffset%20dx%3D%223.31138%22%20dy%3D%223.31138%22%2F%3E%0A%3CfeGaussianBlur%20stdDeviation%3D%223.31138%22%2F%3E%0A%3CfeComposite%20in2%3D%22hardAlpha%22%20operator%3D%22arithmetic%22%20k2%3D%22-1%22%20k3%3D%221%22%2F%3E%0A%3CfeColorMatrix%20type%3D%22matrix%22%20values%3D%220%200%200%200%201%200%200%200%200%201%200%200%200%200%201%200%200%200%200.4%200%22%2F%3E%0A%3CfeBlend%20mode%3D%22normal%22%20in2%3D%22shape%22%20result%3D%22effect2_innerShadow_2884_10738%22%2F%3E%0A%3C%2Ffilter%3E%0A%3C%2Fdefs%3E%0A%3C%2Fsvg%3E"
                      />
                      <_Builtin.Block
                        className={_utils.cx(_styles, "progress_rating-text")}
                        tag="div"
                      >
                        {"4.8/5"}
                      </_Builtin.Block>
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "text-color-opacity")}
                      tag="div"
                    >
                      {"Satisfaction stagiaires"}
                    </_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "progress_grid-list")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "progress_grid-item")}
                  id={_utils.cx(
                    _styles,
                    "w-node-_26a9064a-3dd9-9d7f-1bb4-299287981b19-87981ae9"
                  )}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "progress_grid-icon_wrapper")}
                    tag="div"
                  >
                    <_Builtin.HtmlEmbed
                      className={_utils.cx(_styles, "icon-embed-custom-19")}
                      value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%2032%2033%22%20fill%3D%22none%22%20preserveAspectRatio%3D%22xMidYMid%20meet%22%20aria-hidden%3D%22true%22%20role%3D%22img%22%3E%0A%3Cpath%20d%3D%22M29.3307%2028.502V25.8353C29.3307%2023.3502%2027.631%2021.262%2025.3307%2020.67M20.6641%204.88963C22.6186%205.68081%2023.9974%207.59703%2023.9974%209.83529C23.9974%2012.0735%2022.6186%2013.9898%2020.6641%2014.7809M22.6641%2028.502C22.6641%2026.0169%2022.6641%2024.7744%2022.2581%2023.7943C21.7168%2022.4875%2020.6785%2021.4492%2019.3717%2020.9079C18.3916%2020.502%2017.1491%2020.502%2014.6641%2020.502H10.6641C8.17904%2020.502%206.93653%2020.502%205.95642%2020.9079C4.6496%2021.4492%203.61134%2022.4875%203.07004%2023.7943C2.66406%2024.7744%202.66406%2026.0169%202.66406%2028.502M17.9974%209.83529C17.9974%2012.7808%2015.6096%2015.1686%2012.6641%2015.1686C9.71854%2015.1686%207.33073%2012.7808%207.33073%209.83529C7.33073%206.88977%209.71854%204.50195%2012.6641%204.50195C15.6096%204.50195%2017.9974%206.88977%2017.9974%209.83529Z%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%3C%2Fsvg%3E"
                    />
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(
                      _styles,
                      "margin-top",
                      "margin-medium"
                    )}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "progress_item-content")}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(
                          _styles,
                          "heading-style-h3",
                          "text-weight-medium",
                          "text-color-8"
                        )}
                        tag="div"
                      >
                        {"Stage en Équipe"}
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(
                          _styles,
                          "text-size-xregular",
                          "text-color-darkblue"
                        )}
                        tag="div"
                      >
                        {
                          "Intégrez une équipe française et découvrez les codes du travail collaboratif à la française"
                        }
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(_styles, "progress-date")}
                        tag="div"
                      >
                        <_Builtin.HtmlEmbed
                          className={_utils.cx(_styles, "icon-embed-custom-20")}
                          value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%20preserveAspectRatio%3D%22xMidYMid%20meet%22%20aria-hidden%3D%22true%22%20role%3D%22img%22%3E%0A%3Cg%20clip-path%3D%22url(%23clip0_2884_10754)%22%3E%0A%3Cpath%20d%3D%22M17.5%208.33512H2.5M13.3333%201.66846V5.00179M6.66667%201.66846V5.00179M6.5%2018.3351H13.5C14.9001%2018.3351%2015.6002%2018.3351%2016.135%2018.0626C16.6054%2017.823%2016.9878%2017.4405%2017.2275%2016.9701C17.5%2016.4353%2017.5%2015.7353%2017.5%2014.3351V7.33512C17.5%205.93499%2017.5%205.23493%2017.2275%204.70015C16.9878%204.22974%2016.6054%203.84729%2016.135%203.60761C15.6002%203.33512%2014.9001%203.33512%2013.5%203.33512H6.5C5.09987%203.33512%204.3998%203.33512%203.86502%203.60761C3.39462%203.84729%203.01217%204.22974%202.77248%204.70015C2.5%205.23493%202.5%205.93499%202.5%207.33512V14.3351C2.5%2015.7353%202.5%2016.4353%202.77248%2016.9701C3.01217%2017.4405%203.39462%2017.823%203.86502%2018.0626C4.3998%2018.3351%205.09987%2018.3351%206.5%2018.3351Z%22%20stroke%3D%22%23002395%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%3C%2Fg%3E%0A%3Cdefs%3E%0A%3CclipPath%20id%3D%22clip0_2884_10754%22%3E%0A%3Crect%20width%3D%2220%22%20height%3D%2220%22%20fill%3D%22white%22%20transform%3D%22translate(0%200.00195312)%22%2F%3E%0A%3C%2FclipPath%3E%0A%3C%2Fdefs%3E%0A%3C%2Fsvg%3E"
                        />
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "text-weight-medium",
                            "text-color-7"
                          )}
                          tag="div"
                        >
                          {"Jeudi 30 Mai"}
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(_styles, "progress-location")}
                        tag="div"
                      >
                        <_Builtin.HtmlEmbed
                          className={_utils.cx(_styles, "icon-embed-custom-20")}
                          value="%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cg%20clip-path%3D%22url(%23clip0_2884_10757)%22%3E%0A%3Cpath%20d%3D%22M10.0026%2010.8351C11.3833%2010.8351%2012.5026%209.71584%2012.5026%208.33512C12.5026%206.95441%2011.3833%205.83512%2010.0026%205.83512C8.62189%205.83512%207.5026%206.95441%207.5026%208.33512C7.5026%209.71584%208.62189%2010.8351%2010.0026%2010.8351Z%22%20stroke%3D%22%23002395%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%3Cpath%20d%3D%22M10.0026%2018.3351C13.3359%2015.0018%2016.6693%2012.017%2016.6693%208.33512C16.6693%204.65323%2013.6845%201.66846%2010.0026%201.66846C6.32071%201.66846%203.33594%204.65323%203.33594%208.33512C3.33594%2012.017%206.66927%2015.0018%2010.0026%2018.3351Z%22%20stroke%3D%22%23002395%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%3C%2Fg%3E%0A%3Cdefs%3E%0A%3CclipPath%20id%3D%22clip0_2884_10757%22%3E%0A%3Crect%20width%3D%2220%22%20height%3D%2220%22%20fill%3D%22white%22%20transform%3D%22translate(0%200.00195312)%22%2F%3E%0A%3C%2FclipPath%3E%0A%3C%2Fdefs%3E%0A%3C%2Fsvg%3E"
                        />
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "text-weight-medium",
                            "text-color-7"
                          )}
                          tag="div"
                        >
                          {"Toute la France"}
                        </_Builtin.Block>
                      </_Builtin.Block>
                    </_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "progress_grid-item")}
                  id={_utils.cx(
                    _styles,
                    "w-node-_26a9064a-3dd9-9d7f-1bb4-299287981b2a-87981ae9"
                  )}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "progress_grid-icon_wrapper")}
                    tag="div"
                  >
                    <_Builtin.HtmlEmbed
                      className={_utils.cx(_styles, "icon-embed-custom-19")}
                      value="%3Csvg%20width%3D%2232%22%20height%3D%2233%22%20viewBox%3D%220%200%2032%2033%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M17.3307%2015.1686H23.7307C25.2242%2015.1686%2025.9709%2015.1686%2026.5414%2015.4593C27.0431%2015.7149%2027.4511%2016.1229%2027.7067%2016.6246C27.9974%2017.1951%2027.9974%2017.9418%2027.9974%2019.4353V28.502M17.3307%2028.502V8.76862C17.3307%207.27515%2017.3307%206.52841%2017.0401%205.95798C16.7844%205.45621%2016.3765%205.04826%2015.8747%204.7926C15.3043%204.50195%2014.5575%204.50195%2013.0641%204.50195H8.26406C6.77059%204.50195%206.02385%204.50195%205.45342%204.7926C4.95166%205.04826%204.54371%205.45621%204.28805%205.95798C3.9974%206.52841%203.9974%207.27515%203.9974%208.76862V28.502M29.3307%2028.502H2.66406M8.66406%209.83529H12.6641M8.66406%2015.1686H12.6641M8.66406%2020.502H12.6641%22%20stroke%3D%22white%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%3C%2Fsvg%3E"
                    />
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(
                      _styles,
                      "margin-top",
                      "margin-medium"
                    )}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "progress_item-content")}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(
                          _styles,
                          "heading-style-h3",
                          "text-weight-medium",
                          "text-color-8"
                        )}
                        tag="div"
                      >
                        {"Stage Professionnel"}
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(
                          _styles,
                          "text-size-xregular",
                          "text-color-darkblue"
                        )}
                        tag="div"
                      >
                        {
                          "Développez vos compétences techniques tout en apprenant les subtilités culturelles du monde du travail"
                        }
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(_styles, "progress-date")}
                        tag="div"
                      >
                        <_Builtin.HtmlEmbed
                          className={_utils.cx(_styles, "icon-embed-custom-20")}
                          value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%20preserveAspectRatio%3D%22xMidYMid%20meet%22%20aria-hidden%3D%22true%22%20role%3D%22img%22%3E%0A%3Cg%20clip-path%3D%22url(%23clip0_2884_10754)%22%3E%0A%3Cpath%20d%3D%22M17.5%208.33512H2.5M13.3333%201.66846V5.00179M6.66667%201.66846V5.00179M6.5%2018.3351H13.5C14.9001%2018.3351%2015.6002%2018.3351%2016.135%2018.0626C16.6054%2017.823%2016.9878%2017.4405%2017.2275%2016.9701C17.5%2016.4353%2017.5%2015.7353%2017.5%2014.3351V7.33512C17.5%205.93499%2017.5%205.23493%2017.2275%204.70015C16.9878%204.22974%2016.6054%203.84729%2016.135%203.60761C15.6002%203.33512%2014.9001%203.33512%2013.5%203.33512H6.5C5.09987%203.33512%204.3998%203.33512%203.86502%203.60761C3.39462%203.84729%203.01217%204.22974%202.77248%204.70015C2.5%205.23493%202.5%205.93499%202.5%207.33512V14.3351C2.5%2015.7353%202.5%2016.4353%202.77248%2016.9701C3.01217%2017.4405%203.39462%2017.823%203.86502%2018.0626C4.3998%2018.3351%205.09987%2018.3351%206.5%2018.3351Z%22%20stroke%3D%22%23002395%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%3C%2Fg%3E%0A%3Cdefs%3E%0A%3CclipPath%20id%3D%22clip0_2884_10754%22%3E%0A%3Crect%20width%3D%2220%22%20height%3D%2220%22%20fill%3D%22white%22%20transform%3D%22translate(0%200.00195312)%22%2F%3E%0A%3C%2FclipPath%3E%0A%3C%2Fdefs%3E%0A%3C%2Fsvg%3E"
                        />
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "text-weight-medium",
                            "text-color-7"
                          )}
                          tag="div"
                        >
                          {"3 à 6 mois"}
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(_styles, "progress-location")}
                        tag="div"
                      >
                        <_Builtin.HtmlEmbed
                          className={_utils.cx(_styles, "icon-embed-custom-20")}
                          value="%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cg%20clip-path%3D%22url(%23clip0_2884_10757)%22%3E%0A%3Cpath%20d%3D%22M10.0026%2010.8351C11.3833%2010.8351%2012.5026%209.71584%2012.5026%208.33512C12.5026%206.95441%2011.3833%205.83512%2010.0026%205.83512C8.62189%205.83512%207.5026%206.95441%207.5026%208.33512C7.5026%209.71584%208.62189%2010.8351%2010.0026%2010.8351Z%22%20stroke%3D%22%23002395%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%3Cpath%20d%3D%22M10.0026%2018.3351C13.3359%2015.0018%2016.6693%2012.017%2016.6693%208.33512C16.6693%204.65323%2013.6845%201.66846%2010.0026%201.66846C6.32071%201.66846%203.33594%204.65323%203.33594%208.33512C3.33594%2012.017%206.66927%2015.0018%2010.0026%2018.3351Z%22%20stroke%3D%22%23002395%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%3C%2Fg%3E%0A%3Cdefs%3E%0A%3CclipPath%20id%3D%22clip0_2884_10757%22%3E%0A%3Crect%20width%3D%2220%22%20height%3D%2220%22%20fill%3D%22white%22%20transform%3D%22translate(0%200.00195312)%22%2F%3E%0A%3C%2FclipPath%3E%0A%3C%2Fdefs%3E%0A%3C%2Fsvg%3E"
                        />
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "text-weight-medium",
                            "text-color-7"
                          )}
                          tag="div"
                        >
                          {"Grandes villes"}
                        </_Builtin.Block>
                      </_Builtin.Block>
                    </_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "progress_grid-item")}
                  id={_utils.cx(
                    _styles,
                    "w-node-_26a9064a-3dd9-9d7f-1bb4-299287981b3b-87981ae9"
                  )}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "progress_grid-icon_wrapper")}
                    tag="div"
                  >
                    <_Builtin.HtmlEmbed
                      className={_utils.cx(_styles, "icon-embed-custom-19")}
                      value="%3Csvg%20width%3D%2232%22%20height%3D%2233%22%20viewBox%3D%220%200%2032%2033%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M22.6641%2019.835V15.8276C22.6641%2015.5883%2022.6641%2015.4687%2022.6276%2015.363C22.5954%2015.2696%2022.5428%2015.1845%2022.4737%2015.1139C22.3955%2015.0341%2022.2885%2014.9806%2022.0744%2014.8736L15.9974%2011.835M5.33073%2013.1684V22.2439C5.33073%2022.7397%205.33073%2022.9877%205.40809%2023.2048C5.47647%2023.3967%205.58793%2023.5704%205.7339%2023.7125C5.89902%2023.8733%206.12443%2023.9766%206.5752%2024.1832L15.1085%2028.0943C15.4355%2028.2442%2015.599%2028.3191%2015.7693%2028.3487C15.9202%2028.3749%2016.0746%2028.3749%2016.2255%2028.3487C16.3958%2028.3191%2016.5593%2028.2442%2016.8863%2028.0943L25.4196%2024.1832C25.8704%2023.9766%2026.0958%2023.8733%2026.2609%2023.7125C26.4069%2023.5704%2026.5183%2023.3967%2026.5867%2023.2048C26.6641%2022.9877%2026.6641%2022.7398%2026.6641%2022.2439V13.1684M2.66406%2011.835L15.5204%205.40689C15.6953%205.31944%2015.7827%205.27571%2015.8745%205.2585C15.9557%205.24326%2016.0391%205.24326%2016.1203%205.2585C16.2121%205.27571%2016.2995%205.31944%2016.4744%205.40689L29.3307%2011.835L16.4744%2018.2632C16.2995%2018.3507%2016.2121%2018.3944%2016.1203%2018.4116C16.0391%2018.4268%2015.9557%2018.4268%2015.8745%2018.4116C15.7827%2018.3944%2015.6953%2018.3507%2015.5204%2018.2632L2.66406%2011.835Z%22%20stroke%3D%22white%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%3C%2Fsvg%3E"
                    />
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(
                      _styles,
                      "margin-top",
                      "margin-medium"
                    )}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "progress_item-content")}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(
                          _styles,
                          "heading-style-h3",
                          "text-weight-medium",
                          "text-color-8"
                        )}
                        tag="div"
                      >
                        {"Stage Culturel"}
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(
                          _styles,
                          "text-size-xregular",
                          "text-color-darkblue"
                        )}
                        tag="div"
                      >
                        {
                          "Immersion complète dans la culture française : art, gastronomie, traditions et savoir-vivre"
                        }
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(_styles, "progress-date")}
                        tag="div"
                      >
                        <_Builtin.HtmlEmbed
                          className={_utils.cx(_styles, "icon-embed-custom-20")}
                          value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%20preserveAspectRatio%3D%22xMidYMid%20meet%22%20aria-hidden%3D%22true%22%20role%3D%22img%22%3E%0A%3Cg%20clip-path%3D%22url(%23clip0_2884_10754)%22%3E%0A%3Cpath%20d%3D%22M17.5%208.33512H2.5M13.3333%201.66846V5.00179M6.66667%201.66846V5.00179M6.5%2018.3351H13.5C14.9001%2018.3351%2015.6002%2018.3351%2016.135%2018.0626C16.6054%2017.823%2016.9878%2017.4405%2017.2275%2016.9701C17.5%2016.4353%2017.5%2015.7353%2017.5%2014.3351V7.33512C17.5%205.93499%2017.5%205.23493%2017.2275%204.70015C16.9878%204.22974%2016.6054%203.84729%2016.135%203.60761C15.6002%203.33512%2014.9001%203.33512%2013.5%203.33512H6.5C5.09987%203.33512%204.3998%203.33512%203.86502%203.60761C3.39462%203.84729%203.01217%204.22974%202.77248%204.70015C2.5%205.23493%202.5%205.93499%202.5%207.33512V14.3351C2.5%2015.7353%202.5%2016.4353%202.77248%2016.9701C3.01217%2017.4405%203.39462%2017.823%203.86502%2018.0626C4.3998%2018.3351%205.09987%2018.3351%206.5%2018.3351Z%22%20stroke%3D%22%23002395%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%3C%2Fg%3E%0A%3Cdefs%3E%0A%3CclipPath%20id%3D%22clip0_2884_10754%22%3E%0A%3Crect%20width%3D%2220%22%20height%3D%2220%22%20fill%3D%22white%22%20transform%3D%22translate(0%200.00195312)%22%2F%3E%0A%3C%2FclipPath%3E%0A%3C%2Fdefs%3E%0A%3C%2Fsvg%3E"
                        />
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "text-weight-medium",
                            "text-color-7"
                          )}
                          tag="div"
                        >
                          {"2 à 4 semaines"}
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(_styles, "progress-location")}
                        tag="div"
                      >
                        <_Builtin.HtmlEmbed
                          className={_utils.cx(_styles, "icon-embed-custom-20")}
                          value="%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cg%20clip-path%3D%22url(%23clip0_2884_10757)%22%3E%0A%3Cpath%20d%3D%22M10.0026%2010.8351C11.3833%2010.8351%2012.5026%209.71584%2012.5026%208.33512C12.5026%206.95441%2011.3833%205.83512%2010.0026%205.83512C8.62189%205.83512%207.5026%206.95441%207.5026%208.33512C7.5026%209.71584%208.62189%2010.8351%2010.0026%2010.8351Z%22%20stroke%3D%22%23002395%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%3Cpath%20d%3D%22M10.0026%2018.3351C13.3359%2015.0018%2016.6693%2012.017%2016.6693%208.33512C16.6693%204.65323%2013.6845%201.66846%2010.0026%201.66846C6.32071%201.66846%203.33594%204.65323%203.33594%208.33512C3.33594%2012.017%206.66927%2015.0018%2010.0026%2018.3351Z%22%20stroke%3D%22%23002395%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%3C%2Fg%3E%0A%3Cdefs%3E%0A%3CclipPath%20id%3D%22clip0_2884_10757%22%3E%0A%3Crect%20width%3D%2220%22%20height%3D%2220%22%20fill%3D%22white%22%20transform%3D%22translate(0%200.00195312)%22%2F%3E%0A%3C%2FclipPath%3E%0A%3C%2Fdefs%3E%0A%3C%2Fsvg%3E"
                        />
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "text-weight-medium",
                            "text-color-7"
                          )}
                          tag="div"
                        >
                          {"Régions françaises"}
                        </_Builtin.Block>
                      </_Builtin.Block>
                    </_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "progress-cta")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "heading-style-h2",
                    "is-secondary",
                    "text-color-alternate"
                  )}
                  tag="div"
                >
                  {"Prêt à vivre l'expérience française ?"}
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "spacer-xmedium")}
                  tag="div"
                />
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "text-size-xregular",
                    "text-color-11"
                  )}
                  tag="div"
                >
                  {"Rejoignez nos prochains stages d'intégration et "}
                  <br />
                  {"accélérez votre parcours d'intégration"}
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "margin-top", "margin-medium")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "button-group", "is-center")}
                    tag="div"
                  >
                    <_Builtin.Link
                      className={_utils.cx(
                        _styles,
                        "button",
                        "is-icon",
                        "background-color-alternate",
                        "is-text-blue"
                      )}
                      button={false}
                      block="inline"
                      options={{
                        href: "#",
                      }}
                    >
                      <_Builtin.Block tag="div">
                        {"Découvrir les stages"}
                      </_Builtin.Block>
                      <_Builtin.HtmlEmbed
                        className={_utils.cx(_styles, "icon-embed-custom-21")}
                        value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%2025%2024%22%20fill%3D%22none%22%20preserveAspectRatio%3D%22xMidYMid%20meet%22%20aria-hidden%3D%22true%22%20role%3D%22img%22%3E%0A%3Cpath%20d%3D%22M4.5%2012.002H20.5M20.5%2012.002L14.5%206.00195M20.5%2012.002L14.5%2018.002%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%3C%2Fsvg%3E"
                      />
                    </_Builtin.Link>
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Image
                  className={_utils.cx(_styles, "progress_background-vector")}
                  loading="lazy"
                  width="auto"
                  height="auto"
                  alt="Background Vector"
                  src="https://cdn.prod.website-files.com/67444b8dcde8d2a8775775ed/685eac98cfc032dc300fa015_progress%20vector%20left.png"
                />
                <_Builtin.Image
                  className={_utils.cx(
                    _styles,
                    "progress_background-vector",
                    "is-second"
                  )}
                  loading="lazy"
                  width="auto"
                  height="auto"
                  alt="Background Vector"
                  src="https://cdn.prod.website-files.com/67444b8dcde8d2a8775775ed/685eacc744fa1457f38d9102_progress%20vector%20right.png"
                />
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
