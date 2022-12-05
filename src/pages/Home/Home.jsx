import React from "react";
import Categories from "../../components/Categories/Categories";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import Invite from "../../components/Invite/Invite";
import Products from "../../components/Products/Products";
import Slider from "../../components/Slider/Slider";
import { useSelector } from "react-redux";
import style from "./Home.module.scss";

const Home = () => {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <div className={style.Container}>
      <NavBar />
      <Slider />
      <Categories />
      <div className={style.Products}>
        <Products newItems={true} />
      </div>
      {!currentUser && <Invite />}
      <Footer />
    </div>
  );
};

export default Home;
