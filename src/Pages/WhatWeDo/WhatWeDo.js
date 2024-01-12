import React, { useState } from "react";
import { Animated } from "react-animated-css";

import containerOneImg from "../../Asset/Img/containeroneImg.png";
import containerTwoImg from "../../Asset/Img/containerTwoImg.png";
import greyContainer1 from "../../Asset/Img/greycontainer1.png";
import greyContainer2 from "../../Asset/Img/greyContainer2.png";
import greyContainer3 from "../../Asset/Img/greyContainer3.png";
import greyContainer4 from "../../Asset/Img/greyContainer4.png";
import whatWeDoMobile1 from "../../Asset/Img/whatWedoMobile1.png";
import whatWeDoMobile2 from "../../Asset/Img/whatWeDoMobile2.png";

import style from "./whatWeDo.module.scss";

function WhatWeDo() {
  const [containerOne, setContainerOne] = useState(false);
  const [containerTwo, setContainerTwo] = useState(false);
  const [containerThree, setContainerThree] = useState(false);
  const [containerFour, setContainerFour] = useState(false);
  const [isMobile] = useState(
    Math.min(window.screen.width, window.screen.height) < 768 ||
      navigator.userAgent.indexOf("Mobi") > -1
  );

  return (
    <div className={style.whatWeDoContainer}>
      <div className={style.twoColumnContainer}>
        <div className={style.containerOne}>
          <div className={style.containerOneCard}>
            {isMobile ? (
              <div className={style.mobileCardHeading}>
                <div className={style.heading1}>לתכנן</div>
                <div className={style.heading2}>לבנות</div>
                <div className={style.heading3}>להתפתח</div>
              </div>
            ) : (
              <div className={style.cardHeading}>
                לתכנן
                <br />
                לבנות
                <br />
                להתפתח
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
                  שירותי תכנון
                </div>
              </Animated>
              {/* <Animated
                className={style.mainGeadingZIndex}
                animationIn="fadeInDown"
                isVisible={true}
                animationInDelay={500}
                animationInDuration={1000}
              >
                <img
                  src={isMobile ? mobileRedDot : redDot}
                  alt="red Dot"
                  className={style.redDot}
                />
              </Animated> */}
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
                      חברתנו מתמחה בתכנון קונסטרוקציה ותנועה, אנו מציעים תמיכה
                      מקיפה ליזמים ויחידים שמטרתם להגשים את החזונות שלהם.
                    </div>
                    <div className={style.imgTextChild}>
                      צוות מהנדסי התכנון המומחים שלנו מצטיין ביצירת תוכניות
                      בנייה מדוקדקות ועומדות בסטנדרטים הגבוהים של התעשייה.
                    </div>
                    <div className={style.imgTextChild}>
                      מעבר לתכנון קונסטרוקציה ותנועה אנו מעניקים גם סיוע בהרכבת
                      `כל היועצים הנדרשים לתכנן פרויקט החלומות שלכם.
                    </div>
                  </Animated>
                )}
              </div>
            </div>
          </div>
        </div>
        <div
          className={`${style.imageTextContainerTwo} ${style.mobileImageTextContainerTwo}`}
          onMouseEnter={() => setContainerTwo(true)}
        >
          <div className={style.firstColumnContainer}>
            {!isMobile && (
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
                    פיקוח צמוד
                  </Animated>
                )}
              </div>
            )}
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
                    כחלק מהמחויבות שלנו לתכנון וניהול בניה, אנו מציעים שירותי
                    פיקוח צמוד לבניה שמבטיחים את הסטנדרטים הגבוהים ביותר של
                    איכות הבנייה.
                  </div>
                  <div className={style.imgTextChild}>
                    המפקחים המוסמכים שלנו מעריכים בקפדנות כל פרט בפרויקט שלך כדי
                    להבטיח שהוא עומד בתקנות התעשייה ובציפיות שלך.
                  </div>
                  <div className={style.imgTextChild}>
                    עם המומחיות שלנו, אתה יכול להשיג בביטחון איכות בנייה מעולה.
                  </div>
                </Animated>
              )}
            </div>
          </div>
          <div className={style.secondColumnContainer}>
            {isMobile && (
              <div className={style.headingImgContainerMobile}>
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
                    <span translate="yes">בדיקת מבנים</span>
                  </Animated>
                )}
              </div>
            )}
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
                  <div className={style.shade} />
                </Animated>
              )}
            </div>
          </div>
        </div>
        <div
          className={style.imageTextContainerThree}
          onMouseEnter={() => setContainerThree(true)}
        >
          <div className={style.firstColumnContainer}>
            {isMobile && (
              <div className={style.headingImgContainerMobile}>
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
                {containerThree && (
                  <Animated
                    animationIn="slideInLeft"
                    isVisible={true}
                    animationInDelay={500}
                    animationInDuration={1000}
                    className={style.containerHeadingTwo}
                  >
                    עיצוב פנים
                    <span className={style.headingIcon}>IN</span>
                  </Animated>
                )}
              </div>
            )}
            {containerThree && (
              <Animated
                animationIn="slideInLeft"
                isVisible={true}
                animationInDelay={500}
                animationInDuration={1000}
                className={`${style.imgShadeContainer} ${style.imgMarginTop}`}
              >
                <img
                  src={greyContainer3}
                  alt="img 1"
                  className={`${style.greyImage} `}
                />
                <div className={style.shade} />
              </Animated>
            )}
          </div>
          <div className={style.secondColumnContainer}>
            <div className={style.headingImgContainer}>
              {containerThree && !isMobile && (
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
                {containerThree && !isMobile && (
                  <Animated
                    animationIn="slideInRight"
                    isVisible={true}
                    animationInDelay={500}
                    animationInDuration={1000}
                    className={`${style.containerHeadingThree} `}
                  >
                    {/* <div > */}
                    <span translate="yes">עיצוב פנים</span>
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
                      <span translate="yes">
                        הפוך את החלל שלך ליצירת מופת עם מחלקת עיצוב הפנים
                        הייעודית שלנו.
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
                      <span translate="yes">
                        {" "}
                        צוות המומחים היצירתיים שלנו משתף איתך פעולה כדי להחיות
                        את שאיפות העיצוב שלך.
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
                      <span>
                        {" "}
                        בין אם מדובר בפרויקט מגורים או מסחרי, שירותי עיצוב הפנים
                        שלנו יוצר סביבה הרמונית שמתיישרת עם החזון שלך
                      </span>
                    </Animated>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`${style.imageTextContainerTwo} ${style.mobilePaddingContainerTwo} ${style.mobileImageTextContainerTwo}`}
          onClick={() => setContainerFour(true)}
          onMouseEnter={() => setContainerFour(true)}
        >
          <div className={style.firstColumnContainer}>
            {!isMobile && (
              <div
                className={`${style.headingImgContainer} ${style.additionalContainerFourClass}`}
              >
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
                    ייעוץ הנדסי
                  </Animated>
                )}
              </div>
            )}
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
                  <span translate="yes">
                    נצל את הניסיון העשיר שלנו עם שירותי הייעוץ ההנדסי.
                  </span>
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
                  <span translate="yes">
                    בין אם אתה יוצא לפרויקט חדש או מחפש תובנות לשיפור התוכניות
                    הקיימות, היועצים שלנו מציעים הכוונה מומחית.
                  </span>
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
                  מהמשגה של פרויקט ועד לניתוח עלויות, הייעוץ שלנו מאפשר לך לנווט
                  בפרויקט שלך בהצלחה ולהשיג את היעדים שלך
                </Animated>
              )}
            </div>
          </div>
          <div className={style.secondColumnContainer}>
            {isMobile && containerFour && (
              <div
                className={`${style.headingImgContainer} ${style.additionalContainerFourClass}`}
              >
                <Animated
                  className={style.mobileVerticalContainerFour}
                  animationIn="fadeInDown"
                  isVisible={true}
                  animationInDelay={500}
                  animationInDuration={1000}
                >
                  <div className={style.verticalLine} />
                </Animated>
                <Animated
                  animationIn="slideInLeft"
                  isVisible={true}
                  animationInDelay={500}
                  animationInDuration={1000}
                  className={`${style.containerHeadingFour} `}
                >
                  ייעוץ הנדסי
                </Animated>
              </div>
            )}
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
      </div>
    </div>
  );
}

export default WhatWeDo;
