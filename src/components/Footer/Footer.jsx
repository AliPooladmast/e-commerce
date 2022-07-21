import { Facebook, Instagram, Twitter, WhatsApp } from "@material-ui/icons";
import React from "react";
import style from "./Footer.module.scss";

function Footer() {
  return (
    <div className={style.Container}>
      <div className={style.Left}>
        <h1 className={style.Logo}></h1>
        <p className={style.Desc}></p>
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
