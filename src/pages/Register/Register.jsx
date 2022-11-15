import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../../redux/apiCalls";
import style from "./register.module.scss";

const Register = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState(null);
  const [input, setInput] = useState();

  const handleInput = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (input && input.password === input.confirmPassword) {
      const { confirmPassword, ...others } = input;
      register(dispatch, others);
      setError(null);
    } else {
      setError("Password and confirm do not match");
    }
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
