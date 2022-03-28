import { useContext, useReducer, createContext, useEffect } from "react";
import { ProductInitialState, ProductReducer } from "../reducer";
import { fetchWishlist } from "../utils";
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
    } else {
      productDispatch({ type: "RESET_WISHLIST" });
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
