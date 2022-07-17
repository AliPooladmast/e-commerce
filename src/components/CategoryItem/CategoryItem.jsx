import React from "react";
import style from "./CategoryItem.module.scss";

const CategoryItem = ({ item }) => {
  console.log(item);
  return (
    <div className={style.Container}>
      <img className={style.Image} src={item.img} alt={item.title} />
      <div className={style.Info}>
        <h1>{item.title}</h1>
        <button>SHOP NOW</button>
      </div>
    </div>
  );
};

export default CategoryItem;
