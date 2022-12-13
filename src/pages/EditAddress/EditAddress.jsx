import React, { useEffect } from "react";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import style from "./editAddress.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { userRequest } from "../../requestMethods";
import { setMessage } from "../../redux/uxSlice";
import OrderProductList from "../../components/OrderProductList/OrderProductList";
import ContactConfirm from "../../components/ContactConfirm/ContactConfirm";
import { editOrder } from "../../redux/apiCalls";

const EditAddress = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const orderId = location.pathname.split("/")[2];
  const { currentUser } = useSelector((state) => state.user);
  const [select, setSelect] = useState({
    phone: "defaultPhone",
    address: "defaultAddress",
  });
  const [input, setInput] = useState({ phone: null, address: null });
  const [products, setProducts] = useState([]);

  const handleUpdate = () => {
    editOrder(dispatch, currentUser?._id, orderId, {
      address:
        select.address === "defaultAddress"
          ? currentUser?.address
          : input.address,
      phone: select.phone === "defaultPhone" ? currentUser?.phone : input.phone,
    });
    navigate("/orders");
  };

  useEffect(() => {
    const getOrderProducts = async () => {
      try {
        const res = await userRequest.get("/orders/products/" + orderId);
        setProducts(res?.data);
      } catch (err) {
        dispatch(
          setMessage({ type: "error", text: err?.response?.data?.toString() })
        );
      }
    };
    getOrderProducts();
  }, []); //eslint-disable-line

  return (
    <div className={style.Container}>
      <NavBar />
      <div className={style.Wrapper}>
        <h1>Change Contact Info</h1>
        <div className={style.Top}>
          <Link to="/orders">
            <button className={style.Button}>Back To Orders</button>
          </Link>

          <button className={style["Button--filled"]} onClick={handleUpdate}>
            Update Changes
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

export default EditAddress;
