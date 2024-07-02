import React from "react";
import Brand from "../../components/brand/Brand";
import Blogs from "../../components/blogs/Blogs";
import AboutCompany from "../../components/aboutComp/AboutCompany";
const About = () => {
  return (
    <div className="about">
      <AboutCompany />
      <Brand />
      <Blogs />
    </div>
  );
};

export default About;
