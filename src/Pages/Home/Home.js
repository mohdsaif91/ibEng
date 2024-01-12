import React, { useEffect, useLayoutEffect, useMemo, useState } from "react";
import { Animated } from "react-animated-css";
import Glide from "@glidejs/glide";

// slideInLeft

import hero1 from "../../Asset/Img/hero1.png";
import hero2 from "../../Asset/Img/hero2.png";
import hero3 from "../../Asset/Img/hero3.png";
import hero4 from "../../Asset/Img/hero4.png";
import forwardBtn from "../../Asset/Icon/ForwardButton.png";
import { brandData, serviceData } from "../../utils";
import heroMobileImg1 from "../../Asset/Img/heroImgMobile1.png";
import heroMobileImg2 from "../../Asset/Img/heroImgMobile2.png";
import heroMobileImg3 from "../../Asset/Img/heroImgmobile3.png";

import style from "./home.module.scss";
import "glider-js/glider.min.css";

const sliderConfiguration = {
  animationDuration: 1000,
  autoplay: 2000,
  dragDistance: false,
  gap: 2,
  hoverMouse: false,
  perView: window.innerWidth <= 700 ? 2 : 3,
  paddings: window.innerWidth <= 700 ? "2%" : "25%",
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
  const [mobile] = useState(
    Math.min(window.screen.width, window.screen.height) < 768 ||
      navigator.userAgent.indexOf("Mobi") > -1
  );
  console.log(window.innerWidth <= 700 ? 3 : 2);

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
        <img
          src={mobile ? heroMobileImg1 : hero1}
          alt=""
          className={`${style.heroImg} ${style.firstHeroImg}`}
        />
        <div className={style.hero1imgOverlay} />
        <div
          className={`${style.heroImageContainer} ${style.marginTopHero2}`}
          onMouseEnter={() => setVisionAnim(true)}
        >
          <img
            src={mobile ? heroMobileImg2 : hero2}
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
                  <h1 className={style.mainHeading}>חזון</h1>
                </Animated>
                <div className={`${style.imageDescription}`}>
                  <Animated
                    animationIn="slideInRight"
                    animationOut="fadeOut"
                    isVisible={visionAnim}
                    animationInDelay={500}
                    animationInDuration={1000}
                  >
                    <span className={style.highLight}>, אנו ה </span>
                    ב- איי.ביי הנדסה- One-Stop-Shop שלך לכל ההיבטים של תהליך
                    הבנייה. אנו מציעים מגוון רחב של שירותים המתחילים באיתור
                    ובדיקת הפוטנציאל של הקרקע, לאורך כל הדרך באמצעות תכנון,
                    ניהול, בנייה ואפילו עיצוב הפנים
                    <span className={style.highLight}>
                      באמצעות תכנון, ניהול, בנייה ואפילו עיצוב הפנים
                    </span>
                  </Animated>
                  {containerOne && (
                    <React.Fragment>
                      <div className={style.moreTextSubText}>
                        צוות המקצוענים שלנו עומד לרשותכם בכל שלב, ומספק פתרונות
                        הנדסיים מותאמים ויצירתיים העונים על הצרכים הספציפיים
                        שלכם
                      </div>
                      <div className={style.moreTextSubText}>
                        אנו מחויבים להישאר מעודכנים בטכנולוגיה העדכנית ביותר
                        ולהשתמש בכלים מתקדמים כמו Building Information Modeling
                        (BIM) כדי לייעל את תהליך הבנייה ולהגביר את היעילות
                      </div>
                      <div className={style.moreTextSubText}>
                        הגישה שלנו מתמקדת במציאת פתרונות יצירתיים המייעלים הן את
                        ההיבטים הבנייה והן התפעוליים של כל פרויקט, ובסופו של דבר
                        חוסכים ללקוחותינו זמן וכסף
                      </div>
                      <div className={style.moreTextSubText}>
                        ב-איי.ביי הנדסה, אנו גאים ביכולתנו לספק שירות מקיף
                        ומותאם אישית לכל אחד ואחת מלקוחותינו. בין אם אתם מחפשים
                        לבנות בית חדש, לשפץ בניין קיים או לבצע פרויקט מסחרי,
                        אנחנו כאן כדי לעזור לכם להשיג את המטרות שלכם
                      </div>
                    </React.Fragment>
                  )}
                </div>
                <Animated
                  className={style.showMoreContainer}
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
                    {containerOne ? "פָּחוֹת" : "יותר"} הופעה
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
          className={`${style.heroImageContainer} ${style.marginTopHero3}`}
          onMouseEnter={() => setMissionAnim(true)}
        >
          <img
            src={mobile ? heroMobileImg3 : hero3}
            alt=""
            className={style.heroImg}
          />
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
                  <h1 className={style.mainHeading}>משימה</h1>
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
                        <span className={style.highLight}>ב-איי</span> ב-איי.ביי
                        הנדסה משימתנו היא לשמש שותף מקיף בתחום הבנייה תוך הצעת
                        מגוון שירותים המנחים את הפרויקטים שלך מהרגע הראשון ועד
                        להגשמתם
                      </>
                    ) : (
                      <>
                        <div className={style.moreTextSubText}>
                          משם, צוותנו המסור מעסיק את ההתקדמויות העדכניות ביותר
                          בטכנולוגיה כדי ליצור תוכניות מדוקדקות הממקסמות יעילות
                          ודיוק. התחייבותנו נטויה מעבר ללוח השרטוטים, אנו ניהולם
                          באופן פעיל לכל פקטור בפרויקט שלך, תוך שמירה על עין חדה
                          הן על אלמנטים של הבנייה והן על ההיבטים התפעוליים
                        </div>
                        <div className={style.moreTextSubText}>
                          אנו מתגאים באופן עצום בהצעת שירות אישי ומומחיות
                          המותאמים לצרכים הייחודיים שלך בין אם אתה שואף לבנות
                          בית חדש, להנשים חיים חדשים במבנה קיים או להתחיל ביוזמה
                          מסחרית, אנו השותף המושלם עבורך, מוכנים להפוך את חלומות
                          הבנייה שלך למציאות
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
                    {containerTwo ? "פָּחוֹת" : "יותר"} הופעה
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
          {!mobile && <img src={hero4} alt="" className={style.heroImg} />}
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
                <div className={style.primaryHeading}>מה אנחנו עושים</div>
              </Animated>
              <Animated
                animationIn="slideInRight"
                isVisible={serviceAnim}
                animationInDelay={500}
                animationInDuration={1000}
              >
                <div className={style.secondaryHeading}>השירותים שלנו</div>
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
                // <>
                //   {mobile ? (
                //     <div className={style.serviceCardMobile}>JACK</div>
                //   ) : (
                <div className={style.serviceCard} key={m.id}>
                  <img
                    src={m.icon}
                    alt="service"
                    className={style.serviceIcon}
                  />
                  <div className={style.cardText}>{m.label}</div>
                  <div className={style.cardLearMoreContainer}>
                    <div className={style.cardLearMore}>לראות עוד</div>
                  </div>
                </div>
                //   )}
                // </>
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
