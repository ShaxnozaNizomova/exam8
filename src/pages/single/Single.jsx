import React, { useEffect } from "react";
import SingleProduct from "../../components/singleProduct/SingleProduct";
import Character from "../../components/character/Character";

const Single = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="about">
      <SingleProduct />
      <Character />
    </div>
  );
};

export default Single;
