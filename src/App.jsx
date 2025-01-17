import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import AllProducts from "./pages/allProducts/AllProducts";
import Single from "./pages/single/Single";
import About from "./pages/about/About";
import Return from "./pages/return/Return";
import Shipping from "./pages/shipping/Shipping";
import Garant from "./pages/garant/Garant";
import Blog from "./pages/blog/Blog";
import Contact from "./pages/contact/Contact";
import Basket from "./pages/basket/Basket";
import Wishlist from "./pages/wishlist/Wishlist";
import Catalog from "./pages/catalog/Catalog";
import Admin from "./pages/admin/Admin";
import Navbarr from "./components/navbarr/Navbarr";
import Footer from "./components/footer/Footer";
import NotFound from "./components/notFound/NotFound";
import Login from "./pages/login/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CreateProduct from "./pages/CreateProduct/CreateProduct";
import ManageProduct from "./pages/manageProduct/ManageProduct";
import Auth from "./pages/auth/Auth";
const App = () => {
  return (
    <div>
      <Navbarr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/allProducts" element={<AllProducts />} />
        <Route path="/single/:id" element={<Single />} />
        <Route path="/about" element={<About />} />
        <Route path="/return" element={<Return />} />
        <Route path="/shipping" element={<Shipping />} />
        <Route path="/garant" element={<Garant />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/login" element={<Login />} />
        <Route path="admin" element={<Auth />}>
          <Route path="" element={<Admin />}>
            <Route path="create-product" element={<CreateProduct />} />
            <Route path="manage-product" element={<ManageProduct />} />
          </Route>
        </Route>
        <Route path="/not-found" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default App;
