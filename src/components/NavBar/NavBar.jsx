import { Badge } from "@mui/material";
import { Search, ShoppingCartOutlined } from "@mui/icons-material";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import style from "./NavBar.module.scss";

const NavBar = () => {
  const quantity = useSelector((state) => state.cart.quantity);

  return (
    <div className={style.Container}>
      <div className={style.Wrapper}>
        <div className={style.Left}>
          <div className={style.Language}>EN</div>
          <div className={style.SearchContainer}>
            <input className={style.Input} placeholder="Search"></input>
            <Search className={style.Search} />
          </div>
        </div>
        <div className={style.Center}>
          <h1 className={style.Logo}>APQ.</h1>
        </div>
        <div className={style.Right}>
          <div>REGISTER</div>
          <div>SIGN IN</div>
          <Link to="/cart">
            <div>
              <Badge
                badgeContent={quantity}
                color="primary"
                overlap="rectangular"
              >
                <ShoppingCartOutlined />
              </Badge>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
