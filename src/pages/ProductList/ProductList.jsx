import Products from "../../components/Products/Products";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import React, { useState } from "react";
import style from "./ProductList.module.scss";
import { useLocation } from "react-router-dom";
import { Cancel, Search } from "@mui/icons-material";

function ProductList() {
  const location = useLocation();
  const category = location.pathname.split("/")[2];

  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");
  const [search, setSearch] = useState("");

  const handleFilters = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  const handleReset = () => {
    setFilters({});
    setSearch("");
  };

  return (
    <div className={style.Container}>
      <NavBar />
      {category && (
        <h1 className={style.Title}>
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </h1>
      )}
      <div className={style.FilterContainer}>
        <div className={style.FilterProduct}>
          <span>Filter Products</span>
          <select
            name="color"
            id="colors-select"
            onChange={handleFilters}
            value={filters?.color || ""}
          >
            <option value="color" hidden>
              Color
            </option>
            <option value="White">White</option>
            <option value="Black">Black</option>
            <option value="Red">Red</option>
            <option value="Yellow">Yellow</option>
            <option value="Blue">Blue</option>
            <option value="Green">Green</option>
          </select>

          <select
            name="size"
            id="size-select"
            onChange={handleFilters}
            value={filters.size || ""}
          >
            <option value="size" hidden>
              Size
            </option>
            <option value="XS">XS</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
          </select>
        </div>

        <div className={style.SearchWrapper}>
          <div className={style.SearchContainer}>
            <input
              className={style.Input}
              placeholder="Search"
              name="title"
              value={search?.target?.value || ""}
              onChange={(e) => setSearch(e)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleFilters(search);
                }
              }}
            />
            <Search
              className={style.Search}
              onClick={() => handleFilters(search)}
            />
          </div>

          {(filters?.title || filters?.color || filters?.size) && (
            <div className={style.Reset} onClick={handleReset}>
              <Cancel className={style.Cancel} />
              <span>reset filters</span>
            </div>
          )}
        </div>

        <div className={style.SortProduct}>
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
            <option value="asc">Price (Lowest to Highest)</option>
            <option value="desc">Price (Highest to Lowest)</option>
          </select>
        </div>
      </div>

      <div className={style.Products}>
        <Products category={category} filters={filters} sort={sort} />
      </div>

      <Footer />
    </div>
  );
}

export default ProductList;
