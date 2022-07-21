import {
  Facebook,
  Instagram,
  Twitter,
  WhatsApp,
  Room,
  Phone,
  MailOutline,
} from "@material-ui/icons";
import React from "react";
import style from "./Footer.module.scss";
import paymentMethods from "../../assests/images/payment-methods.jpg";

function Footer() {
  return (
    <div className={style.Container}>
      <div className={style.Left}>
        <h1>APQ.</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nemo
          cum, quo architecto officiis fugit ab cumque eveniet reprehenderit,
          minima voluptatem! Necessitatibus officiis vel omnis quo voluptatem
          nulla saepe doloribus?
        </p>
        <div className={style.SocialContainer}>
          <div className={style["SocialIcon--facebook"]}>
            <Facebook />
          </div>
          <div className={style["SocialIcon--instagram"]}>
            <Instagram />
          </div>
          <div className={style["SocialIcon--twitter"]}>
            <Twitter />
          </div>
          <div className={style["SocialIcon--whatsapp"]}>
            <WhatsApp />
          </div>
        </div>
      </div>
      <div className={style.Center}>
        <h1>Usefull Links</h1>
        <ul>
          <li>Home</li>
          <li>Cart</li>
          <li>Men Fashion</li>
          <li>Women Fashion</li>
          <li>Accessories</li>
          <li>My Account</li>
          <li>Order Tracking</li>
          <li>Wishlist</li>
          <li>Terms</li>
        </ul>
      </div>
      <div className={style.Right}>
        <h1>Contact</h1>
        <div>
          <Room style={{ marginRight: "10px" }} />
          3949 Deer Haven Drive, Greenville, SC
        </div>
        <div>
          <Phone style={{ marginRight: "10px" }} />
          803-389-4982
        </div>
        <div>
          <MailOutline style={{ marginRight: "10px" }} />
          bexoli2205@anlubi.com
        </div>
        <img src={paymentMethods} alt="payment methods" />
      </div>
    </div>
  );
}

export default Footer;
