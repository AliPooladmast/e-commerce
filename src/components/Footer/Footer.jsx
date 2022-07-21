import { Facebook, Instagram, Twitter, WhatsApp } from "@material-ui/icons";
import React from "react";
import style from "./Footer.module.scss";

function Footer() {
  return (
    <div className={style.Container}>
      <div className={style.Left}></div>
      <div className={style.Center}></div>
      <div className={style.Right}></div>
    </div>
  );
}

export default Footer;
