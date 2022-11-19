import React from "react";
import style from "./Invite.module.scss";
import { Link } from "react-router-dom";

const Newsletter = () => {
  return (
    <div className={style.Container}>
      <h1>Join Now!</h1>
      <div className={style.Desc}>
        by registering here you can start buying products today!
      </div>
      <Link to="/register">
        <button>Register</button>
      </Link>
    </div>
  );
};

export default Newsletter;
