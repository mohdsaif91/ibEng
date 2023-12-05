import React, { useState } from "react";
import { Animated } from "react-animated-css";

import leaderOne from "../../Asset/Img/leaderOne.png";
import leaderTwo from "../../Asset/Img/leaderTwo.png";
import leaderThree from "../../Asset/Img/leaderThree.png";
import signature1_1 from "../../Asset/Img/signature1.1.png";
import signature1_2 from "../../Asset/Img/signature1.2.png";
import signature2_1 from "../../Asset/Img/signature2.png";
import signature2_2 from "../../Asset/Img/signature2.2.png";
import signature3 from "../../Asset/Img/signature3.png";
import linkedIn from "../../Asset/Icon/LinkedIn.png";
import leftArrow from "../../Asset/Icon/leftArrow.png";
import rightArrow from "../../Asset/Icon/rightArrow.png";
import { leaderData } from "../../utils";

import style from "./team.module.scss";

function Team() {
  const [leaderCount, setLeaderCount] = useState(0);
  const [animationFlow, setAnimationFlow] = useState(true);
  return (
    <div className={style.whoWeAreContaineParent}>
      <div className={style.meetOurLeaderContainer}>
        <div className={style.leaderList}>
          <div className={style.meetLeaderLabelContainer}>
            <Animated
              animationIn="slideInLeft"
              animationOut="fadeOut"
              isVisible={true}
              animationInDelay={500}
              animationInDuration={1000}
              className={style.additionalStyle}
            >
              <div className={style.border} />
              <div className={style.meetLeaderLabel}>MEET THE TEAM</div>
            </Animated>
            <Animated
              animationIn="slideInRight"
              animationOut="fadeOut"
              isVisible={true}
              animationInDelay={500}
              animationInDuration={1000}
            >
              <div className={style.border} />
            </Animated>
          </div>
          <ul className={style.imgContainer}>
            <li className={style.listItem} key={1}>
              <img src={leaderOne} alt="leader" className={style.leaderImg} />
            </li>
            <li className={`${style.listItem} ${style.secondLeader}`} key={2}>
              <img src={leaderTwo} alt="leader" className={style.leaderImg} />
            </li>
            <li className={style.listItem} key={3}>
              <img src={leaderThree} alt="leader" className={style.leaderImg} />
            </li>
          </ul>
        </div>
        <div className={`${style.leaderContainer}`}>
          <div className={style.outerImage}>
            <div className={style.outerImageOverlay} />
          </div>
          <div className={style.innerMiddelImgContainer}>
            <div className={style.innerMiddleImageOverlay} />
          </div>
          <div
            className={style.innerMostImgContainer}
            // style={{
            //   backgroundImage: `url(${leaderData[leaderCount].backgroundImg})`,
            // }}
          >
            {leaderCount === 0 && (
              <Animated
                animationIn={`${!animationFlow ? "fadeInUp" : "fadeInDown"}`}
                animationOut="fadeOut"
                isVisible={true}
                animationInDelay={500}
                animationInDuration={1000}
              >
                <img
                  src={leaderData[leaderCount].backgroundImg}
                  alt="leader background Image"
                  className={style.bgImg}
                />
              </Animated>
            )}
            {leaderCount === 1 && (
              <Animated
                animationIn={`${!animationFlow ? "fadeInUp" : "fadeInDown"}`}
                animationOut="fadeOut"
                isVisible={true}
                animationInDelay={500}
                animationInDuration={1000}
              >
                <img
                  src={leaderData[leaderCount].backgroundImg}
                  alt="leader background Image"
                  className={style.bgImg}
                />
              </Animated>
            )}
            {leaderCount === 2 && (
              <Animated
                animationIn={`${!animationFlow ? "fadeInUp" : "fadeInDown"}`}
                animationOut="fadeOut"
                isVisible={true}
                animationInDelay={500}
                animationInDuration={1000}
              >
                <img
                  src={leaderData[leaderCount].backgroundImg}
                  alt="leader background Image"
                  className={style.bgImg}
                />
              </Animated>
            )}
            <div className={style.containerDetials}>
              <div className={style.containerHeaing}>IB ENG</div>
              <div className={style.imgTextContainer}>
                {leaderCount === 0 && (
                  <Animated
                    animationIn={`${
                      !animationFlow ? "slideInRight" : "slideInLeft"
                    }`}
                    animationOut="fadeOut"
                    isVisible={true}
                    animationInDelay={500}
                    animationInDuration={1000}
                  >
                    <img src={leaderData[leaderCount].img} />
                  </Animated>
                )}
                {leaderCount === 1 && (
                  <Animated
                    animationIn={`${
                      !animationFlow ? "slideInRight" : "slideInLeft"
                    }`}
                    animationOut="fadeOut"
                    isVisible={true}
                    animationInDelay={500}
                    animationInDuration={1000}
                  >
                    <img src={leaderData[leaderCount].img} />
                  </Animated>
                )}
                {leaderCount === 2 && (
                  <Animated
                    animationIn={`${
                      !animationFlow ? "slideInRight" : "slideInLeft"
                    }`}
                    animationOut="fadeOut"
                    isVisible={true}
                    animationInDelay={500}
                    animationInDuration={1000}
                  >
                    <img src={leaderData[leaderCount].img} />
                  </Animated>
                )}
                <div className={style.detailsContainer}>
                  <div className={style.upperUnderlinedBorderParent}>
                    <div className={style.upperUnderlinedBorder} />
                  </div>
                  <div
                    className={`${style.leaderNameLabel} ${
                      leaderCount === 2 ? style.smFont : style.defaultFont
                    }`}
                  >
                    {leaderData[leaderCount].name}
                  </div>
                  <div className={style.designationLabel}>
                    {leaderData[leaderCount].designation}
                  </div>
                  <div className={style.subText}>
                    {leaderCount === 0 ? (
                      <>
                        A dynamic{" "}
                        <span className={style.boldText}>professional</span>,
                        serves as the Business Development Department Manager at
                        <span className={style.boldText}> IB Engineering.</span>
                      </>
                    ) : leaderCount === 1 ? (
                      <>
                        Is a rising star at{" "}
                        <span className={style.boldText}>IB ENG</span>. Started
                        as an intern, Today he is a licensed{" "}
                        <span className={style.boldText}>Engineer</span>, he
                        honed his skills under our founder's guidance.
                      </>
                    ) : (
                      <>
                        As the{" "}
                        <span className={style.boldText}>
                          dedicated leader{" "}
                        </span>{" "}
                        of our Interior Design Department, Rawan Beshara Sabah
                        brings a wealth of expertise to IB Engineering.
                      </>
                    )}
                  </div>
                  <div className={style.subText}>
                    {leaderCount === 0 ? (
                      <>
                        With a diverse educational background, including a
                        bachelor's degree in{" "}
                        <span className={style.boldText}>
                          law and business administration{" "}
                        </span>
                        from Reichman University and a master's degree in
                        <span className={style.boldText}>
                          {" "}
                          business administration{" "}
                        </span>{" "}
                        specializing in real estate and appraisals, Alaa brings
                        a unique blend of skills to the team.
                      </>
                    ) : leaderCount === 1 ? (
                      <>
                        His youthful{" "}
                        <span className={style.boldText}>
                          energy and extensive experience{" "}
                        </span>{" "}
                        drive our planning department's commitment to
                        excellence, ensuring that each project is meticulously
                        planned and{" "}
                        <span className={style.boldText}>
                          executed with precision.
                        </span>
                      </>
                    ) : (
                      <>
                        A distinguished alumna of the Technion with a degree in
                        <span className={style.boldText}>
                          civil engineering
                        </span>
                        , specialized in structures, and honored in interior
                        design, Rawan has been a registered engineer and
                        architect since 2009.
                      </>
                    )}
                  </div>
                  <div className={style.subText}>
                    {leaderCount === 0 ? (
                      <>
                        As a
                        <span className={style.boldText}>
                          serial founder, entrepreneur, and VP of sales,
                        </span>{" "}
                        he has played pivotal roles in several successful
                        companies. His visionary
                        <span className={style.boldText}>
                          leadership and extensive experience{" "}
                        </span>{" "}
                        contribute significantly to IB Engineering's growth and
                        success.
                      </>
                    ) : leaderCount === 1 ? (
                      <>
                        Mohammad's visionary leadership and collaborative.
                        Approach inspire our team to achieve new heights in the
                        world of{" "}
                        <span className={style.boldText}>
                          construction planning.
                        </span>
                      </>
                    ) : (
                      <>
                        With over{" "}
                        <span className={style.boldText}>
                          15 years of experience
                        </span>
                        , she has been the guiding force behind numerous
                        construction and{" "}
                        <span className={style.boldText}>
                          interior design projects
                        </span>
                        , particularly in residential towers across central and
                        northern regions.
                      </>
                    )}
                  </div>
                  {leaderCount === 2 && (
                    <div className={style.subText}>
                      Rawan's passion
                      <span className={style.boldText}>for art, fashion</span>,
                      and a discerning taste infuse her work with creativity and
                      innovation, elevating every project to new heights of
                      excellence.
                    </div>
                  )}
                  <div className={style.iconSignatureContainer}>
                    <div className={style.ogSignatureContainer}>
                      <img
                        src={linkedIn}
                        alt="LinkedIn"
                        className={style.icon}
                      />
                      {leaderCount === 0 ? (
                        <div className={style.signatureContainer}>
                          <img src={signature1_1} alt="sig1" />
                          <img src={signature1_2} alt="sig2" />
                        </div>
                      ) : leaderCount === 1 ? (
                        <div className={style.signatureContainerLeader2}>
                          <img
                            src={signature2_2}
                            alt="sig2"
                            className={style.mr_2}
                          />
                          <img src={signature2_1} alt="sig1" />
                        </div>
                      ) : (
                        <div className={style.signatureContainer}>
                          <img src={signature3} alt="sig1" />
                        </div>
                      )}
                    </div>
                    <div className={style.btnContainer}>
                      <div className={style.arrowContainer}>
                        <img
                          src={rightArrow}
                          alt="right"
                          className={style.icon}
                          onClick={(e) => {
                            leaderCount + 1 === leaderData.length
                              ? e.preventDefault()
                              : setLeaderCount((data) => data + 1);
                            setAnimationFlow(true);
                          }}
                        />
                      </div>
                      <div className={style.arrowContainer}>
                        <img
                          src={leftArrow}
                          alt="left"
                          className={style.icon}
                          onClick={(e) => {
                            leaderCount === 0
                              ? e.preventDefault()
                              : setLeaderCount((data) => data - 1);
                            setAnimationFlow(false);
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={style.innerMostImageOverlay} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
