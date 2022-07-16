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
        <div className={style.Slide}>
          <div className={style.ImgContainer}>
            <img className={style.Image} src={fashionSet} alt="a fashion set" />
          </div>
          <div className={style.InfoContainer}>
            <h1>This Month Sale</h1>
            <p>NEW PRODUCTS WOULD BE DISCOUNTED UP TO 30%</p>
            <button>SHOP NOW</button>
          </div>
        </div>
      </div>

      <div className={`${style.Arrow} ${style.Right}`}>
        <ArrowRightOutlined />
      </div>
    </div>
  );
};

export default Slider;
