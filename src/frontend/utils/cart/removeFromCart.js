import { removeFromCartService } from "../../services";

const removeFromCart = async (product, token, dispatch) => {
  const { cart } = await removeFromCartService(product._id, token);
  dispatch({ type: "REMOVE_FROM_CART", payload: cart });
    dispatch({ type: "UPDATE_ORDER_DETAILS", payload: ["remove", product] });
};
export { removeFromCart };
