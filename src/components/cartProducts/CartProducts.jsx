import React from "react";
import "./CartProducts.scss";
import { useDispatch } from "react-redux";
import del from "../../assets/images/del.svg";
import {
  removeItemFromCart,
  decrementCartQuantity,
  incrementCartQuantity,
} from "../../context/cartSlice";

const CartProducts = ({ data }) => {
  const dispatch = useDispatch();

  const handleIncrement = (id) => {
    dispatch(incrementCartQuantity(id));
  };

  const handleDecrement = (id) => {
    dispatch(decrementCartQuantity(id));
  };

  const handleRemove = (item) => {
    dispatch(removeItemFromCart(item));
  };

  return (
    <div className="cart__info">
      <table className="cart__table">
        <thead>
          <tr className="cart__row">
            <th className="cart__cell">Фото</th>
            <th className="cart__cell">Товары</th>
            <th className="cart__cell">Описание</th>
            <th className="cart__cell">Артикул</th>
            <th className="cart__cell">Количество</th>
            <th className="cart__cell">Действия</th>
          </tr>
        </thead>
        <tbody>
          {data.map((cartItems) => (
            <tr key={cartItems.id} className="cart__row">
              <td className="cart__cell">
                <img src={cartItems.urls} alt="" width={70} height={70} />
              </td>
              <td className="cart__cell">
                <p className="cartinfo__title">{cartItems.title}</p>
                <p className="cartinfo__title">{cartItems.price}₽</p>
              </td>
              <td className="cart__cell">
                <p className="cartinfo__text">
                  Светильник RADUGA COMBO XS <br /> Промышленное освещение;{" "}
                  <br /> 50Вт; 230В; S4; XS;
                </p>
              </td>
              <td className="cart__cell">
                <p className="cartinfo__text2">
                  RAD-COMBO-50/XXX/230/XXX/ <br />
                  XXX/S4/XS
                </p>
              </td>
              <td className="cart__cell">
                <div className="qty">
                  <button
                    onClick={() => handleIncrement(cartItems.id)}
                    className="cart__btn"
                  >
                    +
                  </button>
                  <p className="cart__title">{cartItems.quantity}</p>
                  <button
                    disabled={cartItems.quantity <= 1}
                    onClick={() => handleDecrement(cartItems.id)}
                    className="cart__btn"
                  >
                    -
                  </button>
                </div>
              </td>
              <td className="cart__cell">
                <button
                  onClick={() => handleRemove(cartItems)}
                  className="del__btn"
                >
                  <img src={del} alt="delete" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CartProducts;
