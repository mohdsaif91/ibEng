import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: {
      translation: {
        missionVission: "MISSION AND VISION",
        theBrainBehind: "the brain behind IB ENG",
        meetTheLeaders: "Meet the leaders",
        homeVisionTitle: "IB VISION",
        homeContainerOneShow: "Show",
        homeContainerOneShowLess: "Less",
        homeContainerOneShowMore: "More",
        homeMissionTitle: "IB MISSION",
        serviceHeading: "What  We Do",
        serviceHeadingSecondary: "Our Services",
        learnMore: "Learn More",
        phoneLabel: "Phone",
        emailLabel: "E-Mail",
        officeLabel: "Office address: ",
        officeAddressValue: "Wadi Elhaj St. Nazareth, Israel",
        btnSendLabel: "Send",
        nameLabel: "Your Name",
        footerEmailLabel: "Email Address",
        footerMessageLabel: "Your Message",
        socialMediaLabel:
          " Follow us on social media to stay updated with our latest projects, industry insights, and company news.",
        missionVissionHeading: "MISSION AND VISION",
        visionLabel: "IB VISION",
        visionTextOne:
          "At IB ENG, we are your one-stop-shop for all aspects of the construction process. We offer a full range of services that start with sourcing and checking the potential of the land, all the way through planning, management, construction, and even interior design.",
        visionTextTwo:
          "Our team of professionals is there for you every step of the way, providing customized and creative engineering solutions that meet your specific needs. We are committed to staying up-to-date with the latest technology and using cutting-edge tools like Building Information Modeling (BIM)to streamline the construction process and increase efficiency.",
        visionTextThree:
          "Our approach is focused on finding creative solutions that optimize both the construction and operational aspects of each project, ultimately saving our clients time and money. ",
        visionTextFour:
          "At IB ENG, we take pride in our ability to provide comprehensive and personalized service to each and every one of our clients. Whether you are looking to build a new home, renovate an existing building, or undertake a commercial project, we are here to help you achieve your goals.",
        missionTitle: "IB MISSION",
        missionTextOne:
          "At IB Engineering, our mission is to serve as your comprehensive partner in construction, offering a full spectrum of services that seamlessly guide your projects from inception to realization. We embark on this mission by beginning with thorough land assessment, ensuring that your chosen site aligns perfectly with your vision",
        missionTextTwo:
          "From there, our dedicated team employs the latest advancements in technology to craft meticulous plans that optimize efficiency and precision.",
        missionTextThree: `Our commitment extends beyond the drawing board, we actively manage every aspect of your project,
        keeping a keen eye on both construction and operational elements.`,
        missonTextFour:
          "At IB Engineering, we take immense pride in offering personalized service and expertise tailored to your unique needs. Whether you aspire to build a new home, breathe new life into an existing structure or embark on a commercial venture, we are your perfect partner, ready to transform your construction dreams into reality",
        whatWeDoTitleOne: "Build.",
        whatWeDoTitleTwo: "Solve.",
        whatWeDoTitleThree: "Evolve.",
        whatWeDoContainerTitle: "PLANNING SERVICES",
        whatWeDoContainerOne:
          "Our Planning Services offer comprehensive support for both developers and individuals seeking to build their dream projects.",
        whatWeDoContainerTwo:
          "We provide a team of expert planning engineers who can oversee every aspect of your project.",
        whatWeDoContainerThree:
          "From conceptualization to final plans, our professionals ensure that all necessary engineering components are meticulously designed, making your vision a reality.",
        whatWeDoContainerFour: "BUILDING INSPECTION",
        whatWedoContainerFive: `As part of our commitment to planning and building management, we offer Building Inspection services that ensure the highest standards of construction quality.`,
        whatWedoContainerSix: `Our qualified inspectors meticulously assess every detail of your project to guarantee that it meets industry regulations and your expectations.`,
        whatWedoContainerSeven: `With our expertise, you can confidently achieve superior building quality`,
        whatWedoContainerEight: "INTERIOR DESIGN",
        whatWedoContainerNine:
          "Transform your space into a masterpiece with our dedicated Interior Design department.",
        whatWedoContainerTen:
          "Our team of creative experts collaborates with you to bring your design aspirations to life.",
        whatWeDoContainerEleven:
          "Whether it's a residential or commercial project, our Interior Design services promise to create a harmonious and captivating environment that aligns with your vision.",
        whatWeDoTwelve: "ENGINEERING CONSULTATION",
        whatWeDoContainerThirteen:
          "Tap into our wealth of experience with our Engineering Consultation services.",
        whatWeDoContainerFourteen:
          "Whether you're embarking on a new project or seeking insights to enhance existing plans, our consultants offer expert guidance.",
        whatWeDoContainerFifteen:
          "From project conceptualization to cost analysis, our consultancy empowers you to navigate your project successfully and achieve your objectives.",
      },
    },
    he: {
      translation: {
        missionVission: "החזון והמשימה",
        theBrainBehind: "המוח מאחורי",
        meetTheLeaders: "תכירו את המנהיגים",
        homeVisionTitle: " חזון",
        homeContainerOneShow: "הופעה",
        homeContainerOneShowLess: "פָּחוֹת",
        homeContainerOneShowMore: "יותר",
        homeMissionTitle: "משימה",
        serviceHeading: "מה אנחנו עושים",
        serviceHeadingSecondary: "השירותים שלנו",
        learnMore: "למד עוד",
        phoneLabel: "טלפון",
        emailLabel: "דואר אלקטרוני",
        officeLabel: "כתובת משרד",
        officeAddressValue: "ואדי אלחאג' רח׳ נצרת, ישראל",
        btnSendLabel: "לִשְׁלוֹחַ",
        nameLabel: "השם שלך",
        footerEmailLabel: "כתובת דול",
        footerMessageLabel: "ההודעה שלך",
        socialMediaLabel:
          "עקבו אחרינו ברשתות החברתיות כדי להישאר מעודכנים בפרויקטים האחרונים",
        missionVissionHeading: "החזון והמשימה",
        visionLabel: "חָזוֹן",
        visionTextOne:
          "ב- איי.ביי הנדסה, אנו החנות הOne-Stop-Shop שלך לכל ההיבטים של תהליך הבנייה. אנו מציעים מגוון רחב של שירותים המתחילים באיתור ובדיקת הפוטנציאל של הקרקע, לאורך כל הדרך באמצעות תכנון, ניהול, בנייה ואפילו עיצובהפנים",
        visionTextTwo: `צוות המקצוענים שלנו עומד לרשותכם בכל שלב, ומספק פתרונות הנדסיים מותאמים ויצירתיים העונים על הצרכים הספציפיים שלכם`,
        visionTextThree: `הגישה שלנו מתמקדת במציאת פתרונות יצירתיים המייעלים הן את הבנייה והן התפעולית היבטים של כל פרויקט, בסופו של דבר חוסך ללקוחותינו זמן וכסף.`,
        visionTextFour: `ב, אנו גאים ביכולתנו לספק שירות מקיף ומותאם אישית לכל אחד ואחד
        אחד מהלקוחות שלנו. בין אם אתם מחפשים לבנות בית חדש, לשפץ בניין קיים או להתחייב
        פרויקט מסחרי, אנחנו כאן כדי לעזור לך להשיג את המטרות שלך.`,
        missionTitle: "משימה",
        missionTextOne: `ב-איי.ביי הנדסה משימתנו היא לשמש שותף מקיף בתחום הבנייה, תוך
        הצעת מגוון שירותים המנחים את הפרויקטים שלך מהרגע הראשון ועד
        להגשמתם. אנו מתחילים את משימה זו בעריכת הערכה יסודית של הקרקע,
        ודואגים שהאתר שבחרת יתאים באופן מושלם לחזון שלך`,
        missionTextTwo: `משם, צוותנו המסור מעסיק את ההתקדמויות העדכניות ביותר בטכנולוגיה כדי ליצור תוכניות מדוקדקות הממקסמות יעילות ודיוק. התחייבותנו נטויה מעבר ללוח השרטוטים, אנו ניהולם באופן פעיל לכל פקטור בפרויקט שלך, תוך שמירה על עין חדה הן על אלמנטים של הבנייה והן על ההיבטים התפעוליים`,
        missionTextThree: `אנו מתגאים באופן עצום בהצעת שירות אישי ומומחיות המותאמים לצרכים הייחודיים שלך`,
        missionTextFour: `בין אם אתה שואף לבנות בית חדש, להנשים חיים חדשים במבנה קיים או להתחיל ביוזמה מסחרית, אנו השותף המושלם עבורך, מוכנים להפוך את חלומות הבנייה שלך למציאות`,
        whatWeDoTitleOne: "לתכנן",
        whatWeDoTitleTwo: "לבנות",
        whatWeDoTitleThree: "להתפתח",
        whatWeDoContainerTitle: "שירותי תכנון",
        whatWeDoContainerOne: `חברתנו מתמחה בתכנון קונסטרוקציה ותנועה, אנו מציעים תמיכה מקיפה ליזמים ויחידים שמטרתם להגשים את החזונות שלהם.`,
        whatWeDoContainerTwo: `צוות מהנדסי התכנון המומחים שלנו מצטיין ביצירת תוכניות בנייה מדוקדקות ועומדות בסטנדרטים הגבוהים של התעשייה`,
        whatWeDoContainerThree:
          "מעבר לתכנון קונסטרוקציה ותנועה אנו מעניקים גם סיוע בהרכבת `כל היועצים הנדרשים לתכנן פרויקט החלומות שלכם.",
        whatWeDoContainerFour: `פיקוח צמוד`,
        whatWedoContainerFive: `כחלק מהמחויבות שלנו לתכנון וניהול בניה, אנו מציעים שירותי פיקוח צמוד לבניה שמבטיחים את הסטנדרטים הגבוהים ביותר של איכות הבנייה`,
        whatWedoContainerSix: `המפקחים המוסמכים שלנו מעריכים בקפדנות כל פרט בפרויקט שלך כדי להבטיח שהוא עומד בתקנות התעשייה ובציפיות שלך.`,
        whatWedoContainerSeven: `עם המומחיות שלנו, אתה יכול להשיג בביטחון איכות בנייה מעולה`,
        whatWedoContainerEight: "עיצוב פנים",
        whatWedoContainerNine:
          "הפוך את החלל שלך ליצירת מופת עם מחלקת עיצוב הפנים הייעודית שלנו",
        whatWedoContainerTen:
          "צוות המומחים היצירתיים שלנו משתף איתך פעולה כדי להחיות את שאיפות העיצוב שלך",
        whatWeDoContainerEleven:
          " בין אם מדובר בפרויקט מגורים או מסחרי, שירותי עיצוב הפנים שלנו יוצר סביבה הרמונית שמתיישרת עם החזון שלך",
        whatWeDoTwelve: "ייעוץ הנדסי",
        whatWeDoContainerThirteen:
          "נצל את הניסיון העשיר שלנו עם שירותי הייעוץ ההנדסי",
        whatWeDoContainerFourteen:
          " בין אם אתה יוצא לפרויקט חדש או מחפש תובנות לשיפור התוכניות הקיימות, היועצים שלנו מציעים הכוונה מומחית",
        whatWeDoContainerFifteen:
          " מהמשגה של פרויקט ועד לניתוח עלויות, הייעוץ שלנו מאפשר לך לנווט בפרויקט שלך בהצלחה ולהשיג את היעדים שלך",
      },
    },
  },
});

export default i18n;
