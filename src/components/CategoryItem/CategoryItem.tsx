import React from "react";
import { Link } from "react-router-dom";
import style from "./CategoryItem.module.scss";

enum categoryEnum {
  casual,
  fashion,
  formal,
}

interface IItem {
  id: number;
  img: string;
  imgMobile: string;
  title: string;
  category: categoryEnum;
}

const CategoryItem = ({ item }: { item: IItem }) => {
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
          <h1 data-testid="itemTitle">{item.title}</h1>
        </Link>
      </div>
    </div>
  );
};

export default CategoryItem;
