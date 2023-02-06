import React from "react";
import { Link } from "react-router-dom";
import style from "./CategoryItem.module.scss";

enum categoryType {
  casual,
  fashion,
  formal,
}

interface itemType {
  id: number;
  img: string;
  imgMobile: string;
  title: string;
  category: categoryType;
}

const CategoryItem = ({ item }: { item: itemType }) => {
  return (
    <div className={style.Container}>
      <img
        src={item.img}
        srcSet={`${item.imgMobile} 200w, ${item.img} 500w`}
        sizes="(max-width: 380px) 200px, 500px"
        alt={item.title}
      />
      <div className={style.Info}>
        <Link to={`products/${item.category}`} className={style.Link}>
          <h1>{item.title}</h1>
        </Link>
      </div>
    </div>
  );
};

export default CategoryItem;
