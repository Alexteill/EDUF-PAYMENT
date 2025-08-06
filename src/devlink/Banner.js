"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Banner.module.css";

export function Banner({ as: _Component = _Builtin.Block }) {
  return (
    <_Component
      className={_utils.cx(_styles, "navbar_top-component")}
      tag="div"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "navbar_wrapper-text")}
        id={_utils.cx(
          _styles,
          "w-node-b5375e32-dd0f-3b61-a6e6-77a1d68669c6-d68669c5"
        )}
        tag="div"
      >
        <_Builtin.Block tag="div">
          {"Notre équipe répond à vos questions"}
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "navbar_wrapper-infos")}
        id={_utils.cx(
          _styles,
          "w-node-b5375e32-dd0f-3b61-a6e6-77a1d68669c9-d68669c5"
        )}
        tag="div"
      >
        <_Builtin.HtmlEmbed
          className={_utils.cx(_styles, "icon-1x1-small")}
          value="%3Csvg%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewbox%3D%220%200%2018%2018%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cg%20clip-path%3D%22url(%23clip0_732_3432)%22%3E%0A%3Cpath%20d%3D%22M9%204.5V9L12%2010.5M16.5%209C16.5%2013.1421%2013.1421%2016.5%209%2016.5C4.85786%2016.5%201.5%2013.1421%201.5%209C1.5%204.85786%204.85786%201.5%209%201.5C13.1421%201.5%2016.5%204.85786%2016.5%209Z%22%20stroke%3D%22white%22%20stroke-opacity%3D%220.53%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%3C%2Fg%3E%0A%3Cdefs%3E%0A%3Cclippath%20id%3D%22clip0_732_3432%22%3E%0A%3Crect%20width%3D%2218%22%20height%3D%2218%22%20fill%3D%22white%22%2F%3E%0A%3C%2Fclippath%3E%0A%3C%2Fdefs%3E%0A%3C%2Fsvg%3E"
        />
        <_Builtin.Block tag="div">{"Lun-Sam de 10h à 18h"}</_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Link
        className={_utils.cx(_styles, "link-block-2")}
        id={_utils.cx(
          _styles,
          "w-node-b5375e32-dd0f-3b61-a6e6-77a1d68669d2-d68669c5"
        )}
        button={false}
        block="inline"
        options={{
          href: "mailto:contact@eduf.fr",
        }}
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "navbar_wrapper-infos")}
          id={_utils.cx(
            _styles,
            "w-node-b5375e32-dd0f-3b61-a6e6-77a1d68669d3-d68669c5"
          )}
          tag="div"
        >
          <_Builtin.HtmlEmbed
            className={_utils.cx(_styles, "icon-1x1-small")}
            value="%3Csvg%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewbox%3D%220%200%2018%2018%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M1.5%205.25L5.39538%207.84692C5.62011%207.99674%205.73248%208.07165%205.85405%208.12472C5.96195%208.17183%206.07502%208.20606%206.19093%208.22672C6.32152%208.25%206.45657%208.25%206.72666%208.25H11.2733C11.5434%208.25%2011.6785%208.25%2011.8091%208.22672C11.925%208.20606%2012.0381%208.17183%2012.146%208.12472C12.2675%208.07165%2012.3799%207.99674%2012.6046%207.84692L16.5%205.25M5.1%2015H12.9C14.1601%2015%2014.7902%2015%2015.2715%2014.7548C15.6948%2014.539%2016.039%2014.1948%2016.2548%2013.7715C16.5%2013.2902%2016.5%2012.6601%2016.5%2011.4V6.6C16.5%205.33988%2016.5%204.70982%2016.2548%204.22852C16.039%203.80516%2015.6948%203.46095%2015.2715%203.24524C14.7902%203%2014.1601%203%2012.9%203H5.1C3.83988%203%203.20982%203%202.72852%203.24524C2.30516%203.46095%201.96095%203.80516%201.74524%204.22852C1.5%204.70982%201.5%205.33988%201.5%206.6V11.4C1.5%2012.6601%201.5%2013.2902%201.74524%2013.7715C1.96095%2014.1948%202.30516%2014.539%202.72852%2014.7548C3.20982%2015%203.83988%2015%205.1%2015Z%22%20stroke%3D%22white%22%20stroke-opacity%3D%220.53%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%3C%2Fsvg%3E"
          />
          <_Builtin.Block tag="div">{"contact@eduf.fr"}</_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Link>
    </_Component>
  );
}
