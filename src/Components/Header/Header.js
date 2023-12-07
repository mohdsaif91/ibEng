import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Animated } from "react-animated-css";

import Logo from "../../Asset/Icon/logo.png";
import { pageRoutes } from "../../utils";
import navIcon from "../../Asset/Icon/navIcon.png";
import mobileIcon1 from "../../Asset/Icon/mobileLogo1.png";
import mobileIcon2 from "../../Asset/Icon/mobileLogo2.png";
import closeIcon from "../../Asset/Icon/close.png";

import style from "./header.module.scss";

function Header() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [mobile] = useState(
    Math.min(window.screen.width, window.screen.height) < 768 ||
      navigator.userAgent.indexOf("Mobi") > -1
  );
  const [openNavDrawer, setOpenNavDrawer] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  console.log(mobile, " is Mobile <>? ");

  return (
    <div className={style.headerContainer}>
      <div className={style.logoContainer}>
        {mobile ? (
          <div className={style.mobileIconContainer}>
            <img
              src={mobileIcon1}
              alt="mobileIcon"
              className={style.mobileIcon}
            />
            <img
              src={mobileIcon2}
              alt="mobileIcon"
              className={style.mobileIcon}
            />
          </div>
        ) : (
          <img src={Logo} alt="" className={style.logo} />
        )}
      </div>
      <ul className={`${style.pageLinks} ${mobile && style.hidePageRoutes}`}>
        {pageRoutes.map((m) => (
          <>
            {!m.icon ? (
              <li
                onClick={() => navigate(m.path)}
                className={`${style.link} ${
                  location.pathname === m.path && style.activePage
                }`}
                key={m.id}
              >
                {m.label}
              </li>
            ) : (
              <li
                onClick={() => setOpenDrawer(!openDrawer)}
                className={`${style.link} ${
                  (location.pathname === "/missionAndVision" ||
                    location.pathname === "/theMindBehind" ||
                    location.pathname === "/team") &&
                  style.activePage
                } ${style.withIcon}`}
                key={m.id}
              >
                {m.label}
                {m.icon && !openDrawer && (
                  <span
                    className={style.iconMarginLeft}
                    onClick={() => setOpenDrawer(true)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      viewBox="0 0 28 28"
                      fill="none"
                    >
                      <path
                        d="M14 0C6.272 0 0 6.272 0 14C0 21.728 6.272 28 14 28C21.728 28 28 21.728 28 14C28 6.272 21.728 0 14 0ZM14 16.8L8.4 11.2H19.6L14 16.8Z"
                        fill="#BBC4D0"
                      />
                    </svg>
                  </span>
                )}
                {m.icon && openDrawer && (
                  <span
                    className={style.iconMarginLeft}
                    onClick={() => setOpenDrawer(false)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      viewBox="0 0 28 28"
                      fill="none"
                    >
                      <path
                        d="M14 0C6.272 0 0 6.272 0 14C0 21.728 6.272 28 14 28C21.728 28 28 21.728 28 14C28 6.272 21.728 0 14 0ZM14 16.8L8.4 11.2H19.6L14 16.8Z"
                        fill="#397ce2"
                      />
                    </svg>
                  </span>
                )}
                {openDrawer && (
                  <Animated
                    animationIn="fadeInDown"
                    isVisible={openDrawer}
                    animationInDuration={1000}
                    className={style.DrawerOpen}
                  >
                    <div
                      className={style.subLinks}
                      onClick={() => {
                        console.log("JOJO");
                        navigate("/missionAndVision");
                      }}
                    >
                      mission and vision
                    </div>
                    <div
                      className={style.subLinks}
                      onClick={() => navigate("/theMindBehind")}
                    >
                      the mind behind ib eng
                    </div>
                    <div
                      className={style.subLinks}
                      onClick={() => navigate("/team")}
                    >
                      team
                    </div>
                  </Animated>
                )}
              </li>
            )}
          </>
        ))}
      </ul>
      {mobile && (
        <img
          src={navIcon}
          alt="navIcon"
          className={style.navIcon}
          onClick={() => setOpenNavDrawer(true)}
        />
      )}
      {openNavDrawer && (
        <Animated
          animationIn="slideInLeft"
          animationOut="slideInRight"
          isVisible={true}
          animationInDelay={500}
          animationInDuration={1000}
          className={style.mobileNavDrawer}
        >
          <div
            className={`${style.mobileIconContainer} ${style.navMobileContainer}`}
          >
            <div>
              <img
                src={mobileIcon1}
                alt="mobileIcon"
                className={style.mobileIcon}
              />
              <img
                src={mobileIcon2}
                alt="mobileIcon"
                className={style.mobileIcon}
              />
            </div>
            <img
              src={closeIcon}
              alt="closeIcon"
              className={style.navCloseIcon}
              onClick={() => {
                setOpenDrawer(false);
                setOpenNavDrawer(false);
              }}
            />
          </div>
          <ul className={`${style.pageLinks}`}>
            {pageRoutes.map((m) => (
              <>
                {!m.icon ? (
                  <li
                    onClick={() => {
                      setOpenNavDrawer(false);
                      navigate(m.path);
                    }}
                    className={`${style.link} ${
                      location.pathname === m.path && style.activePage
                    }`}
                    key={m.id}
                  >
                    {m.label}
                  </li>
                ) : (
                  <li
                    onClick={() => setOpenDrawer(!openDrawer)}
                    className={`${style.link} ${
                      (location.pathname === "/missionAndVision" ||
                        location.pathname === "/theMindBehind" ||
                        location.pathname === "/team") &&
                      style.activePage
                    } ${style.withIcon}`}
                    key={m.id}
                  >
                    {m.label}
                    {m.icon && !openDrawer && (
                      <span
                        className={style.iconMarginLeft}
                        onClick={() => setOpenDrawer(true)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="28"
                          height="28"
                          viewBox="0 0 28 28"
                          fill="none"
                        >
                          <path
                            d="M14 0C6.272 0 0 6.272 0 14C0 21.728 6.272 28 14 28C21.728 28 28 21.728 28 14C28 6.272 21.728 0 14 0ZM14 16.8L8.4 11.2H19.6L14 16.8Z"
                            fill="#BBC4D0"
                          />
                        </svg>
                      </span>
                    )}
                    {m.icon && openDrawer && (
                      <span
                        className={style.iconMarginLeft}
                        onClick={() => setOpenDrawer(false)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="28"
                          height="28"
                          viewBox="0 0 28 28"
                          fill="none"
                        >
                          <path
                            d="M14 0C6.272 0 0 6.272 0 14C0 21.728 6.272 28 14 28C21.728 28 28 21.728 28 14C28 6.272 21.728 0 14 0ZM14 16.8L8.4 11.2H19.6L14 16.8Z"
                            fill="#397ce2"
                          />
                        </svg>
                      </span>
                    )}
                    {openDrawer && (
                      <Animated
                        animationIn="fadeInDown"
                        isVisible={openDrawer}
                        animationInDuration={1000}
                        className={style.DrawerOpen}
                      >
                        <div
                          className={style.subLinks}
                          onClick={() => {
                            setOpenDrawer(false);
                            setOpenNavDrawer(false);
                            navigate("/missionAndVision");
                          }}
                        >
                          mission and vision
                        </div>
                        <div
                          className={style.subLinks}
                          onClick={() => {
                            setOpenDrawer(false);
                            setOpenNavDrawer(false);
                            navigate("/theMindBehind");
                          }}
                        >
                          the mind behind ib eng
                        </div>
                        <div
                          className={style.subLinks}
                          onClick={() => {
                            setOpenDrawer(false);
                            setOpenNavDrawer(false);
                            navigate("/team");
                          }}
                        >
                          team
                        </div>
                      </Animated>
                    )}
                  </li>
                )}
              </>
            ))}
          </ul>
        </Animated>
      )}
    </div>
  );
}

export default Header;
