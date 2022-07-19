import React from "react";
import { popularProducts } from "../../data";
import ProductItem from "../ProductItem/ProductItem";
import style from "./Products.module.scss";

const Products = () => {
  return (
    <div className={style.Container}>
      {popularProducts.map((item) => (
        <ProductItem item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Products;
