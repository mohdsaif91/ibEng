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
import project1_1 from "../Asset/project/project1_1.png";
import project1_2 from "../Asset/project/project1_2.png";
import project1_3 from "../Asset/project/project1_3.png";
import project1_4 from "../Asset/project/project1_4.png";
import project1_5 from "../Asset/project/project1_5.png";
import project2_1 from "../Asset/project/project2_1.png";
import project2_2 from "../Asset/project/project2_2.png";
import project2_3 from "../Asset/project/project2_3.png";
import project2_4 from "../Asset/project/project2_4.png";
import project2_5 from "../Asset/project/project2_5.png";
import project3_1 from "../Asset/project/project3_1.png";
import project3_2 from "../Asset/project/project3_2.png";
import project3_5 from "../Asset/project/project3_5.png";
import project4_1 from "../Asset/project/project4_1.png";
import project4_2 from "../Asset/project/project4_2.png";
import project4_3 from "../Asset/project/project4_3.png";
import project4_4 from "../Asset/project/project4_4.png";
import project4_5 from "../Asset/project/project4_5.png";
import project4_6 from "../Asset/project/project4_6.png";
import project5_1 from "../Asset/project/project5_1.png";
import project5_2 from "../Asset/project/project5_2.png";
import project5_3 from "../Asset/project/project5_3.png";
import project5_4 from "../Asset/project/project5_4.png";
import project5_5 from "../Asset/project/project5_5.png";
import Project1 from "../Asset/Img/project1.png";
import Project2 from "../Asset/Img/project2.png";
import Project3 from "../Asset/Img/project3.png";
import Project4 from "../Asset/Img/project4.png";
import Project5 from "../Asset/Img/project5.png";
import client1 from "../Asset/Img/client1.png";
import client2 from "../Asset/Img/client2.png";
import client3 from "../Asset/Img/client3.png";
import client4 from "../Asset/Img/client4.png";
import client5 from "../Asset/Img/client5.png";
import client6 from "../Asset/Img/client6.png";

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
    path: "/getInTouch",
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
export const projectData = [
  {
    id: 1,
    projectName: "Hawwa Building",
    mainProject: Project1,
    projectDetails: [
      "Office building, Nazareth The building has 8 floors of commercial and offices and a parking floor.",
      "The building is about 4000 square meters The developer: A.H. Yifei for trade and investments",
    ],
    imgBackground: [
      {
        background:
          "linear-gradient(180deg, #1553B1 0%, rgba(70, 125, 193, 0.60) 89.23%, rgba(99, 150, 202, 0.00) 165.59%)",
        img: project1_1,
      },
      {
        background:
          "linear-gradient(180deg, #176EB9 0%, rgba(70, 125, 193, 0.60) 89.23%, rgba(99, 150, 202, 0.00) 165.59%)",
        img: project1_2,
      },
      {
        background:
          "linear-gradient(180deg, #66AFF7 0%, rgba(28, 90, 153, 0.00) 169.67%, rgba(70, 125, 193, 0.60) 182.33%)",
        img: project1_3,
      },
      {
        background:
          "linear-gradient(180deg, #6395BA 0%, rgba(99, 150, 202, 0.00) 169.67%, rgba(70, 125, 193, 0.60) 183.85%)",
        img: project1_4,
      },
      {
        background:
          "linear-gradient(180deg, #A38BAC 0%, rgba(99, 150, 202, 0.00) 169.67%, rgba(70, 125, 193, 0.60) 183.85%)",
        img: project1_5,
      },
    ],
  },
  {
    id: 2,
    projectName: "Zidan 2",
    mainProject: Project2,
    projectDetails: [
      "A residential building in the Galilee neighborhood, Nazareth. The building has 10 floors of residential space and 2 floors for parking.",
      "The building comprises 38 residential units with apartments of 4, 5 rooms and penthouses. Developer: Tofik Zidan.",
    ],
    imgBackground: [
      {
        background:
          "linear-gradient(180deg, #5986B0 0%, rgba(70, 125, 193, 0.60) 89.23%, rgba(99, 150, 202, 0.00) 165.59%)",
        img: project2_1,
      },
      {
        background:
          "linear-gradient(180deg, #9BC3E4 0%, rgba(62, 95, 128, 0.00) 160.69%, rgba(70, 125, 193, 0.60) 165.59%)",
        img: project2_2,
      },
      {
        background:
          "linear-gradient(180deg, #9CC6E5 0%, rgba(70, 125, 193, 0.60) 165.59%, rgba(99, 150, 202, 0.00) 165.59%)",
        img: project2_3,
      },
      {
        background:
          "linear-gradient(180deg, #8B9086 0%, rgba(129, 142, 117, 0.00) 214.38%, rgba(70, 125, 193, 0.60) 227.18%)",
        img: project2_4,
      },
      {
        background:
          "linear-gradient(180deg, #A5D3FF 0%, rgba(0, 62, 119, 0.00) 150.74%, rgba(70, 125, 193, 0.60) 159.74%)",
        img: project2_5,
      },
    ],
  },
  {
    id: 3,
    projectName: "Panorama AlBeshara",
    mainProject: Project3,
    projectDetails: [
      "A residential building in the Albasheer neighborhood, Nazareth. The building has 8 floors of residential and commercial space and a 4-story parking structure.",
      "The building comprises 26 residential units with apartments of 4, 5 rooms and penthouses. Developer: Nasser Ibrahim Nama.",
    ],
    imgBackground: [
      {
        background:
          "linear-gradient(180deg, #54789C 0%, #F3EFEA 200.4%, rgba(70, 125, 193, 0.60) 202.62%)",
        img: project3_1,
      },
      {
        background:
          "linear-gradient(180deg, #306D9C 0%, #F3EFEA 198.91%, #8AA2BA 202.62%)",
        img: project3_2,
      },
      {
        background:
          "linear-gradient(180deg, #656B8F 0%, #E5EFE7 198.18%, #F3EFEA 202.62%)",
        img: project3_2,
      },
      {
        background:
          "linear-gradient(180deg, #4074A3 0%, #E5EFE7 198.18%, #F3EFEA 202.62%)",
        img: project3_2,
      },
      {
        background:
          "linear-gradient(180deg, #4C88BC 0%, #E3E6EB 198.18%, #F3EFEA 202.62%)",
        img: project3_5,
      },
    ],
  },
  {
    id: 4,
    projectName: "Basmet Tabo'n Center",
    mainProject: Project4,
    projectDetails: [
      "A commercial and office center in the heart of Tiv'on. The building is approximately 3,000 meters.",
      "Developer: Torab Investments and Development. Architect: Eran Mebel",
    ],
    imgBackground: [
      {
        background:
          "linear-gradient(180deg, #83A6CC 0%, rgba(70, 125, 193, 0.50) 195.09%, #F3EFEA 200.4%)",
        img: project4_1,
      },
      {
        background:
          "linear-gradient(180deg, #00294F 0%, rgba(70, 125, 193, 0.50) 193.28%, #F0F0F2 202.25%)",
        img: project4_2,
      },
      {
        background:
          "linear-gradient(180deg, #454A68 0%, #B9A8C0 193.28%, #F0F0F2 202.25%)",
        img: project4_3,
      },
      {
        background:
          "linear-gradient(180deg, #1D8ACF 0%, #B9A8C0 193.28%, #F0F0F2 202.25%)",
        img: project4_4,
      },
      {
        background:
          "linear-gradient(180deg, #6086AD 0%, #82A9D2 193.28%, #F0F0F2 202.25%)",
        img: project4_5,
      },
      {
        background:
          "linear-gradient(180deg, #216B9A 0%, #82B1DD 193.28%, #F0F0F2 202.25%)",
        img: project4_6,
      },
    ],
  },
  {
    id: 5,
    projectName: "Ahozat Habaron",
    mainProject: Project5,
    projectDetails: [
      "A residential tower in Baron's Estate, Zichron Yaakov, the building has 8 floors.",
      "In the building, there are 55 residential units with apartments of 4, 5 rooms and penthouses. Developer: Tzamrot Ltd.",
    ],
    imgBackground: [
      {
        background:
          "linear-gradient(180deg, #B5E0FF 0%, #B0C1DD 195.09%, #F3EFEA 200.4%)",
        img: project5_1,
      },
      {
        background:
          "linear-gradient(180deg, #578BBA 0%, rgba(176, 193, 221, 0.60) 181.46%, #F3EFEA 200.4%)",
        img: project5_2,
      },
      {
        background:
          "linear-gradient(180deg, #A5C8FA 0%, #C0C6E2 181.46%, #F3EFEA 200.4%)",
        img: project5_3,
      },
      {
        background:
          "linear-gradient(180deg, #D7C6C6 0%, #D5E5F2 181.46%, #F3EFEA 200.4%)",
        img: project5_4,
      },
      {
        background:
          "linear-gradient(180deg, #DFD1D1 0%, #8C9DBC 97.03%, #F3EFEA 200.4%)",
        img: project5_5,
      },
    ],
  },
];

export const clientSayData = [
  { id: 1, img: client1 },
  { id: 2, img: client2 },
  { id: 3, img: client3 },
  { id: 4, img: client4 },
  { id: 5, img: client5 },
  { id: 6, img: client6 },
];
