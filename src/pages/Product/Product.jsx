import React from "react";
import style from "./Product.module.scss";
import NavBar from "../../components/NavBar/NavBar";
import Announcement from "../../components/Announcement/Announcement";
import Newsletter from "../../components/Newsletter/Newsletter";
import Footer from "../../components/Footer/Footer";
import manInCoat from "../../assests/images/coats.jpg";

const Product = () => {
  return (
    <div className={style.Container}>
      <NavBar />
      <Announcement />
      <div className={style.Wrapper}>
        <div className={style.ImageContainer}>
          <img src={manInCoat} alt="a man in coat" />
        </div>
        <div className={style.InfoContainer}>
          <h1>Fur Coat</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque
            explicabo iusto recusandae omnis, aut incidunt amet a expedita nobis
            quo? Saepe sapiente ut doloremque asperiores, corrupti nulla
            laboriosam fugiat aspernatur!
          </p>
          <span>$ 20</span>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Product;
