"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Cookie.module.css";

export function Cookie({ as: _Component = _Builtin.Block }) {
  return (
    <_Component
      className={_utils.cx(_styles, "fs-consent_component")}
      tag="div"
      fs-consent-element="internal-component"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "fs-consent_banner")}
        tag="div"
        fs-consent-element="banner"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "fs-consent_banner_wrapper")}
          tag="div"
        >
          <_Builtin.Paragraph
            className={_utils.cx(_styles, "fs-consent_banner_paragraph")}
          >
            {"By clicking "}
            <_Builtin.Strong fs-consent-element="internal-banner-text">
              {'"Ok, got it"'}
            </_Builtin.Strong>
            {
              ", you agree to the storing of cookies on your device to enhance site navigation, analyze site usage, and assist in our marketing efforts. View our "
            }
            <_Builtin.Link
              className={_utils.cx(_styles, "link")}
              button={false}
              block=""
              options={{
                href: "#",
              }}
            >
              {"Privacy Policy"}
            </_Builtin.Link>
            {" for more information."}
          </_Builtin.Paragraph>
          <_Builtin.Block
            className={_utils.cx(_styles, "fs-consent_banner_buttons")}
            tag="div"
            fs-consent-element="internal-buttons-wrapper"
          >
            <_Builtin.Link
              className={_utils.cx(_styles, "fs-consent_allow")}
              button={true}
              fs-consent-element="allow"
              block=""
              options={{
                href: "#",
              }}
            >
              {"Ok, got it"}
            </_Builtin.Link>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
