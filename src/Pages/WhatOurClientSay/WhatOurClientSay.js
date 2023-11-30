import React, { useEffect, useRef, useMemo, useState } from "react";
import GliderComponent from "react-glider";
import Glide from "@glidejs/glide";

import { clientSayData } from "../../utils";

import style from "./whatOurClientSay.module.scss";
import "glider-js/glider.min.css";

const options = {
  attributes: true,
};

const sliderConfiguration = {
  dragDistance: false,
  focusAt: "center",
  hoverMouse: false,
  preview: 3,
  //   paddings: window.innerWidth <= 700 ? "10%" : "25%",
  reqwind: true,
  startAt: 0,
  type: "carousel",
};

function WhatOurClientSay() {
  const [currentClientSay, setcurrentClientSay] = useState(0);
  const [mouseData, setMouseData] = useState({
    isDown: false,
    scrollLeft: 0,
    startX: 0,
  });

  const reactGliderRef = useRef();

  const callBackMethod = (mutationList, observe) => {
    mutationList.forEach((mutation) => {
      if (
        mutation.type === "attributes" &&
        mutation.attributeName === "class" &&
        mutation.target.className.includes("center")
      ) {
        const itemListConatiner = document.querySelector(".imgItem");
        // itemListConatiner.classList.add(style.opacity1);
      }
    });
  };

  useEffect(() => {
    const imgItem = document.querySelector(".imgItem");
    const observe = new MutationObserver(callBackMethod);
    observe.observe(imgItem, options);
    // if (imgItem.classList.contains("center")) {
    //   console.log(imgItem.classList);
    //   imgItem.classList.add(style.active);
    // } else {
    //   imgItem.classList.remove(style.active);
    // }
    // slider.mount();/
  }, []);

  //   console.log(mouseData);

  const mouseDownEvent = (e) => {
    const scrollItem = document.querySelector(".scrollItem");
    // isDown = true;
    scrollItem.classList.add(style.active);
    setMouseData({
      ...mouseData,
      isDown: true,
      scrollLeft: scrollItem.scrollLeft,
      startX: scrollItem.offsetLeft,
    });
    // console.log(scrollLeft, " <>?");
  };

  const onMouseLeave = (e) => {
    // console.log("called <>/ ", isDown);
    const scrollItem = document.querySelector(".scrollItem");
    setMouseData({ ...mouseData, isDown: false });
    scrollItem.classList.remove("whatOurClientSay_active__OZNTw");
  };

  const onMouseUp = (e) => {
    // const scrollItem = document.querySelector(".scrollItem");
    // setMouseData({ ...mouseData, isDown: false });
    // scrollItem.classList.remove("whatOurClientSay_active__OZNTw");
  };

  const onMouseMove = (e) => {
    console.log(e.target.id);
    const imgItem = document.querySelector(".imgItem");
    console.log(imgItem.classList, " <>?");
    // if (imgItem.classList.contains("center")) {
    //   console.log(imgItem.classList);
    //   imgItem.classList.add(style.active);
    // } else {
    //   imgItem.classList.remove(style.active);
    // }
    // console.log("called ", imgItem.classList);
    // const
    // if (!mouseData.isDown) {
    //   //   console.log("return <>?");
    //   return;
    // }
    // e.preventDefault();
    // const scrollItem = document.querySelector(".scrollItem");
    // const x = e.pageX - scrollItem.offsetLeft;
    // const walk = (x - mouseData.startX) * 2;
    // scrollItem.scrollLeft = mouseData.scrollLeft - walk;
    // console.log(scrollLeft, "-", walk);
  };

  return (
    <div className={style.whatOurClientSayContainer}>
      <div className={style.whiteContainer}></div>
      <div className={style.greyContainer}>
        <div className={style.imgTextContainer}>
          <div className={style.clientSayParent}>
            <div className={style.clientSayHeading}>What our clients say</div>
          </div>
          {/* {clients} */}
          <GliderComponent
            draggable
            duration={1}
            className={style.sliderContainer}
            slidesToShow={3}
            scrollLock={true}
            slidesToScroll={1}
            ref={reactGliderRef}
          >
            <img className={style.img} />
            {clientSayData.map((m, index) => (
              <img
                id={index}
                key={m.id}
                src={m.img}
                draggable={true}
                onDragStart={() => console.log("started")}
                onMouseMove={(e) => {}}
                onDrag={() => {
                  console.log("Called Drag");
                  //   setcurrentClientSay(index);
                }}
                onClick={(e) => {
                  const itemListConatiner = document.querySelector(".imgItem");
                  const position = e.target.getBoundingClientRect();
                  console.log(position);
                  reactGliderRef.current.scrollTo(position.x - 400, 0);
                  //   reactGliderRef.current.scrollTo(80, 0);
                  //   itemListConatiner

                  //   itemListConatiner.classList.add("opacity1");
                  //   console.log(itemListConatiner, " <>? ");
                  setcurrentClientSay(index);
                }}
                alt="client Say"
                className={`${style.img} imgItem
                ${currentClientSay === index && `${style.opacity1} center `}`}
              />
            ))}
            <img className={style.img} />
          </GliderComponent>
          {/* <div
            className={style.imgScrollContainer}
            onMouseDown={(e) => mouseDownEvent(e)}
            onMouseLeave={(e) => onMouseLeave(e)}
            onMouseUp={(e) => onMouseUp(e)}
            onMouseMove={(e) => onMouseMove(e)}
          >
            {clientSayData.map((m) => (
              <div
                className={`${style.scrollItem} scrollItem ${
                  mouseData.isDown && style.active
                }`}
                key={m.id}
              >
                <img src={m.img} alt="client Say" className={style.img} />
              </div>
            ))}
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default WhatOurClientSay;
