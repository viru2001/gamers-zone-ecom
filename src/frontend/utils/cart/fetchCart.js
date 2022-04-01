import { getCartService } from "../../services";

const fetchCart = async (dispatch, token) => {
  const { cart } = await getCartService(token);
  dispatch({ type: "FETCH_CART", payload: cart });
};
export { fetchCart };
