import React, { useEffect, useState } from "react";
import style from "./Product.module.scss";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import { Add, Remove } from "@mui/icons-material";
import { useLocation } from "react-router-dom";
import { publicRequest } from "../../requestMethods";
import { addProduct } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";
import { setLoading, setMessage } from "../../redux/uxSlice";

const Product = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];

  const [product, setProduct] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = async () => {
      dispatch(setLoading(true));
      try {
        const res = await publicRequest.get("/products/find/" + id);
        if (res) {
          setProduct(res.data);
          setColor(res.data?.color?.[0]);
          setSize(res.data?.size?.[0]);
          dispatch(setLoading(false));
        }
      } catch (err) {
        dispatch(setLoading(false));
        dispatch(
          setMessage({ type: "error", text: err?.response?.data?.toString() })
        );
      }
    };
    getProduct();
  }, [id, dispatch]);

  const handleQuantity = (type) => {
    if (type === "inc") {
      setQuantity(quantity + 1);
    } else if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    }
  };

  const handleAddClick = () => {
    dispatch(addProduct({ ...product, quantity, size, color }));
  };

  return (
    <div className={style.Container}>
      <NavBar />
      <div className={style.ProductContainer}>
        <div className={style.Wrapper}>
          <div className={style.ImageContainer}>
            <img src={product.img} alt="product" />
          </div>
          <div className={style.InfoContainer}>
            <h1>{product.title}</h1>
            <p>{product.desc}</p>
            <span>${product.price}</span>
            <div className={style.FilterContainer}>
              <div className={style.Filter}>
                <span>Color</span>
                {product.color?.map((itemColor) => (
                  <div
                    style={{ backgroundColor: itemColor }}
                    className={
                      color === itemColor
                        ? style["ColorCircle--Selected"]
                        : style.ColorCircle
                    }
                    key={itemColor}
                    onClick={() => setColor(itemColor)}
                  ></div>
                ))}
              </div>
              <div className={style.Filter}>
                <span>Size</span>
                <select name="" id="" onChange={(e) => setSize(e.target.value)}>
                  {product.size?.map((size) => (
                    <option value={size} key={size}>
                      {size}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className={style.AddContainer}>
              <div className={style.AmountContainer}>
                <Remove
                  className={style.ChangeValue}
                  onClick={() => handleQuantity("dec")}
                />
                <span>{quantity}</span>
                <Add
                  className={style.ChangeValue}
                  onClick={() => handleQuantity("inc")}
                />
              </div>
              <button onClick={handleAddClick}>Add To Cart</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Product;
