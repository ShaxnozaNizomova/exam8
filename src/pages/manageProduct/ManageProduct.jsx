import React, { useState } from "react";
import {
  useGetProductsQuery,
  useDeleteProductMutation,
  useUpdateProductMutation,
} from "../../context/api/productApi";
import Modal from "../../components/modal/Modal";
import { toast } from "react-toastify";
import { useGetInputValue } from "../../hooks/useGetInputValue";
import "./MAnageProduct.scss";
import { ImCancelCircle } from "react-icons/im";
import { LuPencilLine } from "react-icons/lu";
import { RiDeleteBin6Line } from "react-icons/ri";

const ManageProduct = () => {
  const { data: products, isLoading, isError } = useGetProductsQuery();
  const [deleteProduct, { isLoading: isDeleting }] = useDeleteProductMutation();
  const [updateProduct, { isLoading: isUpdating }] = useUpdateProductMutation();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState("");
  const [currentProduct, setCurrentProduct] = useState(null);
  const { formData, handleChange, setFormData } = useGetInputValue({
    title: "",
    price: "",
    urls: "",
    desc: "",
  });

  const handleOpenModal = (mode, product) => {
    setModalMode(mode);
    setCurrentProduct(product);
    setFormData(product ? { ...product, urls: product.urls.join("\n") } : {});
    setIsModalOpen(true);
  };

  const handleDelete = async () => {
    try {
      await deleteProduct(currentProduct.id).unwrap();
      toast.success("Product removed successfully!");
      setIsModalOpen(false);
    } catch (error) {
      toast.error("Error uninstalling product.");
    }
  };

  const handleEdit = async () => {
    const updatedProduct = {
      title: formData.title,
      price: +formData.price,
      urls: formData.urls.split("\n").filter((i) => i.trim()),
      desc: formData.desc,
    };

    try {
      await updateProduct({
        id: currentProduct.id,
        body: updatedProduct,
      }).unwrap();
      toast.success("The product has been successfully updated!");
      setIsModalOpen(false);
    } catch (error) {
      toast.error("Error while updating product.");
    }
  };

  if (isLoading) return <div>Loading products...</div>;
  if (isError) return <div>Error loading products</div>;

  return (
    <div className="manage-product">
      <h2>Manage product</h2>
      <ul className="manage-product__list">
        {products.map((product) => (
          <li key={product.id}>
            <div className="manage-product__list-image">
              <img src={product.urls} alt="image" />
            </div>
            <div className="manage-product__list-cont">
              <h3>{product.title}</h3>
              <div className="manage-product__list-bottom">
                <div>
                  <h4>{product.price}₽</h4>
                </div>
                <div className="manage__btns">
                  <button
                    className="edit__btn"
                    onClick={() => handleOpenModal("edit", product)}
                  >
                    <LuPencilLine size={18} className="edit__btn" />
                  </button>
                  <button
                    className="delete__btn"
                    onClick={() => handleOpenModal("delete", product)}
                  >
                    <RiDeleteBin6Line size={18} />
                  </button>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
      {isModalOpen && (
        <Modal close={() => setIsModalOpen(false)}>
          {modalMode === "delete" ? (
            <div className="manage__delete">
              <p>
                Are you sure you want to remove the product -
                {currentProduct.title}?
              </p>
              <div className="manage__delete-btns">
                <button onClick={handleDelete} disabled={isDeleting}>
                  {isDeleting ? "Delete..." : "Yes"}
                </button>
                <button onClick={() => setIsModalOpen(false)}>No</button>
              </div>
            </div>
          ) : (
            <div className="manage__cont">
              <div className="manage-product__update">
                <div className="manage-product__update-cont">
                  <label htmlFor="title">Title</label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={handleChange}
                    name="title"
                    placeholder="New product title"
                  />
                </div>
                <div className="manage-product__update-cont">
                  <label htmlFor="title">Price</label>
                  <input
                    type="number"
                    value={formData.price}
                    onChange={handleChange}
                    name="price"
                    placeholder="New price"
                  />
                </div>
                <div className="manage-product__update-cont">
                  <label htmlFor="title">Image</label>
                  <textarea
                    name="url"
                    value={formData.urls}
                    onChange={handleChange}
                    placeholder="New image urls"
                    rows={7}
                  ></textarea>
                </div>
                <div className="manage-product__update-cont">
                  <label htmlFor="title">Description</label>
                  <textarea
                    name="desc"
                    value={formData.desc}
                    onChange={handleChange}
                    placeholder="Description"
                    rows={5}
                  ></textarea>
                </div>
                <button onClick={handleEdit} disabled={isUpdating}>
                  {isUpdating ? "Update..." : "Update"}
                </button>
              </div>
              <button
                className="manage__cont-cancel"
                onClick={() => setIsModalOpen(false)}
              >
                <ImCancelCircle size={18} />
              </button>
            </div>
          )}
        </Modal>
      )}
    </div>
  );
};

export default ManageProduct;
