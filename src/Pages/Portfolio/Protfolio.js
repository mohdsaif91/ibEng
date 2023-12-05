import React, { useState } from "react";
import { Animated } from "react-animated-css";

import { projectData } from "../../utils";
import leftBackIcon from "../../Asset/Icon/backLeftIcon.png";
import city1 from "../../Asset/Img/City Buildings_1.png";
import city2 from "../../Asset/Img/City Buildings_2.png";
import city3 from "../../Asset/Img/City Buildings_3.png";
import upBtn from "../../Asset/Icon/upArrow.png";
import downBtn from "../../Asset/Icon/downArrow.png";
import up from "../../Asset/Icon/up.png";
import down from "../../Asset/Icon/down.png";

import style from "./protfolio.module.scss";

const initialProjectSelectedData = {
  showProject: false,
  projectData: null,
};

function Protfolio() {
  const [projectSelected, setProjectSelected] = useState({
    ...initialProjectSelectedData,
  });
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  return (
    <div className={style.protfolioContainer}>
      {!projectSelected.showProject ? (
        <>
          <Animated
            animationIn="fadeIn"
            isVisible={true}
            animationInDelay={800}
            animationInDuration={1000}
            className={style.protfolioHeroContainer}
          >
            <div className={style.heroText}>
              National Leader in
              <br />
              Engineering
            </div>
          </Animated>
          <div className={style.ourProjectContainer}>
            <div className={style.headingContainer}>
              <div className={style.mainHeading}>PORTFOLIO</div>
              <div className={style.subHeading}>
                <span className={style.dash} />
                <span className={style.dashText}>Our Projects</span>
                <span className={style.dash} />
              </div>
            </div>
          </div>
          <div className={style.actualprojectContainer}>
            <div className={style.projectCardContainer}>
              {projectData.map((m, index) => (
                <div
                  className={style.projectCard}
                  onClick={() => {
                    setProjectSelected({
                      showProject: true,
                      projectData: index,
                    });
                    window.scroll(0, 0);
                  }}
                >
                  <img
                    src={m.mainProject}
                    alt="project1"
                    className={style.projectImg}
                  />
                  <div className={style.imgOverLay} />
                  <div className={style.projectText}>{m.projectName}</div>
                </div>
              ))}
            </div>
          </div>
        </>
      ) : (
        <div
          className={style.projectSelectedContainer}
          style={{
            background: `${
              projectData[projectSelected.projectData || 0].imgBackground[
                currentProjectIndex
              ].background
            }`,
          }}
        >
          <div className={style.upperActionContainer}>
            <img
              alt=""
              src={leftBackIcon}
              className={style.leftIcon}
              onClick={() => {
                setCurrentProjectIndex(0);
                setProjectSelected({ projectData: null, showProject: false });
              }}
            />
          </div>
          <div className={style.imgtextContainer}>
            <div className={style.textContainer}>
              <div className={style.heading}>
                {projectData[projectSelected.projectData || 0].projectName}
              </div>
              <div className={style.subTextContainer}>
                <div className={style.subTextItem}>
                  {
                    projectData[projectSelected.projectData || 0]
                      .projectDetails[0]
                  }
                </div>
                <div className={style.subTextItem}>
                  {
                    projectData[projectSelected.projectData || 0]
                      .projectDetails[1]
                  }
                </div>
              </div>
              <div className={style.cityImgConmtainer}>
                <img src={city1} alt="city 1" className={style.city1Icon} />
                <img src={city2} alt="city 2" className={style.city2Icon} />
                <img src={city3} alt="city 3" className={style.city3Icon} />
              </div>
            </div>
            <div className={style.imgContainer}>
              {projectData[projectSelected.projectData || 0].imgBackground.map(
                (imgData, i) => (
                  <>
                    {i === currentProjectIndex && (
                      <Animated
                        animationIn="fadeInUp"
                        animationOut="fadeOutUp"
                        isVisible={true}
                        animationInDelay={300}
                        animationInDuration={700}
                      >
                        <img
                          src={
                            projectData[projectSelected.projectData || 0]
                              .imgBackground[currentProjectIndex].img
                          }
                          className={style.projectImg}
                          alt="project Image"
                        />
                      </Animated>
                    )}
                  </>
                )
              )}

              <div className={style.btnAndLineContainer}>
                <div className={style.lineContainer}>
                  {projectData[
                    projectSelected.projectData || 0
                  ].imgBackground.map((m, imgIndex) => (
                    <>
                      {currentProjectIndex === imgIndex ? (
                        <Animated
                          animationIn="pulse"
                          isVisible={true}
                          animationInDelay={300}
                          animationInDuration={700}
                          className={style.activeLine}
                        ></Animated>
                      ) : (
                        <div
                          className={`${style.line}`}
                          onClick={() => setCurrentProjectIndex(imgIndex)}
                        />
                      )}
                    </>
                  ))}
                </div>
                <div className={style.btnContainer}>
                  <div className={style.imgContainer}>
                    <img
                      src={up}
                      onClick={(e) =>
                        currentProjectIndex === 0
                          ? e.preventDefault()
                          : setCurrentProjectIndex((data) => data - 1)
                      }
                      alt="up btn"
                      className={style.arrowBtn}
                    />
                  </div>
                  <div className={style.imgContainer}>
                    <img
                      src={down}
                      alt="down  btn"
                      onClick={(e) =>
                        currentProjectIndex + 1 ===
                        projectData[projectSelected.projectData || 0]
                          .imgBackground.length
                          ? e.preventDefault()
                          : setCurrentProjectIndex((data) => data + 1)
                      }
                      className={style.arrowBtn}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Protfolio;
