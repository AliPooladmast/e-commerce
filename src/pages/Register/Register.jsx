import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../../redux/apiCalls";
import style from "./register.module.scss";
const Joi = require("joi");

const schema = Joi.object({
  username: Joi.string().min(2).max(50).required(),
  email: Joi.string()
    .min(5)
    .max(255)
    .required()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } }),
  password: Joi.string().min(5).max(1024).required(),
  confirmPassword: Joi.ref("password"),
});

const Register = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState(null);
  const [input, setInput] = useState();

  const handleInput = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const { error } = schema.validate(input);
    console.log(error);
  };

  return (
    <div className={style.Container}>
      <div className={style.Wrapper}>
        <h1>CREATE AN ACCOUNT</h1>
        <form action="">
          <input
            type="text"
            placeholder="username"
            name="username"
            onChange={handleInput}
          />
          <input
            type="text"
            placeholder="email"
            name="email"
            onChange={handleInput}
          />
          <input
            type="password"
            placeholder="password"
            name="password"
            onChange={handleInput}
          />
          <input
            type="password"
            placeholder="confirm password"
            name="confirmPassword"
            onChange={handleInput}
          />
          <span>
            By creating an account, I consent to the precessing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </span>
          <button onClick={handleRegister}>CREATE</button>
          {error && <div className={style.Error}>{error}</div>}
        </form>
      </div>
    </div>
  );
};

export default Register;
