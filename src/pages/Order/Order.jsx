import React, { useEffect } from "react";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import style from "./order.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { userRequest } from "../../requestMethods";
import { setLoading, setMessage } from "../../redux/uxSlice";
import { resetCart } from "../../redux/cartSlice";

const Order = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { currentUser } = useSelector((state) => state.user);
  const [select, setSelect] = useState({
    phone: "defaultPhone",
    address: "defaultAddress",
  });
  const [input, setInput] = useState({ phone: null, address: null });

  const handleSelect = (e) => {
    setSelect((prev) => ({ ...prev, [e.target.name]: e.target.id }));
  };

  const handleInput = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handlePay = async () => {
    const products = cart.products.map((item) => ({
      productId: item._id,
      quantity: item.quantity,
    }));

    try {
      dispatch(setLoading(true));
      const res = await userRequest.post(
        "checkout/create-session/" + currentUser?._id,
        {
          products,
          address:
            select.address === "defaultAddress"
              ? currentUser?.address
              : input.address,
          phone:
            select.phone === "defaultPhone" ? currentUser?.phone : input.phone,
        }
      );

      if (res.data) {
        dispatch(
          setMessage({
            type: res.data === "paid" ? "success" : "error",
            text:
              res.data === "paid"
                ? "order has been paid successfully"
                : "order could have not been paid",
          })
        );

        dispatch(resetCart());
        navigate("/");
        dispatch(setLoading(false));
      }
    } catch (err) {
      dispatch(
        setMessage({ type: "error", text: err?.response?.data?.toString() })
      );
    }
  };

  useEffect(() => {
    if (!currentUser) {
      navigate("/");
    }
  }, [currentUser]); //eslint-disable-line

  return (
    <div className={style.Container}>
      <NavBar />
      <div className={style.Wrapper}>
        <h1>Order Confirmation</h1>
        <div className={style.Top}>
          <Link to="/cart">
            <button className={style.Button}>Back To Cart</button>
          </Link>

          <button className={style["Button--filled"]} onClick={handlePay}>
            Pay Now
          </button>
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
                  onChange={handleSelect}
                  defaultChecked
                />
                <label htmlFor="defaultPhone">Default phone:</label>
                <span>{currentUser?.phone}</span>
              </div>

              <div className={style.Option}>
                <input
                  name="phone"
                  type="radio"
                  id="newPhone"
                  onChange={handleSelect}
                />
                <label htmlFor="newPhone">New phone:</label>
                <input
                  name="phone"
                  placeholder="new phone"
                  className={style.Phone}
                  onChange={handleInput}
                  disabled={select.phone === "defaultPhone"}
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
                  onChange={handleSelect}
                />
                <label htmlFor="defaultAddress">Default address:</label>
                <span>{currentUser?.address}</span>
              </div>

              <div className={style.Option}>
                <input
                  name="address"
                  type="radio"
                  id="newAddress"
                  onChange={handleSelect}
                />
                <label htmlFor="newAddress">New address:</label>
                <div>
                  <textarea
                    name="address"
                    placeholder="new address"
                    className={style.AddressText}
                    onChange={handleInput}
                    disabled={select.address === "defaultAddress"}
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
