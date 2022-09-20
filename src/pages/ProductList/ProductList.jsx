import Products from "../../components/Products/Products";
import Newsletter from "../../components/Newsletter/Newsletter";
import Footer from "../../components/Footer/Footer";
import Announcement from "../../components/Announcement/Announcement";
import NavBar from "../../components/NavBar/NavBar";
import React, { useState } from "react";
import style from "./ProductList.module.scss";
import { useLocation } from "react-router-dom";

function ProductList() {
  const location = useLocation();
  const category = location.pathname.split("/")[2];

  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");

  const handleFilters = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className={style.Container}>
      <Announcement />
      <NavBar />
      <h1>{category}</h1>
      <div className={style.FilterContainer}>
        <div>
          <span>Filter Products</span>
          <select name="color" id="colors-select" onChange={handleFilters}>
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
          <select name="size" id="size-select" onChange={handleFilters}>
            <option value="size" disabled>
              Size
            </option>
            <option value="XS">XS</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
          </select>
        </div>
        <div>
          <span>Sort Product</span>
          <select
            name="sort"
            id="sort-select"
            defaultValue="newset"
            onChange={(e) => {
              setSort(e.target.value);
            }}
          >
            <option value="newest">Newest</option>
            <option value="asc">Price (Highest to Lowest)</option>
            <option value="desc">Price (Lowest to Highest)</option>
          </select>
        </div>
      </div>
      <Products category={category} filters={filters} sort={sort} />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default ProductList;
