import React from "react";
import Katalog from "../../components/katalog/Katalog";
import Brand from "../../components/brand/Brand";
import Blogs from "../../components/blogs/Blogs";
import Production from "../../components/production/Production";
const Catalog = () => {
  return (
    <div className="about">
      <Katalog />
      <Brand />
      <Blogs />
      <Production />
    </div>
  );
};

export default Catalog;
