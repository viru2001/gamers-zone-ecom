import { updateQuantityService } from "../../services";

const updateQuantity = async (type, _id, token, dispatch) => {
  const { cart } = await updateQuantityService(type, _id, token);
  dispatch({ type: "UPDATE_QUANTITY", payload: cart });
};
export { updateQuantity };
