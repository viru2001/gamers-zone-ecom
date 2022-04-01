import { addToCartService } from "../../services/CartServices/addToCartService";

const addToCart = async (product, token, dispatch) => {
  await addToCartService(product, token);
  dispatch({ type: "ADD_TO_CART", payload: product });
};
export { addToCart };
