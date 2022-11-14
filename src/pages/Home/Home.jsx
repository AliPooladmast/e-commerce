import React from "react";
import Announcement from "../../components/Announcement/Announcement";
import Categories from "../../components/Categories/Categories";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import Newsletter from "../../components/Newsletter/Newsletter";
import Products from "../../components/Products/Products";
import Slider from "../../components/Slider/Slider";

const Home = () => {
  return (
    <>
      <NavBar />
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Home;
