import React from "react";
import "./Blogs.scss";
import vector from "../../assets/images/vector.svg";
import photo1 from "../../assets/images/photo1.jpg";
import photo2 from "../../assets/images/photo2.jpg";
import photo3 from "../../assets/images/photo3.jpg";
import { Link } from "react-router-dom";
const Blogs = () => {
  return (
    <div>
      <div className="katalog__text">
        <h4 className="katalog__title">Блог</h4>
        <Link to={"/blog"}>
          <button className="btn">Перейти в блог ></button>
        </Link>
      </div>
      <div className="blogs">
        <div className="blogs__card">
          <img className="blogs__card__img" src={photo1} alt="photo" />
          <div className="blogs__card__vector">
            <p className="blogs__card__vector__title">
              Как правильно освещать дом <br /> снаружи?
            </p>{" "}
            <img src={vector} alt="" />
          </div>
          <p className="blogs__card__text">01.01.2024</p>
        </div>
        <div className="blogs__card">
          <img className="blogs__card__img" src={photo2} alt="photo" />
          <div className="blogs__card__vector">
            <p className="blogs__card__vector__title">
              Как правильно освещать дом <br /> снаружи?
            </p>
            <img src={vector} alt="" />
          </div>
          <p className="blogs__card__text">01.01.2024</p>
        </div>
        <div className="blogs__card">
          <img className="blogs__card__img" src={photo3} alt="photo" />
          <div className="blogs__card__vector">
            <p className="blogs__card__vector__title">
              Как правильно освещать дом <br /> снаружи?
            </p>
            <img src={vector} alt="" />
          </div>
          <p className="blogs__card__text">01.01.2024</p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
