import React, { useEffect } from "react";
import Hero from "../../components/hero/Hero";
import Katalog from "../../components/katalog/Katalog";
import Why from "../../components/why/Why";
import Products from "../../components/products/Products";
import Brand from "../../components/brand/Brand";
import Blogs from "../../components/blogs/Blogs";
import Production from "../../components/production/Production";
import { useGetProductsQuery } from "../../context/api/productApi";
import Swiper from "../../components/swiper/MySwiper";
const Home = () => {
  const { data } = useGetProductsQuery();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Swiper />
      <Katalog />
      <Why />
      <Products data={data} />
      <Brand />
      <Blogs />
      <Production />
    </div>
  );
};

export default Home;
