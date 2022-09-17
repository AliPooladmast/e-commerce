import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductItem from "../ProductItem/ProductItem";
import style from "./Products.module.scss";

const Products = ({ category, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

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

  useEffect(() => {
    category &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [filters, products, category]);

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt))
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

  return (
    <div className={style.Container}>
      {category
        ? filteredProducts.map((item) => (
            <ProductItem item={item} key={item._id} />
          ))
        : products
            .slice(0, 8)
            .map((item) => <ProductItem item={item} key={item._id} />)}
    </div>
  );
};

export default Products;
