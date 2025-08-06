"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./FooterV2.module.css";

export function FooterV2({ as: _Component = _Builtin.Block }) {
  return (
    <_Component className={_utils.cx(_styles, "footer_component")} tag="footer">
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
              "padding-custom3"
            )}
            tag="div"
          >
            <_Builtin.Grid
              className={_utils.cx(_styles, "footer_top-wrapper")}
              tag="div"
            >
              <_Builtin.NavbarBrand
                className={_utils.cx(_styles, "footer_logo-link")}
                id={_utils.cx(
                  _styles,
                  "w-node-_3e651c12-2475-6456-37ad-5fde86ee58a1-86ee589c"
                )}
                options={{
                  href: "#",
                }}
              >
                <_Builtin.Image
                  className={_utils.cx(_styles, "footer_logo")}
                  width="auto"
                  height="auto"
                  loading="lazy"
                  alt=""
                  src="https://cdn.prod.website-files.com/67444b8dcde8d2a8775775ed/67a1d5414e21e927ac843420_Group%2047868.svg"
                />
                <_Builtin.Block
                  className={_utils.cx(_styles, "spacer-xmedium")}
                  tag="div"
                />
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "text-size-small",
                    "text-weight-bold",
                    "text-color-alternate"
                  )}
                  tag="div"
                >
                  {"Copyright © EDUF"}
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "spacer-xmedium")}
                  tag="div"
                />
                <_Builtin.Paragraph
                  className={_utils.cx(
                    _styles,
                    "text-size-small",
                    "text-weight-medium",
                    "text-color-alternate",
                    "is-opacity60"
                  )}
                >
                  {
                    "Ecole du Français - EDUFUne école du groupe Hello FormationOrganisme de formation certifié QualiopiSAS au capital de 10 000€ enregistréeau RCS de Lyon sous le numéro 904 248 697"
                  }
                  <_Builtin.Span
                    className={_utils.cx(_styles, "text-weight-bold")}
                  >
                    {"Siège social :"}
                  </_Builtin.Span>
                  {" 254 rue de Vendôme, 69003 Lyon.NDA 84691921569."}
                </_Builtin.Paragraph>
              </_Builtin.NavbarBrand>
              <_Builtin.Block
                className={_utils.cx(_styles, "footer_link-column")}
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
                  <_Builtin.Block
                    className={_utils.cx(
                      _styles,
                      "text-weight-medium",
                      "text-color-alternate"
                    )}
                    tag="div"
                  >
                    {"Formations de français"}
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "footer_link-list")}
                  tag="div"
                >
                  <_Builtin.Link
                    className={_utils.cx(_styles, "footer_link")}
                    button={false}
                    block=""
                    options={{
                      href: "/formations?age=Jeunes et étudiants",
                    }}
                  >
                    {"Jeunes et étudiants"}
                  </_Builtin.Link>
                  <_Builtin.Link
                    className={_utils.cx(_styles, "footer_link")}
                    button={false}
                    block=""
                    options={{
                      href: "/formations?age=Adultes",
                    }}
                  >
                    {"Adultes"}
                  </_Builtin.Link>
                  <_Builtin.Link
                    className={_utils.cx(_styles, "footer_link")}
                    button={false}
                    block=""
                    options={{
                      href: "/formations?age=Professionnels et entreprises",
                    }}
                  >
                    {"Professionnels et entreprises"}
                  </_Builtin.Link>
                  <_Builtin.Link
                    className={_utils.cx(_styles, "footer_link")}
                    button={false}
                    block=""
                    options={{
                      href: "/formations?age=Eligible CPF",
                      preload: "none",
                    }}
                  >
                    {"Eligible CPF"}
                  </_Builtin.Link>
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "footer_link-column")}
                id={_utils.cx(
                  _styles,
                  "w-node-_3e651c12-2475-6456-37ad-5fde86ee58b9-86ee589c"
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
                  <_Builtin.Block
                    className={_utils.cx(
                      _styles,
                      "text-weight-medium",
                      "text-color-alternate"
                    )}
                    tag="div"
                  >
                    {"Examens de français"}
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "footer_link-list")}
                  tag="div"
                >
                  <_Builtin.Link
                    className={_utils.cx(_styles, "footer_link")}
                    button={false}
                    block=""
                    options={{
                      href: "#",
                    }}
                  >
                    {"Examens du DCL"}
                  </_Builtin.Link>
                  <_Builtin.Link
                    className={_utils.cx(_styles, "footer_link")}
                    button={false}
                    block=""
                    options={{
                      href: "#",
                    }}
                  >
                    {"Examens du TCF-TEF"}
                  </_Builtin.Link>
                  <_Builtin.Link
                    className={_utils.cx(_styles, "footer_link")}
                    button={false}
                    block=""
                    options={{
                      href: "#",
                    }}
                  >
                    {"Certification CLOE"}
                  </_Builtin.Link>
                  <_Builtin.Link
                    className={_utils.cx(_styles, "footer_link")}
                    button={false}
                    block=""
                    options={{
                      href: "#",
                    }}
                  >
                    {"Certification Le Robert"}
                  </_Builtin.Link>
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "footer_link-column")}
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
                  <_Builtin.Block
                    className={_utils.cx(
                      _styles,
                      "text-weight-medium",
                      "text-color-alternate"
                    )}
                    tag="div"
                  >
                    {"Découvrir"}
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "footer_link-list")}
                  tag="div"
                >
                  <_Builtin.Link
                    className={_utils.cx(_styles, "footer_link")}
                    button={false}
                    block=""
                    options={{
                      href: "#",
                    }}
                  >
                    {"Entreprises"}
                  </_Builtin.Link>
                  <_Builtin.Link
                    className={_utils.cx(_styles, "footer_link")}
                    button={false}
                    block=""
                    options={{
                      href: "#",
                    }}
                  >
                    {"Financements"}
                  </_Builtin.Link>
                  <_Builtin.Link
                    className={_utils.cx(_styles, "footer_link")}
                    button={false}
                    block=""
                    options={{
                      href: "#",
                    }}
                  >
                    {"Blog"}
                  </_Builtin.Link>
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Grid>
            <_Builtin.Block
              className={_utils.cx(_styles, "spacer-medium")}
              tag="div"
            />
            <_Builtin.Block
              className={_utils.cx(_styles, "line-divider")}
              tag="div"
            />
            <_Builtin.Block
              className={_utils.cx(_styles, "padding-top", "padding-medium")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "footer_bottom-wrapper")}
                tag="div"
              >
                <_Builtin.Grid
                  className={_utils.cx(_styles, "footer_social-icons")}
                  tag="div"
                >
                  <_Builtin.Link
                    className={_utils.cx(_styles, "footer_social-link")}
                    button={false}
                    block="inline"
                    options={{
                      href: "https://www.linkedin.com/company/ecoledufrancais/about/",
                    }}
                  >
                    <_Builtin.HtmlEmbed
                      className={_utils.cx(_styles, "footer-icon")}
                      value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20aria-hidden%3D%22true%22%20role%3D%22img%22%20class%3D%22iconify%20iconify--simple-icons%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20preserveAspectRatio%3D%22xMidYMid%20meet%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20fill%3D%22currentColor%22%20d%3D%22M12.525.02c1.31-.02%202.61-.01%203.91-.02c.08%201.53.63%203.09%201.75%204.17c1.12%201.11%202.7%201.62%204.24%201.79v4.03c-1.44-.05-2.89-.35-4.2-.97c-.57-.26-1.1-.59-1.62-.93c-.01%202.92.01%205.84-.02%208.75c-.08%201.4-.54%202.79-1.35%203.94c-1.31%201.92-3.58%203.17-5.91%203.21c-1.43.08-2.86-.31-4.08-1.03c-2.02-1.19-3.44-3.37-3.65-5.71c-.02-.5-.03-1-.01-1.49c.18-1.9%201.12-3.72%202.58-4.96c1.66-1.44%203.98-2.13%206.15-1.72c.02%201.48-.04%202.96-.04%204.44c-.99-.32-2.15-.23-3.02.37c-.63.41-1.11%201.04-1.36%201.75c-.21.51-.15%201.07-.14%201.61c.24%201.64%201.82%203.02%203.5%202.87c1.12-.01%202.19-.66%202.77-1.61c.19-.33.4-.67.41-1.06c.1-1.79.06-3.57.07-5.36c.01-4.03-.01-8.05.02-12.07%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E"
                    />
                  </_Builtin.Link>
                  <_Builtin.Link
                    className={_utils.cx(_styles, "footer_social-link")}
                    button={false}
                    block="inline"
                    options={{
                      href: "https://www.linkedin.com/company/ecoledufrancais/about/",
                    }}
                  >
                    <_Builtin.Image
                      className={_utils.cx(_styles, "footer-icon")}
                      width="auto"
                      height="auto"
                      loading="lazy"
                      alt=""
                      src="https://cdn.prod.website-files.com/67444b8dcde8d2a8775775ed/67af3e4f6cfffa46fb6affc8_facebook.svg"
                    />
                  </_Builtin.Link>
                  <_Builtin.Link
                    className={_utils.cx(_styles, "footer_social-link")}
                    button={false}
                    block="inline"
                    options={{
                      href: "https://www.instagram.com/eduf.fr/",
                    }}
                  >
                    <_Builtin.Image
                      className={_utils.cx(_styles, "footer-icon")}
                      width="auto"
                      height="auto"
                      loading="lazy"
                      alt="Instagram "
                      src="https://cdn.prod.website-files.com/67444b8dcde8d2a8775775ed/6746e2608d26a2f02c821b10_instagram.svg"
                    />
                  </_Builtin.Link>
                </_Builtin.Grid>
                <_Builtin.Grid
                  className={_utils.cx(_styles, "footer5_legal-list")}
                  tag="div"
                >
                  <_Builtin.Link
                    className={_utils.cx(_styles, "footer5_legal-link")}
                    button={false}
                    block=""
                    options={{
                      href: "https://cdn.prod.website-files.com/67444b8dcde8d2a8775775ed/67c73c94cd8d2c872feb8ceb_4.%20Qualiopi%20certificate_2164_OF_IN%20(4).pdf",
                      target: "_blank",
                    }}
                  >
                    {"Certificat QUALIOPI"}
                  </_Builtin.Link>
                  <_Builtin.Link
                    className={_utils.cx(_styles, "footer5_legal-link")}
                    button={false}
                    block=""
                    options={{
                      href: "#",
                    }}
                  >
                    {"Mentions légales"}
                  </_Builtin.Link>
                  <_Builtin.Link
                    className={_utils.cx(_styles, "footer5_legal-link")}
                    button={false}
                    block=""
                    options={{
                      href: "#",
                    }}
                  >
                    {"Données personnelles"}
                  </_Builtin.Link>
                  <_Builtin.Link
                    className={_utils.cx(_styles, "footer5_legal-link")}
                    button={false}
                    block=""
                    options={{
                      href: "#",
                    }}
                  >
                    {"Règlement interieur"}
                  </_Builtin.Link>
                  <_Builtin.Link
                    className={_utils.cx(
                      _styles,
                      "footer5_legal-link",
                      "border-none"
                    )}
                    button={false}
                    block=""
                    options={{
                      href: "#",
                    }}
                  >
                    {"CGV"}
                  </_Builtin.Link>
                </_Builtin.Grid>
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "spacer-medium")}
              tag="div"
            />
            <_Builtin.Paragraph
              className={_utils.cx(
                _styles,
                "text-size-small",
                "text-weight-medium",
                "text-color-alternate",
                "is-opacity60"
              )}
            >
              {
                "Attention ! Nous comptons sur votre vigilance! EDUF vous rappelle d'être extrêmement vigilant. Pour utiliser votre Compte Personnel de Formation: un seul site officiel moncompteformation.gouv.fr. Vous pouvez également consulter notre guide d'utilisation. Ne communiquez JAMAIS vos identifiants (numéro de sécurité sociale ou mot de passe). Vous seul devez avoir accès à votre compte. Soyez attentifs aux tentatives d'arnaques (sollicitations répétées, parrainages, offres d'emploi trompeuses). Merci de votre vigilance."
              }
            </_Builtin.Paragraph>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
