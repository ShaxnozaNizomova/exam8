import React, { useState } from "react";
import { useGetInputValue } from "../../hooks/useGetInputValue";
import { useCreateProductMutation } from "../../context/api/productApi";
const initialState = {
  title: "",
  price: "",
  desc: "",
  urls: "",
};
const CreateProduct = () => {
  const { formData, setFormData, handleChange } =
    useGetInputValue(initialState);
  const [createProduct, { isLoading }] = useCreateProductMutation();
  const handleCreateProducts = (e) => {
    e.preventDefault();
    formData.price = +formData.price;
    formData.urls = formData.urls.split("/n").filter((i) => i.trim());
    console.log(formData);
    setFormData(initialState);
    createProduct(formData);
  };
  return (
    <div className="create__products">
      <div className="create">
        <form onSubmit={handleCreateProducts}>
          <input
            placeholder="Product title"
            value={formData.title}
            type="text"
            name="title"
            onChange={handleChange}
          />
          <input
            placeholder="Products price"
            value={formData.price}
            type="number"
            name="price"
            onChange={handleChange}
          />
          <input
            value={formData.desc}
            onChange={handleChange}
            type="text"
            name="desc"
          />
          <textarea
            name="urls"
            value={formData.urls}
            onChange={handleChange}
          ></textarea>
          <button disabled={isLoading}>Create</button>
        </form>
      </div>
    </div>
  );
};

export default CreateProduct;
