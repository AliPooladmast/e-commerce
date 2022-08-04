import React from "react";
import Announcement from "../../components/Announcement/Announcement";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import style from "./cart.module.scss";

const Cart = () => {
  return (
    <div className={style.Container}>
      <NavBar />
      <Announcement />
      <div className={style.Wrapper}>
        <h1>YOUR BAG</h1>
        <div className={style.Top}></div>
        <div className={style.bottom}></div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
