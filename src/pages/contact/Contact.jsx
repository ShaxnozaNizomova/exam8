import React, { useEffect } from "react";
import Contacts from "../../components/contacts/Contacts";
import Map from "../../components/map/Map";
const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="about">
      <Contacts />
      <Map />
    </div>
  );
};

export default Contact;
