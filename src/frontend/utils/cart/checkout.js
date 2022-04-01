import { removeFromCartService } from "../../services";

const checkout = (cart, token, dispatch) => {
  cart.forEach(
    async product => await removeFromCartService(product._id, token)
  );
  dispatch({ type: "CHECKOUT" });
};
export { checkout };
