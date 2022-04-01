import { addToWishlist } from "../wishlist/addToWishlist";
import { removeFromCart } from "./removeFromCart";

const moveToWishlist = async (product, token, dispatch) => {
  await removeFromCart(product._id, token, dispatch);
  await addToWishlist(product, token, dispatch);
};
export { moveToWishlist };
