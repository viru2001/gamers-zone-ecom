import { useContext, useReducer, createContext } from "react";
import { ProductInitialState, ProductReducer } from "../Reducer";

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [productState, productDispatch] = useReducer(
    ProductReducer,
    ProductInitialState
  );

  return (
    <ProductContext.Provider value={[productState, productDispatch]}>
      {children}
    </ProductContext.Provider>
  );
};
const useProduct = () => useContext(ProductContext);

export { useProduct, ProductProvider };
