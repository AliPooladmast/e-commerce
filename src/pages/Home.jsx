import React from "react";
import Announcement from "../components/Announcement/Announcement";
import Categories from "../components/Categories/Categories";
import NavBar from "../components/NavBar/NavBar";
import Newsletter from "../components/Newsletter/Newsletter";
import Products from "../components/Products/Products";
import Slider from "../components/Slider/Slider";

const Home = () => {
  return (
    <>
      <Announcement />
      <NavBar />
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
    </>
  );
};

export default Home;
