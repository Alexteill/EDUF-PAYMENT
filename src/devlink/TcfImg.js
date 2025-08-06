"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./TcfImg.module.css";

export function TcfImg({ as: _Component = _Builtin.Block }) {
  return (
    <_Component className={_utils.cx(_styles, "section_tcf")} tag="div">
      <_Builtin.Block
        className={_utils.cx(_styles, "padding-global")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "container-large")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "tcf_image-wrapper")}
            tag="div"
          >
            <_Builtin.Image
              className={_utils.cx(_styles, "tcf-image")}
              loading="lazy"
              width="736.5"
              height="auto"
              alt="TCF Background Image"
              src="https://cdn.prod.website-files.com/67444b8dcde8d2a8775775ed/686e64571b5e5d1e1f54c1ce_tcf.png"
            />
            <_Builtin.Block
              className={_utils.cx(_styles, "tcf_image-blur")}
              tag="div"
            />
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "button-group",
                "is-center",
                "position-relative"
              )}
              tag="div"
            >
              <_Builtin.Link
                className={_utils.cx(_styles, "button", "is-icon")}
                button={false}
                block="inline"
                options={{
                  href: "#",
                }}
              >
                <_Builtin.Block tag="div">{"J'obtiens mon TCF"}</_Builtin.Block>
                <_Builtin.HtmlEmbed
                  className={_utils.cx(_styles, "icon-embed-custom-60")}
                  value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%2021%2020%22%20fill%3D%22none%22%20preserveAspectRatio%3D%22xMidYMid%20meet%22%20aria-hidden%3D%22true%22%20role%3D%22img%22%3E%0A%3Cpath%20d%3D%22M4.66406%209.99984H16.3307M16.3307%209.99984L10.4974%204.1665M16.3307%209.99984L10.4974%2015.8332%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%3C%2Fsvg%3E"
                />
              </_Builtin.Link>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
