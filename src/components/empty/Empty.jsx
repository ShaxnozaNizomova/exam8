import React from "react";
import "./Empty.scss";
import empty from "../../assets/images/empty.png";
const Empty = () => {
  return (
    <>
      <h4 className="empty__title">There is nothing here yet</h4>
      <div className="empty">
        <img width={300} height={220} src={empty} alt="" />
      </div>
    </>
  );
};

export default Empty;
