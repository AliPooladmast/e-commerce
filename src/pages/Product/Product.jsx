import React, { useEffect, useState } from "react";
import style from "./Product.module.scss";
import NavBar from "../../components/NavBar/NavBar";
import Announcement from "../../components/Announcement/Announcement";
import Newsletter from "../../components/Newsletter/Newsletter";
import Footer from "../../components/Footer/Footer";
import manInCoat from "../../assests/images/coats.jpg";
import { Add, Remove } from "@material-ui/icons";
import { useLocation } from "react-router-dom";
import { publicRequest } from "../../requestMethods";

const Product = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/products/find/" + id);
        setProduct(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getProduct();
  }, [id]);

  return (
    <div className={style.Container}>
      <NavBar />
      <Announcement />
      <div className={style.Wrapper}>
        <div className={style.ImageContainer}>
          <img src={product.img} alt="product" />
        </div>
        <div className={style.InfoContainer}>
          <h1>{product.title}</h1>
          <p>{product.desc}</p>
          <span>{product.price}</span>
          <div className={style.FilterContainer}>
            <div className={style.Filter}>
              <span>Color</span>
              <div style={{ backgroundColor: "black" }}></div>
              <div style={{ backgroundColor: "darkBlue" }}></div>
              <div style={{ backgroundColor: "grey" }}></div>
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
          <div className={style.AddContainer}>
            <div className={style.AmountContainer}>
              <Add />
              <span>1</span>
              <Remove />
            </div>
            <button>Add To Cart</button>
          </div>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Product;
