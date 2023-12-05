import React, { useState } from "react";
import Slider from "react-slick";

import { clientSayData } from "../../utils";

import style from "./whatOurClientSay.module.scss";
import "glider-js/glider.min.css";

const settings = {
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
  ],
};

function WhatOurClientSay() {
  const [currentClientSay, setcurrentClientSay] = useState(0);

  return (
    <div className={style.whatOurClientSayContainer}>
      <div className={style.whiteContainer}></div>
      <div className={style.greyContainer}>
        <div className={style.imgTextContainer}>
          <div className={style.clientSayParent}>
            <div className={style.clientSayHeading}>What our clients say</div>
          </div>
          <Slider
            centerPadding="4px"
            focusOnSelect={true}
            centerMode={currentClientSay !== 0 && true}
            className={style.slider}
            {...settings}
          >
            <>
              <img alt="client Say" className={`${style.img} imgItem`} />
            </>
            {clientSayData.map((m, index) => (
              <div className="JACK">
                <img
                  id={index}
                  key={m.id}
                  src={m.img}
                  draggable={true}
                  onClick={(e) => {
                    setcurrentClientSay(index);
                  }}
                  alt="client Say"
                  className={`${style.img} imgItem
                    ${currentClientSay === index && `${style.opacity1} center `}
                
                `}
                />
                <div
                  className={`${style.defaultName} ${
                    currentClientSay === index && style.activeName
                  }`}
                >
                  <div className={style.dash} />
                  {m.name}
                  <div className={style.dash} />
                </div>
              </div>
            ))}
            <img alt="" className={`${style.img} imgItem`} />
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default WhatOurClientSay;
