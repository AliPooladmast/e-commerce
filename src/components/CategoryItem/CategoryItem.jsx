import React from "react";
import { Link } from "react-router-dom";
import style from "./CategoryItem.module.scss";

const CategoryItem = ({ item }) => {
  return (
    <div className={style.Container}>
      <Link to={`products/${item.category}`}>
        <img src={item.img} alt={item.title} />
        <div className={style.Info}>
          <h1>{item.title}</h1>
        </div>
      </Link>
    </div>
  );
};

export default CategoryItem;
