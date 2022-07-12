import React from "react";
import Announcement from "../components/Announcement/Announcement";
import NavBar from "../components/NavBar/NavBar";
import Slider from "../components/Slider/Slider";

const Home = () => {
  return (
    <>
      <Announcement />
      <NavBar />
      <Slider />
    </>
  );
};

export default Home;
