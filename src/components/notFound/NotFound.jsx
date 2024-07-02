import React, { useEffect } from "react";
import "./NotFound.scss";
import notfound from "../../assets/images/404.png";
import { Link } from "react-router-dom";

const NotFound = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="about">
      <main>
        <section className="not-found">
          <div className="container">
            <div className="not-found__cont">
              <img src={notfound} alt="404" />
              <p className="description">Похоже, ничего не нашлось :( </p>
              <Link to={"/"}>
                <button>На главную</button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
export default NotFound;
