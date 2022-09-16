import axios from "axios";
import React, { useEffect, useState } from "react";
import { popularProducts } from "../../data";
import ProductItem from "../ProductItem/ProductItem";
import style from "./Products.module.scss";

const Products = ({ category, filters, sort }) => {
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/products");
        console.log(res);
      } catch (err) {}
    };
    getProducts();
  }, []);

  return (
    <div className={style.Container}>
      {popularProducts.map((item) => (
        <ProductItem item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Products;
