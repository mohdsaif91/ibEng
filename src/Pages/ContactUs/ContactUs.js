import React, { useState } from "react";

import TextInput from "../../Components/Input/TextInput";
import MailIcon from "../../Asset/Icon/mainIcon.png";
import linkedIn from "../../Asset/Icon/LinkedIn.png";
import facebook from "../../Asset/Icon/facebook.png";
import instagram from "../../Asset/Icon/Instagram.png";
import mobile from "../../Asset/Icon/mobile.png";
import mail from "../../Asset/Icon/mail.png";
import map from "../../Asset/Icon/map.png";
import cityBuldg from "../../Asset/Img/City Buildings.png";

import style from "./contactUs.module.scss";

const initialFormData = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

function ContactUs() {
  const [formData, setFormData] = useState({ ...initialFormData });
  const [contactForm, setContactForm] = useState(false);
  return (
    <div className={style.contactUsContainer}>
      {contactForm ? (
        <div className={style.outerContainer}>
          <div className={style.blackLine}></div>
          <div className={style.contactForm}>
            <div className={style.formContainer}>
              <div className={style.headingContainer}>
                <div className={style.actualHeading}>
                  <h1 className={style.heading}>Contact</h1>
                  <div className={style.underline} />
                </div>
                <div>
                  <img
                    src={MailIcon}
                    alt="mail Icon"
                    className={style.mainIcon}
                  />
                </div>
              </div>
              <div className={style.form}>
                <TextInput
                  placeHolder="Name"
                  className={style.contactInput}
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
                <TextInput
                  placeHolder="Email"
                  className={style.contactInput}
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
                <TextInput
                  placeHolder="Phone"
                  className={style.contactInput}
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                />
                <div className={style.inputContainer}>
                  <div className={style.inputLabel}>Message</div>
                  <textarea
                    rows={10}
                    cols={70}
                    className={style.textArea}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                  />
                </div>
                <button className={style.submitBtn}>Submit</button>
              </div>
            </div>
            <div className={style.detailsContainer}>
              <div className={style.iconLabelContainer}>
                <img
                  src={mobile}
                  alt="mobile"
                  className={`${style.detialsIcon} ${style.borderIcon}`}
                />
                <label className={style.detialsLabel}>
                  Israel Phone: 04-8889810
                </label>
              </div>
              <div className={style.iconLabelContainer}>
                <img
                  src={mail}
                  alt="mail"
                  className={`${style.detialsIcon} ${style.borderIcon}`}
                />
                <label className={style.detialsLabel}>
                  Office@ibengineer.com
                </label>
              </div>
              <div className={style.iconLabelContainer}>
                <img src={map} alt="map" className={style.detialsIcon} />
                <label className={style.detialsLabel}>
                  Office Address: St. Wadi Alhaj Nazareth
                </label>
              </div>
              <div className={style.detialsSubText}>
                Follow us on social media to stay updated with our latest
                projects, industry insights, and company news.
              </div>
              <div className={style.socialMediaIconcontainer}>
                <img
                  src={facebook}
                  alt="facebook"
                  className={style.mediaIcon}
                />
                <img
                  src={instagram}
                  alt="instagram"
                  className={style.mediaIcon}
                />
                <img
                  src={linkedIn}
                  alt="facebook"
                  className={style.mediaIcon}
                />
              </div>
              <div className={style.cityBuldContainer}>
                <img
                  className={style.cityBuldg}
                  src={cityBuldg}
                  alt="city building"
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className={style.contactUsHero}>
          <div className={style.backgroundShade} />
          <div className={style.herotextContainer}>
            <h1 className={style.heroMaintext}>Get in Touch</h1>
            <div className={style.heroSubText}>
              Have a specific inquiry or want to discuss a potential project?
            </div>
            <div className={style.actualSubText}>
              Fill out the form when you click on “Contact Us” button, and one
              of our representatives will get back to you promptly. We
              appreciate your interest in IB Engineering, and we look forward to
              working with you to turn your construction and engineering visions
              into reality.
            </div>
            <button
              className={style.contactUsBtn}
              onClick={() => setContactForm(true)}
            >
              Contact Us
            </button>
            <div className={style.greyTextContainer}>All Rights Reserved </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ContactUs;
