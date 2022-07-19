import React from "react";
import { categories } from "../../data.js";
import CategoryItem from "../CategoryItem/CategoryItem";
import style from "./Categories.module.scss";

function Categories() {
  return (
    <div className={style.Container}>
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </div>
  );
}

export default Categories;
