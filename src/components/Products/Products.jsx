import { Pagination } from "@mui/material";
import React, { useEffect, useState } from "react";
import { publicRequest } from "../../requestMethods";
import ProductItem from "../ProductItem/ProductItem";
import style from "./Products.module.scss";

const Products = ({ category, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [pageCounts, setPageCounts] = useState(1);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await publicRequest(
          page
            ? `http://localhost:5000/api/products?page=${page}` +
                `&category=${category || ""}` +
                `&size=${filters?.size || ""}` +
                `&color=${filters?.color || ""}` +
                `&title=${filters?.title || ""}`
            : "http://localhost:5000/api/products?new=true"
        );
        setProducts(res.data.products);
        setPageCounts(res.data.pageCounts);
      } catch (err) {
        console.log(err);
      }
    };
    getProducts();
  }, [category, page, filters]);

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
        {products?.map((item) => (
          <ProductItem item={item} key={item._id} />
        ))}
      </div>
      <div className={style.Pagination}>
        <Pagination
          count={pageCounts}
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
