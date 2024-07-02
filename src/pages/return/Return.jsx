import React, { useEffect } from "react";
import ReturnMent from "../../components/returnment/ReturnMent";

const Return = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="about">
      <ReturnMent />
    </div>
  );
};

export default Return;
