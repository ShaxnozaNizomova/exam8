import React from "react";
import "./Modal.scss";

const Model = ({ close, children }) => {
  return (
    <>
      <div onClick={() => close(false)} className="overlay1"></div>
      <div className="model">{children}</div>
    </>
  );
};

export default Model;
