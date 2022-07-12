import React from "react";
import style from "./NavBar.module.scss";

const NavBar = () => {
  return (
    <div className={style.Container}>
      <div className={style.Wrapper}>
        <div className={style.Left}>
          <div className={style.Language}>EN</div>
        </div>
        <div className={style.Center}>center</div>
        <div className={style.Right}>right</div>
      </div>
    </div>
  );
};

export default NavBar;
