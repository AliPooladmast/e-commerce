import React from "react";
import { categories } from "../../data.js";

function Categories() {
  return (
    <div>
      {categories.map((item) => (
        <item />
      ))}
    </div>
  );
}

export default Categories;
