import React from "react";
import Hero from "../../components/hero/Hero";
import Katalog from "../../components/katalog/Katalog";
import Why from "../../components/why/Why";
import Products from "../../components/products/Products";
import Brand from "../../components/brand/Brand";
import Blogs from "../../components/blogs/Blogs";
import Production from "../../components/production/Production";

const Home = () => {
  return (
    <div>
      <Hero />
      <Katalog />
      <Why />
      <Products />
      <Brand />
      <Blogs />
      <Production />
    </div>
  );
};

export default Home;
