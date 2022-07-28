import React from "react";
import style from "./Product.module.scss";
import NavBar from "../../components/NavBar/NavBar";
import Announcement from "../../components/Announcement/Announcement";
import Newsletter from "../../components/Newsletter/Newsletter";
import Footer from "../../components/Footer/Footer";

const Product = () => {
  return (
    <div className={style.Container}>
      <NavBar />
      <Announcement />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Product;
