import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import style from "./cart.module.scss";
import { Add, Close, Remove } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { userRequest } from "../../requestMethods";
import { useNavigate } from "react-router-dom";
import {
  decrementProduct,
  deleteProduct,
  incrementProduct,
} from "../../redux/cartSlice";

const KEY = process.env.REACT_APP_STRIPE_KEY;

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const [stripeToken, setStripeToken] = useState(null);

  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    const checkoutRequest = async () => {
      try {
        const res = await userRequest.post("/checkout/payment", {
          tokenId: stripeToken.id,
          amount: cart.total * 100,
        });
        navigate("/success", { data: res.data });
      } catch (err) {
        console.log(err);
      }
    };
    stripeToken && cart.total >= 1 && checkoutRequest();
  }, [stripeToken, cart.total, navigate]);

  const onDeleteProduct = (product) => {
    dispatch(deleteProduct(product));
  };

  const handleQuantity = (type, product) => {
    if (type === "inc") {
      dispatch(incrementProduct(product));
    } else if (type === "dec") {
      product.quantity > 1 && dispatch(decrementProduct(product));
    }
  };

  return (
    <div className={style.Container}>
      <NavBar />
      <div className={style.Wrapper}>
        <h1>My Cart</h1>
        <div className={style.Top}>
          <button className={style.Button}>CONTINUE SHOPPING</button>
          <button className={style["Button--filled"]}>BACK TO HOME</button>
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

                  <div className={style.PriceDetail}>
                    <div className={style.AmountContainer}>
                      <Remove
                        className={style.ChangeValue}
                        onClick={() => handleQuantity("dec", product)}
                      />
                      <span>{product.quantity}</span>
                      <Add
                        className={style.ChangeValue}
                        onClick={() => handleQuantity("inc", product)}
                      />
                    </div>

                    <div className={style.ProductPrice}>
                      $ {product.price * product.quantity}
                    </div>
                  </div>
                  <div
                    className={style.IconContainer}
                    onClick={() => onDeleteProduct(product)}
                  >
                    <Close className={style.CloseIcon} />
                  </div>
                </div>
                <hr />
              </div>
            ))}
          </div>
          <div className={style.Summary}>
            <h1>Order Summary</h1>
            <div className={style.SummaryItem}>
              <span className={style.SummatyItemText}>SubTotal</span>
              <span className={style.SummatyItemPrice}>$ {cart.total}</span>
            </div>
            <div className={style.SummaryItem}>
              <span className={style.SummatyItemText}>Estimated Shipping</span>
              <span className={style.SummatyItemPrice}>$ 5.9</span>
            </div>
            <div className={style.SummaryItem}>
              <span className={style.SummatyItemText}>Shipping Discount</span>
              <span className={style.SummatyItemPrice}>$ -5.9</span>
            </div>
            <div className={style["SummaryItem--total"]}>
              <span className={style.SummatyItemText}>Total</span>
              <span className={style.SummatyItemPrice}>$ {cart.total}</span>
            </div>
            <StripeCheckout
              name="APQ shop"
              billingAddress
              shippingAddress
              description={`Your total is ${cart.total}`}
              amount={cart.total * 100}
              stripeKey={KEY}
              token={onToken}
            >
              <div className={style.CheckoutButton}>
                <button>CHECKOUT NOW</button>
              </div>
            </StripeCheckout>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
