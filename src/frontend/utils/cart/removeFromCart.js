import { removeFromCartService } from "../../services";

const removeFromCart = async (product, token, dispatch) => {
  const { cart } = await removeFromCartService(product._id, token);
  dispatch({ type: "REMOVE_FROM_CART", payload: cart });
};
export { removeFromCart };
