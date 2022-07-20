import {
  ShoppingCartOutlined,
  SearchOutlined,
  FavoriteBorderOutlined,
} from "@material-ui/icons";
import React from "react";
import style from "./ProductItem.module.scss";

const ProductItem = ({ item }) => {
  return (
    <div className={style.Container}>
      <div className={style.ImgContainer}>
        <img src={item.img} alt="" />
      </div>
      <div className={style.Info}>
        <div>
          <ShoppingCartOutlined />
        </div>
        <div>
          <SearchOutlined />
        </div>
        <div>
          <FavoriteBorderOutlined />
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
