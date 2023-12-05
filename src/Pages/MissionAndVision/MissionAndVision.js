import React, { useState } from "react";
import { Animated } from "react-animated-css";

import heroImg from "../../Asset/Img/whoAreWeHeroImg.png";
import intialConOne from "../../Asset/Img/initialConOne.png";
import intialConTow from "../../Asset/Img/initialConTwo.png";

import style from "./missionAndVision.module.scss";

function MissionAndVision() {
  const [containerOne, setContainerOne] = useState(false);
  const [containerTwo, setContainerTwo] = useState(false);
  const [containerThree, setContainerThree] = useState(false);

  console.log(containerTwo, " <>?");
  return (
    <div className={style.whoWeAreContaineParent}>
      <div className={style.heroContainer}>
        <div className={style.imgTextContainer}>
          <img alt="hero img" src={heroImg} className={style.heroImg} />

          <Animated
            animationIn="slideInLeft"
            animationOut="fadeOut"
            isVisible={true}
            animationInDelay={500}
            animationInDuration={1000}
          >
            <div className={style.heroText}>MISSION AND VISION</div>
          </Animated>
        </div>
        <div className={style.vissionContainer}>
          <Animated
            animationIn="slideInRight"
            animationOut="fadeOut"
            isVisible={true}
            animationInDelay={500}
            animationInDuration={1000}
          >
            <div className={style.rectBox}>IB VISION</div>
          </Animated>
        </div>
        <div className={style.verticalLine} />
      </div>
      <div className={style.initialParent}>
        <div className={style.initialBorderContainerOne}>
          <div className={style.rightTopBorder} />
          <div className={`${style.initialborderContainerHeadingOne} `}>
            <div
              className={`${style.heading} ${style.containerTwoHeadingWidth}`}
            >
              <Animated
                animationIn="slideInLeft"
                animationOut="fadeOut"
                isVisible={true}
                animationInDelay={500}
                animationInDuration={1000}
              >
                At <span className={style.boldText}>IB ENG</span> , we are your
                one-stop-shop for all aspects of the construction process. We
                offer a full range of services that start with sourcing and
                checking the potential of the land, all the way through
                planning, management, construction, and even interior design.
              </Animated>
            </div>
            <div
              className={`${style.heading} ${style.containerTwoHeadingWidth} ${style.marginTop}`}
            >
              <Animated
                animationIn="slideInRight"
                animationOut="fadeOut"
                isVisible={true}
                animationInDelay={500}
                animationInDuration={1000}
              >
                Our team of professionals is there for you every step of the
                way, providing customized and creative
                <span className={style.boldText}>
                  {" "}
                  engineering solutions{" "}
                </span>{" "}
                that meet your specific needs. We are committed to staying
                up-to-date with the latest technology and using cutting-edge
                tools like{" "}
                <span className={style.boldText}>
                  Building Information Modeling (BIM){" "}
                </span>
                to streamline the construction process and increase efficiency.
              </Animated>
            </div>
          </div>
        </div>
        <div
          className={style.initialBorderContainerTwo}
          onMouseEnter={() => setContainerOne(true)}
        >
          {containerOne && (
            <Animated
              animationIn="fadeInUp"
              animationOut="fadeInUp"
              isVisible={containerOne}
              animationInDelay={500}
              animationInDuration={1000}
              className={style.imgTextcontainer}
            >
              {/* <div > */}
              {/* <Animated
              animationIn="fadeInUp"
              animationOut="fadeInUp"
              isVisible={containerOne}
              animationInDelay={500}
              animationInDuration={1000}
            > */}
              <img
                src={intialConOne}
                alt="initial"
                className={style.initialOneImg}
              />
              {/* </Animated>
            <Animated
              animationIn="fadeInUp"
              animationOut="fadeInUp"
              isVisible={containerOne}
              animationInDelay={500}
              animationInDuration={1000}
            > */}
              <div className={style.blackHighlight}>
                <div className={style.textContainer}>
                  <div className={style.text}>
                    Our approach is focused on finding{" "}
                    <span className={style.boldText}> creative solutions</span>{" "}
                    that optimize both the construction and operational aspects
                    of each project, ultimately saving our clients time and
                    money.
                  </div>
                  <div className={style.text}>
                    At <span className={style.boldText}> IB ENG</span>, we take
                    pride in our ability to provide comprehensive and
                    personalized service to each and every one of our clients.
                    Whether you are looking to build a new home, renovate an
                    existing building, or undertake a commercial project, we are
                    here to help you achieve your goals.
                  </div>
                </div>
              </div>
              {/* </Animated> */}
              {/* </div> */}
            </Animated>
          )}
        </div>
        <div
          className={style.initialBorderContainerThree}
          onMouseEnter={() => setContainerTwo(true)}
        >
          <div className={style.borderRightBottom} />
          {containerTwo && (
            <div className={style.lineTextContainer}>
              <Animated
                animationIn="fadeInUp"
                animationOut="fadeInUp"
                isVisible={containerTwo}
                animationInDelay={500}
                animationInDuration={1000}
                className={`${style.vissionContainer} ${style.withBorderLTR} ${style.containerThreePosition}`}
              >
                {/* <div
                className={`${style.vissionContainer} ${style.withBorderLTR} ${style.containerThreePosition}`}
              > */}
                <div className={style.rectBox}>IB MISSION</div>
                {/* </div> */}
              </Animated>
              <div className={style.verticalLine} />
              <Animated
                animationIn="fadeInUp"
                animationOut="fadeInUp"
                isVisible={containerTwo}
                animationInDelay={500}
                animationInDuration={1000}
              >
                <div
                  className={`${style.heading} ${style.initialContainerThreeText}`}
                >
                  At <span className={style.boldText}> IB Engineering</span>,
                  our mission is to serve as your comprehensive partner in{" "}
                  <span className={style.boldText}> construction</span>,
                  offering a full spectrum of services that seamlessly guide
                  your projects from inception to realization. We embark on this
                  mission by beginning with thorough land assessment, ensuring
                  that your chosen site aligns perfectly with your vision. From
                  there, our dedicated team employs the latest advancements in
                  technology to craft meticulous plans that optimize
                  <span className={style.boldText}>
                    efficiency and precision.
                  </span>
                </div>
              </Animated>
            </div>
          )}
        </div>
        <div
          className={style.initialBorderContainerFour}
          onMouseEnter={() => setContainerThree(true)}
        >
          <div className={style.topLeftBorder} />
          <div className={style.bottomLeftBorder} />
          {containerThree && (
            <div className={style.initialBorderImgContainer}>
              <Animated
                animationIn="fadeInUp"
                animationOut="fadeInUp"
                isVisible={containerThree}
                animationInDelay={500}
                animationInDuration={1000}
              >
                <img alt="img" src={intialConTow} className={style.heroImg} />
              </Animated>
              <Animated
                animationIn="fadeInUp"
                animationOut="fadeInUp"
                isVisible={containerThree}
                animationInDelay={500}
                animationInDuration={1000}
              >
                <div className={style.blackHighlight}>
                  <div className={style.textContainer}>
                    <div className={style.text}>
                      Our commitment extends beyond the drawing board, we
                      actively manage every aspect of your project, keeping a
                      keen eye on both construction and operational elements.
                    </div>
                    <div className={style.text}>
                      At <span className={style.boldText}> IB Engineering</span>
                      , we take immense pride in offering personalized service
                      and expertise tailored to your unique needs. Whether you
                      aspire to build a new home, breathe new life into an
                      existing structure or embark on a commercial venture, we
                      are your perfect partner, ready to transform your
                      construction dreams into reality.
                    </div>
                  </div>
                  {/* </Animated> */}
                </div>
              </Animated>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default MissionAndVision;
