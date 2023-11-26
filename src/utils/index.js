import DropDownArrow from "../Asset/Icon/dropDown.png";
import buildingInspection from "../Asset/Img/buildingInspection.png";
import engConsultant from "../Asset/Img/engConsultant.png";
import interior from "../Asset/Img/interior.png";
import planService from "../Asset/Img/planService.png";
import brand1 from "../Asset/brand/brand1.png";
import brand2 from "../Asset/brand/brand2.png";
import brand3 from "../Asset/brand/brand3.png";
import brand4 from "../Asset/brand/brand4.png";
import brand5 from "../Asset/brand/brand5.png";
import brand6 from "../Asset/brand/brand6.png";
import leader1 from "../Asset/Img/leader1.png";
import leader2 from "../Asset/Img/leader2.png";
import leader3 from "../Asset/Img/leader3.png";
import signature1_1 from "../Asset/Img/signature1.1.png";
import signature1_2 from "../Asset/Img/signature1.2.png";
import signature2_1 from "../Asset/Img/signature2.png";
import signature2_2 from "../Asset/Img/signature2.2.png";
import signature3 from "../Asset/Img/signature3.png";

export const pageRoutes = [
  {
    id: 1,
    label: "Home",
    path: "/",
    icon: null,
  },
  {
    id: 2,
    label: "who we are",
    path: "/whoWeAre",
    icon: DropDownArrow,
  },
  {
    id: 3,
    label: "What We DO",
    path: "/whatWeDO",
    icon: null,
  },
  {
    id: 4,
    label: "PORTFOLIO",
    path: "/protfolio",
    icon: null,
  },
  {
    id: 5,
    label: "WHAT OUR CLIENTS SAY",
    path: "/whatOurClientsSay",
    icon: null,
  },
  {
    id: 6,
    label: "GET IN TOUCH",
    path: "/getInTpuch",
    icon: null,
  },
];

export const serviceData = [
  {
    id: 1,
    icon: planService,
    label: "planning services",
  },
  {
    id: 2,
    icon: buildingInspection,
    label: "BUILDING INSPECTION",
  },
  {
    id: 3,
    icon: interior,
    label: "INTERIOR DESIGN",
  },
  {
    id: 4,
    icon: engConsultant,
    label: "ENGINEERING CONSULTATION",
  },
];

export const brandData = [
  {
    id: 1,
    img: brand1,
  },
  {
    id: 2,
    img: brand2,
  },
  {
    id: 3,
    img: brand3,
  },
  {
    id: 4,
    img: brand4,
  },
  {
    id: 5,
    img: brand5,
  },
  {
    id: 6,
    img: brand6,
  },
];

export const leaderData = [
  {
    id: 1,
    name: "Alaa Bishara",
    designation: "Development Department Manager",
    detailsText: [
      "A dynamic professional, serves as the Business Development Department Manager at IB Engineering.",
      "With a diverse educational background, including a bachelor's degree in law and business administration from Reichman University and a master's degree in business administration specializing in real estate and appraisals, Alaa brings a unique blend of skills to the team.",
      "As a serial founder, entrepreneur, and VP of sales, he has played pivotal roles in several successful companies. His visionary leadership and extensive experience contribute significantly to IB Engineering's growth and success.",
    ],
    img: leader1,
    signature: `${(
      <div className="dflex_center">
        <img src={signature1_1} alt="sig1" />
        <img src={signature1_2} alt="sig1" />
      </div>
    )}`,
    linkedIn: "",
  },
  {
    id: 2,
    name: "Mohammad Daher",
    designation: "Head of Planning Department",
    detailsText: [
      "Is a rising star at IB ENG. Started as an intern, Today he is a licensed engineer, he honed his skills under our founder's guidance.",
      "His youthful energy and extensive experience drive our planning department's commitment to excellence, ensuring that each project is meticulously planned and executed with precision.",
      "Mohammad's visionary leadership and collaborative. Approach inspire our team to achieve new heights in the world of construction planning.",
    ],
    img: leader2,
    signature: `${(
      <div className="">
        <img src={signature2_1} alt="sig1" />
        <img src={signature2_2} alt="sig1" />
      </div>
    )}`,
    linkedIn: "",
  },
  {
    id: 3,
    name: "Rawan Bishara Sabbah",
    designation: "Head of Interior Design Department",
    detailsText: [
      "As the dedicated leader of our Interior Design Department, Rawan Beshara Sabah brings a wealth of expertise to IB Engineering.",
      "A distinguished alumna of the Technion with a degree in civil engineering, specialized in structures, and honored in interior design, Rawan has been a registered engineer and architect since 2009.",
      "With over 15 years of experience, she has been the guiding force behind numerous construction and interior design projects, particularly in residential towers across central and northern regions.",
      "Rawan's passion for art, fashion, and a discerning taste infuse her work with creativity and innovation, elevating every project to new heights of excellence.",
    ],
    img: leader3,
    signature: `${(
      <div className="">
        <img src={signature3} alt="sig1" />
      </div>
    )}`,
    linkedIn: "",
  },
];
