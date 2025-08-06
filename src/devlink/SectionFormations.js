"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./SectionFormations.module.css";

export function SectionFormations({ as: _Component = _Builtin.Block }) {
  return (
    <_Component className={_utils.cx(_styles, "section_formations")} tag="div">
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
              className={_utils.cx(_styles, "formations_layout")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "formations_layout-content")}
                id={_utils.cx(
                  _styles,
                  "w-node-_3c10cd92-2e46-8585-8121-057ac4418e81-c4418e7c"
                )}
                tag="div"
              >
                <_Builtin.Heading
                  className={_utils.cx(_styles, "heading-style-h2", "is-third")}
                  tag="h2"
                >
                  {"Prêt(e) à "}
                  <br />
                  {"démarrer votre formation ?"}
                </_Builtin.Heading>
                <_Builtin.Block
                  className={_utils.cx(_styles, "formation_image-flag")}
                  tag="div"
                />
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "text-size-medium",
                    "text-weight-medium",
                    "text-color-alternate"
                  )}
                  tag="div"
                >
                  {"Rejoignez les 3,200+ personnes qui ont réussi leur "}
                  <br />
                  {"intégration en France grâce à nos formations."}
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Link
                className={_utils.cx(
                  _styles,
                  "button",
                  "is-icon",
                  "background-color-alternate",
                  "is-text-blue"
                )}
                id={_utils.cx(
                  _styles,
                  "w-node-_3c10cd92-2e46-8585-8121-057ac4418e8b-c4418e7c"
                )}
                button={false}
                block="inline"
                options={{
                  href: "#",
                }}
              >
                <_Builtin.Block tag="div">
                  {"Voir toutes les formations"}
                </_Builtin.Block>
                <_Builtin.HtmlEmbed
                  className={_utils.cx(_styles, "icon-embed-xsmall")}
                  value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20preserveAspectRatio%3D%22xMidYMid%20meet%22%20aria-hidden%3D%22true%22%20role%3D%22img%22%3E%0A%3Cpath%20d%3D%22M4%2012H20M20%2012L14%206M20%2012L14%2018%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%3C%2Fsvg%3E"
                />
              </_Builtin.Link>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "formations_background-overlay")}
        tag="div"
      />
      <_Builtin.Image
        className={_utils.cx(_styles, "formations_background-vector")}
        loading="lazy"
        width="auto"
        height="auto"
        alt="Background Vector"
        src="https://cdn.prod.website-files.com/67444b8dcde8d2a8775775ed/685e81a68a65aa9d79570b7f_Vector.png"
      />
    </_Component>
  );
}
