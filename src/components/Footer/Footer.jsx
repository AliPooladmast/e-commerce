import { Facebook, Instagram, Twitter, WhatsApp } from "@material-ui/icons";
import React from "react";
import style from "./Footer.module.scss";

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
          <div className={style.SocialIcon}>
            <Facebook />
          </div>
          <div className={style.SocialIcon}>
            <Instagram />
          </div>
          <div className={style.SocialIcon}>
            <Twitter />
          </div>
          <div className={style.SocialIcon}>
            <WhatsApp />
          </div>
        </div>
      </div>
      <div className={style.Center}></div>
      <div className={style.Right}></div>
    </div>
  );
}

export default Footer;
