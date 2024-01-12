import React, { useState } from "react";
import { Animated } from "react-animated-css";

import heroImg from "../../Asset/Img/whoAreWeHeroImg.png";
import intialConOne from "../../Asset/Img/initialConOne.png";
import intialConTow from "../../Asset/Img/initialConTwo.png";
import heroImgMobile from "../../Asset/Img/missionAndVIsionMobile.jpeg";

import style from "./missionAndVision.module.scss";

function MissionAndVision() {
  const [containerOne, setContainerOne] = useState(false);
  const [containerTwo, setContainerTwo] = useState(false);
  const [containerThree, setContainerThree] = useState(false);
  const [isMobile] = useState(
    Math.min(window.screen.width, window.screen.height) < 768 ||
      navigator.userAgent.indexOf("Mobi") > -1
  );
  console.log(isMobile);

  return (
    <div className={style.whoWeAreContaineParent}>
      <div className={style.heroContainer}>
        <div className={style.imgTextContainer}>
          <img
            alt="hero img"
            src={isMobile ? heroImgMobile : heroImg}
            className={style.heroImg}
          />
          <div className={style.heroImgOverLay} />
          <Animated
            animationIn="slideInLeft"
            animationOut="fadeOut"
            isVisible={true}
            animationInDelay={500}
            animationInDuration={1000}
          >
            <div className={style.heroText}>
              <div className={style.borderUnderLine}>החזון והמשימה</div>
            </div>
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
            <div className={style.rectBox}>החזון והמשימה</div>
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
                ב- איי.ביי הנדסה, אנו החנות הOne-Stop-Shop שלך לכל ההיבטים של
                תהליך הבנייה. אנו מציעים מגוון רחב של שירותים המתחילים באיתור
                ובדיקת הפוטנציאל של הקרקע, לאורך כל הדרך באמצעות תכנון, ניהול,
                בנייה ואפילו עיצובהפנים
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
                צוות המקצוענים שלנו עומד לרשותכם בכל שלב, ומספק פתרונות הנדסיים
                מותאמים ויצירתיים העונים על הצרכים הספציפיים שלכם
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
              <img
                src={intialConOne}
                alt="initial"
                className={style.initialOneImg}
              />
              <div
                className={
                  isMobile ? style.mobileBlackHighlight : style.blackHighlight
                }
              >
                <div
                  className={`${style.textContainer} ${
                    isMobile && style.mobileText
                  }`}
                >
                  <div className={style.text}>
                    Building Information Modeling (BIM) כדי לייעל את תהליך
                    הבנייה ולהגביר את היעילות אנו מחויבים להישאר מעודכנים
                    בטכנולוגיה העדכנית ביותר ולהשתמש בכלים מתקדמים כמו
                  </div>
                  <div className={style.text}>
                    הגישה שלנו מתמקדת במציאת פתרונות יצירתיים המייעלים הן את
                    ההיבטים הבנייה והן התפעוליים של כל פרויקט, ובסופו של דבר
                    חוסכים ללקוחותינו זמן וכסף
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
                animationIn="slideInRight"
                animationOut="fadeInUp"
                isVisible={containerTwo}
                animationInDelay={500}
                animationInDuration={1000}
                className={`${style.vissionContainer} ${style.withBorderLTR} ${style.containerThreePosition}`}
              >
                <div className={style.rectBox}>משימה</div>
              </Animated>
              <div className={style.verticalLine} />
              <Animated
                animationIn="slideInLeft"
                animationOut="fadeInUp"
                isVisible={containerTwo}
                animationInDelay={500}
                animationInDuration={1000}
              >
                <div
                  className={`${style.heading} ${style.initialContainerThreeText} ${style.smallLaptopMargin}`}
                >
                  ב-איי.ביי הנדסה משימתנו היא לשמש שותף מקיף בתחום הבנייה, תוך
                  הצעת מגוון שירותים המנחים את הפרויקטים שלך מהרגע הראשון ועד
                  להגשמתם. אנו מתחילים את משימה זו בעריכת הערכה יסודית של הקרקע,
                  ודואגים שהאתר שבחרת יתאים באופן מושלם לחזון שלך
                </div>
                <div
                  className={`${style.heading} ${style.initialContainerThreeText} ${style.smallLaptopMargin}`}
                >
                  משם, צוותנו המסור מעסיק את ההתקדמויות העדכניות ביותר
                  בטכנולוגיה כדי ליצור תוכניות מדוקדקות הממקסמות יעילות ודיוק.
                  התחייבותנו נטויה מעבר ללוח השרטוטים, אנו ניהולם באופן פעיל לכל
                  פקטור בפרויקט שלך, תוך שמירה על עין חדה הן על אלמנטים של
                  הבנייה והן על ההיבטים התפעוליים
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
                <div
                  className={
                    isMobile ? style.mobileHighlight : style.blackHighlight
                  }
                >
                  <div
                    className={`${style.textContainer} ${
                      isMobile && style.mobileText
                    }`}
                  >
                    <div className={style.text}>
                      אנו מתגאים באופן עצום בהצעת שירות אישי ומומחיות המותאמים
                      לצרכים הייחודיים שלך
                    </div>
                    <div className={style.text}>
                      בין אם אתה שואף לבנות בית חדש, להנשים חיים חדשים במבנה
                      קיים או להתחיל ביוזמה מסחרית, אנו השותף המושלם עבורך,
                      מוכנים להפוך את חלומות הבנייה שלך למציאות
                    </div>
                  </div>
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
