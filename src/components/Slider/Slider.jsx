import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
import React, { useState } from "react";
import style from "./Slider.module.scss";
import { sliderItems } from "../../data";

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction) => {
    if (direction === "left")
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 3);
    else setSlideIndex(slideIndex < 3 ? slideIndex + 1 : 0);
  };

  return (
    <div className={style.Container}>
      <div className={style["Arrow--Left"]} onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </div>

      <div
        className={style.Wrapper}
        style={{ transform: `translateX(${slideIndex * -100}vw)` }}
      >
        {sliderItems.map((item) => (
          <div
            className={style.Slide}
            style={{ backgroundColor: item.bg }}
            key={item.id}
          >
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

      <div
        className={style["Arrow--Right"]}
        onClick={() => handleClick("right")}
      >
        <ArrowRightOutlined />
      </div>
    </div>
  );
};

export default Slider;
