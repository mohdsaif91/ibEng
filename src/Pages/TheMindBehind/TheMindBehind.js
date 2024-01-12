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

function TheMindBehind() {
  const [containerOne, setContainerOne] = useState(false);
  const [containerTwo, setContainerTwo] = useState(false);
  const [containerThree, setContainerThree] = useState(false);
  const [containerFour, setContainerfour] = useState(false);
  const [containerFive, setContainerFive] = useState(false);
  const [isMobile] = useState(
    Math.min(window.screen.width, window.screen.height) < 768 ||
      navigator.userAgent.indexOf("Mobi") > -1
  );

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
            <h1 className={style.heading}>המוח מאחורי </h1>
            <h1 className={style.heading}>איי.ביי הנדסה</h1>
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
              {
                "המייסד שלנו הוא המהנדס עיסא בשארה, מהנדס בניין מנוסה ומוכשר ביותר, עיסא בעל תואר שני בהנדסת בניין ומתמחה ברעידות אדמה והנדסת תנועה ותחבורה. רשום בפנקס המהנדסים והאדריכלים משנת 1979, עיסא שימש כמהנדס העיר נצרת בשנים 1992 עד 2016 וחבר בוועדות היגוי מטעם משרד התחבורה ומשרד הבינוי והשיכון"
              }
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
                  translate="yes"
                  className={`${style.heading} ${style.containerTwoHeadingWidth}`}
                >
                  {
                    "עיסא היה גם שותף מרכזי בצוותים לעריכת תיקי הנחיות לתכנון נתיבי תחבורה ציבורית, מערכות הסעת המונים במטרופולין חיפה, תוכניות אב תחבורתיות למחוזות חיפה והצפון ופרויקטים של תשתית גדולים נוספים"
                  }
                </div>
                <div
                  className={`${style.heading} ${style.containerTwoHeadingWidth} ${style.marginTop}`}
                >
                  {
                    " עיסא בשארה תמיד היה נלהב מעבודתו בתחום ההנדסה והבנייה עם עשרות שנות ניסיון בתכנון, ניהול ופיקוח על פרויקטים במגזר הציבורי, המגורים, המסחר והתשתיות, עיסא יצר מוניטין של "
                  }
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
                    {"מצויינות בהנדסה, יצירת חדשנות של מחר מהיום, בלב ישראל"}
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
                    {
                      " יש לו התמקדות חזקה ביצירתיות, יעילות ושביעות רצון לקוחות. בנוסף, יש לו מגוון רחב של תחביבים ותחומי עניין, כמו טיולים, סודוקו וגינון. מצוינות עם למעלה מארבעה עשורים של ניסיון בתעשייה, לעיסא יש מוניטין של פתרונות חדשניים והבנה עמוקה של פרויקטי בנייה מורכבים"
                    }
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
                  <div
                    className={`${style.heading} ${style.headingFiveWidth}`}
                    translate="yes"
                  >
                    {
                      " שימש כמהנדס העיר נצרת והיה מעורב במספר ועדות היגוי של משרד התחבורה ומשרד הבינוי המייסד שלנו מחויב להישאר מעודכן עם ההתקדמות העדכנית ביותר בטכנולוגיה ובתוכנה על מנת לספק את השירותים האיכותיים ביותר ללקוחותינו. הוא נוקט בגישה הוליסטית לפרויקטים, תוך התחשבות לא רק בהיבט הבנייה אלא גם בהיבטים התפקודיים"
                    }
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
                    {
                      "המייסד שלנו עיסא נלהב להעביר את הידע והניסיון שלו לדור הבא של מהנדסים ואנשי מקצוע בתחום הבנייה. הוא היה מעורב בתוכניות הכשרה וליווי ליצירת מורשת של מצוינות ומקצועיות בתעשייה"
                    }
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
