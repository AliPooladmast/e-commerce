import React from "react";
import { categories } from "../../data.js";
import CategoryItem from "../CategoryItem/CategoryItem";

function Categories() {
  return (
    <div>
      {categories.map((item) => (
        <CategoryItem />
      ))}
    </div>
  );
}

export default Categories;
