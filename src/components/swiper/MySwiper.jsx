import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import Hero from "../hero/Hero";
import hero from "../../assets/images/hero.svg";
const MySwiper = () => {
  return (
    <>
      <div className="hero">
        <Swiper
          pagination={true}
          loop={true}
          autoplay={true}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            {" "}
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
          </SwiperSlide>
          <SwiperSlide>
            {" "}
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
          </SwiperSlide>
          <SwiperSlide>
            {" "}
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
          </SwiperSlide>
          <SwiperSlide>
            {" "}
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
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default MySwiper;
