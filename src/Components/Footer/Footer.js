import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import mobile from "../../Asset/Icon/mobile.png";
import mail from "../../Asset/Icon/mail.png";
import map from "../../Asset/Icon/map.png";
import TextInput from "../Input/TextInput";
import Button from "../Button/Button";
import linkedIn from "../../Asset/Icon/LinkedIn.png";
import facebook from "../../Asset/Icon/facebook.png";
import instagram from "../../Asset/Icon/Instagram.png";

import style from "./footer.module.scss";

const initialFormData = {
  name: "",
  email: "",
  message: "",
};

function Footer() {
  const [formData, setFormData] = useState({ ...initialFormData });
  const { i18n, t } = useTranslation();

  return (
    <div className={style.footerContainer}>
      <div className={style.containerOne}>
        <ul className={style.contactInfoList}>
          <li className={style.contactListItem}>
            <img
              src={mobile}
              alt="phone"
              className={`${style.borderIcon} ${style.footerIcon}`}
            />
            <a
              href="tele:04-8889810"
              className={`${style.footerIconLabel} ${style.phoneLink}`}
            >
              {t("phoneLabel")} 04-8889810
            </a>
          </li>
          <li className={style.contactListItem}>
            <img
              src={mail}
              alt="mail"
              className={`${style.borderIcon} ${style.footerIcon}`}
            />
            <span className={style.footerIconLabel}>
              {i18n.language === "en" && t("emailLabel")}
              Office@ibengineer.com {i18n.language === "he" && t("officeLabel")}
            </span>
          </li>
          <li className={style.contactListItem}>
            <img src={map} alt="map" className={style.footerIcon} />
            <span className={style.footerIconLabel}>
              {i18n.language === "en" && t("officeLabel")}
              {t("officeAddressValue")}
              {i18n.language === "he" && t("officeLabel")}
            </span>
          </li>
        </ul>
      </div>
      <div className={style.containerTwo}>
        <TextInput
          className={style.formInput}
          value={formData.name}
          onChange={(e) => setFormData({ ...Footer, name: e.target.value })}
          placeHolder={`${t("nameLabel")}`}
        />
        <TextInput
          className={style.formInput}
          value={formData.email}
          onChange={(e) => setFormData({ ...Footer, email: e.target.value })}
          placeHolder={`${t("footerEmailLabel")}`}
        />
        <TextInput
          className={style.formInput}
          value={formData.message}
          onChange={(e) => setFormData({ ...Footer, message: e.target.value })}
          placeHolder={`${t("footerMessageLabel")}`}
        />
        <Button
          className={style.footerBtn}
          label={`${t("btnSendLabel")}`}
          onClick={() => console.log("clicked")}
        />
      </div>
      <div className={style.containerThree}>
        <label className={style.containerThreeLabel}>
          {t("socialMediaLabel")}
        </label>
        <div className={style.iconContainer}>
          <img
            onClick={() => {
              window.location.href =
                "https://www.facebook.com/profile.php?id=61550946452760";
            }}
            src={facebook}
            alt="facebook"
            className={style.mediaIcon}
          />
          <img src={instagram} alt="instagram" className={style.mediaIcon} />
          <img
            onClick={() => {
              window.location.href =
                "https://www.linkedin.com/company/ibeng/about/";
            }}
            src={linkedIn}
            alt="facebook"
            className={style.mediaIcon}
          />
        </div>
      </div>
    </div>
  );
}

export default Footer;
