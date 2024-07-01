import React from "react";
import "./Brand.scss";
import line1 from "../../assets/images/line1.svg";
import line2 from "../../assets/images/line2.svg";
import brand1 from "../../assets/images/brand1.svg";
import brand2 from "../../assets/images/brand2.svg";
import brand3 from "../../assets/images/brand3.svg";
const Brand = () => {
  return (
    <div>
      <div className="katalog__text">
        <h4 className="katalog__title">Популярные товары</h4>
        <div>
          <img src={line1} alt="line1" />
          <img src={line2} alt="" />
        </div>
      </div>
      <div className="brands">
        <div>
          <img src={brand1} alt="brand1" />
        </div>
        <div>
          <img src={brand2} alt="brand1" />
        </div>
        <div>
          <img src={brand3} alt="brand1" />
        </div>
        <div>
          <img src={brand1} alt="brand1" />
        </div>
      </div>
    </div>
  );
};

export default Brand;
