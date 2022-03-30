import { Routes, Route } from "react-router-dom";
import Mockman from "mockman-js";

import { Home, Products, Cart, Wishlist, Signin, Signup } from "../pages";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/mock" element={<Mockman />} />
    </Routes>
  );
};
export { Router };
