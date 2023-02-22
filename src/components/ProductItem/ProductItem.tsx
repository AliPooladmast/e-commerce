import { ShoppingCartOutlined, SearchOutlined } from "@mui/icons-material";
import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addProduct } from "../../redux/cartSlice";
import style from "./ProductItem.module.scss";

interface IItem {
  _id: string;
  quantity: number;
  price: number;
  size: string;
  color: string;
  title: string;
  img?: string;
}

const ProductItem = ({ item }: { item: IItem }) => {
  const dispatch = useDispatch();

  const handleAddClick = () => {
    dispatch(
      addProduct({
        ...item,
        quantity: 1,
        size: item.size[0],
        color: item.color[0],
      })
    );
  };

  return (
    <div className={style.Wrapper}>
      <div className={style.Container}>
        <div className={style.ImgContainer}>
          <img src={item.img} alt="" />
        </div>
        <div className={style.Info}>
          <div onClick={handleAddClick}>
            <ShoppingCartOutlined />
          </div>
          <div>
            <Link to={`/product/${item._id}`} className={style.Link}>
              <SearchOutlined />
            </Link>
          </div>
        </div>
      </div>
      <div className={style.Title}>
        <div>{item.title}</div>
        <div className={style.Price}>${item.price}</div>
      </div>
    </div>
  );
};

export default ProductItem;
