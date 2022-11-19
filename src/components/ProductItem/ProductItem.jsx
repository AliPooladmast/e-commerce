import { ShoppingCartOutlined, SearchOutlined } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";
import style from "./ProductItem.module.scss";

const ProductItem = ({ item }) => {
  return (
    <div className={style.Wrapper}>
      <div className={style.Container}>
        <div className={style.ImgContainer}>
          <img src={item.img} alt="" />
        </div>
        <div className={style.Info}>
          <div>
            <ShoppingCartOutlined />
          </div>
          <div>
            <Link to={`/product/${item._id}`} className={style.Link}>
              <SearchOutlined />
            </Link>
          </div>
        </div>
      </div>
      <div className={style.Title}>{item.title}</div>
    </div>
  );
};

export default ProductItem;
