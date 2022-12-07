import React from "react";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import style from "./order.module.scss";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Order = () => {
  const cart = useSelector((state) => state.cart);
  const { currentUser } = useSelector((state) => state.user);

  return (
    <div className={style.Container}>
      <NavBar />
      <div className={style.Wrapper}>
        <h1>Order Confirmation</h1>
        <div className={style.Top}>
          <Link to="/cart">
            <button className={style.Button}>Back To Cart</button>
          </Link>
          <Link to="/">
            <button className={style["Button--filled"]}>Pay Now</button>
          </Link>
        </div>
        <div className={style.Bottom}>
          <div className={style.Info}>
            {cart.products.map((product) => (
              <div className={style.ProductContainer} key={product._id}>
                <div className={style.Product}>
                  <div className={style.ProductDetail}>
                    <img src={product.img} alt="" />
                    <div className={style.Detail}>
                      <span>
                        <b>Product:</b> {product.title}
                      </span>
                      <span className={style.ProductColor}>
                        <b>Color:</b>
                        <div style={{ backgroundColor: product.color }}></div>
                      </span>
                      <span>
                        <b>Size:</b> {product.size}
                      </span>
                    </div>
                  </div>

                  <div className={style.ProductPrice}>
                    $ {(product.price * product.quantity).toFixed(1)}
                  </div>
                </div>
                <hr />
              </div>
            ))}
          </div>

          <div className={style.UserInfo}>
            <div className={style.InfoContainer}>
              <div className={style.Option}>
                <input
                  name="phone"
                  type="radio"
                  id="defaultPhone"
                  defaultChecked
                />
                <label htmlFor="defaultPhone">Default phone:</label>
                <span>{currentUser.phone}</span>
              </div>

              <div className={style.Option}>
                <input name="phone" type="radio" id="newPhone" />
                <label htmlFor="newPhone">New phone:</label>
                <input
                  name="phone"
                  placeholder="new phone"
                  className={style.Phone}
                />
              </div>
            </div>

            <div className={style.InfoContainer}>
              <div className={style.Option}>
                <input
                  name="address"
                  type="radio"
                  id="defaultAddress"
                  defaultChecked
                />
                <label htmlFor="defaultAddress">Default address:</label>
                <span>{currentUser.address}</span>
              </div>

              <div className={style.Option}>
                <input name="address" type="radio" id="newAddress" />
                <label htmlFor="newAddress">New address:</label>
                <div>
                  <textarea
                    name="address"
                    placeholder="new address"
                    className={style.AddressText}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Order;
