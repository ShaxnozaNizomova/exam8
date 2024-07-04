import React, { useEffect, useState } from "react";
import { useGetInputValue } from "../../hooks/useGetInputValue";
import { toast } from "react-toastify";
import "./Checkout.scss";
import { removeAllItemsFromCart } from "../../context/cartSlice";
import { useDispatch } from "react-redux";

const BOT_TOKEN = "6324313326:AAHPAj1KWL-x8Hy3TdBrx9ztDJHc_tsPnnQ";
const CHAT_ID = "-4146124100";

const initialState = {
  name: "",
  phone: "",
  email: "",
  address: "",
  comments: "",
};

const Checkout = ({ products }) => {
  const dispatch = useDispatch();
  const [subtotal, setSubtotal] = useState(0);
  const [total, setTotal] = useState(0);
  const { formData, handleChange } = useGetInputValue(initialState);

  const deliveryPrice = 580;

  useEffect(() => {
    if (products && products.length > 0) {
      let subtotal = 0;
      products.forEach((item) => {
        subtotal += item.price * item.quantity;
      });
      const total = subtotal + deliveryPrice;
      setSubtotal(subtotal);
      setTotal(total);
    }
  }, [products, deliveryPrice]);

  const handleCheckout = (e) => {
    e.preventDefault();

    if (!products || products.length === 0) {
      toast.error("Корзина пуста, добавьте товары перед оформлением заказа.");
      return;
    }

    let text = "";
    text += `ИФО: ${formData.name} %0A`;
    text += `Номер телефона: ${formData.phone} %0A`;
    text += `Электронная почта: ${formData.email} %0A`;
    text += `Адрес доставки: ${formData.address} %0A%0A`;
    text += `Коментарий: ${formData.comments} %0A%0A`;

    let quantity = 1;
    products.forEach((el) => {
      text += `<b>Товар: ${quantity}</b> %0A%0A`;
      text += `Название: ${el.title} %0A`;
      text += `Количество: ${el.quantity} %0A`;
      text += `Цена: ${el.price}₽ %0A%0A`;
      quantity++;
    });
    text += `<b>Общая сумма ${total}₽</b> %0A%0A`;

    let url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${text}&parse_mode=html`;

    let api = new XMLHttpRequest();
    api.open("GET", url, true);
    api.send();
    dispatch(removeAllItemsFromCart());
    window.scrollTo(0, 0);
    toast.success("Ваш заказ принят");
  };

  return (
    <form action="" onSubmit={handleCheckout} className="checkout">
      <div className="checkout__top">
        <div className="checkout__top-cont">
          <h1>Оформление</h1>
          <div className="checkout__top-inputs checkout__top-short-inputs">
            <input
              value={formData.name}
              onChange={handleChange}
              name="name"
              type="text"
              placeholder="ФИО"
              required
            />
            <input
              value={formData.phone}
              onChange={handleChange}
              name="phone"
              type="text"
              placeholder="Телефон"
              required
            />
            <input
              value={formData.email}
              onChange={handleChange}
              name="email"
              type="text"
              placeholder="Электронная почта"
              required
            />
          </div>
          <hr />
          <div className="checkout__top-inputs checkout__top-long-inputs">
            <input
              value={formData.address}
              onChange={handleChange}
              name="address"
              type="text"
              placeholder="Адрес доставки"
              required
            />
            <textarea
              value={formData.comments}
              onChange={handleChange}
              name="comments"
              id=""
              rows={10}
              placeholder="Комментарий"
            ></textarea>
          </div>
        </div>
      </div>
      <div className="checkout__bottom">
        <div className="checkout__payment">
          <h1>Оплата</h1>
          <div className="checkout__bottom-prices">
            <p>
              Товары.............................................{subtotal} ₽
            </p>
            <p>
              Доставка..............................................
              {deliveryPrice} ₽
            </p>
          </div>
          <p>{total} ₽</p>
          <div className="checkout__bottom-order">
            <button>Купить</button>
            <p>Я согласен на обработку моих персональных данных</p>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Checkout;
