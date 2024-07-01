import React from "react";
import { Link } from "react-router-dom";
import "./Why.scss";
import icon1 from "../../assets/images/icon1.svg";
import icon4 from "../../assets/images/icon4.svg";

const Why = () => {
  return (
    <div>
      <div className="why">
        <div className="katalog__text">
          <h4 className="katalog__title">Почему NORNLIGHT?</h4>
          <Link to={"/about"}>
            <button className="btn">O компании ></button>
          </Link>
        </div>
        <div className="why__items">
          <div className="why__items__card">
            <img src={icon1} alt="icon" />
            <h4 className="why__items__card__title">
              Только проверенные бренды
            </h4>
            <p className="why__items__card__text">
              Бренды, проверенные временем и качеством
            </p>
          </div>
          <div className="why__items__card">
            <img src={icon4} alt="icon" />
            <h4 className="why__items__card__title">
              Самые низкие <br /> цены
            </h4>
            <p className="why__items__card__text">Ниже не будет нигде</p>
          </div>
          <div className="why__items__card">
            <img src={icon1} alt="icon" />
            <h4 className="why__items__card__title">Быстрая доствка</h4>
            <p className="why__items__card__text">
              Доставляем по всей РФза 1-10 дней
            </p>
          </div>
          <div className="why__items__card">
            <img src={icon4} alt="icon" />
            <h4 className="why__items__card__title">
              Большой <br /> ассортимент
            </h4>
            <p className="why__items__card__text">Более 1000 товаров</p>
          </div>
        </div>
      </div>
      <div className="katalog__text">
        <h4 className="katalog__title">Популярные товары</h4>
        <Link to={"/allProducts"}>
          <button className="btn">Все товары ></button>
        </Link>
      </div>
    </div>
  );
};

export default Why;
