import {
  ShoppingCartOutlined,
  SearchOutlinedIcon,
  FavoriteBorderOutlinedIcon,
} from "@material-ui/icons";
import React from "react";
import style from "./ProductItem.module.scss";

const ProductItem = ({ item }) => {
  return (
    <div className={style.Container}>
      <div className={style.Circle}>
        <img src="" alt="" />
        <div className={style.Info}>
          <div>
            <ShoppingCartOutlined />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
