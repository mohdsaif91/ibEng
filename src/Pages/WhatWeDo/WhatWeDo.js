import React, { useState } from "react";
import { Animated } from "react-animated-css";

import containerOneImg from "../../Asset/Img/containeroneImg.png";
import containerTwoImg from "../../Asset/Img/containerTwoImg.png";
import greyContainer1 from "../../Asset/Img/greycontainer1.png";
import greyContainer2 from "../../Asset/Img/greyContainer2.png";
import greyContainer3 from "../../Asset/Img/greyContainer3.png";
import greyContainer4 from "../../Asset/Img/greyContainer4.png";
import redDot from "../../Asset/Img/redDot.png";
import { isMobile } from "../../utils/utilFunction";
import whatWeDoMobile1 from "../../Asset/Img/whatWedoMobile1.png";
import whatWeDoMobile2 from "../../Asset/Img/whatWeDoMobile2.png";

import style from "./whatWeDo.module.scss";

function WhatWeDo() {
  const [containerOne, setContainerOne] = useState(false);
  const [containerTwo, setContainerTwo] = useState(false);
  const [containerThree, setContainerThree] = useState(false);
  const [containerFour, setContainerFour] = useState(false);

  return (
    <div className={style.whatWeDoContainer}>
      <div className={style.twoColumnContainer}>
        <div className={style.containerOne}>
          <div className={style.containerOneCard}>
            {isMobile ? (
              <div className={style.mobileCardHeading}>
                <div className={style.heading1}>Build.</div>
                <div className={style.heading2}>Solve.</div>
                <div className={style.heading3}>Evolve.</div>
              </div>
            ) : (
              <div className={style.cardHeading}>
                Build.
                <br />
                Solve.
                <br />
                Evolve.
              </div>
            )}
            <Animated
              animationIn="fadeInUp"
              isVisible={true}
              animationInDelay={500}
              animationInDuration={1000}
            >
              <img
                src={isMobile ? whatWeDoMobile2 : containerOneImg}
                alt="containerOneImg"
                className={style.containerOneImg}
              />
            </Animated>
          </div>
        </div>
        <div className={style.containerTwo}>
          <Animated
            animationIn="fadeInDown"
            isVisible={true}
            animationInDelay={500}
            animationInDuration={1000}
          >
            <img
              src={isMobile ? whatWeDoMobile1 : containerTwoImg}
              alt=""
              className={style.containerTwoimg}
            />
          </Animated>
          <Animated
            animationIn="fadeInDown"
            isVisible={true}
            animationInDelay={500}
            animationInDuration={1000}
          >
            <div className={style.verticalDevider} />
          </Animated>
        </div>
      </div>
      <div className={style.greyContainer}>
        <div
          className={style.imageTextContainer}
          onMouseEnter={() => setContainerOne(true)}
        >
          {containerOne && (
            <div className={style.textIconContainer}>
              <Animated
                className={style.mainGeadingZIndex}
                animationIn="fadeInDown"
                isVisible={true}
                animationInDelay={500}
                animationInDuration={1000}
              >
                <div
                  className={`${style.containerHeading} ${style.contatinerTextOne}`}
                >
                  PLANNING SERVICES
                </div>
              </Animated>
              <Animated
                className={style.mainGeadingZIndex}
                animationIn="fadeInDown"
                isVisible={true}
                animationInDelay={500}
                animationInDuration={1000}
              >
                <img src={redDot} alt="red Dot" className={style.redDot} />
              </Animated>
            </div>
          )}
          <div className={style.imgContainer}>
            <div className={style.imgShadeContainer}>
              {containerOne && (
                <Animated
                  animationIn="slideInLeft"
                  isVisible={true}
                  animationInDelay={500}
                  animationInDuration={1000}
                >
                  <img
                    src={greyContainer1}
                    alt="img 1"
                    className={style.greyImage}
                  />
                  <div className={style.shade} />
                </Animated>
              )}
            </div>
            <div className={style.alignContainer}>
              <div
                className={`${style.subTextContainer} ${style.firstTextContainer}`}
              >
                {containerOne && (
                  <Animated
                    animationIn="fadeIn"
                    isVisible={true}
                    animationInDelay={500}
                    animationInDuration={1000}
                  >
                    <div className={style.imgTextChild}>
                      Our{" "}
                      <span className={style.highlightText}>
                        Planning Services
                      </span>
                      offer comprehensive support for both developers and
                      individuals seeking to build their{" "}
                      <span className={style.highlightText}>
                        dream projects.
                      </span>
                    </div>
                    <div className={style.imgTextChild}>
                      We provide a team of expert{" "}
                      <span className={style.highlightText}>
                        planning engineers
                      </span>
                      who can oversee every aspect of your project.
                    </div>
                    <div className={style.imgTextChild}>
                      From conceptualization to final plans,
                      <span className={style.highlightText}>
                        our professionals
                      </span>
                      ensure that all necessary engineering components are
                      meticulously designed, making your vision a reality.
                    </div>
                  </Animated>
                )}
              </div>
            </div>
          </div>
        </div>
        <div
          className={style.imageTextContainerTwo}
          onMouseEnter={() => setContainerTwo(true)}
        >
          <div className={style.firstColumnContainer}>
            <div className={style.headingImgContainer}>
              {containerTwo && (
                <Animated
                  animationIn="fadeInDown"
                  isVisible={true}
                  animationInDelay={500}
                  animationInDuration={1000}
                >
                  <div className={style.verticalLine} />
                </Animated>
              )}
              {containerTwo && (
                <Animated
                  animationIn="slideInLeft"
                  isVisible={true}
                  animationInDelay={500}
                  animationInDuration={1000}
                  className={style.containerHeadingTwo}
                >
                  BUILDING INSPECTION
                </Animated>
              )}
            </div>
            <div
              className={`${style.subTextContainer} ${style.firstTextContainer} ${style.topMarginTextContainer}`}
            >
              {containerTwo && (
                <Animated
                  animationIn="fadeIn"
                  isVisible={true}
                  animationInDelay={500}
                  animationInDuration={1000}
                >
                  <div className={style.imgTextChild}>
                    As part of our commitment to{" "}
                    <span className={style.highlightText}>
                      planning and building management
                    </span>{" "}
                    , we offer Building Inspection services that ensure the
                    highest standards of construction quality.
                  </div>
                  <div className={style.imgTextChild}>
                    Our{" "}
                    <span className={style.highlightText}>
                      qualified inspectors
                    </span>{" "}
                    meticulously assess every detail of your project to
                    guarantee that it meets industry regulations and{" "}
                    <span className={style.highlightText}>
                      your expectations.
                    </span>
                  </div>
                  <div className={style.imgTextChild}>
                    With our expertise, you can confidently achieve{" "}
                    <span className={style.highlightText}>
                      superior building quality
                    </span>
                  </div>
                </Animated>
              )}
            </div>
          </div>
          <div className={style.secondColumnContainer}>
            <div className={`${style.imgShadeContainer} ${style.imgMarginTop}`}>
              {containerTwo && (
                <Animated
                  animationIn="slideInRight"
                  isVisible={true}
                  animationInDelay={500}
                  animationInDuration={1000}
                  className={style.containerHeadingTwo}
                >
                  <img
                    src={greyContainer2}
                    alt="img 1"
                    className={`${style.greyImage} `}
                  />
                </Animated>
              )}
              <div className={style.shade} />
            </div>
          </div>
        </div>
        <div
          className={style.imageTextContainerThree}
          onMouseEnter={() => setContainerThree(true)}
        >
          <div className={style.firstColumnContainer}>
            {containerThree && (
              <Animated
                animationIn="slideInLeft"
                isVisible={true}
                animationInDelay={500}
                animationInDuration={1000}
                className={`${style.imgShadeContainer} ${style.imgMarginTop}`}
              >
                {/* <div
                  className={`${style.imgShadeContainer} ${style.imgMarginTop}`}
                > */}
                <img
                  src={greyContainer3}
                  alt="img 1"
                  className={`${style.greyImage} `}
                />
                <div className={style.shade} />
                {/* </div> */}
              </Animated>
            )}
          </div>
          <div className={style.secondColumnContainer}>
            <div className={style.headingImgContainer}>
              {containerThree && (
                <Animated
                  animationIn="fadeInDown"
                  isVisible={true}
                  animationInDelay={500}
                  animationInDuration={1000}
                >
                  <div className={style.verticalLine} />
                </Animated>
              )}
              <div
                className={`${style.imgShadeContainer} ${style.imgMarginTop}`}
              >
                {containerThree && (
                  <Animated
                    animationIn="slideInRight"
                    isVisible={true}
                    animationInDelay={500}
                    animationInDuration={1000}
                    className={`${style.containerHeadingThree} `}
                  >
                    {/* <div > */}
                    INTERIOR DESIGN
                    <span className={style.headingIcon}>IN</span>
                    {/* </div> */}
                  </Animated>
                )}

                <div
                  className={`${style.subTextContainer} ${style.thirdTextContainer} ${style.topMarginTextContainer}`}
                >
                  {/* <div className={style.imgTextChild}> */}
                  {containerThree && (
                    <Animated
                      animationIn="fadeIn"
                      isVisible={true}
                      animationInDelay={500}
                      animationInDuration={1000}
                      className={style.imgTextChild}
                    >
                      Transform your space into a masterpiece with our dedicated
                      <span className={style.highlightText}>
                        Interior Design department.
                      </span>
                    </Animated>
                  )}
                  {/* </div> */}
                  {containerThree && (
                    <Animated
                      animationIn="fadeIn"
                      isVisible={true}
                      animationInDelay={650}
                      animationInDuration={1000}
                      className={style.imgTextChild}
                    >
                      Our team of creative experts collaborates with you to
                      bring your
                      <span className={style.highlightText}>
                        design aspirations to life.
                      </span>
                    </Animated>
                  )}
                  {containerThree && (
                    <Animated
                      animationIn="fadeIn"
                      isVisible={true}
                      animationInDelay={800}
                      animationInDuration={1000}
                      className={style.imgTextChild}
                    >
                      Whether it's a residential or commercial project, our
                      <span className={style.highlightText}>
                        Interior Design services
                      </span>
                      promise to create a harmonious and captivating environment
                      that aligns with your vision.
                    </Animated>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={style.imageTextContainerTwo}
          onMouseEnter={() => setContainerFour(true)}
        >
          <div className={style.firstColumnContainer}>
            <div className={style.headingImgContainer}>
              {containerFour && (
                <Animated
                  animationIn="fadeInDown"
                  isVisible={true}
                  animationInDelay={500}
                  animationInDuration={1000}
                >
                  <div className={style.verticalLine} />
                </Animated>
              )}
              {containerFour && (
                <Animated
                  animationIn="slideInLeft"
                  isVisible={true}
                  animationInDelay={500}
                  animationInDuration={1000}
                  className={`${style.containerHeadingFour} `}
                >
                  ENGINEERING CONSULTATION
                </Animated>
              )}
            </div>
            <div
              className={`${style.subTextContainer} ${style.firstTextContainer} ${style.topMarginTextContainer}`}
            >
              {containerFour && (
                <Animated
                  animationIn="fadeIn"
                  isVisible={true}
                  animationInDelay={800}
                  animationInDuration={1000}
                  className={style.imgTextChild}
                >
                  Tap into our wealth of experience with our
                  <span className={style.highlightText}>
                    Engineering Consultation services.
                  </span>{" "}
                </Animated>
              )}
              {containerFour && (
                <Animated
                  animationIn="fadeIn"
                  isVisible={true}
                  animationInDelay={800}
                  animationInDuration={1000}
                  className={style.imgTextChild}
                >
                  Whether you're embarking on a new project or seeking insights
                  to enhance existing plans, our consultants offer
                  <span className={style.highlightText}>expert guidance.</span>
                </Animated>
              )}
              {containerFour && (
                <Animated
                  animationIn="fadeIn"
                  isVisible={true}
                  animationInDelay={800}
                  animationInDuration={1000}
                  className={style.imgTextChild}
                >
                  From project conceptualization to cost analysis, our
                  consultancy empowers you to navigate your project successfully
                  and
                  <span className={style.highlightText}>
                    {" "}
                    achieve your objectives.
                  </span>
                </Animated>
              )}
            </div>
          </div>
          <div className={style.secondColumnContainer}>
            {containerFour && (
              <Animated
                animationIn="slideInRight"
                isVisible={true}
                animationInDelay={500}
                animationInDuration={1000}
                className={`${style.imgShadeContainer} ${style.imgMarginTop}`}
              >
                <img
                  src={greyContainer4}
                  alt="img 1"
                  className={`${style.greyImage} `}
                />
                <div className={style.shade} />
              </Animated>
            )}
          </div>
        </div>
        {/* <div className={style.imageContainer}>
          <img src={greyContainer2} alt="img 1" className={style.greyImage} />
          <div className={style.imgText}>
            <div className={style.containerText}>BUILDING INSPECTION</div>
            <div className={style.imgTextChild}>
              Our Planning Services offer comprehensive support for both
              developers and individuals seeking to build their dream projects.
            </div>
            <div className={style.imgTextChild}>
              We provide a team of expert planning engineers who can oversee
              every aspect of your project.
            </div>
            <div className={style.imgTextChild}>
              From conceptualization to final plans, our professionals ensure
              that all necessary engineering components are meticulously
              designed, making your vision a reality.
            </div>
          </div>
        </div>
        <div className={style.imageContainer}>
          <img src={greyContainer3} alt="img 1" className={style.greyImage} />
          <div className={style.imgText}>
            <div className={style.containerText}>INTERIOR DESIGN</div>
            <div className={style.imgTextChild}>
              Our Planning Services offer comprehensive support for both
              developers and individuals seeking to build their dream projects.
            </div>
            <div className={style.imgTextChild}>
              We provide a team of expert planning engineers who can oversee
              every aspect of your project.
            </div>
            <div className={style.imgTextChild}>
              From conceptualization to final plans, our professionals ensure
              that all necessary engineering components are meticulously
              designed, making your vision a reality.
            </div>
          </div>
        </div>
        <div className={style.imageContainer}>
          <img src={greyContainer4} alt="img 1" className={style.greyImage} />
          <div className={style.imgText}>
            <div className={style.containerText}>ENGINEERING CONSULTATION</div>
            <div className={style.imgTextChild}>
              Our Planning Services offer comprehensive support for both
              developers and individuals seeking to build their dream projects.
            </div>
            <div className={style.imgTextChild}>
              We provide a team of expert planning engineers who can oversee
              every aspect of your project.
            </div>
            <div className={style.imgTextChild}>
              From conceptualization to final plans, our professionals ensure
              that all necessary engineering components are meticulously
              designed, making your vision a reality.
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default WhatWeDo;
