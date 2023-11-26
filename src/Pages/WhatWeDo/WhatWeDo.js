import React from "react";

import containerOneImg from "../../Asset/Img/containeroneImg.png";
import containerTwoImg from "../../Asset/Img/containerTwoImg.png";
import greyContainer1 from "../../Asset/Img/greycontainer1.png";
import greyContainer2 from "../../Asset/Img/greyContainer2.png";
import greyContainer3 from "../../Asset/Img/greyContainer3.png";
import greyContainer4 from "../../Asset/Img/greyContainer4.png";

import style from "./whatWeDo.module.scss";

function WhatWeDo() {
  return (
    <div className={style.whatWeDoContainer}>
      <div className={style.twoColumnContainer}>
        <div className={style.containerOne}>
          <div className={style.containerOneCard}>
            <div className={style.cardHeading}>
              Build.
              <br />
              Solve.
              <br />
              Evolve.
            </div>
            <img
              src={containerOneImg}
              alt="containerOneImg"
              className={style.containerOneImg}
            />
          </div>
        </div>
        <div className={style.containerTwo}>
          <img src={containerTwoImg} alt="" className={style.containerTwoimg} />
          <div className={style.verticalDevider} />
        </div>
      </div>
      <div className={style.greyContainer}>
        <div className={style.imageTextContainer}>
          <div
            className={`${style.containerHeading} ${style.contatinerTextOne}`}
          >
            PLANNING SERVICES
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="47"
              height="47"
              viewBox="0 0 47 47"
              fill="none"
            >
              <circle cx="23.5" cy="23.5" r="23.5" fill="#FF0000" />
            </svg>
          </div>
          <div className={style.imgContainer}>
            <div className={style.imgShadeContainer}>
              <img
                src={greyContainer1}
                alt="img 1"
                className={style.greyImage}
              />
              <div className={style.shade} />
            </div>
            <div className={style.alignContainer}>
              <div
                className={`${style.subTextContainer} ${style.firstTextContainer}`}
              >
                <div className={style.imgTextChild}>
                  Our{" "}
                  <span className={style.highlightText}>Planning Services</span>
                  offer comprehensive support for both developers and
                  individuals seeking to build their{" "}
                  <span className={style.highlightText}>dream projects.</span>
                </div>
                <div className={style.imgTextChild}>
                  We provide a team of expert{" "}
                  <span className={style.highlightText}>
                    planning engineers
                  </span>
                  who can oversee every aspect of your project.
                </div>
                <div className={style.imgTextChild}>
                  From conceptualization to final plans,
                  <span className={style.highlightText}>our professionals</span>
                  ensure that all necessary engineering components are
                  meticulously designed, making your vision a reality.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={style.imageTextContainerTwo}>
          <div className={style.firstColumnContainer}>
            <div className={style.headingImgContainer}>
              <div className={style.verticalLine} />
              <div className={`${style.containerHeadingTwo} `}>
                BUILDING INSPECTION
              </div>
            </div>
            <div
              className={`${style.subTextContainer} ${style.firstTextContainer} ${style.topMarginTextContainer}`}
            >
              <div className={style.imgTextChild}>
                As part of our commitment to{" "}
                <span className={style.highlightText}>
                  planning and building management
                </span>{" "}
                , we offer Building Inspection services that ensure the highest
                standards of construction quality.
              </div>
              <div className={style.imgTextChild}>
                Our{" "}
                <span className={style.highlightText}>
                  qualified inspectors
                </span>{" "}
                meticulously assess every detail of your project to guarantee
                that it meets industry regulations and{" "}
                <span className={style.highlightText}>your expectations.</span>
              </div>
              <div className={style.imgTextChild}>
                With our expertise, you can confidently achieve{" "}
                <span className={style.highlightText}>
                  superior building quality
                </span>
              </div>
            </div>
          </div>
          <div className={style.secondColumnContainer}>
            <div className={`${style.imgShadeContainer} ${style.imgMarginTop}`}>
              <img
                src={greyContainer2}
                alt="img 1"
                className={`${style.greyImage} `}
              />
              <div className={style.shade} />
            </div>
          </div>
        </div>
        <div className={style.imageTextContainerThree}>
          <div className={style.firstColumnContainer}>
            <div className={`${style.imgShadeContainer} ${style.imgMarginTop}`}>
              <img
                src={greyContainer3}
                alt="img 1"
                className={`${style.greyImage} `}
              />
              <div className={style.shade} />
            </div>
          </div>
          <div className={style.secondColumnContainer}>
            <div className={style.headingImgContainer}>
              <div className={style.verticalLine} />
              <div className={`${style.containerHeadingThree} `}>
                INTERIOR DESIGN
              </div>
            </div>
            <div
              className={`${style.subTextContainer} ${style.thirdTextContainer} ${style.topMarginTextContainer}`}
            >
              <div className={style.imgTextChild}>
                Transform your space into a masterpiece with our dedicated
                <span className={style.highlightText}>
                  Interior Design department.
                </span>
              </div>
              <div className={style.imgTextChild}>
                Our team of creative experts collaborates with you to bring your
                <span className={style.highlightText}>
                  design aspirations to life.
                </span>
              </div>
              <div className={style.imgTextChild}>
                Whether it's a residential or commercial project, our
                <span className={style.highlightText}>
                  Interior Design services
                </span>
                promise to create a harmonious and captivating environment that
                aligns with your vision.
              </div>
            </div>
          </div>
        </div>
        <div className={style.imageTextContainerTwo}>
          <div className={style.firstColumnContainer}>
            <div className={style.headingImgContainer}>
              <div className={style.verticalLine} />
              <div className={`${style.containerHeadingFour} `}>
                ENGINEERING CONSULTATION
              </div>
            </div>
            <div
              className={`${style.subTextContainer} ${style.firstTextContainer} ${style.topMarginTextContainer}`}
            >
              <div className={style.imgTextChild}>
                Tap into our wealth of experience with our
                <span className={style.highlightText}>
                  Engineering Consultation services.
                </span>{" "}
              </div>
              <div className={style.imgTextChild}>
                Whether you're embarking on a new project or seeking insights to
                enhance existing plans, our consultants offer
                <span className={style.highlightText}>expert guidance.</span>
              </div>
              <div className={style.imgTextChild}>
                From project conceptualization to cost analysis, our consultancy
                empowers you to navigate your project successfully and
                <span className={style.highlightText}>
                  {" "}
                  achieve your objectives.
                </span>
              </div>
            </div>
          </div>
          <div className={style.secondColumnContainer}>
            <div className={`${style.imgShadeContainer} ${style.imgMarginTop}`}>
              <img
                src={greyContainer4}
                alt="img 1"
                className={`${style.greyImage} `}
              />
              <div className={style.shade} />
            </div>
          </div>
        </div>
        {/* <div className={style.imageContainer}>
          <img src={greyContainer2} alt="img 1" className={style.greyImage} />
          <div className={style.imgText}>
            <div className={style.containerText}>BUILDING INSPECTION</div>
            <div className={style.imgTextChild}>
              Our Planning Services offer comprehensive support for both
              developers and individuals seeking to build their dream projects.
            </div>
            <div className={style.imgTextChild}>
              We provide a team of expert planning engineers who can oversee
              every aspect of your project.
            </div>
            <div className={style.imgTextChild}>
              From conceptualization to final plans, our professionals ensure
              that all necessary engineering components are meticulously
              designed, making your vision a reality.
            </div>
          </div>
        </div>
        <div className={style.imageContainer}>
          <img src={greyContainer3} alt="img 1" className={style.greyImage} />
          <div className={style.imgText}>
            <div className={style.containerText}>INTERIOR DESIGN</div>
            <div className={style.imgTextChild}>
              Our Planning Services offer comprehensive support for both
              developers and individuals seeking to build their dream projects.
            </div>
            <div className={style.imgTextChild}>
              We provide a team of expert planning engineers who can oversee
              every aspect of your project.
            </div>
            <div className={style.imgTextChild}>
              From conceptualization to final plans, our professionals ensure
              that all necessary engineering components are meticulously
              designed, making your vision a reality.
            </div>
          </div>
        </div>
        <div className={style.imageContainer}>
          <img src={greyContainer4} alt="img 1" className={style.greyImage} />
          <div className={style.imgText}>
            <div className={style.containerText}>ENGINEERING CONSULTATION</div>
            <div className={style.imgTextChild}>
              Our Planning Services offer comprehensive support for both
              developers and individuals seeking to build their dream projects.
            </div>
            <div className={style.imgTextChild}>
              We provide a team of expert planning engineers who can oversee
              every aspect of your project.
            </div>
            <div className={style.imgTextChild}>
              From conceptualization to final plans, our professionals ensure
              that all necessary engineering components are meticulously
              designed, making your vision a reality.
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default WhatWeDo;
