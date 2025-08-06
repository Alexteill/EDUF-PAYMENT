"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./HeroTcf.module.css";

export function HeroTcf({ as: _Component = _Builtin.Block }) {
  return (
    <_Component
      className={_utils.cx(_styles, "section_hero", "background-color-linear")}
      tag="div"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "padding-global")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "container-xxlarge")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "padding-section-large", "is-tcf")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "hero_component")}
              tag="div"
            >
              <_Builtin.Grid
                className={_utils.cx(_styles, "hero_content", "is-tcf")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "hero_content-left")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(
                      _styles,
                      "margin-bottom",
                      "margin-medium"
                    )}
                    tag="div"
                  >
                    <_Builtin.Heading
                      className={_utils.cx(
                        _styles,
                        "heading-style-h1",
                        "is-secondary"
                      )}
                      tag="h1"
                    >
                      {"Préparez le TCF en ligne, à votre rythme"}
                    </_Builtin.Heading>
                  </_Builtin.Block>
                  <_Builtin.Paragraph
                    className={_utils.cx(
                      _styles,
                      "text-size-xregular",
                      "text-color-darkblue"
                    )}
                  >
                    {
                      "Une préparation complète, interactive et efficace pour réussir votre test TCF depuis chez vous. Accessible 24h/24 sur tous vos appareils."
                    }
                  </_Builtin.Paragraph>
                  <_Builtin.Block
                    className={_utils.cx(
                      _styles,
                      "margin-top",
                      "margin-medium"
                    )}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "button-group")}
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
                        <_Builtin.HtmlEmbed
                          className={_utils.cx(_styles, "icon-embed-custom-52")}
                          value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%20preserveAspectRatio%3D%22xMidYMid%20meet%22%20aria-hidden%3D%22true%22%20role%3D%22img%22%3E%0A%3Cg%20clip-path%3D%22url(%23clip0_3193_13411)%22%3E%0A%3Cpath%20d%3D%22M7.4974%209.99996L9.16406%2011.6666L12.9141%207.91663M14.915%204.16538C15.0866%204.5804%2015.416%204.91029%2015.8308%205.08252L17.2851%205.68494C17.7001%205.85686%2018.0299%206.18662%2018.2018%206.60168C18.3737%207.01673%2018.3737%207.48308%2018.2018%207.89813L17.5998%209.35146C17.4278%209.7667%2017.4276%2010.2335%2017.6004%2010.6486L18.2013%2012.1015C18.2865%2012.307%2018.3304%2012.5274%2018.3304%2012.7499C18.3305%2012.9725%2018.2867%2013.1928%2018.2015%2013.3984C18.1163%2013.604%2017.9915%2013.7908%2017.8341%2013.9482C17.6768%2014.1055%2017.4899%2014.2303%2017.2843%2014.3154L15.831%2014.9173C15.416%2015.089%2015.0861%2015.4183%2014.9139%2015.8331L14.3115%2017.2875C14.1396%2017.7025%2013.8099%2018.0323%2013.3948%2018.2042C12.9798%2018.3761%2012.5134%2018.3761%2012.0984%2018.2042L10.6451%2017.6022C10.2301%2017.4307%209.76392%2017.4311%209.34913%2017.6032L7.89481%2018.2048C7.48%2018.3763%207.01407%2018.3761%206.59937%2018.2044C6.18467%2018.0326%205.85511%2017.7032%205.68307%2017.2886L5.0805%2015.8338C4.9089%2015.4188%204.57952%2015.0889%204.16477%2014.9166L2.71045%2014.3142C2.29559%2014.1424%201.96594%2013.8128%201.79396%2013.398C1.62199%2012.9832%201.62175%2012.5171%201.79332%2012.1021L2.39528%2010.6488C2.56677%2010.2337%202.56642%209.7675%202.39431%209.3527L1.79321%207.89728C1.70798%207.69171%201.6641%207.47136%201.66406%207.24882C1.66403%207.02628%201.70784%206.80592%201.793%206.60032C1.87816%206.39472%202.00299%206.20792%202.16037%206.05059C2.31775%205.89325%202.50458%205.76847%202.7102%205.68338L4.16348%205.08139C4.57812%204.90994%204.9078%204.58096%205.08015%204.16667L5.68255%202.7123C5.85446%202.29725%206.18421%201.96749%206.59925%201.79557C7.01429%201.62365%207.48062%201.62365%207.89566%201.79557L9.34893%202.39756C9.76399%202.56905%2010.2302%202.5687%2010.6449%202.39658L12.0999%201.7965C12.5149%201.62468%2012.9811%201.62471%2013.396%201.7966C13.811%201.96849%2014.1407%202.29815%2014.3126%202.7131L14.9152%204.1679L14.915%204.16538Z%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%3C%2Fg%3E%0A%3Cdefs%3E%0A%3CclipPath%20id%3D%22clip0_3193_13411%22%3E%0A%3Crect%20width%3D%2220%22%20height%3D%2220%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2FclipPath%3E%0A%3C%2Fdefs%3E%0A%3C%2Fsvg%3E"
                        />
                        <_Builtin.Block tag="div">
                          {"Je me forme"}
                        </_Builtin.Block>
                      </_Builtin.Link>
                      <_Builtin.Link
                        className={_utils.cx(
                          _styles,
                          "button",
                          "is-icon",
                          "is-border"
                        )}
                        button={false}
                        block="inline"
                        options={{
                          href: "#",
                        }}
                      >
                        <_Builtin.HtmlEmbed
                          className={_utils.cx(_styles, "icon-embed-custom-53")}
                          value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%20preserveAspectRatio%3D%22xMidYMid%20meet%22%20aria-hidden%3D%22true%22%20role%3D%22img%22%3E%0A%3Cpath%20d%3D%22M9.9974%2017.5L9.91402%2017.3749C9.33515%2016.5066%209.04571%2016.0725%208.66331%2015.7582C8.32478%2015.4799%207.9347%2015.2712%207.5154%2015.1438C7.04177%2015%206.51999%2015%205.47642%2015H4.33073C3.39731%2015%202.9306%2015%202.57408%2014.8183C2.26047%2014.6586%202.00551%2014.4036%201.84572%2014.09C1.66406%2013.7335%201.66406%2013.2668%201.66406%2012.3333V5.16667C1.66406%204.23325%201.66406%203.76654%201.84572%203.41002C2.00551%203.09641%202.26047%202.84144%202.57408%202.68166C2.9306%202.5%203.39731%202.5%204.33073%202.5H4.66406C6.5309%202.5%207.46433%202.5%208.17736%202.86331C8.80457%203.18289%209.31451%203.69282%209.63408%204.32003C9.9974%205.03307%209.9974%205.96649%209.9974%207.83333M9.9974%2017.5V7.83333M9.9974%2017.5L10.0808%2017.3749C10.6596%2016.5066%2010.9491%2016.0725%2011.3315%2015.7582C11.67%2015.4799%2012.0601%2015.2712%2012.4794%2015.1438C12.953%2015%2013.4748%2015%2014.5184%2015H15.6641C16.5975%2015%2017.0642%2015%2017.4207%2014.8183C17.7343%2014.6586%2017.9893%2014.4036%2018.1491%2014.09C18.3307%2013.7335%2018.3307%2013.2668%2018.3307%2012.3333V5.16667C18.3307%204.23325%2018.3307%203.76654%2018.1491%203.41002C17.9893%203.09641%2017.7343%202.84144%2017.4207%202.68166C17.0642%202.5%2016.5975%202.5%2015.6641%202.5H15.3307C13.4639%202.5%2012.5305%202.5%2011.8174%202.86331C11.1902%203.18289%2010.6803%203.69282%2010.3607%204.32003C9.9974%205.03307%209.9974%205.96649%209.9974%207.83333%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%3C%2Fsvg%3E"
                        />
                        <_Builtin.Block tag="div">
                          {"Voir le programme"}
                        </_Builtin.Block>
                      </_Builtin.Link>
                    </_Builtin.Block>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "spacer-xmedium")}
                    tag="div"
                  />
                  <_Builtin.Block
                    className={_utils.cx(_styles, "hero_content-left_bottom")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "hero_left-bottom_item")}
                      tag="div"
                    >
                      <_Builtin.HtmlEmbed
                        className={_utils.cx(_styles, "icon-embed-custom-64")}
                        value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%2018%2018%22%20fill%3D%22none%22%20preserveAspectRatio%3D%22xMidYMid%20meet%22%20aria-hidden%3D%22true%22%20role%3D%22img%22%3E%0A%3Cpath%20d%3D%22M8.46101%202.58993C8.63388%202.23972%208.72031%202.06462%208.83764%202.00867C8.93973%201.96%209.05834%201.96%209.16043%202.00867C9.27776%202.06462%209.3642%202.23972%209.53706%202.58993L11.1771%205.9124C11.2281%206.01579%2011.2536%206.06748%2011.2909%206.10762C11.3239%206.14316%2011.3635%206.17195%2011.4075%206.1924C11.4572%206.21551%2011.5142%206.22384%2011.6283%206.24052L15.2968%206.77672C15.6831%206.83318%2015.8762%206.86141%2015.9656%206.95577C16.0434%207.03786%2016.08%207.15066%2016.0652%207.26277C16.0481%207.39162%2015.9083%207.52782%2015.6286%207.80022L12.9751%2010.3848C12.8924%2010.4653%2012.851%2010.5056%2012.8243%2010.5535C12.8007%2010.596%2012.7856%2010.6426%2012.7797%2010.6908C12.7731%2010.7453%2012.7829%2010.8022%2012.8024%2010.916L13.4285%2014.5665C13.4945%2014.9516%2013.5275%2015.1441%2013.4655%2015.2583C13.4115%2015.3577%2013.3155%2015.4274%2013.2043%2015.448C13.0765%2015.4717%2012.9036%2015.3808%2012.5579%2015.199L9.27831%2013.4743C9.17612%2013.4206%209.12503%2013.3937%209.0712%2013.3832C9.02355%2013.3738%208.97453%2013.3738%208.92687%2013.3832C8.87304%2013.3937%208.82195%2013.4206%208.71977%2013.4743L5.44022%2015.199C5.09446%2015.3808%204.92158%2015.4717%204.79375%2015.448C4.68253%2015.4274%204.58657%2015.3577%204.53258%2015.2583C4.47052%2015.1441%204.50354%2014.9516%204.56958%2014.5665L5.19569%2010.916C5.21521%2010.8022%205.22497%2010.7453%205.21836%2010.6908C5.21252%2010.6426%205.19736%2010.596%205.17373%2010.5535C5.14704%2010.5056%205.10568%2010.4653%205.02296%2010.3848L2.36944%207.80022C2.08977%207.52782%201.94993%207.39162%201.93292%207.26277C1.91811%207.15066%201.95469%207.03786%202.03246%206.95577C2.12185%206.86141%202.315%206.83318%202.70131%206.77672L6.36976%206.24052C6.48384%206.22384%206.54088%206.21551%206.59056%206.1924C6.63455%206.17195%206.67414%206.14316%206.70716%206.10762C6.74445%206.06748%206.76997%206.01579%206.821%205.9124L8.46101%202.58993Z%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.2%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%3C%2Fsvg%3E"
                      />
                      <_Builtin.Block
                        className={_utils.cx(_styles, "text-size-small")}
                        tag="div"
                      >
                        {"4.9/5 (432 avis)"}
                      </_Builtin.Block>
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "hero_left-bottom_item")}
                      tag="div"
                    >
                      <_Builtin.HtmlEmbed
                        className={_utils.cx(_styles, "icon-embed-custom-64")}
                        value="%3Csvg%20width%3D%2218%22%20height%3D%2218%22%20viewBox%3D%220%200%2018%2018%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M12%202.60082C13.1113%203.15308%2013.875%204.29985%2013.875%205.625C13.875%206.95015%2013.1113%208.09692%2012%208.64918M13.5%2012.5748C14.6336%2013.0878%2015.6544%2013.9237%2016.5%2015M1.5%2015C2.95987%2013.1419%204.94188%2012%207.125%2012C9.30812%2012%2011.2901%2013.1419%2012.75%2015M10.5%205.625C10.5%207.48896%208.98896%209%207.125%209C5.26104%209%203.75%207.48896%203.75%205.625C3.75%203.76104%205.26104%202.25%207.125%202.25C8.98896%202.25%2010.5%203.76104%2010.5%205.625Z%22%20stroke%3D%22%23031E6C%22%20stroke-width%3D%221.2%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%3C%2Fsvg%3E"
                      />
                      <_Builtin.Block
                        className={_utils.cx(_styles, "text-size-small")}
                        tag="div"
                      >
                        {"+2,400 apprenants"}
                        <br />
                        {"accompagnés avec succès"}
                      </_Builtin.Block>
                    </_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "hero_image-wrapper")}
                  id={_utils.cx(
                    _styles,
                    "w-node-_5f4fc579-b951-d4f6-6009-ead22dabcf82-2dabcf60"
                  )}
                  tag="div"
                >
                  <_Builtin.Image
                    className={_utils.cx(_styles, "hero_image")}
                    width="716.5"
                    height="auto"
                    loading="eager"
                    alt="TCF Mockup"
                    src="https://cdn.prod.website-files.com/67444b8dcde8d2a8775775ed/686e39ab5f146486025f7fbf_Mockup.png"
                  />
                  <_Builtin.Block
                    className={_utils.cx(_styles, "hero_image-tagline")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "hero_image-tag-icon")}
                      tag="div"
                    >
                      <_Builtin.HtmlEmbed
                        className={_utils.cx(_styles, "icon-embed-custom-54")}
                        value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%2039%2039%22%20fill%3D%22none%22%20preserveAspectRatio%3D%22xMidYMid%20meet%22%20aria-hidden%3D%22true%22%20role%3D%22img%22%3E%0A%3Crect%20x%3D%220.625%22%20width%3D%2238%22%20height%3D%2239%22%20rx%3D%2219%22%20fill%3D%22white%22%2F%3E%0A%3Cpath%20d%3D%22M12.1224%2022.8333V15.5C12.1224%2014.5666%2012.1224%2014.0998%2012.3041%2013.7433C12.4638%2013.4297%2012.7188%2013.1748%2013.0324%2013.015C13.3889%2012.8333%2013.8556%2012.8333%2014.7891%2012.8333H24.4557C25.3892%2012.8333%2025.8559%2012.8333%2026.2124%2013.015C26.526%2013.1748%2026.781%2013.4297%2026.9407%2013.7433C27.1224%2014.0998%2027.1224%2014.5666%2027.1224%2015.5V22.8333H22.6747C22.4709%2022.8333%2022.3689%2022.8333%2022.273%2022.8563C22.188%2022.8768%2022.1067%2022.9104%2022.0322%2022.9561C21.9481%2023.0076%2021.876%2023.0797%2021.7319%2023.2238L21.6796%2023.2761C21.5355%2023.4202%2021.4634%2023.4923%2021.3793%2023.5438C21.3047%2023.5895%2021.2235%2023.6232%2021.1384%2023.6436C21.0425%2023.6666%2020.9406%2023.6666%2020.7368%2023.6666H18.508C18.3042%2023.6666%2018.2023%2023.6666%2018.1064%2023.6436C18.0213%2023.6232%2017.9401%2023.5895%2017.8655%2023.5438C17.7814%2023.4923%2017.7093%2023.4202%2017.5652%2023.2761L17.5129%2023.2238C17.3688%2023.0797%2017.2967%2023.0076%2017.2126%2022.9561C17.1381%2022.9104%2017.0568%2022.8768%2016.9718%2022.8563C16.8758%2022.8333%2016.7739%2022.8333%2016.5701%2022.8333H12.1224ZM12.1224%2022.8333C11.6622%2022.8333%2011.2891%2023.2064%2011.2891%2023.6666V23.9444C11.2891%2024.4611%2011.2891%2024.7194%2011.3459%2024.9313C11.5%2025.5065%2011.9492%2025.9557%2012.5244%2026.1099C12.7363%2026.1666%2012.9946%2026.1666%2013.5113%2026.1666H25.7335C26.2502%2026.1666%2026.5085%2026.1666%2026.7204%2026.1099C27.2956%2025.9557%2027.7448%2025.5065%2027.8989%2024.9313C27.9557%2024.7194%2027.9557%2024.4611%2027.9557%2023.9444C27.9557%2023.6861%2027.9557%2023.5569%2027.9273%2023.451C27.8503%2023.1634%2027.6257%2022.9388%2027.3381%2022.8617C27.2321%2022.8333%2027.1029%2022.8333%2026.8446%2022.8333H26.2891%22%20stroke%3D%22%23002395%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%3C%2Fsvg%3E"
                      />
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "hero_image-tag-content")}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(
                          _styles,
                          "text-size-xregular",
                          "text-weight-bold"
                        )}
                        tag="div"
                      >
                        {"Formation 100%"}
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(
                          _styles,
                          "text-size-small",
                          "text-weight-medium"
                        )}
                        tag="div"
                      >
                        {"en ligne"}
                      </_Builtin.Block>
                    </_Builtin.Block>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "tcf_image-bottom-content")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "tcf_content-top")}
                      tag="div"
                    >
                      <_Builtin.HtmlEmbed
                        className={_utils.cx(_styles, "icon-embed-custom-55")}
                        value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%2028%2028%22%20fill%3D%22none%22%20preserveAspectRatio%3D%22xMidYMid%20meet%22%20aria-hidden%3D%22true%22%20role%3D%22img%22%3E%0A%3Crect%20width%3D%2227.5508%22%20height%3D%2227.5508%22%20rx%3D%2213.7754%22%20fill%3D%22%23D1FADF%22%2F%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M19.6254%208.48337L11.4061%2016.4157L9.22497%2014.0854C8.82319%2013.7065%208.19182%2013.6836%207.73264%2014.005C7.28494%2014.3379%207.15866%2014.9234%207.43417%2015.394L10.0171%2019.5955C10.2696%2019.9858%2010.7058%2020.2269%2011.1994%2020.2269C11.6701%2020.2269%2012.1178%2019.9858%2012.3704%2019.5955C12.7836%2019.056%2020.67%209.65428%2020.67%209.65428C21.7032%208.59817%2020.4519%207.66833%2019.6254%208.4719V8.48337Z%22%20fill%3D%22%2312B76A%22%2F%3E%0A%3C%2Fsvg%3E"
                      />
                      <_Builtin.Block
                        className={_utils.cx(
                          _styles,
                          "text-size-medium",
                          "text-weight-medium",
                          "text-color-8"
                        )}
                        tag="div"
                      >
                        {"Inscription en "}
                        <_Builtin.Span
                          className={_utils.cx(_styles, "text-weight-bold")}
                        >
                          {"3 minutes"}
                        </_Builtin.Span>
                      </_Builtin.Block>
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "tcf_content-bottom")}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "tcf_content-list")}
                        tag="div"
                      >
                        <_Builtin.HtmlEmbed
                          className={_utils.cx(_styles, "icon-embed-xsmall-2")}
                          value="%3Csvg%20width%3D%2218%22%20height%3D%2218%22%20viewBox%3D%220%200%2018%2018%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Crect%20y%3D%220.181641%22%20width%3D%2217.6367%22%20height%3D%2217.6367%22%20rx%3D%228.81836%22%20fill%3D%22%23031E6C%22%2F%3E%0A%3Cpath%20d%3D%22M12.8822%205.94751L7.28595%2011.5438L4.74219%209.00002%22%20stroke%3D%22white%22%20stroke-width%3D%221.56012%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%3C%2Fsvg%3E"
                        />
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "text-weight-medium",
                            "text-color-blue",
                            "is-opacity70"
                          )}
                          tag="div"
                        >
                          {"Test de positionnement gratuit"}
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(_styles, "tcf_content-list")}
                        tag="div"
                      >
                        <_Builtin.HtmlEmbed
                          className={_utils.cx(_styles, "icon-embed-xsmall-2")}
                          value="%3Csvg%20width%3D%2218%22%20height%3D%2218%22%20viewBox%3D%220%200%2018%2018%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Crect%20y%3D%220.181641%22%20width%3D%2217.6367%22%20height%3D%2217.6367%22%20rx%3D%228.81836%22%20fill%3D%22%23031E6C%22%2F%3E%0A%3Cpath%20d%3D%22M12.8822%205.94751L7.28595%2011.5438L4.74219%209.00002%22%20stroke%3D%22white%22%20stroke-width%3D%221.56012%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%3C%2Fsvg%3E"
                        />
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "text-weight-medium",
                            "text-color-blue",
                            "is-opacity70"
                          )}
                          tag="div"
                        >
                          {"Contenu conforme France Éducation International"}
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(_styles, "tcf_content-list")}
                        tag="div"
                      >
                        <_Builtin.HtmlEmbed
                          className={_utils.cx(_styles, "icon-embed-xsmall-2")}
                          value="%3Csvg%20width%3D%2218%22%20height%3D%2218%22%20viewBox%3D%220%200%2018%2018%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Crect%20y%3D%220.181641%22%20width%3D%2217.6367%22%20height%3D%2217.6367%22%20rx%3D%228.81836%22%20fill%3D%22%23031E6C%22%2F%3E%0A%3Cpath%20d%3D%22M12.8822%205.94751L7.28595%2011.5438L4.74219%209.00002%22%20stroke%3D%22white%22%20stroke-width%3D%221.56012%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%3C%2Fsvg%3E"
                        />
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "text-weight-medium",
                            "text-color-blue",
                            "is-opacity70"
                          )}
                          tag="div"
                        >
                          {"Apprentissage flexible et personnalisé"}
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(_styles, "tcf_content-list")}
                        tag="div"
                      >
                        <_Builtin.HtmlEmbed
                          className={_utils.cx(_styles, "icon-embed-xsmall-2")}
                          value="%3Csvg%20width%3D%2218%22%20height%3D%2218%22%20viewBox%3D%220%200%2018%2018%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Crect%20y%3D%220.181641%22%20width%3D%2217.6367%22%20height%3D%2217.6367%22%20rx%3D%228.81836%22%20fill%3D%22%23031E6C%22%2F%3E%0A%3Cpath%20d%3D%22M12.8822%205.94751L7.28595%2011.5438L4.74219%209.00002%22%20stroke%3D%22white%22%20stroke-width%3D%221.56012%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%3C%2Fsvg%3E"
                        />
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "text-weight-medium",
                            "text-color-blue",
                            "is-opacity70"
                          )}
                          tag="div"
                        >
                          {"Support pédagogique inclus"}
                        </_Builtin.Block>
                      </_Builtin.Block>
                    </_Builtin.Block>
                  </_Builtin.Block>
                  <_Builtin.Image
                    className={_utils.cx(
                      _styles,
                      "tcf_image-vector",
                      "is-second",
                      "hide-mobile-portrait"
                    )}
                    loading="lazy"
                    width="auto"
                    height="auto"
                    alt="TCF Background Vector"
                    src="https://cdn.prod.website-files.com/67444b8dcde8d2a8775775ed/686e3c02c9941b4f0c0a4562_Vector.png"
                  />
                  <_Builtin.Image
                    className={_utils.cx(
                      _styles,
                      "tcf_image-vector",
                      "hide-mobile-portrait"
                    )}
                    loading="lazy"
                    width="auto"
                    height="auto"
                    alt="TCF Background Vector"
                    src="https://cdn.prod.website-files.com/67444b8dcde8d2a8775775ed/686e3c02c9941b4f0c0a4562_Vector.png"
                  />
                </_Builtin.Block>
              </_Builtin.Grid>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
