import React from "react";
import { useGetDetailProductQuery } from "../../context/api/productApi";
import { useParams } from "react-router";
import SingleLoadin from "../SingleLoading/SingleLoadin";
import socials from "../../assets/images/socials.svg";
import "./SingleProduct.scss";
import { useDispatch, useSelector } from "react-redux";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import {
  decrementCartQuantity,
  incrementCartQuantity,
  addToCart,
} from "../../context/cartSlice";
import { toggleLike } from "../../context/wishlistSlice";
const SingleProduct = () => {
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist.value);
  const cart = useSelector((state) => state.cart.value);
  const { id } = useParams();
  const { data: product, isLoading } = useGetDetailProductQuery(id);
  if (isLoading) {
    return <SingleLoadin />;
  }
  const handleToggleLike = () => {
    dispatch(toggleLike(product));
  };
  return (
    <div>
      <div className="single">
        <div className="single__img">
          <img
            className="img"
            src={product?.urls}
            width={600}
            height={500}
            alt={product?.title}
          />
        </div>
        <div className="single__details">
          <h4 className="single__details__title">{product?.title}</h4>
          <div className="single__box">
            <p className="single__details__text">Артикул : 7655-188</p>
            <img src={socials} alt="socials" />
          </div>
          <p className="single__details__text2">В наличии</p>
          <div className="single__box2">
            <p className="single__details__price">{product?.price} ₽</p>
            <p className="single__details__oldPrice">5220 ₽</p>
          </div>
          <p className="single__details__desc">{product?.desc}</p>
          <div className="single__btns">
            <div className="single__btns__qty">
              <button>+</button>
              <p>1</p>
              <button>-</button>
            </div>
            <div>
              <button className="single__btns__btn">Add To Cart</button>
            </div>
            <div>
              <button className="single__btns__like" onClick={handleToggleLike}>
                {wishlist.some((item) => item.id === product?.id) ? (
                  <FaHeart
                    style={{ color: "red", width: "52px", height: "52px" }}
                  />
                ) : (
                  <FaRegHeart style={{ width: "52px", height: "52px" }} />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
