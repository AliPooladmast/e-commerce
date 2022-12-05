import { Pagination } from "@mui/material";
import React, { useEffect, useState } from "react";
import { publicRequest } from "../../requestMethods";
import ProductItem from "../ProductItem/ProductItem";
import style from "./Products.module.scss";

const Products = ({ category, filters, sort, newItems = false }) => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [pageCounts, setPageCounts] = useState(1);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await publicRequest(
          newItems
            ? "http://localhost:5000/api/products?new=true"
            : `http://localhost:5000/api/products?page=${page}` +
                `&category=${category || ""}` +
                `&size=${filters?.size || ""}` +
                `&color=${filters?.color || ""}` +
                `&title=${filters?.title || ""}` +
                `&sort=${sort || ""}`
        );
        setProducts(res.data.products);
        setPageCounts(res.data.pageCounts);
      } catch (err) {
        console.log(err);
      }
    };
    getProducts();
  }, [category, page, filters, sort, newItems]);

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
      {!newItems && (
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
      )}
    </>
  );
};

export default Products;
