import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import style from "./NavBar.module.scss";

const NavBar = () => {
  return (
    <div className={style.Container}>
      <div className={style.Wrapper}>
        <div className={style.Left}>
          <div className={style.Language}>EN</div>
          <div className={style.SearchContainer}>
            <input className={style.Input}></input>
            <Search className={style.Search} />
          </div>
        </div>
        <div className={style.Center}>
          <h1 className={style.Logo}>APQ.</h1>
        </div>
        <div className={style.Right}>
          <div>REGISTER</div>
          <div>SIGN IN</div>
          <div>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
