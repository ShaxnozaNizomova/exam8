import React, { useState } from "react";
import "./Products.scss";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../context/cartSlice";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import carts from "../../assets/images/carts.svg";
import { toggleLike } from "../../context/wishlistSlice";
import Skeleton from "../skeleton/Skeleton";
const Products = ({ data }) => {
  let wishlist = useSelector((state) => state.wishlist.value);
  const dispatch = useDispatch();
  let product = data?.map((products) => (
    <div className="products__card" key={products.id}>
      <button
        className="like__btn"
        onClick={() => dispatch(toggleLike(products))}
      >
        {wishlist?.some((item) => item.id === products.id) ? (
          <FaHeart style={{ color: "red" }} />
        ) : (
          <FaRegHeart />
        )}
      </button>
      <img
        className="products__card__img"
        src={products.urls}
        alt="img"
        width={280}
        height={220}
      />
      <Link to={`/single/${products.id}`}>
        <h4 className="products__card__title">{products.title}</h4>
      </Link>
      <p className="products__card__oldPrice">7000 ₽</p>
      <div className="products__card__cart">
        <p className="products__card__cart__price">{products.price} ₽</p>
        <button
          className="cart__btn"
          onClick={() => dispatch(addToCart(products))}
        >
          <img src={carts} alt="cart" />
        </button>
      </div>
    </div>
  ));
  if (!product) {
    return <Skeleton count={8} />;
  }
  return <div className="products">{product}</div>;
};

export default Products;
