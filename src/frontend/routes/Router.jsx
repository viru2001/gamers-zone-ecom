import { Routes, Route } from "react-router-dom";
import Mockman from "mockman-js";

import { Home, Products, Cart, Wishlist, Signin, Signup } from "../pages";
import { RequireAuth, SingleProductPage } from "../components";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:productId" element={<SingleProductPage />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/mock" element={<Mockman />} />
      <Route path="/" element={<RequireAuth />}>
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Route>
    </Routes>
  );
};
export { Router };
