import { removeFromCartService } from "../../services";

const removeFromCart = async (_id, token, dispatch) => {
  await removeFromCartService(_id, token);
  dispatch({ type: "REMOVE_FROM_CART", payload: _id });
};
export { removeFromCart };
