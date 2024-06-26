import React, { useState } from "react";
import { Animated } from "react-animated-css";
import { useTranslation } from "react-i18next";

import leaderOne from "../../Asset/Img/leaderOne.png";
import leaderTwo from "../../Asset/Img/leaderTwo.png";
import leaderThree from "../../Asset/Img/leaderThree.png";
import signature1_1 from "../../Asset/Img/signature1.1.png";
import signature1_2 from "../../Asset/Img/signature1.2.png";
import signature2_1 from "../../Asset/Img/signature2.png";
import signature2_2 from "../../Asset/Img/signature2.2.png";
import signature3 from "../../Asset/Img/signature3.png";
import linkedIn from "../../Asset/Icon/LinkedIn.png";
import leftArrow from "../../Asset/Icon/leftArrowIcon.png";
import rightArrow from "../../Asset/Icon/rightArrowIcon.png";
import { leaderData } from "../../utils";

import style from "./team.module.scss";

function Team() {
  const [leaderCount, setLeaderCount] = useState(0);
  const [animationFlow, setAnimationFlow] = useState(true);
  const [isMobile] = useState(
    Math.min(window.screen.width, window.screen.height) < 768 ||
      navigator.userAgent.indexOf("Mobi") > -1
  );
  const { i18n, t } = useTranslation();

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
              <div className={style.meetLeaderLabel}>{t("teamTitle")}</div>
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
              <img src={leaderThree} alt="leader" className={style.leaderImg} />
            </li>
            <li className={`${style.listItem} ${style.secondLeader}`} key={2}>
              <img src={leaderOne} alt="leader" className={style.leaderImg} />
            </li>
            <li className={`${style.listItem} ${style.thirdLeader}`} key={3}>
              <img src={leaderTwo} alt="leader" className={style.leaderImg} />
            </li>
          </ul>
        </div>
        {isMobile ? (
          <div className={style.mobileLeaderContainer}>
            <img
              src={leaderData[leaderCount].backgroundImg2}
              alt="bcakground"
              className={style.mobileBackgroundImage}
            />
            <div className={style.imageMobileBackgroundHighlight}>
              <div className={style.leadernameImgContainer}>
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
                    <img
                      alt=""
                      src={leaderData[leaderCount].img}
                      className={style.mobileImg}
                    />
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
                    <img
                      alt=""
                      src={leaderData[leaderCount].img}
                      className={style.mobileImg}
                    />
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
                    <img
                      alt=""
                      src={leaderData[leaderCount].img}
                      className={style.mobileImg}
                    />
                  </Animated>
                )}
                <div className={style.leaderNameContainer}>
                  <div className={style.leaderNameLabel}>
                    {leaderData[leaderCount].name}
                  </div>
                  <div className={style.designationLabel}>
                    {leaderCount === 0
                      ? t("leaderOneMainText")
                      : leaderCount === 1
                      ? t("leaderTwoMainText")
                      : t("leaderThreeMainText")}
                  </div>
                </div>
              </div>
              <div
                className={`${style.leaderMobileDiscription} ${style.subText} ${
                  i18n.language === "en" ? style.textLeft : style.textRight
                }`}
              >
                <div className={style.subText}>
                  {leaderCount === 0 ? (
                    <>{t("leaderTextOne")}</>
                  ) : leaderCount === 1 ? (
                    <>{t("leaderTextTwoOne")}</>
                  ) : (
                    <>{t("leaderTextThreeOne")}</>
                  )}
                </div>
                <div className={style.subText}>
                  {leaderCount === 0 ? (
                    <>{t("leaderTextTwo")}</>
                  ) : leaderCount === 1 ? (
                    <>{t("leaderTextTwoTwo")}</>
                  ) : (
                    <>{t("leaderTextThreeTwo")}</>
                  )}
                </div>
                <div className={style.subText}>
                  {leaderCount === 0 ? (
                    <>{t("leaderTextThree")}</>
                  ) : leaderCount === 1 ? (
                    <>{t("leaderTextTwoThree")}</>
                  ) : (
                    <>{t("leaderTextThreeThree")}</>
                  )}
                </div>
                {leaderCount === 2 && (
                  <div className={style.subText}>
                    {t("leaderTextThreeFour")}
                  </div>
                )}
              </div>
              <div className={style.MobileIconSignatureContainer}>
                <div className={style.mobileOgSignatureContainer}>
                  <img src={linkedIn} alt="LinkedIn" className={style.icon} />
                  {leaderCount === 0 ? (
                    <div className={style.signatureContainer}>
                      <img
                        src={signature1_1}
                        className={style.sigImage}
                        alt="sig1"
                      />
                      <img
                        src={signature1_2}
                        alt="sig2"
                        className={style.sigImage}
                      />
                    </div>
                  ) : leaderCount === 1 ? (
                    <div className={style.signatureContainer}>
                      <img
                        src={signature2_2}
                        alt="sig2"
                        className={style.sigImage}
                      />
                      <img
                        src={signature2_1}
                        alt="sig1"
                        className={style.sigImage}
                      />
                    </div>
                  ) : (
                    <div className={style.signatureContainer}>
                      <img
                        src={signature3}
                        alt="sig1"
                        className={style.sigImage}
                      />
                    </div>
                  )}
                </div>
                <div className={style.mobilBtnContainer}>
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
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className={`${style.leaderContainer}`}>
            <div className={style.outerImage}>
              <div className={style.outerImageOverlay} />
            </div>
            <div className={style.innerMiddelImgContainer}>
              <div className={style.innerMiddleImageOverlay} />
            </div>
            <div className={style.innerMostImgContainer}>
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
                      {leaderCount === 0
                        ? t("leaderOneMainText")
                        : leaderCount === 1
                        ? t("leaderTwoMainText")
                        : t("leaderThreeMainText")}
                    </div>
                    <div className={style.subText}>
                      {leaderCount === 0 ? (
                        <>{t("leaderTextOne")}</>
                      ) : leaderCount === 1 ? (
                        <>{t("leaderTextTwoOne")}</>
                      ) : (
                        <>{t("leaderTextThreeOne")}</>
                      )}
                    </div>
                    <div className={style.subText}>
                      {leaderCount === 0 ? (
                        <>{t("leaderTextTwo")}</>
                      ) : leaderCount === 1 ? (
                        <>{t("leaderTextTwoTwo")}</>
                      ) : (
                        <>{t("leaderTextThreeTwo")}</>
                      )}
                    </div>
                    <div className={style.subText}>
                      {leaderCount === 0 ? (
                        <>{t("leaderTextThree")}</>
                      ) : leaderCount === 1 ? (
                        <>{t("leaderTextTwoThree")}</>
                      ) : (
                        <>{t("leaderTextThreeThree")}</>
                      )}
                    </div>
                    {leaderCount === 2 && (
                      <div className={style.subText}>
                        {t("leaderTextThreeFour")}
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
        )}
      </div>
    </div>
  );
}

export default Team;
