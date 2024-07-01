import React from "react";
import Hero from "../../components/hero/Hero";
import Katalog from "../../components/katalog/Katalog";
import Why from "../../components/why/Why";
import Products from "../../components/products/Products";

const Home = () => {
  return (
    <div>
      <Hero />
      <Katalog />
      <Why />
      <Products />
    </div>
  );
};

export default Home;
