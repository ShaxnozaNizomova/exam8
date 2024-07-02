import React from "react";
import "./Payment.scss";
const Payment = () => {
  return (
    <div>
      <div className="payment">
        <div>
          <h2 className="katalog__title">
            Доставка и <br />
            оплата
          </h2>
        </div>
        <div>
          <div>
            <h4 className="payment__title">Доставка</h4>
            <p className="payment__text">
              Мы осуществляем доставку со склада по Москве и Московской <br />
              области собственной курьерской службой. Транспортными <br />
              компаниями нашу продукцию мы доставляем по всей территории <br />
              РФ, а так же по всем странам СНГ. Сроки доставки: 4—6 недель
            </p>
          </div>
          <div>
            <h4 className="payment__title">Курьерская доставка</h4>
            <p className="payment__text">
              БЕСПЛАТНО доставим в приделах МКАД любой заказ от 5 000 ₽ <br />
              .Заказы свыше 30 000 ₽ имеют бесплатную доставку, <br />
              включительно 15 км от МКАД
            </p>
          </div>
          <div>
            <h4 className="payment__title">Самовывоз</h4>
            <p className="payment__text">
              Любой заказ можно забрать самостоятельно по адресу: <br /> г.
              Москва, Дмитровское шоссе д.100с2
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
