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
          <div className={style.FilterContainer}>
            <div className={style.Filter}>
              <span>Color</span>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div className={style.Filter}>
              <span>Size</span>
              <select name="" id="">
                <option value="">XS</option>
                <option value="">S</option>
                <option value="">M</option>
                <option value="">L</option>
                <option value="">XL</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Product;
