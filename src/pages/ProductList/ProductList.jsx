import Announcement from "../../components/Announcement/Announcement";
import NavBar from "../../components/NavBar/NavBar";
import React from "react";
import style from "./ProductList.module.scss";

function ProductList() {
  return (
    <div className={style.Container}>
      <Announcement />
      <NavBar />
      <h1>Dresses</h1>
      <div className={style.FilterContainer}>
        <div>Filter1</div>
        <div>Filter2</div>
      </div>
    </div>
  );
}

export default ProductList;
