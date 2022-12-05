import React from "react";
import style from "./modalMessage.module.scss";

const ModalMessage = ({
  message,
  firstOption,
  secondOption,
  onClose,
  onConfirm,
}) => {
  return (
    <div className={style.Container}>
      <div className={style.Message}>
        <span>{message}</span>
      </div>
      <div className={style.Confirm}>
        <button onClick={onConfirm} className={style.Yes}>
          {firstOption}
        </button>
        <button onClick={onClose}>{secondOption}</button>
      </div>
    </div>
  );
};

export default ModalMessage;
