"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Footer.module.css";

export function Footer({ as: _Component = _Builtin.Block }) {
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
            className={_utils.cx(_styles, "padding-vertical", "padding-large")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "newsletter_component")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "newsletter_content")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "max-width-large")}
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
                        "heading-style-h3",
                        "newsletter-heading"
                      )}
                      tag="h2"
                    >
                      {"Rejoignez notre newsletter"}
                    </_Builtin.Heading>
                  </_Builtin.Block>
                  <_Builtin.Paragraph
                    className={_utils.cx(
                      _styles,
                      "text-size-xregular",
                      "text-color-alternate"
                    )}
                  >
                    {"Restez connecté à notre école, découvrez son actualité."}
                  </_Builtin.Paragraph>
                </_Builtin.Block>
                <_Builtin.FormWrapper
                  className={_utils.cx(_styles, "newsletter_form-block")}
                >
                  <_Builtin.FormForm
                    className={_utils.cx(_styles, "newsletter_form")}
                    name="email-form"
                    data-name="Email Form"
                    method="get"
                    id="email-form"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "signup-form-wrapper")}
                      tag="div"
                    >
                      <_Builtin.FormTextInput
                        className={_utils.cx(_styles, "form_input")}
                        name="email-4"
                        maxLength={256}
                        data-name="Email 4"
                        placeholder="Entrez votre email"
                        disabled={false}
                        type="email"
                        required={true}
                        autoFocus={false}
                        id="email-4"
                      />
                      <_Builtin.FormButton
                        className={_utils.cx(_styles, "button")}
                        type="submit"
                        value="S’inscrire"
                        data-wait="Please wait..."
                      />
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "text-size-tiny",
                        "text-color-alternate"
                      )}
                      tag="div"
                    >
                      {
                        "En vous inscrivant, vous acceptez notre politique de confidentialité."
                      }
                    </_Builtin.Block>
                  </_Builtin.FormForm>
                  <_Builtin.FormSuccessMessage
                    className={_utils.cx(
                      _styles,
                      "form_message-success-wrapper"
                    )}
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "form_message-success")}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "success-text")}
                        tag="div"
                      >
                        {"Thank you! Your submission has been received!"}
                      </_Builtin.Block>
                    </_Builtin.Block>
                  </_Builtin.FormSuccessMessage>
                  <_Builtin.FormErrorMessage
                    className={_utils.cx(_styles, "form_message-error-wrapper")}
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "form_message-error")}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "error-text")}
                        tag="div"
                      >
                        {
                          "Oops! Something went wrong while submitting the form."
                        }
                      </_Builtin.Block>
                    </_Builtin.Block>
                  </_Builtin.FormErrorMessage>
                </_Builtin.FormWrapper>
                <_Builtin.Image
                  className={_utils.cx(_styles, "newsletter-image")}
                  id={_utils.cx(
                    _styles,
                    "w-node-f272bc37-68c6-2f60-9fc1-0d1dbe39c562-be39c545"
                  )}
                  loading="lazy"
                  width="auto"
                  height="auto"
                  alt="Background Vector"
                  src="https://cdn.prod.website-files.com/67444b8dcde8d2a8775775ed/67464c5d4af3107b3d895e89_newsletter%20vector%20left.svg"
                />
                <_Builtin.Image
                  className={_utils.cx(
                    _styles,
                    "newsletter-image",
                    "is-center"
                  )}
                  id={_utils.cx(
                    _styles,
                    "w-node-f272bc37-68c6-2f60-9fc1-0d1dbe39c563-be39c545"
                  )}
                  loading="lazy"
                  width="auto"
                  height="auto"
                  alt="Background Vector"
                  src="https://cdn.prod.website-files.com/67444b8dcde8d2a8775775ed/67464c85fe3e49a0863c4b99_newsletter%20vector%20right.svg"
                />
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Grid
              className={_utils.cx(_styles, "footer_top-wrapper")}
              tag="div"
            >
              <_Builtin.NavbarBrand
                className={_utils.cx(_styles, "footer_logo-link")}
                id={_utils.cx(
                  _styles,
                  "w-node-f272bc37-68c6-2f60-9fc1-0d1dbe39c565-be39c545"
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
                    {"Formations civiques"}
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
                    {"Formation Titre de séjour"}
                  </_Builtin.Link>
                  <_Builtin.Link
                    className={_utils.cx(_styles, "footer_link")}
                    button={false}
                    block=""
                    options={{
                      href: "/formations?age=Adultes",
                    }}
                  >
                    {"Formation Nationalité"}
                  </_Builtin.Link>
                  <_Builtin.Link
                    className={_utils.cx(_styles, "footer_link")}
                    button={false}
                    block=""
                    options={{
                      href: "/formations?age=Professionnels et entreprises",
                    }}
                  >
                    {"Formation Intégration"}
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
                    {"Stages d'intégration"}
                  </_Builtin.Link>
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "footer_link-column")}
                id={_utils.cx(
                  _styles,
                  "w-node-_8037bb6e-b3f2-da0c-a193-c051cad47f2c-be39c545"
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
                    {"Formations linguistiques"}
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
                      href: "/formations?age=Eligible CPF",
                      preload: "none",
                    }}
                  >
                    {"Eligible CPF"}
                  </_Builtin.Link>
                  <_Builtin.Link
                    className={_utils.cx(_styles, "footer_link")}
                    button={false}
                    block=""
                    options={{
                      href: "#",
                    }}
                  >
                    {"E-learning TCF (IRN)"}
                  </_Builtin.Link>
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "footer_link-column")}
                id={_utils.cx(
                  _styles,
                  "w-node-f272bc37-68c6-2f60-9fc1-0d1dbe39c590-be39c545"
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
                    {"Examens & certifications"}
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
                    {"Examen du TCF (IRN)"}
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
                      href: "https://form.eduf.fr/formateurs",
                      target: "_blank",
                    }}
                  >
                    {"Devenir formateur"}
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
                    {"Ressources utiles"}
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
                      href: "https://www.tiktok.com/@eduf.fr",
                      target: "_blank",
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
                      href: "https://www.facebook.com/profile.php?id=61558034270987#",
                    }}
                  >
                    <_Builtin.Image
                      className={_utils.cx(_styles, "footer-icon")}
                      loading="lazy"
                      width="auto"
                      height="auto"
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
                      loading="lazy"
                      width="auto"
                      height="auto"
                      alt="Instagram "
                      src="https://cdn.prod.website-files.com/67444b8dcde8d2a8775775ed/6746e2608d26a2f02c821b10_instagram.svg"
                    />
                  </_Builtin.Link>
                  <_Builtin.Link
                    className={_utils.cx(_styles, "footer_social-link")}
                    button={false}
                    block="inline"
                    options={{
                      href: "https://www.linkedin.com/company/ecoledufrancais/",
                    }}
                  >
                    <_Builtin.Image
                      className={_utils.cx(_styles, "footer-icon")}
                      loading="lazy"
                      width="auto"
                      height="auto"
                      alt=""
                      src="https://cdn.prod.website-files.com/67444b8dcde8d2a8775775ed/674f67771fa80e5624507551_li.svg"
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
                "text-color-alternate"
              )}
            >
              {
                "Attention ! Nous comptons sur votre vigilance! EDUF vous rappelle d'être extrêmement vigilant. Pour utiliser votre Compte Personnel de Formation: un seul site officiel moncompteformation.gouv.fr. Vous pouvez également consulter notre guide d'utilisation. Ne communiquez JAMAIS vos identifiants (numéro de sécurité sociale ou mot de passe). Vous seul devez avoir accès à votre compte. Soyez attentifs aux tentatives d'arnaques (sollicitations répétées, parrainages, offres d'emploi trompeuses). Merci de votre vigilance."
              }
              <br />
              <_Builtin.Strong>
                <br />
                {"Ecole du Français - EDUF"}
              </_Builtin.Strong>
              {
                "Une école du groupe Hello Formation, Organisme de formation certifié Qualiopi, SAS au capital de 10 000€ enregistrée au RCS de Lyon sous le numéro 904 248 697"
              }
              <_Builtin.Span className={_utils.cx(_styles, "text-weight-bold")}>
                {"Siège social :"}
              </_Builtin.Span>
              {" 254 rue de Vendôme, 69003 Lyon.NDA 84691921569. "}
            </_Builtin.Paragraph>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
