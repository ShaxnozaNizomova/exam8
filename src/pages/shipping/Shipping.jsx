import React, { useEffect } from "react";
import Payment from "../../components/payment/Payment";
import Map from "../../components/map/Map";
const Shipping = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="about">
      <Payment />
      <Map />
    </div>
  );
};

export default Shipping;
