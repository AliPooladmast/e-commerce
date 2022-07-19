import React from "react";
import { popularProducts } from "../../data";

const Products = () => {
  return (
    <div>
      {popularProducts.map((item) => (
        <item />
      ))}
    </div>
  );
};

export default Products;
