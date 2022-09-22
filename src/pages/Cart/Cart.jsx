import React from "react";
import Announcement from "../../components/Announcement/Announcement";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import style from "./cart.module.scss";
import { Add, Remove } from "@material-ui/icons";
import { useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  return (
    <div className={style.Container}>
      <NavBar />
      <Announcement />
      <div className={style.Wrapper}>
        <h1>YOUR BAG</h1>
        <div className={style.Top}>
          <button className={style.Button}>CONTINUE SHOPPING</button>
          <div className={style.TopTexts}>
            <span>Shopping Bag(2)</span>
            <span>Your Wishlist (0)</span>
          </div>
          <button className={style["Button--filled"]}>CHECK OUT NOW</button>
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
                      <span>
                        <b>ID:</b> {product._id}
                      </span>
                      <div
                        className={style.ProductColor}
                        style={{ backgroundColor: { color: product.color } }}
                      ></div>
                      <span>
                        <b>Size:</b> {product.size}
                      </span>
                    </div>
                  </div>
                  <div className={style.PriceDetail}>
                    <div className={style.ProductAmount}>
                      <Add />
                      <span>{product.quantity}</span>
                      <Remove />
                    </div>
                    <div className={style.ProductPrice}>
                      $ {product.price * product.quantity}
                    </div>
                  </div>
                </div>
                <hr />
              </div>
            ))}
          </div>
          <div className={style.Summary}>
            <h1>ORDER SUMMARY</h1>
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
            >
              <button>CHECKOUT NOW</button>
            </StripeCheckout>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
