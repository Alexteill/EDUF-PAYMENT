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
                  <_Builtin.Block
                    className={_utils.cx(_styles, "gallery_image-wrapper")}
                    tag="div"
                  >
                    <_Builtin.Image
                      className={_utils.cx(_styles, "gallery_image")}
                      width="auto"
                      height="auto"
                      loading="lazy"
                      alt="Logo"
                      src="https://cdn.prod.website-files.com/67444b8dcde8d2a8775775ed/67464411c6a2ae07b0a20aae_gallery%201.svg"
                    />
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "gallery_image-wrapper")}
                    tag="div"
                  >
                    <_Builtin.Image
                      className={_utils.cx(_styles, "gallery_image")}
                      width="auto"
                      height="auto"
                      loading="lazy"
                      alt="Logo"
                      src="https://cdn.prod.website-files.com/67444b8dcde8d2a8775775ed/67464411e83134ffbfd505ff_gallery%202.svg"
                    />
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "gallery_image-wrapper")}
                    tag="div"
                  >
                    <_Builtin.Image
                      className={_utils.cx(_styles, "gallery_image")}
                      width="auto"
                      height="auto"
                      loading="lazy"
                      alt=""
                      src="https://cdn.prod.website-files.com/67444b8dcde8d2a8775775ed/67a0b50e900dcd50bf80e7f7_AF.png"
                    />
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "gallery_image-wrapper")}
                    tag="div"
                  >
                    <_Builtin.Image
                      className={_utils.cx(_styles, "gallery_image")}
                      width="auto"
                      height="auto"
                      loading="lazy"
                      alt="Logo"
                      src="https://cdn.prod.website-files.com/67444b8dcde8d2a8775775ed/67464411b8f98dcbd328c799_gallery%205.svg"
                    />
                  </_Builtin.Block>
                </_Builtin.Grid>
              </_Builtin.Grid>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
