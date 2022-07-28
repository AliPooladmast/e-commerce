import Products from "../../components/Products/Products";
import Newsletter from "../../components/Newsletter/Newsletter";
import Footer from "../../components/Footer/Footer";
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
        <div>
          <span>Filter Products</span>
          <select name="filter-product" id="filter-product-select">
            <option value="color" disabled>
              Color
            </option>
            <option value="white">White</option>
            <option value="black">Black</option>
            <option value="red">Red</option>
            <option value="yellow">Yellow</option>
            <option value="blue">Blue</option>
            <option value="green">Green</option>
          </select>
        </div>
        <div>
          <span>Sort Product</span>
        </div>
      </div>
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default ProductList;
