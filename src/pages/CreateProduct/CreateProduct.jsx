import React from "react";
import { useGetInputValue } from "../../hooks/useGetInputValue";
import { useCreateProductMutation } from "../../context/api/productApi";
import { toast } from "react-toastify";
import "./CreateProducts.scss";

const initialState = {
  title: "",
  price: "",
  urls: "",
  desc: "",
};

const CreateProduct = () => {
  const { formData, handleChange, setFormData } =
    useGetInputValue(initialState);
  const [createProduct, { isLoading: isCreating }] = useCreateProductMutation();

  const handleCreate = async (e) => {
    e.preventDefault();
    const newProduct = {
      ...formData,
      price: +formData.price,
      urls: formData.urls.split("\n").filter((i) => i.trim()),
    };

    try {
      await createProduct(newProduct).unwrap();
      toast.success("Продукт успешно создан!");
      setFormData(initialState);
    } catch (error) {
      toast.error("Ошибка при создании продукта!");
    }
  };

  return (
    <div className="create-product">
      <h2>Create Product</h2>
      <form onSubmit={handleCreate}>
        <div className="create-product__item">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            value={formData.title}
            onChange={handleChange}
            name="title"
            required
          />
        </div>
        <div className="create-product__item">
          <label htmlFor="price">Price</label>
          <input
            type="number"
            value={formData.price}
            onChange={handleChange}
            name="price"
            required
          />
        </div>
        <div className="create-product__item">
          <label htmlFor="url">Image urls</label>
          <textarea
            name="urls"
            value={formData.urls}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="create-product__item">
          <label htmlFor="desc">Description</label>
          <textarea
            name="desc"
            value={formData.desc}
            onChange={handleChange}
            required
            rows={7}
          ></textarea>
        </div>
        <button type="submit" disabled={isCreating}>
          {isCreating ? "Creating..." : "Create"}
        </button>
      </form>
    </div>
  );
};

export default CreateProduct;
