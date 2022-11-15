import React from "react";
import style from "./Newsletter.module.scss";

const Newsletter = () => {
  return (
    <div className={style.Container}>
      <h1>Join Now!</h1>
      <div className={style.Desc}>
        by registering here you can start buying products today!
      </div>
      <button>Register</button>
    </div>
  );
};

export default Newsletter;
