import React from "react";
import style from "./login.module.scss";

const Login = () => {
  return (
    <div className={style.Container}>
      <div className={style.Wrapper}>
        <h1>SIGN IN</h1>
        <form action="">
          <input type="text" placeholder="username" />
          <input type="text" placeholder="password" />
          <button>LOGIN</button>
          <a href="">Forgot your password?</a>
          <a href="">Create an account</a>
        </form>
      </div>
    </div>
  );
};

export default Login;
