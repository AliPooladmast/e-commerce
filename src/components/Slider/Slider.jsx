import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import React from "react";
import style from "./Slider.module.scss";
import { sliderItems } from "../../data";

const Slider = () => {
  return (
    <div className={style.Container}>
      <div className={`${style.Arrow} ${style.Left}`}>
        <ArrowLeftOutlined />
      </div>

      <div className={style.Wrapper}>
        {sliderItems.map((item) => (
          <div className={style.Slide} style={{ backgroundColor: item.bg }}>
            <div className={style.ImgContainer}>
              <img className={style.Image} src={item.img} alt="a fashion set" />
            </div>
            <div className={style.InfoContainer}>
              <h1 className={style.Title}>{item.title}</h1>
              <p className={style.Desc}>{item.desc}</p>
              <button className={style.Button}>SHOP NOW</button>
            </div>
          </div>
        ))}
      </div>

      <div className={`${style.Arrow} ${style.Right}`}>
        <ArrowRightOutlined />
      </div>
    </div>
  );
};

export default Slider;
