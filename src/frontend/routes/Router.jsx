import { Routes, Route } from "react-router-dom";
import Mockman from "mockman-js";

import { Home, Products, Cart, Wishlist } from "../pages";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/mock" element={<Mockman />} />
    </Routes>
  );
};
export { Router };
