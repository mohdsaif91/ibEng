import React from "react";

import Stefan from "../../Asset/people/stefan.png";

import style from "./whoWeAre.module.scss";

function WhoWeAre() {
  return (
    <div className={style.whoWeAreContaine}>
      <div className={style.headingContainer}>
        <h1 className={style.heading}>THE MIND BEHIND </h1>
        <h1 className={style.heading}>IB ENG</h1>
        <div className={style.verticalDevider} />
      </div>
      <div className={style.headingContainerText}>
        {/* <div className={style.box}>
          <div className={style.borderLeft} />
          <div className={style.borderRight} />
        </div> */}
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
          {/* <div className={style.protfolioContainer}>
            <img src={Stefan} alt="" className={style.protfolioImg} />
          </div> */}
          <div className={style.bottomBorder} />
        </div>
        <div className={style.borderContainerThree}>
          <div className={style.rightTopBorder} />
          <div className={`${style.containerThreeHeadingOne} `}>
            <div
              className={`${style.heading} ${style.containerTwoHeadingWidth}`}
            >
              Our founder has also been a key participant in teams for editing
              instruction files for planning public transportation routes, mass
              transit systems in the Haifa metropolis, transportation master
              plans for the Haifa and northern districts, and other major
              infrastructure projects.
            </div>
            <div
              className={`${style.heading} ${style.containerTwoHeadingWidth} ${style.marginTop}`}
            >
              With decades of experience in planning, managing, and supervising
              projects in the public, residential, commercial, and
              infrastructure sectors, our founder has established a reputation
              for excellence in the industry. Our founder has always been
              passionate about his work in the field of engineering and
              construction.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhoWeAre;
