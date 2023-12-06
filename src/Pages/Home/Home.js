import React, { useEffect, useLayoutEffect, useMemo, useState } from "react";
import Glider from "react-glider";
import { Animated } from "react-animated-css";
import Glide from "@glidejs/glide";

// slideInLeft

import hero1 from "../../Asset/Img/hero1.png";
import hero2 from "../../Asset/Img/hero2.png";
import hero3 from "../../Asset/Img/hero3.png";
import hero4 from "../../Asset/Img/hero4.png";
import forwardBtn from "../../Asset/Icon/ForwardButton.png";
import { brandData, serviceData } from "../../utils";

import style from "./home.module.scss";
import "glider-js/glider.min.css";

const sliderConfiguration = {
  animationDuration: 500,
  autoplay: 1000,
  dragDistance: false,
  gap: 3,
  hoverMouse: false,
  perView: 3,
  paddings: window.innerWidth <= 700 ? "10%" : "25%",
  reqwind: true,
  startAt: 0,
  type: "carousel",
};

function Home() {
  const [containerOne, setContainerOne] = useState(false);
  const [containerTwo, setContainerTwo] = useState(false);
  const [visionAnim, setVisionAnim] = useState(false);
  const [missionAnim, setMissionAnim] = useState(false);
  const [serviceAnim, setServiceAnim] = useState(false);
  const [slider] = useState(new Glide(".glide", sliderConfiguration));

  useLayoutEffect(() => {
    window.scroll(0, 0);
  }, []);

  useEffect(() => {
    slider.mount();
  }, []);

  const clients = useMemo(
    () => (
      <div className={`glide ${style.glide}`}>
        <div
          className={`glide__track ${style.noOverFlow}`}
          data-glide-el="track"
        >
          <ul className={style.client_cards}>
            {brandData.map((m) => (
              <li className="glide__slide slider">
                <img
                  className={style.brandImg}
                  key={m.id}
                  src={m.img}
                  alt="brand"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    ),
    []
  );

  return (
    <div className={style.homeContainer}>
      <div className={style.heroContainer}>
        <img src={hero1} alt="" className={style.heroImg} />
        <div
          className={style.heroImageContainer}
          onMouseEnter={() => setVisionAnim(true)}
        >
          <img
            src={hero2}
            alt=""
            className={`${style.heroImg} ${
              containerOne ? style.largeImg : style.defaultImg
            }`}
          />
          <div
            className={`${style.linearHighLight}  ${
              containerOne
                ? `${style.containerOne} `
                : `${style.defaultContainerOne}`
            } ${style.bgAnimation}`}
          >
            <div
              className={`${style.detialsContainer} ${
                containerOne ? style.slide_out : style.slide_in
              }`}
            >
              <div className={style.imageTextContainer}>
                <Animated
                  animationIn="slideInLeft"
                  animationOut="fadeOut"
                  isVisible={visionAnim}
                  animationInDelay={500}
                  animationInDuration={1000}
                >
                  <h1 className={style.mainHeading}>IB VISION</h1>
                </Animated>
                <div className={`${style.imageDescription}`}>
                  <Animated
                    animationIn="slideInRight"
                    animationOut="fadeOut"
                    isVisible={visionAnim}
                    animationInDelay={500}
                    animationInDuration={1000}
                  >
                    <span className={style.highLight}>At IB Eng, </span> we are
                    your one-stop-shop for all aspects of the construction
                    process. We offer a full range of services that start with
                    sourcing and checking the potential of the land, all the way
                    through{" "}
                    <span className={style.highLight}>
                      planning, management, construction, and even interior
                      design.
                    </span>
                  </Animated>
                  {containerOne && (
                    <>
                      <div className={style.moreTextSubText}>
                        Our team of professionals is there for you every step of
                        the way, providing customized and creative engineering
                        solutions that meet your specific needs.
                      </div>
                      <div className={style.moreTextSubText}>
                        <span className={style.highLight}>
                          We are committed
                        </span>{" "}
                        to staying up-to-date with the latest technology and
                        using cutting-edge tools like{" "}
                        <span className={style.highLight}>
                          Building Information Modeling (BIM)
                        </span>{" "}
                        to streamline the construction process and increase
                        efficiency. Our approach is focused on{" "}
                        <span className={style.highLight}>
                          finding creative solutions{" "}
                        </span>{" "}
                        that optimize both the construction and operational
                        aspects of each project,{" "}
                        <span className={style.highLight}>
                          ultimately saving our clients time and money.
                        </span>
                      </div>
                      <div className={style.moreTextSubText}>
                        <span className={style.highLight}>At IB Eng, </span> we
                        take pride in our ability to provide comprehensive and
                        personalized service to each and every one of our
                        clients. Whether you are looking to build a new home,
                        renovate an existing building, or undertake a commercial
                        project,{" "}
                        <span className={style.highLight}>
                          we are here to help you achieve your goals.
                        </span>
                      </div>
                    </>
                  )}
                </div>
                <Animated
                  animationIn="slideInLeft"
                  animationOut="fadeOut"
                  isVisible={visionAnim}
                  animationInDelay={500}
                  animationInDuration={1000}
                >
                  <div
                    className={style.showMore}
                    onClick={() => {
                      setContainerOne(!containerOne);
                    }}
                  >
                    Show {containerOne ? "Less" : "More"}
                  </div>
                  <div className={style.underline} />
                </Animated>
              </div>
              <Animated
                className={style.serviceContainer}
                animationIn="fadeInup"
                isVisible={visionAnim}
                animationInDelay={500}
                animationInDuration={2000}
              >
                <img src={forwardBtn} alt="view" className={style.viewIcon} />
              </Animated>
            </div>
          </div>
        </div>
        <div
          className={style.heroImageContainer}
          onMouseEnter={() => setMissionAnim(true)}
        >
          <img src={hero3} alt="" className={style.heroImg} />
          <div
            className={`${style.linearHighLight}  ${
              containerTwo
                ? `${style.containerTwo}`
                : `${style.defaultContainerTwo}`
            }`}
          >
            <div
              className={`${style.detialsContainer}  ${
                containerTwo ? style.slide_in2 : style.slide_out2
              }`}
            >
              <div className={style.imageTextContainer}>
                <Animated
                  animationIn="slideInLeft"
                  isVisible={missionAnim}
                  animationInDelay={500}
                  animationInDuration={1000}
                >
                  <h1 className={style.mainHeading}>IB MISION</h1>
                </Animated>
                <Animated
                  animationIn="slideInRight"
                  isVisible={missionAnim}
                  animationInDelay={500}
                  animationInDuration={1000}
                >
                  <div className={style.imageDescription}>
                    {!containerTwo ? (
                      <>
                        <span className={style.highLight}>At IB Eng, </span> our
                        mission is to serve as your comprehensive partner in
                        construction, offering a full spectrum of services that
                        seamlessly guide your projects from inception to
                        realization.
                      </>
                    ) : (
                      <>
                        <div className={style.moreTextSubText}>
                          <span className={style.highLight}>We embark</span> on
                          this mission by beginning with thorough land
                          assessment, ensuring that your chosen site aligns
                          perfectly with your vision. From there, our dedicated
                          team employs the latest advancements in technology to
                          craft meticulous plans that optimize efficiency and
                          precision.
                        </div>
                        <div className={style.moreTextSubText}>
                          <span className={style.highLight}>
                            Our commitment{" "}
                          </span>
                          extends beyond the drawing board; we actively manage
                          every aspect of your project, keeping a keen eye on
                          both construction and operational elements.
                        </div>
                        <div className={style.moreTextSubText}>
                          <span className={style.highLight}>
                            At IB Engineering,
                          </span>{" "}
                          we take immense pride in offering personalized service
                          and expertise tailored to your unique needs. Whether
                          you aspire to build a new home, breathe new life into
                          an existing structure or embark on a commercial
                          venture, we are your perfect partner,{" "}
                          <span className={style.highLight}>
                            ready to transform your construction dreams into
                            reality
                          </span>
                          .
                        </div>
                      </>
                    )}
                  </div>
                </Animated>
                <Animated
                  animationIn="slideInLeft"
                  isVisible={missionAnim}
                  animationInDelay={500}
                  animationInDuration={1000}
                >
                  <div
                    className={style.showMore}
                    onClick={() => setContainerTwo(!containerTwo)}
                  >
                    Show {containerTwo ? "Less" : "More"}
                  </div>
                  <div className={style.underline} />
                </Animated>
              </div>
              <Animated
                animationIn="fadeInup"
                isVisible={missionAnim}
                animationInDelay={500}
                animationInDuration={2000}
              >
                <img src={forwardBtn} alt="view" className={style.viewIcon} />
              </Animated>
            </div>
          </div>
        </div>
        <div className={style.heroImageContainer}>
          <img src={hero4} alt="" className={style.heroImg} />
          <div
            className={style.detialsContainerService}
            onMouseEnter={() => setServiceAnim(true)}
          >
            <div className={style.serviceHeading}>
              <Animated
                animationIn="slideInLeft"
                isVisible={serviceAnim}
                animationInDelay={500}
                animationInDuration={1000}
              >
                <div className={style.primaryHeading}>What We DO</div>
              </Animated>
              <Animated
                animationIn="slideInRight"
                isVisible={serviceAnim}
                animationInDelay={500}
                animationInDuration={1000}
              >
                <div className={style.secondaryHeading}>Our Services</div>
              </Animated>
            </div>
            <Animated
              className={style.serviceContainer}
              animationIn="fadeInDown"
              isVisible={serviceAnim}
              animationInDelay={500}
              animationInDuration={1000}
            >
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
            </Animated>
          </div>
        </div>
      </div>
      {clients}
    </div>
  );
}

export default Home;
