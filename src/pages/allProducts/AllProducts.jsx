import React, { useEffect } from "react";
import Products from "../../components/products/Products";

const AllProducts = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div className="katalog__text">
        <h4 className="katalog__title">Популярные товары</h4>
      </div>
      <Products />
    </div>
  );
};

export default AllProducts;
