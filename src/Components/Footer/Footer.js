import React, { useState } from "react";

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
            <span className={style.footerIconLabel}>טלפון: [04-8889810]</span>
          </li>
          <li className={style.contactListItem}>
            <img
              src={mail}
              alt="mail"
              className={`${style.borderIcon} ${style.footerIcon}`}
            />
            <span className={style.footerIconLabel}>
              דואר אלקטרוני: [Office@ibengineer.com]
            </span>
          </li>
          <li className={style.contactListItem}>
            <img src={map} alt="map" className={style.footerIcon} />
            <span className={style.footerIconLabel}>
              כתובת משרד: ואדי אלחאג' רח׳ נצרת, ישראל
            </span>
          </li>
        </ul>
      </div>
      <div className={style.containerTwo}>
        <TextInput
          className={style.formInput}
          value={formData.name}
          onChange={(e) => setFormData({ ...Footer, name: e.target.value })}
          placeHolder="שם"
        />
        <TextInput
          className={style.formInput}
          value={formData.email}
          onChange={(e) => setFormData({ ...Footer, email: e.target.value })}
          placeHolder="דואר אלקטרוני "
        />
        <TextInput
          className={style.formInput}
          value={formData.message}
          onChange={(e) => setFormData({ ...Footer, message: e.target.value })}
          placeHolder="הודעה"
        />
        <Button
          className={style.footerBtn}
          label="לשלוח"
          onClick={() => console.log("clicked")}
        />
      </div>
      <div className={style.containerThree}>
        <label className={style.containerThreeLabel}>
          עקבו אחרינו ברשתות החברתיות כדי להישאר מעודכנים בפרויקטים האחרונים
          שלנו:
        </label>
        <div className={style.iconContainer}>
          <img src={facebook} alt="facebook" className={style.mediaIcon} />
          <img src={instagram} alt="instagram" className={style.mediaIcon} />
          <img src={linkedIn} alt="facebook" className={style.mediaIcon} />
        </div>
      </div>
    </div>
  );
}

export default Footer;
