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
          <select name="filter-colors" id="colors-select">
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
          <select name="filter-size" id="size-select">
            <option value="size" disabled>
              Size
            </option>
            <option value="xs">XS</option>
            <option value="s">S</option>
            <option value="m">M</option>
            <option value="l">L</option>
            <option value="xl">XL</option>
          </select>
        </div>
        <div>
          <span>Sort Product</span>
          <select name="sort-product" id="sort-select">
            <option value="newest" selected>
              Newest
            </option>
            <option value="price-asc">Price (Highest to Lowest)</option>
            <option value="price-desc">Price (Lowest to Highest)</option>
          </select>
        </div>
      </div>
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default ProductList;
