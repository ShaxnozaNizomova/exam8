import React from "react";
import Empty from "../../components/empty/Empty";
import { useSelector } from "react-redux";
import CartProducts from "../../components/cartProducts/CartProducts";
const Basket = () => {
  const carts = useSelector((s) => s.cart.value);
  return (
    <div className="about">
      <div className="katalog__text">
        <h4 className="katalog__title">Корзина</h4>
      </div>
      {carts.length ? <CartProducts data={carts} /> : <Empty />}
    </div>
  );
};

export default Basket;
