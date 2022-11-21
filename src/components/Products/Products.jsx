import { Pagination } from "@mui/material";
import React, { useEffect, useState } from "react";
import { publicRequest } from "../../requestMethods";
import ProductItem from "../ProductItem/ProductItem";
import style from "./Products.module.scss";

const Products = ({ category, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await publicRequest(
          category
            ? `http://localhost:5000/api/products?category=${category}`
            : "http://localhost:5000/api/products?new=true"
        );
        setProducts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getProducts();
  }, [category]);

  useEffect(() => {
    products &&
      filters &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [filters, products]);

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

  const handlePage = (event, value) => {
    setPage(value);
  };

  return (
    <>
      <div className={style.Container}>
        {filters
          ? filteredProducts.map((item) => (
              <ProductItem item={item} key={item._id} />
            ))
          : products
              .slice(0, 8)
              .map((item) => <ProductItem item={item} key={item._id} />)}
      </div>
      <div className={style.Pagination}>
        <Pagination
          count={10}
          color="secondary"
          showFirstButton
          showLastButton
          page={page}
          onChange={handlePage}
        />
      </div>
    </>
  );
};

export default Products;
