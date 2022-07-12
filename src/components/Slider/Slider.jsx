import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import React from "react";
import style from "./Slider.module.scss";

const Slider = () => {
  return (
    <div className={style.Container}>
      <div className={style.Arrow}>
        <ArrowLeftOutlined />
      </div>
      <div className={style.Arrow}>
        <ArrowRightOutlined />
      </div>
    </div>
  );
};

export default Slider;
