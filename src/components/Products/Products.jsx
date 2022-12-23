import { Pagination } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setLoading, setMessage } from "../../redux/uxSlice";
import { publicRequest } from "../../requestMethods";
import ProductItem from "../ProductItem/ProductItem";
import style from "./Products.module.scss";

const Products = ({ category, filters, sort, newItems = false }) => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [pageCounts, setPageCounts] = useState(1);

  useEffect(() => {
    const getProducts = async () => {
      dispatch(setLoading(true));
      try {
        const res = await publicRequest.get(
          newItems
            ? "products?new=true"
            : `products?page=${page}` +
                `&category=${category || ""}` +
                `&size=${filters?.size || ""}` +
                `&color=${filters?.color || ""}` +
                `&title=${filters?.title || ""}` +
                `&sort=${sort || ""}`
        );
        if (res) {
          setProducts(res.data?.products);
          setPageCounts(res.data?.pageCounts);
          dispatch(setLoading(false));
        }
      } catch (err) {
        dispatch(setLoading(false));
        dispatch(
          setMessage({ type: "error", text: err?.response?.data?.toString() })
        );
      }
    };
    getProducts();
  }, [category, page, filters, sort, newItems, dispatch]);

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
