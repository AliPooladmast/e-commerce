import React from "react";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import Orders from "../../components/Orders/Orders";

const OrderList = () => {
  return (
    <div style={{ backgroundColor: "#f7fafa" }}>
      <NavBar />
      <Orders />
      <Footer />
    </div>
  );
};

export default OrderList;
