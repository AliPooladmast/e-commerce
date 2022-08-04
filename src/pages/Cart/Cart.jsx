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
        <div className={style.Top}>
          <button className={style.Button}>CONTINUE SHOPPING</button>
          <div className={style.TopTexts}>
            <span>Shopping Bag(2)</span>
            <span>Your Wishlist (0)</span>
          </div>
          <button className={style["Button--filled"]}>CHECK OUT NOW</button>
        </div>
        <div className={style.Bottom}>
          <div className={style.Info}>Info</div>
          <div className={style.Summary}>Summary</div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
