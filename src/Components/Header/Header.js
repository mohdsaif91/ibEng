import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import Logo from "../../Asset/Icon/logo.png";
import { pageRoutes } from "../../utils";

import style from "./header.module.scss";

function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className={style.headerContainer}>
      <div className={style.logoContainer}>
        <img src={Logo} alt="" className={style.logo} />
      </div>
      <ul className={style.pageLinks}>
        {pageRoutes.map((m) => (
          <li
            onClick={() => navigate(m.path)}
            className={`${style.link} ${
              location.pathname === m.path && style.activePage
            }`}
            key={m.id}
          >
            {m.label}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Header;
