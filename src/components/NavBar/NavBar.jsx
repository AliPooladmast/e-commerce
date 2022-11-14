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
          <Link to="/" className={style.Link}>
            <h1 className={style.Logo}>E-Shop Client</h1>
          </Link>
          <div className={style.SearchContainer}>
            <input className={style.Input} placeholder="Search"></input>
            <Search className={style.Search} />
          </div>
        </div>
        <div className={style.Right}>
          <Link to="/register" className={style.Link}>
            <div>REGISTER</div>
          </Link>
          <Link to="login" className={style.Link}>
            <div>SIGN IN</div>
          </Link>
          <Link to="/cart">
            <div>
              <Badge
                badgeContent={quantity}
                color="primary"
                overlap="rectangular"
                className={style.Badge}
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
