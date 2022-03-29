import { useContext, useReducer, createContext, useEffect } from "react";
import { ProductInitialState, ProductReducer } from "../reducer";
import { fetchWishlist, fetchCart } from "../utils";
import { useAuth } from "./AuthContext";

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [productState, productDispatch] = useReducer(
    ProductReducer,
    ProductInitialState
  );
  const { auth } = useAuth();

  useEffect(() => {
    if (auth.status) {
      fetchWishlist(productDispatch, auth.token);
      fetchCart(productDispatch, auth.token);
    } else {
      productDispatch({ type: "RESET_WISHLIST_AND_CART" });
    }
  }, [auth]);

  return (
    <ProductContext.Provider value={[productState, productDispatch]}>
      {children}
    </ProductContext.Provider>
  );
};
const useProduct = () => useContext(ProductContext);

export { useProduct, ProductProvider };
