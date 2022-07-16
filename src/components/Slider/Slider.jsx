import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import React from "react";
import style from "./Slider.module.scss";
import fashionSet from "../../assests/images/fashion-set.png";

const Slider = () => {
  return (
    <div className={style.Container}>
      <div className={`${style.Arrow} ${style.Left}`}>
        <ArrowLeftOutlined />
      </div>

      <div className={style.Wrapper}>
        <div className={style.ImgContainer}>
          <img className={style.Image} src={fashionSet} alt="a fashion set" />
        </div>
      </div>

      <div className={`${style.Arrow} ${style.Right}`}>
        <ArrowRightOutlined />
      </div>
    </div>
  );
};

export default Slider;
