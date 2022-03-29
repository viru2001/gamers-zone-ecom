import { addToCartService } from "../../services/CartServices/addToCartService";

const addToCart = async (product, token, dispatch) => {
  const { cart } = await addToCartService(product, token);
  dispatch({ type: "ADD_TO_CART", payload: cart });
  dispatch({ type: "UPDATE_ORDER_DETAILS", payload: ["add", product] });
};
export { addToCart };
