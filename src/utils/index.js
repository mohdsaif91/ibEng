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
