import React, { useEffect } from "react";
import Blogs from "../../components/blogs/Blogs";
const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="about">
      <Blogs />
      <Blogs />
    </div>
  );
};

export default Blog;
