import { addToCartService } from "../../services/CartServices/addToCartService";

const addToCart = async (product, token, dispatch) => {
  const { cart } = await addToCartService(product, token);
  dispatch({ type: "ADD_TO_CART", payload: cart });
};
export { addToCart };
