import React from "react";
import "./Navbar.scss";
import { NavLink } from "react-router-dom";
import cart from "../../assets/images/cart.svg";
import category from "../../assets/images/category.svg";
import comparison from "../../assets/images/comparison.svg";
import like from "../../assets/images/like.svg";
import search from "../../assets/images/search.svg";
import logo from "../../assets/images/logo.svg";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__top">
        <div>
          <ul className="navbar__top__menu">
            <li>
              <NavLink to={"/about"}>О компании</NavLink>{" "}
            </li>
            <li>
              <NavLink to={"/shipping"}>Доставка и оплата</NavLink>
            </li>
            <li>
              <NavLink to={"/return"}>Возврат</NavLink>
            </li>
            <li>
              <NavLink to={"/garant"}>Гарантии</NavLink>
            </li>
            <li>
              <NavLink to={"/contact"}>Контакты</NavLink>
            </li>
            <li>
              <NavLink to={"/blog"}>Блог</NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar__top__contact">
          <p className="text1">8 (800) 890-46-56</p>
          <p className="text2">Заказать звонок</p>
        </div>
      </div>
      <div className="navbar__bottom">
        <div className="navbar__bottom__box">
          <NavLink to={"/"}>
            <img src={logo} alt="logo" />
          </NavLink>
          <NavLink to={"/category"}>
            <img src={category} alt="category" />
          </NavLink>
        </div>
        <div className="navbar__bottom__search">
          <input placeholder="Поиск по товарам" type="search" />
          <img src={search} alt="search" />
        </div>
        <div className="navbar__bottom__box">
          <NavLink to={"/wishlist"}>
            <img width={66} height={40} src={like} alt="like button" />
          </NavLink>
          <img width={66} height={40} src={comparison} alt="comparison" />
          <NavLink to={"/basket"}>
            <img width={66} height={40} src={cart} alt="cart button" />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
