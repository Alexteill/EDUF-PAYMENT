"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Gallery.module.css";

export function Gallery({ as: _Component = _Builtin.Block }) {
  return (
    <_Component className={_utils.cx(_styles, "section_gallery")} tag="section">
      <_Builtin.Block
        className={_utils.cx(_styles, "padding-global")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "container-large")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "padding-section-medium")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "gallery_component")}
              tag="div"
            >
              <_Builtin.Grid
                className={_utils.cx(_styles, "gallery_grid-list")}
                tag="div"
              >
                <_Builtin.Grid
                  className={_utils.cx(_styles, "gallery_row")}
                  tag="div"
                >
                  <_Builtin.NotSupported _atom="LightboxWrapper" />
                  <_Builtin.NotSupported _atom="LightboxWrapper" />
                  <_Builtin.NotSupported _atom="LightboxWrapper" />
                  <_Builtin.NotSupported _atom="LightboxWrapper" />
                </_Builtin.Grid>
              </_Builtin.Grid>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
