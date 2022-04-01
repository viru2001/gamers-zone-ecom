import { updateQuantityService } from "../../services";

const updateQuantity = async (type, _id, token, dispatch) => {
  await updateQuantityService(type, _id, token);
  type === "increment"
    ? dispatch({ type: "INCREASE_QUANTITY", payload: _id })
    : dispatch({ type: "DECREASE_QUANTITY", payload: _id });
};
export { updateQuantity };
