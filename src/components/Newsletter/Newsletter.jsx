import React from "react";
import style from "./Newsletter.module.scss";
import { Send } from "@material-ui/icons";

const Newsletter = () => {
  return (
    <div className={style.Container}>
      <h1>Newsletter</h1>
      <div className={style.Desc}>
        Subscribe Here to Recieve Our Latest Hot Products
      </div>
      <div className={style.InputContainer}>
        <input type="text" placeholder="your e-mail" />
        <button>
          <Send />
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
