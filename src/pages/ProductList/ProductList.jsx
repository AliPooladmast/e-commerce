import Announcement from "../../components/Announcement/Announcement";
import NavBar from "../../components/NavBar/NavBar";
import React from "react";
import style from "./ProductList.module.scss";

function ProductList() {
  return (
    <div className={style.Container}>
      <Announcement />
      <NavBar />
    </div>
  );
}

export default ProductList;
