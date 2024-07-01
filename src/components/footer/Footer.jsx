import React from "react";
import "./Footer.scss";
import logo from "../../assets/images/logo.svg";
import vk from "../../assets/images/vk.svg";
import card from "../../assets/images/card.svg";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__items">
        <div>
          <ul className="footer__items__menu">
            <li>
              <img src={logo} alt="logo" />
            </li>
            <li className="text3">8 (800) 890-46-56</li>
            <li>
              <img src={card} alt="payment" />
            </li>
            <li className="footer__items__menu__link">
              Политика конфидециальности
            </li>
            <li className="footer__items__menu__link">
              Политика конфидециальности
            </li>
            <div>
              <img src={vk} alt="" />
              <img src={vk} alt="" />
              <img src={vk} alt="" />
            </div>
          </ul>
        </div>
        <div>
          <ul className="footer__items__menu">
            <li className="footer__items__menu__link1">Покупателям</li>
            <li className="footer__items__menu__link">О компании</li>
            <li className="footer__items__menu__link">Доставка и оплата</li>
            <li className="footer__items__menu__link">Возврат</li>
            <li className="footer__items__menu__link">Гарантии</li>
            <li className="footer__items__menu__link">Контакты</li>
            <li className="footer__items__menu__link">Блог</li>
          </ul>
        </div>
        <div>
          <ul className="footer__items__menu">
            <li className="footer__items__menu__link1">Товары</li>
            <li className="footer__items__menu__link">Люстры</li>
            <li className="footer__items__menu__link">Светильники</li>
            <li className="footer__items__menu__link">Бра</li>
            <li className="footer__items__menu__link">Торшеры</li>
            <li className="footer__items__menu__link">Комплектуюшие</li>
            <li className="footer__items__menu__link">Настольные лампы</li>
          </ul>
        </div>
        <div>
          <ul className="footer__items__menu">
            <li className="footer__items__menu__link2"></li>
            <li className="footer__items__menu__link">Споты</li>
            <li className="footer__items__menu__link">Трековые светильники</li>
            <li className="footer__items__menu__link">Уличные светильники</li>
            <li className="footer__items__menu__link">
              Технические светильники
            </li>
            <li className="footer__items__menu__link">Светодиодные ленты</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
