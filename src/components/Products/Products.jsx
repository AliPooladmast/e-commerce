import React from "react";
import { popularProducts } from "../../data";
import ProductItem from "../ProductItem/ProductItem";

const Products = () => {
  return (
    <div>
      {popularProducts.map((item) => (
        <ProductItem item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Products;
