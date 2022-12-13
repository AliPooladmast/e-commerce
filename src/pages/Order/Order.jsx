import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import style from "./order.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useState } from "react";
import OrderProductList from "../../components/OrderProductList/OrderProductList";
import ContactConfirm from "../../components/ContactConfirm/ContactConfirm";
import { addStripeOrder } from "../../redux/apiCalls";

const Order = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.cart);
  const { currentUser } = useSelector((state) => state.user);
  const [select, setSelect] = useState({
    phone: "defaultPhone",
    address: "defaultAddress",
  });
  const [input, setInput] = useState({ phone: null, address: null });

  const handlePay = async () => {
    const secureProducts = products.map((item) => ({
      productId: item._id,
      quantity: item.quantity,
    }));

    const data = {
      products: secureProducts,
      address:
        select.address === "defaultAddress"
          ? currentUser?.address
          : input.address,
      phone: select.phone === "defaultPhone" ? currentUser?.phone : input.phone,
    };

    addStripeOrder(dispatch, currentUser?._id, data);
  };

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
          <OrderProductList products={products} />
          <ContactConfirm
            select={select}
            setSelect={setSelect}
            setInput={setInput}
            currentUser={currentUser}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Order;
