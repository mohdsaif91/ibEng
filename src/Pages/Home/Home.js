import React from "react";
import Glider from "react-glider";

import hero1 from "../../Asset/Img/hero1.png";
import hero2 from "../../Asset/Img/hero2.png";
import hero3 from "../../Asset/Img/hero3.png";
import hero4 from "../../Asset/Img/hero4.png";
import forwardBtn from "../../Asset/Icon/ForwardButton.png";
import { brandData, serviceData } from "../../utils";

import style from "./home.module.scss";
import "glider-js/glider.min.css";

function Home() {
  return (
    <div className={style.homeContainer}>
      <div className={style.heroContainer}>
        <img src={hero1} alt="" className={style.heroImg} />
        <div className={style.heroImageContainer}>
          <img src={hero2} alt="" className={style.heroImg} />
          <div className={style.detialsContainer}>
            <div className={style.imageTextContainer}>
              <h1 className={style.mainHeading}>IB VISION</h1>
              <div className={style.imageDescription}>
                <span className={style.highLight}>At IB Eng, </span> we are your
                one-stop-shop for all aspects of the construction process. We
                offer a full range of services that start with sourcing and
                checking the potential of the land, all the way through
                planning, management, construction, and even interior design.
              </div>
              <div className={style.showMore}>Show More</div>
              <div className={style.underline} />
            </div>
            <img src={forwardBtn} alt="view" className={style.viewIcon} />
          </div>
        </div>
        <div className={style.heroImageContainer}>
          <img src={hero3} alt="" className={style.heroImg} />
          <div className={style.detialsContainer}>
            <div className={style.imageTextContainer}>
              <h1 className={style.mainHeading}>IB MISION</h1>
              <div className={style.imageDescription}>
                <span className={style.highLight}>At IB Eng, </span> our mission
                is to serve as your comprehensive partner in construction,
                offering a full spectrum of services that seamlessly guide your
                projects from inception to realization.
              </div>
              <div className={style.showMore}>Show More</div>
              <div className={style.underline} />
            </div>
            <img src={forwardBtn} alt="view" className={style.viewIcon} />
          </div>
        </div>
        <div className={style.heroImageContainer}>
          <img src={hero4} alt="" className={style.heroImg} />
          <div className={style.detialsContainerService}>
            <div className={style.serviceHeading}>
              <div className={style.primaryHeading}>What We DO</div>
              <div className={style.secondaryHeading}>Our Services</div>
            </div>
            <div className={style.serviceContainer}>
              {serviceData.map((m) => (
                <div className={style.serviceCard} key={m.id}>
                  <img
                    src={m.icon}
                    alt="service"
                    className={style.serviceIcon}
                  />
                  <div className={style.cardText}>{m.label}</div>
                  <div className={style.cardLearMoreContainer}>
                    <div className={style.cardLearMore}>Learn More</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Glider
        duration={1}
        className={style.sliderContainer}
        draggable
        slidesToShow={4}
        slidesToScroll={1}
      >
        {brandData.map((m) => (
          <img className={style.brandImg} key={m.id} src={m.img} alt="brand" />
        ))}
      </Glider>
    </div>
  );
}

export default Home;
