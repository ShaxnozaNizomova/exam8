import React from "react";
import Empty from "../../components/empty/Empty";
import Products from "../../components/products/Products";
import { useSelector } from "react-redux";
const Wishlist = () => {
  let wishlist = useSelector((state) => state.wishlist.value);
  return (
    <div>
      <div className="katalog__text">
        <h4 className="katalog__title">Избранные товары</h4>
      </div>
      {wishlist.length ? <Products data={wishlist} /> : <Empty />}
    </div>
  );
};

export default Wishlist;
