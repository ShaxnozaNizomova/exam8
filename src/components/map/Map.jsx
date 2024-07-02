import React from "react";
import "./Map.scss";
const Map = () => {
  return (
    <div className="map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47956.679216769255!2d69.16613222167967!3d41.302501100000015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b44c2cac7ab%3A0x69b72eca75033e18!2sTashkent%20Museum%20(Branch%20of%20the%20State%20History%20Museum)!5e0!3m2!1sen!2s!4v1719959550332!5m2!1sen!2s"
        width="100%"
        height="450"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;
