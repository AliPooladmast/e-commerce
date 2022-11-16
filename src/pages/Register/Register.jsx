import { Alert, Snackbar } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  const { currentUser, error } = useSelector((state) => state.user);
  const [errorMessage, setErrorMessage] = useState(null);
  const [input, setInput] = useState({});
  const [showSnackbar, setShowSnackbar] = useState(false);

  const handleInput = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const { error } = schema.validate(input);
    if (error) {
      setErrorMessage(error.details?.[0]?.message);
      setShowSnackbar(true);
    } else {
      const { confirmPassword, ...others } = input;
      register(dispatch, others);
    }
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setShowSnackbar(false);
  };

  useEffect(() => {
    if (currentUser && !error) {
      navigate("/");
    }
  }, [currentUser]); //eslint-disable-line

  return (
    <div className={style.Container}>
      <Snackbar
        open={showSnackbar}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          {errorMessage}
        </Alert>
      </Snackbar>
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
        </form>
      </div>
    </div>
  );
};

export default Register;
