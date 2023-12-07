import React, { useState } from "react";
import { Animated } from "react-animated-css";

import Stefan from "../../Asset/people/stefan.png";
import container5One from "../../Asset/Img/cont5sing1.jpeg";
import container5Two from "../../Asset/Img/cont5multi1.jpeg";
import container5Three from "../../Asset/Img/cont5multi2.jpeg";
import mobileStefan from "../../Asset/people/mobileStefan.png";
import mobileContainer4 from "../../Asset/Img/mobilecontainer4.jpeg";
import mobileContainer4_2 from "../../Asset/Img/mobileContainer4.2.jpeg";
import mobileContainer4_3 from "../../Asset/Img/mobileContainer4.3.jpeg";

import style from "./theMindBehind.module.scss";
import { isMobile } from "../../utils/utilFunction";

function TheMindBehind() {
  const [containerOne, setContainerOne] = useState(false);
  const [containerTwo, setContainerTwo] = useState(false);
  const [containerThree, setContainerThree] = useState(false);
  const [containerFour, setContainerfour] = useState(false);
  const [containerFive, setContainerFive] = useState(false);

  return (
    <div className={style.whoWeAreContaineParent}>
      <div className={style.whoWeAreContaine}>
        <div className={style.headingContainer}>
          <Animated
            animationIn="slideInLeft"
            animationOut="fadeOut"
            isVisible={true}
            animationInDelay={500}
            animationInDuration={1000}
          >
            <h1 className={style.heading}>THE MIND BEHIND </h1>
            <h1 className={style.heading}>IB ENG</h1>
          </Animated>
          <div className={style.verticalDevider} />
        </div>
        <div
          className={style.headingContainerText}
          onMouseEnter={() => setContainerOne(true)}
        >
          <Animated
            animationIn="slideInRight"
            animationOut="fadeOut"
            isVisible={true}
            animationInDelay={500}
            animationInDuration={1000}
          >
            <div
              className={`${style.heading} ${style.containerOneHeadingWidth}`}
            >
              Our founder is a highly experienced and qualified construction
              engineer, with a Master's degree in building engineering and
              specialized expertise in earthquakes and traffic and
              transportation engineering. Registered in the register of
              engineers and architects since 1979,our founder has served as the
              city engineer of Nazareth from 1992 to 2016 and has been a member
              of steering committees on behalf of the Ministry of Transportation
              and the Ministry of Construction and Housing.
            </div>
          </Animated>
          <div className={style.borderContainer}>
            <div className={style.topBorder} />
            {containerOne && (
              <Animated
                animationIn="fadeInUp"
                animationOut="fadeOut"
                isVisible={true}
                animationInDelay={500}
                animationInDuration={1000}
                className={style.protfolioContainer}
              >
                <img
                  src={isMobile ? mobileStefan : Stefan}
                  alt=""
                  className={style.protfolioImg}
                />
              </Animated>
            )}
          </div>
          <div className={style.borderContainerTwo}>
            <div className={style.bottomBorder} />
          </div>
          <div
            className={style.borderContainerThree}
            onMouseEnter={() => setContainerTwo(true)}
          >
            <div className={style.rightTopBorder} />
            {containerTwo && (
              <Animated
                animationIn="slideInLeft"
                animationOut="fadeOut"
                isVisible={true}
                animationInDelay={500}
                animationInDuration={1000}
                className={`${style.containerThreeHeadingOne} `}
              >
                <div
                  className={`${style.heading} ${style.containerTwoHeadingWidth}`}
                >
                  Our founder has also been a key participant in teams for
                  editing instruction files for planning public transportation
                  routes, mass transit systems in the Haifa metropolis,
                  transportation master plans for the Haifa and northern
                  districts, and other major infrastructure projects.
                </div>
                <div
                  className={`${style.heading} ${style.containerTwoHeadingWidth} ${style.marginTop}`}
                >
                  With decades of experience in planning, managing, and
                  supervising projects in the public, residential, commercial,
                  and infrastructure sectors, our founder has established a
                  reputation for excellence in the industry. Our founder has
                  always been passionate about his work in the field of
                  engineering and construction.
                </div>
              </Animated>
            )}
          </div>
          <div
            className={style.borderContainerFour}
            onMouseEnter={() => setContainerThree(true)}
          >
            <div className={style.topLeftBorder} />
            {containerThree && (
              <div className={style.headingFourContainer}>
                <Animated
                  animationIn="slideInRight"
                  animationOut="fadeOut"
                  isVisible={true}
                  animationInDelay={500}
                  animationInDuration={1000}
                  className={`${style.containerThreeHeadingOne} `}
                >
                  <div className={style.mainHeadingFour}>
                    Engineering Excellence, Forging Tomorrow's Innovation Today,
                    in the Heart of Israel.
                  </div>
                </Animated>
                <Animated
                  animationIn="slideInLeft"
                  animationOut="fadeOut"
                  isVisible={true}
                  animationInDelay={500}
                  animationInDuration={1000}
                  className={`${style.containerThreeHeadingOne} `}
                >
                  <div className={style.headingFour}>
                    He has a strong focus on creativity, efficiency, and
                    customer satisfaction. Additionally, our founder has a
                    diverse set of hobbies and interests, including hiking,
                    photography, and gardening. With over four decades of
                    experience in the industry, our founder has a reputation for
                    innovative solutions and a deep understanding of complex
                    construction projects.
                  </div>
                </Animated>
              </div>
            )}
          </div>
          <div
            className={style.borderContainerFive}
            onMouseEnter={() => setContainerfour(true)}
          >
            <div className={style.borderRigthTop} />
            {containerFour && (
              <div className={style.imgContainer}>
                {isMobile ? (
                  <div className={style.mobileImgeContaine}>
                    <Animated
                      animationIn="fadeInUp"
                      animationOut="fadeOut"
                      isVisible={true}
                      animationInDelay={500}
                      animationInDuration={1000}
                      className={style.firstImage}
                    >
                      <img
                        src={isMobile ? mobileContainer4 : container5One}
                        alt="img"
                        className={style.mobileSingleImg}
                      />
                    </Animated>
                    <Animated
                      animationIn="fadeInUp"
                      animationOut="fadeOut"
                      isVisible={true}
                      animationInDelay={500}
                      animationInDuration={1000}
                      className={style.mobileTwoImageContainer}
                    >
                      <img
                        src={isMobile ? mobileContainer4_2 : container5Two}
                        alt="img"
                        className={style.mobileMultiImg}
                      />
                      <img
                        src={isMobile ? mobileContainer4_3 : container5Three}
                        alt="img"
                        className={style.mobileMultiImg}
                      />
                    </Animated>
                  </div>
                ) : (
                  <>
                    <div className={style.sigleImageContainer}>
                      <Animated
                        animationIn="fadeInUp"
                        animationOut="fadeOut"
                        isVisible={true}
                        animationInDelay={500}
                        animationInDuration={1000}
                        className={style.singleImgParentContainer}
                      >
                        <img
                          src={isMobile ? mobileContainer4 : container5One}
                          alt="img"
                          className={style.singleImg}
                        />
                      </Animated>
                    </div>
                    {/* <div className={style.twoImageContainer}> */}
                    <Animated
                      animationIn="fadeInUp"
                      animationOut="fadeOut"
                      isVisible={true}
                      animationInDelay={500}
                      animationInDuration={1000}
                      className={style.twoImageContainer}
                    >
                      <img
                        src={isMobile ? mobileContainer4_2 : container5Two}
                        alt="img"
                        className={style.multiImg}
                      />
                      <img
                        src={isMobile ? mobileContainer4_3 : container5Three}
                        alt="img"
                        className={style.multiImg}
                      />
                    </Animated>
                  </>
                )}
              </div>
            )}
          </div>
          <div
            className={style.borderContainerSix}
            onMouseEnter={() => setContainerFive(true)}
          >
            <div className={style.borderLeftTop} />
            {containerFive && (
              <div className={style.borderContainerFiveHeading}>
                <Animated
                  animationIn="slideInLeft"
                  animationOut="fadeOut"
                  isVisible={true}
                  animationInDelay={500}
                  animationInDuration={1000}
                  className={style.borderContainerFiveHeading}
                >
                  <div className={`${style.heading} ${style.headingFiveWidth}`}>
                    He has served as the city engineer of Nazareth and has been
                    involved in multiple steering committees for the Ministry of
                    Transportation and the Ministry of Construction and Housing.
                    Our founder is committed to staying up-to-date with the
                    latest advancements in technology and software in order to
                    provide the highest quality services to our clients. He
                    takes a holistic approach to projects, considering not only
                    the construction aspect but also the functional and
                    operational aspects.
                  </div>
                </Animated>
                <div className={style.verticalDevider} />
                <Animated
                  animationIn="slideInRight"
                  animationOut="fadeOut"
                  isVisible={true}
                  animationInDelay={500}
                  animationInDuration={1000}
                  className={style.borderContainerFiveHeading}
                >
                  <div
                    className={`${style.heading} ${style.headingFiveWidth} ${style.marginTop} ${style.marginBottomMobile}`}
                  >
                    Our founder is passionate about passing on his knowledge and
                    experience to the next generation of engineers and
                    construction professionals. He has been involved in training
                    and mentoring programs, and is dedicated to creating a
                    legacy of excellence and professionalism in the industry.
                  </div>
                </Animated>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TheMindBehind;
