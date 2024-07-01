import React from "react";
import "./Hero.scss";
import hero from "../../assets/images/hero.svg";
const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__items">
        <div>
          <h1 className="hero__items__title">
            Скидка 15% <br />
            на все подвесные светильники <br />
          </h1>
          <p className="hero__items__span">до 5 февраля</p>
        </div>
        <div>
          <img src={hero} alt="lamp" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
