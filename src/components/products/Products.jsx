import React from "react";
import "./Products.scss";
import { useGetProductsQuery } from "../../context/api/productApi";
const Products = () => {
  const { data } = useGetProductsQuery();
  console.log(data);
  return (
    <div>
      {data?.map((products) => (
        <div key={products.id}>
          <img src={products.urls} alt="img" width={320} />
          <h4>{products.title}</h4>
        </div>
      ))}
    </div>
  );
};

export default Products;
