import { Avatar, Badge } from "@mui/material";
import {
  Home,
  HowToReg,
  LocalMall,
  Login,
  Logout,
  Person,
  PlaylistAddCheck,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import style from "./NavBar.module.scss";
import { userRequest } from "../../requestMethods";
import { logout } from "../../redux/userSlice";
import { resetCart } from "../../redux/cartSlice";

const NavBar = () => {
  const dispatch = useDispatch();
  const quantity = useSelector((state) => state.cart.quantity);
  const { currentUser } = useSelector((state) => state.user);

  const handleLogout = () => {
    dispatch(logout());
    dispatch(resetCart());
    userRequest.defaults.headers.token = "";
  };

  return (
    <div className={style.Container}>
      <div className={style.Left}>
        <Link to="/" className={style.Link}>
          <h1 className={style.Logo}>E-Shop Client</h1>
        </Link>
      </div>
      <div className={style.Right}>
        <Link to="/cart" className={style.Link}>
          <div className={style.Item}>
            <Badge
              badgeContent={quantity}
              color="primary"
              overlap="rectangular"
              className={style.Badge}
            >
              <ShoppingCartOutlined />
            </Badge>
            <span>Cart</span>
          </div>
        </Link>

        <Link to="/" className={style.Link}>
          <div className={style.Item}>
            <Home />
            <span>Home</span>
          </div>
        </Link>

        <Link to="/products" className={style.Link}>
          <div className={style.Item}>
            <LocalMall />
            <span>Products</span>
          </div>
        </Link>

        {currentUser ? (
          <>
            <Link to="/orders" className={style.Link}>
              <div className={style.Item}>
                <PlaylistAddCheck />
                <span>Orders</span>
              </div>
            </Link>
            <div className={style.Item} onClick={handleLogout}>
              <Logout />
              <span>Logout</span>
            </div>
            <Link to="/user" className={style.Link}>
              <div className={style.Item}>
                <Person />
                <span>{currentUser?.username}</span>
              </div>
            </Link>
          </>
        ) : (
          <>
            <Link to="/register" className={style.Link}>
              <div className={style.Item}>
                <HowToReg />
                <span>Register</span>
              </div>
            </Link>
            <Link to="/login" className={style.Link}>
              <div className={style.Item}>
                <Login />
                <span>Sign In</span>
              </div>
            </Link>
          </>
        )}

        {currentUser && (
          <div className={style.Item}>
            <Avatar
              sx={{ width: 40, height: 40 }}
              src={currentUser.img}
              alt={currentUser.username}
            >
              {currentUser.username.charAt(0).toUpperCase()}
            </Avatar>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
