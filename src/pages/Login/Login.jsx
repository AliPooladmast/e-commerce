import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import style from "./login.module.scss";
const Joi = require("joi");

const schema = Joi.object({
  username: Joi.string().min(2).max(50).required(),
  password: Joi.string().min(5).max(1024).required(),
  confirmPassword: Joi.ref("password"),
});

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { error, isFetching, currentUser } = useSelector((state) => state.user);
  const [input, setInput] = useState({});

  const handleInput = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = (e) => {
    e.preventDefault();
    console.log(input);
  };

  useEffect(() => {
    if (currentUser && !error) {
      navigate("/");
    }
  }, [currentUser]); //eslint-disable-line

  return (
    <div className={style.Container}>
      <div className={style.Wrapper}>
        <h1>SIGN IN</h1>
        <form action="">
          <input
            type="text"
            placeholder="username"
            name="username"
            onChange={handleInput}
          />
          <input
            name="password"
            type="password"
            placeholder="password"
            onChange={handleInput}
          />
          <button onClick={handleClick} disabled={isFetching}>
            LOGIN
          </button>
          {error && <div className={style.Error}>Somthing went wrong...</div>}
          <a href="register">Create an account</a>
        </form>
      </div>
    </div>
  );
};

export default Login;
