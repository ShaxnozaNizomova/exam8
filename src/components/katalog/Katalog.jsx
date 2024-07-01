import React from "react";
import "./Katalog.scss";
import img1 from "../../assets/images/img1.svg";
import img2 from "../../assets/images/img2.svg";
import img3 from "../../assets/images/img3.svg";
import img4 from "../../assets/images/img4.svg";
import img5 from "../../assets/images/img5.svg";
import img6 from "../../assets/images/img6.svg";
import { Link } from "react-router-dom";
const Katalog = () => {
  return (
    <div>
      <div className="katalog">
        <div className="katalog__text">
          <h4 className="katalog__title">Каталог</h4>
          <Link to={"/catalog"}>
            <button className="btn">Весь каталог ></button>
          </Link>
        </div>
        <div className="katalog__items">
          <div className="katalog__items__card">
            <div>
              <p className="katalog__items__card__title">Люстры</p>
              <p className="katalog__items__card__text">От 540₽</p>
            </div>
            <div>
              <img src={img1} alt="img1" />
            </div>
          </div>
          <div className="katalog__items__card">
            <div>
              <p className="katalog__items__card__title">Светильники</p>
              <p className="katalog__items__card__text">От 540₽</p>
            </div>
            <div>
              <img src={img2} alt="img1" />
            </div>
          </div>
          <div className="katalog__items__card">
            <div>
              <p className="katalog__items__card__title">Бра</p>
              <p className="katalog__items__card__text">От 540₽</p>
            </div>
            <div>
              <img src={img3} alt="img1" />
            </div>
          </div>
          <div className="katalog__items__card">
            <div>
              <p className="katalog__items__card__title">Торшеры</p>
              <p className="katalog__items__card__text">От 540₽</p>
            </div>
            <div>
              <img src={img4} alt="img1" />
            </div>
          </div>
          <div className="katalog__items__card">
            <div>
              <p className="katalog__items__card__title">Настольные лампы</p>
              <p className="katalog__items__card__text">От 540₽</p>
            </div>
            <div>
              <img src={img5} alt="img1" />
            </div>
          </div>
          <div className="katalog__items__card">
            <div>
              <p className="katalog__items__card__title">Споты</p>
              <p className="katalog__items__card__text">От 540₽</p>
            </div>
            <div>
              <img src={img6} alt="img1" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Katalog;
