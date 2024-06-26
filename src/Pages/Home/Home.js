import React, {
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { Animated } from "react-animated-css";
import Glide from "@glidejs/glide";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import hero1 from "../../Asset/Img/hero1.png";
import hero2 from "../../Asset/Img/hero2.png";
import hero3 from "../../Asset/Img/hero3.png";
import hero4 from "../../Asset/Img/hero4.png";
import forwardBtn from "../../Asset/Icon/ForwardButton.png";
import { brandData, serviceDataEng, serviceDataHebrew } from "../../utils";
import heroMobileImg1 from "../../Asset/Img/heroImgMobile1.png";
import heroMobileImg2 from "../../Asset/Img/heroImgMobile2.png";
import heroMobileImg3 from "../../Asset/Img/heroImgmobile3.png";

import style from "./home.module.scss";
import "glider-js/glider.min.css";
import ReactPlayer from "react-player";

const sliderConfiguration = {
  animationDuration: 2000,
  autoplay: 3000,
  dragDistance: false,
  gap: window.innerWidth <= 700 ? 4 : 2,
  hoverMouse: true,
  perView: window.innerWidth <= 700 ? 1 : 3,
  paddings: window.innerWidth <= 700 ? "0%" : "25%",
  reqwind: true,
  startAt: 0,
  type: window.innerWidth <= 700 ? "slider" : "carousel",
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

  const navigate = useNavigate();
  const { i18n, t } = useTranslation();

  const videoRef = useRef(null);

  useLayoutEffect(() => {
    window.scroll(0, 0);
  }, []);

  useEffect(() => {
    slider.mount();
  }, []);

  const serviceData =
    i18n.language === "en" ? serviceDataEng : serviceDataHebrew;

  const clients = useMemo(
    () => (
      <div className={`glide ${style.glide}`}>
        <div
          className={`glide__track ${style.noOverFlow}`}
          data-glide-el="track"
        >
          <ul className={style.client_cards}>
            {brandData.map((m) => (
              <li className={`glide__slide slider ${style.slideCard}`}>
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

  function getMobileOperatingSystem() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // Windows Phone must come first because its UA also contains "Android"
    if (/windows phone/i.test(userAgent)) {
      return "Windows Phone";
    }

    if (/android/i.test(userAgent)) {
      return "Android";
    }

    // iOS detection from: http://stackoverflow.com/a/9039885/177710
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      return "iOS";
    }

    return "unknown";
  }

  const operatingSystem = getMobileOperatingSystem();

  return (
    <div className={style.homeContainer}>
      <div className={style.heroContainer}>
        {operatingSystem === "unknown" || operatingSystem === "Android" ? (
          <ReactPlayer
            width="100%"
            height="50%"
            style={{
              position: "relative",
              width: "100%",
              zIndex: "99",
            }}
            ref={videoRef}
            // playsinline={true}
            controls={false}
            loop={true}
            muted={true}
            url={[
              {
                src: "https://ibeng.s3.ap-south-1.amazonaws.com/ibEngHeroVideo+(1).mp4",
                type: "video/mp4",
              },
            ]}
            playing={true}
          />
        ) : (
          <video
            ref={videoRef}
            playsInline={true}
            controls={true}
            className={style.videoPlayer}
            loop={true}
            muted={true}
          >
            <source
              src="https://ibeng.s3.ap-south-1.amazonaws.com/ibEngHeroVideo+(1).mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        )}

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
                i18n.language === "he" ? style.reverseCol : style.forwardCol
              }`}
            >
              <div
                className={`${style.imageTextContainer} ${
                  containerOne ? style.slide_out : style.slide_in
                } `}
              >
                <Animated
                  animationIn="slideInLeft"
                  animationOut="fadeOut"
                  isVisible={visionAnim}
                  animationInDelay={500}
                  animationInDuration={1000}
                >
                  <h1
                    className={`${style.mainHeading} ${
                      i18n.language === "he" ? style.hewText : style.engText
                    }`}
                  >
                    {t("homeVisionTitle")}
                  </h1>
                </Animated>
                <div
                  className={`${style.imageDescription}  ${
                    i18n.language === "he" && style.hewItem
                  }`}
                >
                  <Animated
                    animationIn="slideInRight"
                    animationOut="fadeOut"
                    isVisible={visionAnim}
                    animationInDelay={500}
                    animationInDuration={1000}
                    className={`${style.maxWidth}
                      ${
                        i18n.language === "he"
                          ? `${style.hewText} `
                          : style.engText
                      }`}
                  >
                    {i18n.language === "he" ? (
                      <>
                        <span className={style.highLight}>, אנו ה </span>
                        ב- איי.ביי הנדסה- One-Stop-Shop שלך לכל ההיבטים של תהליך
                        הבנייה. אנו מציעים מגוון רחב של שירותים המתחילים באיתור
                        ובדיקת הפוטנציאל של הקרקע, לאורך כל הדרך באמצעות תכנון,
                        ניהול, בנייה ואפילו עיצוב הפנים
                        <span className={style.highLight}>
                          באמצעות תכנון, ניהול, בנייה ואפילו עיצוב הפנים
                        </span>
                      </>
                    ) : (
                      <>
                        <span className={style.highLight}>At IB Eng, </span> we
                        are your one-stop-shop for all aspects of the
                        construction process. We offer a full range of services
                        that start with sourcing and checking the potential of
                        the land, all the way through planning, management,
                        construction, and even interior design.{" "}
                      </>
                    )}
                  </Animated>
                  {containerOne && (
                    <React.Fragment>
                      {i18n.language === "he" ? (
                        <React.Fragment>
                          <div
                            className={`${style.moreTextSubText} ${
                              i18n.language === "he"
                                ? style.hewText
                                : style.engText
                            }`}
                          >
                            צוות המקצוענים שלנו עומד לרשותכם בכל שלב, ומספק
                            פתרונות הנדסיים מותאמים ויצירתיים העונים על הצרכים
                            הספציפיים שלכם
                          </div>
                          <div
                            className={`${style.moreTextSubText} ${
                              i18n.language === "he"
                                ? style.hewText
                                : style.engText
                            }`}
                          >
                            אנו מחויבים להישאר מעודכנים בטכנולוגיה העדכנית ביותר
                            ולהשתמש בכלים מתקדמים כמו Building Information
                            Modeling (BIM) כדי לייעל את תהליך הבנייה ולהגביר את
                            היעילות
                          </div>
                          <div
                            className={`${style.moreTextSubText} ${
                              i18n.language === "he"
                                ? style.hewText
                                : style.engText
                            }`}
                          >
                            הגישה שלנו מתמקדת במציאת פתרונות יצירתיים המייעלים
                            הן את ההיבטים הבנייה והן התפעוליים של כל פרויקט,
                            ובסופו של דבר חוסכים ללקוחותינו זמן וכסף
                          </div>
                          <div
                            className={`${style.moreTextSubText} ${
                              i18n.language === "he"
                                ? style.hewText
                                : style.engText
                            }`}
                          >
                            ב-איי.ביי הנדסה, אנו גאים ביכולתנו לספק שירות מקיף
                            ומותאם אישית לכל אחד ואחת מלקוחותינו. בין אם אתם
                            מחפשים לבנות בית חדש, לשפץ בניין קיים או לבצע פרויקט
                            מסחרי, אנחנו כאן כדי לעזור לכם להשיג את המטרות שלכם
                          </div>
                        </React.Fragment>
                      ) : (
                        <React.Fragment>
                          <div
                            className={`${style.moreTextSubText} ${
                              i18n.language === "he"
                                ? style.hewText
                                : style.engText
                            }`}
                          >
                            Our team of professionals is there for you every
                            step of the way, providing customized and creative
                            engineering solutions that meet your specific needs.
                          </div>
                          <div
                            className={`${style.moreTextSubText} ${
                              i18n.language === "he"
                                ? style.hewText
                                : style.engText
                            }`}
                          >
                            We are committed to staying up-to-date with the
                            latest technology and using cutting-edge tools like
                            Building Information Modeling (BIM) to streamline
                            the construction process and increase efficiency.
                            Our approach is focused on finding creative
                            solutions that optimize both the construction and
                            operational aspects of each project, ultimately
                            saving our clients time and money.
                          </div>
                          <div
                            className={`${style.moreTextSubText} ${
                              i18n.language === "he"
                                ? style.hewText
                                : style.engText
                            }`}
                          >
                            At IB Eng, we take pride in our ability to provide
                            comprehensive and personalized service to each and
                            every one of our clients. Whether you are looking to
                            build a new home, renovate an existing building, or
                            undertake a commercial project, we are here to help
                            you achieve your goals.
                          </div>
                        </React.Fragment>
                      )}
                    </React.Fragment>
                  )}
                </div>
                <Animated
                  className={`${style.showMoreContainer} ${
                    i18n.language === "he" ? style.hewItem : style.engText
                  }`}
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
                    {i18n.language === "en" && t("homeContainerOneShow")}{" "}
                    {containerOne
                      ? t("homeContainerOneShowLess")
                      : t("homeContainerOneShowMore")}{" "}
                    {i18n.language === "he" && t("homeContainerOneShow")}
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
                <img
                  onClick={() => navigate("/missionAndVision")}
                  src={forwardBtn}
                  alt="view"
                  className={`${style.viewIcon} ${
                    i18n.language === "he" && style.icon180
                  }`}
                />
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
            } `}
          >
            <div
              className={`${style.detialsContainer} ${
                i18n.language === "he" ? style.reverseCol : style.forwardCol
              }`}
            >
              <div
                className={`${style.imageTextContainer}  ${
                  containerTwo ? style.slide_in2 : style.slide_out2
                } `}
              >
                <Animated
                  animationIn="slideInLeft"
                  isVisible={missionAnim}
                  animationInDelay={500}
                  animationInDuration={1000}
                >
                  <h1
                    className={`${style.mainHeading} ${
                      i18n.language === "he" ? style.hewText : style.engText
                    }`}
                  >
                    {t("homeMissionTitle")}
                  </h1>
                </Animated>
                <Animated
                  animationIn="slideInRight"
                  isVisible={missionAnim}
                  animationInDelay={500}
                  animationInDuration={1000}
                >
                  <div
                    className={`${style.imageDescription}  ${
                      i18n.language === "he" && style.hewItem
                    }`}
                  >
                    <Animated
                      animationIn="slideInRight"
                      animationOut="fadeOut"
                      isVisible={visionAnim}
                      animationInDelay={500}
                      animationInDuration={1000}
                      className={`${style.maxWidth}
                      ${
                        i18n.language === "he"
                          ? `${style.hewText} `
                          : style.engText
                      }`}
                    >
                      {i18n.language === "en" ? (
                        <React.Fragment>
                          {!containerTwo ? (
                            <div
                              className={`${style.moreTextSubText} ${
                                i18n.language === "he"
                                  ? style.hewText
                                  : style.engText
                              }`}
                            >
                              At IB Engineering, our mission is to serve as your
                              comprehensive partner in construction, offering a
                              full spectrum of services that seamlessly guide
                              your projects from inception to realization.
                            </div>
                          ) : (
                            <React.Fragment>
                              <div
                                className={`${style.moreTextSubText} ${
                                  i18n.language === "he"
                                    ? style.hewText
                                    : style.engText
                                }`}
                              >
                                At IB Engineering, our mission is to serve as
                                your comprehensive partner in construction,
                                offering a full spectrum of services that
                                seamlessly guide your projects from inception to
                                realization.
                              </div>{" "}
                              <div
                                className={`${style.moreTextSubText} ${
                                  i18n.language === "he"
                                    ? style.hewText
                                    : style.engText
                                }`}
                              >
                                Our commitment extends beyond the drawing board;
                                we actively manage every aspect of your project,
                                keeping a keen eye on both construction and
                                operational elements.
                              </div>
                              <div
                                className={`${style.moreTextSubText} ${
                                  i18n.language === "he"
                                    ? style.hewText
                                    : style.engText
                                }`}
                              >
                                We embark on this mission by beginning with
                                thorough land assessment, ensuring that your
                                chosen site aligns perfectly with your vision.
                                From there, our dedicated team employs the
                                latest advancements in technology to craft
                                meticulous plans that optimize efficiency and
                                precision.
                              </div>
                              <div
                                className={`${style.moreTextSubText} ${
                                  i18n.language === "he"
                                    ? style.hewText
                                    : style.engText
                                }`}
                              >
                                At IB Engineering, we take immense pride in
                                offering personalized service and expertise
                                tailored to your unique needs. Whether you
                                aspire to build a new home, breathe new life
                                into an existing structure or embark on a
                                commercial venture, we are your perfect partner,
                                ready to transform your construction dreams into
                                reality.
                              </div>
                            </React.Fragment>
                          )}
                        </React.Fragment>
                      ) : (
                        <React.Fragment>
                          {!containerTwo ? (
                            <>
                              <span className={style.highLight}>ב-איי</span>{" "}
                              ב-איי.ביי הנדסה משימתנו היא לשמש שותף מקיף בתחום
                              הבנייה תוך הצעת מגוון שירותים המנחים את הפרויקטים
                              שלך מהרגע הראשון ועד להגשמתם
                            </>
                          ) : (
                            <>
                              <div
                                className={`${style.moreTextSubText} ${
                                  i18n.language === "he"
                                    ? style.hewText
                                    : style.engText
                                }`}
                              >
                                <span className={style.highLight}>ב-איי</span>{" "}
                                ב-איי.ביי הנדסה משימתנו היא לשמש שותף מקיף בתחום
                                הבנייה תוך הצעת מגוון שירותים המנחים את
                                הפרויקטים שלך מהרגע הראשון ועד להגשמתם
                              </div>
                              <div
                                className={`${style.moreTextSubText} ${
                                  i18n.language === "he"
                                    ? style.hewText
                                    : style.engText
                                }`}
                              >
                                המחויבות שלנו משתרעת מעבר ללוח השרטוט; אנו
                                מנהלים באופן פעיל כל היבט של הפרויקט שלך, תוך
                                שמירה קפדנית על שני המרכיבים התפעוליים של
                                הבנייה.
                              </div>
                              <div
                                className={`${style.moreTextSubText} ${
                                  i18n.language === "he"
                                    ? style.hewText
                                    : style.engText
                                }`}
                              >
                                משם, צוותנו המסור מעסיק את ההתקדמויות העדכניות
                                ביותר בטכנולוגיה כדי ליצור תוכניות מדוקדקות
                                הממקסמות יעילות ודיוק. התחייבותנו נטויה מעבר
                                ללוח השרטוטים, אנו ניהולם באופן פעיל לכל פקטור
                                בפרויקט שלך, תוך שמירה על עין חדה הן על אלמנטים
                                של הבנייה והן על ההיבטים התפעוליים
                              </div>
                              <div
                                className={`${style.moreTextSubText} ${
                                  i18n.language === "he"
                                    ? style.hewText
                                    : style.engText
                                }`}
                              >
                                אנו מתגאים באופן עצום בהצעת שירות אישי ומומחיות
                                המותאמים לצרכים הייחודיים שלך בין אם אתה שואף
                                לבנות בית חדש, להנשים חיים חדשים במבנה קיים או
                                להתחיל ביוזמה מסחרית, אנו השותף המושלם עבורך,
                                מוכנים להפוך את חלומות הבנייה שלך למציאות
                              </div>
                            </>
                          )}
                        </React.Fragment>
                      )}
                    </Animated>
                  </div>
                </Animated>
                <Animated
                  animationIn="slideInLeft"
                  isVisible={missionAnim}
                  animationInDelay={500}
                  animationInDuration={1000}
                  className={`${style.showMoreContainer} ${
                    i18n.language === "he" ? style.hewItem : style.engText
                  }`}
                >
                  <div
                    className={style.showMore}
                    onClick={() => setContainerTwo(!containerTwo)}
                  >
                    {i18n.language === "en" && t("homeContainerOneShow")}{" "}
                    {containerTwo
                      ? t("homeContainerOneShowLess")
                      : t("homeContainerOneShowMore")}{" "}
                    {i18n.language === "he" && t("homeContainerOneShow")}
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
                <img
                  onClick={() => navigate("/missionAndVision")}
                  src={forwardBtn}
                  alt="view"
                  className={`${style.viewIcon} ${
                    i18n.language === "he" && style.icon180
                  }`}
                />
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
                <div className={style.primaryHeading}>
                  {t("serviceHeading")}
                </div>
              </Animated>
              <Animated
                animationIn="slideInRight"
                isVisible={serviceAnim}
                animationInDelay={500}
                animationInDuration={1000}
              >
                <div className={style.secondaryHeading}>
                  {t("serviceHeadingSecondary")}
                </div>
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
                <div
                  className={style.serviceCard}
                  key={m.id}
                  onClick={() => navigate("/whatWeDO")}
                >
                  <img
                    src={m.icon}
                    alt="service"
                    className={style.serviceIcon}
                  />
                  <div className={style.cardText}>{m.label}</div>
                  <div className={style.cardLearMoreContainer}>
                    <div className={style.cardLearMore}>{t("learnMore")}</div>
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
