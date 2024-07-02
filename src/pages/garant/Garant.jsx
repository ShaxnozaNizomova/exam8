import React, { useEffect } from "react";
import Garantya from "../../components/garantya/Garantya";

const Garant = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="about">
      <Garantya />
    </div>
  );
};

export default Garant;
