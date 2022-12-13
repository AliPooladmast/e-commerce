import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { register } from "../../redux/apiCalls";
import style from "./register.module.scss";
import { setMessage } from "../../redux/uxSlice";
const Joi = require("joi");

const schema = Joi.object({
  username: Joi.string().min(2).max(50).required(),
  fullname: Joi.string().min(5).max(50),
  phone: Joi.string().min(5).max(20),
  address: Joi.string().min(5).max(511),
  email: Joi.string()
    .min(5)
    .max(255)
    .required()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } }),
  password: Joi.string().min(5).max(1024).required(),
  confirmPassword: Joi.ref("password"),
}).with("password", "confirmPassword");

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.user);
  const [input, setInput] = useState({});

  const handleInput = (e) => {
    setInput((prev) => {
      if (e.target.value) {
        return { ...prev, [e.target.name]: e.target.value };
      } else {
        delete prev[e.target.name];
        return prev;
      }
    });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const { error: joiError } = schema.validate(input);
    if (joiError) {
      dispatch(
        setMessage({
          type: "error",
          text: joiError.details?.[0]?.message?.toString(),
        })
      );
    } else {
      const { confirmPassword, ...others } = input;
      register(dispatch, others);
    }
  };

  useEffect(() => {
    if (currentUser) {
      navigate("/");
    }
  }, [currentUser]); //eslint-disable-line

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
            placeholder="fullname (optional)"
            name="fullname"
            onChange={handleInput}
          />
          <input
            type="text"
            placeholder="phone (optional)"
            name="phone"
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
          <input
            type="text"
            placeholder="address (optional)"
            name="address"
            onChange={handleInput}
          />
          <span>
            By creating an account, I consent to the precessing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </span>
          <button onClick={handleRegister}>CREATE</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
