import React from "react";
import "./Returnment.scss";
const ReturnMent = () => {
  return (
    <div>
      <div className="payment">
        <div>
          <h2 className="katalog__title">Возврат</h2>
        </div>
        <div>
          <div>
            <h4 className="payment__title">
              Обмен и возврат по желанию покупателя
            </h4>
            <p className="payment__text">
              Если товар по каким-то причинам не подошел вам, вы имеете <br />
              право вернуть его или обменять на другой в течение 7 дней* с{" "}
              <br /> момента покупки при соблюдении следующих условий:
            </p>
            <ol className="menu">
              <li className="return__link">
                Товар имеет первоначальный вид, имеется товарная кондиция;
              </li>
              <li className="return__link">
                Товар имеет полную комплектацию, включая упаковочные материалы;
              </li>
              <li className="return__link">
                Товар не имеет следов подключался и не имеет признаков монтажа;
              </li>
              <li className="return__link">
                Упаковка товара не имеет повреждений, присутствует
                первоначальный товарный вид;
              </li>
              <li className="return__link">
                Есть документ, подтверждающий покупку в нашем интернет-магазине.
              </li>
              <li className="return__link">
                Для возврата товара необходимо привезти его к нам в офиc
              </li>
              <li className="return__link">
                Товар из других городов можно прислать нам транспортной
                компанией, при этом услуги транспортной{" "}
              </li>
              <li className="return__link">
                *В течение 14 дней для отдельных брендов. При оформлении заказа
                уточните у менеджера
              </li>
            </ol>
          </div>
          <div>
            <h4 className="payment__title">
              Обмен и возврат по ошибке продавца
            </h4>
            <p className="payment__text">
              Причины обмена или возврата по ошибке продавца
            </p>
            <ol className="menu">
              <li className="return__link">Неполная комплектация товара</li>
              <li className="return__link">Брак или дефект товара</li>
              <li className="return__link">
                Если вы выявили дефект, брак или неполную комплектацию товара,
                необходимо сделать фото дефекта и отправить на
                почту mail@at-svet.ru, указав краткое описание характера брака/
              </li>
              <li className="return__link">
                Мы заменим бракованный товар или довезем недостающие части.
                Доставка будет осуществлена бесплатно
              </li>
            </ol>
          </div>
          <div>
            <h4 className="payment__title">Возврат денежных средств</h4>
            <p className="payment__text">
              Возврат денежных средств осуществляется путем перевода <br /> на
              банковские реквизиты покупателя при наличии заявления <br /> от
              покупателя.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReturnMent;
