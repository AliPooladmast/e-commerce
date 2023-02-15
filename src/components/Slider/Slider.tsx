import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
import React, { useState } from "react";
import style from "./Slider.module.scss";
import { sliderItems } from "../../data";
import { Link } from "react-router-dom";

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction: any) => {
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
          <div className={style.Slide} key={item.id}>
            <div className={style.ImgContainer}>
              <img
                className={style.Image}
                src={item.img}
                srcSet={`${item.imgMobile} 300w, ${item.img} 700w`}
                sizes="(max-width: 850px) 300px, 700px"
                alt="slider"
              />
            </div>

            <div className={style.InfoContainer}>
              <h1 className={style.Title}>{item.title}</h1>
              <p className={style.Desc}>{item.desc}</p>
              <Link to="products">
                <button className={style.Button}>SHOP NOW</button>
              </Link>
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
