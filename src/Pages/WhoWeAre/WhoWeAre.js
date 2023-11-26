import React, { useState } from "react";

import Stefan from "../../Asset/people/stefan.png";
import container5One from "../../Asset/Img/cont5sing1.jpeg";
import container5Two from "../../Asset/Img/cont5multi1.jpeg";
import container5Three from "../../Asset/Img/cont5multi2.jpeg";
import heroImg from "../../Asset/Img/whoAreWeHeroImg.png";
import intialConOne from "../../Asset/Img/initialConOne.png";
import intialConTow from "../../Asset/Img/initialConTwo.png";
import leaderOne from "../../Asset/Img/leaderOne.png";
import leaderTwo from "../../Asset/Img/leaderTwo.png";
import leaderThree from "../../Asset/Img/leaderThree.png";
import signature1_1 from "../../Asset/Img/signature1.1.png";
import signature1_2 from "../../Asset/Img/signature1.2.png";
import signature2_1 from "../../Asset/Img/signature2.png";
import signature2_2 from "../../Asset/Img/signature2.2.png";
import signature3 from "../../Asset/Img/signature3.png";
import linkedIn from "../../Asset/Icon/LinkedIn.png";
import leftArrow from "../../Asset/Icon/leftArrow.png";
import rightArrow from "../../Asset/Icon/rightArrow.png";

import style from "./whoWeAre.module.scss";
import { leaderData } from "../../utils";

function WhoWeAre() {
  const [leaderCount, setLeaderCount] = useState(0);
  return (
    <div className={style.whoWeAreContaineParent}>
      <div className={style.heroContainer}>
        <div className={style.imgTextContainer}>
          <img alt="hero img" src={heroImg} className={style.heroImg} />
          <div className={style.heroText}>MISSION AND VISION</div>
        </div>
        <div className={style.vissionContainer}>
          <div className={style.rectBox}>IB VISION</div>
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
              At <span className={style.boldText}>IB ENG</span> , we are your
              one-stop-shop for all aspects of the construction process. We
              offer a full range of services that start with sourcing and
              checking the potential of the land, all the way through planning,
              management, construction, and even interior design.
            </div>
            <div
              className={`${style.heading} ${style.containerTwoHeadingWidth} ${style.marginTop}`}
            >
              Our team of professionals is there for you every step of the way,
              providing customized and creative
              <span className={style.boldText}> engineering solutions</span>
              that meet your specific needs. We are committed to staying
              up-to-date with the latest technology and using cutting-edge tools
              like{" "}
              <span className={style.boldText}>
                Building Information Modeling (BIM)
              </span>
              to streamline the construction process and increase efficiency.
            </div>
          </div>
        </div>
        <div className={style.initialBorderContainerTwo}>
          <div className={style.imgTextcontainer}>
            <img
              src={intialConOne}
              alt="initial"
              className={style.initialOneImg}
            />
            <div className={style.textContainer}>
              <div className={style.text}>
                Our approach is focused on finding{" "}
                <span className={style.boldText}> creative solutions</span> that
                optimize both the construction and operational aspects of each
                project, ultimately saving our clients time and money.
              </div>
              <div className={style.text}>
                At <span className={style.boldText}> IB ENG</span>, we take
                pride in our ability to provide comprehensive and personalized
                service to each and every one of our clients. Whether you are
                looking to build a new home, renovate an existing building, or
                undertake a commercial project, we are here to help you achieve
                your goals.
              </div>
            </div>
          </div>
        </div>
        <div className={style.initialBorderContainerThree}>
          <div className={style.borderRightBottom} />
          <div className={style.lineTextContainer}>
            <div
              className={`${style.vissionContainer} ${style.withBorderLTR} ${style.containerThreePosition}`}
            >
              <div className={style.rectBox}>IB MISSION</div>
            </div>
            <div className={style.verticalLine} />
            <div
              className={`${style.heading} ${style.initialContainerThreeText}`}
            >
              At <span className={style.boldText}> IB Engineering</span>, our
              mission is to serve as your comprehensive partner in{" "}
              <span className={style.boldText}> construction</span>, offering a
              full spectrum of services that seamlessly guide your projects from
              inception to realization. We embark on this mission by beginning
              with thorough land assessment, ensuring that your chosen site
              aligns perfectly with your vision. From there, our dedicated team
              employs the latest advancements in technology to craft meticulous
              plans that optimize
              <span className={style.boldText}> efficiency and precision.</span>
            </div>
          </div>
        </div>
        <div className={style.initialBorderContainerFour}>
          <div className={style.topLeftBorder} />
          <div className={style.bottomLeftBorder} />
          <div className={style.initialBorderImgContainer}>
            <img alt="img" src={intialConTow} className={style.heroImg} />
            <div className={style.textContainer}>
              <div className={style.text}>
                Our commitment extends beyond the drawing board, we actively
                manage every aspect of your project, keeping a keen eye on both
                construction and operational elements.
              </div>
              <div className={style.text}>
                At <span className={style.boldText}> IB Engineering</span>, we
                take immense pride in offering personalized service and
                expertise tailored to your unique needs. Whether you aspire to
                build a new home, breathe new life into an existing structure or
                embark on a commercial venture, we are your perfect partner,
                ready to transform your construction dreams into reality.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={style.whoWeAreContaine}>
        <div className={style.headingContainer}>
          <h1 className={style.heading}>THE MIND BEHIND </h1>
          <h1 className={style.heading}>IB ENG</h1>
          <div className={style.verticalDevider} />
        </div>
        <div className={style.headingContainerText}>
          <div className={`${style.heading} ${style.containerOneHeadingWidth}`}>
            Our founder is a highly experienced and qualified construction
            engineer, with a Master's degree in building engineering and
            specialized expertise in earthquakes and traffic and transportation
            engineering. Registered in the register of engineers and architects
            since 1979,our founder has served as the city engineer of Nazareth
            from 1992 to 2016 and has been a member of steering committees on
            behalf of the Ministry of Transportation and the Ministry of
            Construction and Housing.
          </div>
          <div className={style.borderContainer}>
            <div className={style.topBorder} />
            <div className={style.protfolioContainer}>
              <img src={Stefan} alt="" className={style.protfolioImg} />
            </div>
          </div>
          <div className={style.borderContainerTwo}>
            <div className={style.bottomBorder} />
          </div>
          <div className={style.borderContainerThree}>
            <div className={style.rightTopBorder} />
            <div className={`${style.containerThreeHeadingOne} `}>
              <div
                className={`${style.heading} ${style.containerTwoHeadingWidth}`}
              >
                Our founder has also been a key participant in teams for editing
                instruction files for planning public transportation routes,
                mass transit systems in the Haifa metropolis, transportation
                master plans for the Haifa and northern districts, and other
                major infrastructure projects.
              </div>
              <div
                className={`${style.heading} ${style.containerTwoHeadingWidth} ${style.marginTop}`}
              >
                With decades of experience in planning, managing, and
                supervising projects in the public, residential, commercial, and
                infrastructure sectors, our founder has established a reputation
                for excellence in the industry. Our founder has always been
                passionate about his work in the field of engineering and
                construction.
              </div>
            </div>
          </div>
          <div className={style.borderContainerFour}>
            <div className={style.topLeftBorder} />
            <div className={style.headingFourContainer}>
              <div className={style.mainHeadingFour}>
                Engineering Excellence, Forging Tomorrow's Innovation Today, in
                the Heart of Israel.
              </div>
              <div className={style.headingFour}>
                He has a strong focus on creativity, efficiency, and customer
                satisfaction. Additionally, our founder has a diverse set of
                hobbies and interests, including hiking, photography, and
                gardening. With over four decades of experience in the industry,
                our founder has a reputation for innovative solutions and a deep
                understanding of complex construction projects.
              </div>
            </div>
          </div>
          <div className={style.borderContainerFive}>
            <div className={style.borderRigthTop} />
            <div className={style.imgContainer}>
              <div className={style.sigleImageContainer}>
                <div className={style.singleImgParentContainer}>
                  <img
                    src={container5One}
                    alt="img"
                    className={style.singleImg}
                  />
                </div>
              </div>
              <div className={style.twoImageContainer}>
                <img src={container5Two} alt="img" className={style.multiImg} />
                <img
                  src={container5Three}
                  alt="img"
                  className={style.multiImg}
                />
              </div>
            </div>
          </div>
          <div className={style.borderContainerSix}>
            <div className={style.borderLeftTop} />
            <div className={style.borderContainerFiveHeading}>
              <div className={`${style.heading} ${style.headingFiveWidth}`}>
                He has served as the city engineer of Nazareth and has been
                involved in multiple steering committees for the Ministry of
                Transportation and the Ministry of Construction and Housing. Our
                founder is committed to staying up-to-date with the latest
                advancements in technology and software in order to provide the
                highest quality services to our clients. He takes a holistic
                approach to projects, considering not only the construction
                aspect but also the functional and operational aspects.
              </div>
              <div className={style.verticalDevider} />
              <div
                className={`${style.heading} ${style.headingFiveWidth} ${style.marginTop}`}
              >
                Our founder is passionate about passing on his knowledge and
                experience to the next generation of engineers and construction
                professionals. He has been involved in training and mentoring
                programs, and is dedicated to creating a legacy of excellence
                and professionalism in the industry.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={style.meetOurLeaderContainer}>
        <div className={style.leaderList}>
          <div className={style.meetLeaderLabelContainer}>
            <div className={style.border} />
            <div className={style.meetLeaderLabel}>MEET THE TEAM</div>
            <div className={style.border} />
          </div>
          <ul className={style.imgContainer}>
            <li className={style.listItem} key={1}>
              <img src={leaderOne} alt="leader" className={style.leaderImg} />
            </li>
            <li className={style.listItem} key={2}>
              <img src={leaderTwo} alt="leader" className={style.leaderImg} />
            </li>
            <li className={style.listItem} key={3}>
              <img src={leaderThree} alt="leader" className={style.leaderImg} />
            </li>
          </ul>
        </div>
        <div className={`${style.leaderContainer}`}>
          <div className={style.outerImage}>
            <div className={style.outerImageOverlay} />
          </div>
          <div className={style.innerMiddelImgContainer}>
            <div className={style.innerMiddleImageOverlay} />
          </div>
          <div className={style.innerMostImgContainer}>
            <div className={style.containerDetials}>
              <div className={style.containerHeaing}>IB ENG</div>
              <div className={style.imgTextContainer}>
                <img src={leaderData[leaderCount].img} />
                <div className={style.detailsContainer}>
                  <div className={style.upperUnderlinedBorderParent}>
                    <div className={style.upperUnderlinedBorder} />
                  </div>
                  <div className={style.leaderNameLabel}>Alaa Bishara</div>
                  <div className={style.designationLabel}>
                    Development Department Manager
                  </div>
                  <div className={style.subText}>
                    A dynamic professional, serves as the Business Development
                    Department Manager at IB Engineering.{" "}
                  </div>
                  <div className={style.subText}>
                    With a diverse educational background, including a
                    bachelor's degree in law and business administration from
                    Reichman University and a master's degree in business
                    administration specializing in real estate and appraisals,
                    Alaa brings a unique blend of skills to the team.
                  </div>
                  <div className={style.subText}>
                    As a serial founder, entrepreneur, and VP of sales, he has
                    played pivotal roles in several successful companies. His
                    visionary leadership and extensive experience contribute
                    significantly to IB Engineering's growth and success.
                  </div>
                  <div className={style.iconSignatureContainer}>
                    <div className={style.ogSignatureContainer}>
                      <img
                        src={linkedIn}
                        alt="LinkedIn"
                        className={style.icon}
                      />
                      {leaderCount === 0 ? (
                        <div className={style.signatureContainer}>
                          <img src={signature1_1} alt="sig1" />
                          <img src={signature1_2} alt="sig2" />
                        </div>
                      ) : leaderCount === 1 ? (
                        <div className={style.signatureContainerLeader2}>
                          <img
                            src={signature2_2}
                            alt="sig2"
                            className={style.mr_2}
                          />
                          <img src={signature2_1} alt="sig1" />
                        </div>
                      ) : (
                        <div className={style.signatureContainer}>
                          <img src={signature3} alt="sig1" />
                        </div>
                      )}
                    </div>
                    <div className={style.btnContainer}>
                      <div className={style.arrowContainer}>
                        <img
                          src={rightArrow}
                          alt="right"
                          className={style.icon}
                          onClick={(e) =>
                            leaderCount + 1 === leaderData.length
                              ? e.preventDefault()
                              : setLeaderCount((data) => data + 1)
                          }
                        />
                      </div>
                      <div className={style.arrowContainer}>
                        <img
                          src={leftArrow}
                          alt="left"
                          className={style.icon}
                          onClick={(e) =>
                            leaderCount === 0
                              ? e.preventDefault()
                              : setLeaderCount((data) => data - 1)
                          }
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={style.innerMostImageOverlay} />
          </div>
          {/* <div className={style.leaderContainerBackgroundBlack} /> */}
          {/* <div className={style.leaderInnerContainerParent}>
            <div className={style.leaderInnerContainer}>
              <div className={style.leaderImgTextContainerParent}>
                <div className={style.leaderImgTextContainer}></div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default WhoWeAre;
