import axios from "axios";
import React, { useEffect, useState } from "react";
import { popularProducts } from "../../data";
import ProductItem from "../ProductItem/ProductItem";
import style from "./Products.module.scss";

const Products = ({ category, filters, sort }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          category
            ? `http://localhost:5000/api/products?${category}`
            : "http://localhost:5000/api/products"
        );
        setProducts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getProducts();
  }, [category]);

  // console.log(products);
  // console.log(filters);

  useEffect(() => {
    const filteredOnes = products.filter((item) =>
      Object.entries(filters).every(([key, value]) => item[key].includes(value))
    );

    console.log(filteredOnes);
  }, [filters, products]);

  return (
    <div className={style.Container}>
      {popularProducts.map((item) => (
        <ProductItem item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Products;
