import { addToCart } from "../cart/addToCart";
import { updateQuantity } from "../cart/updateQuantity";
import { removeFromWishlist } from "./removeFromWishlist";

const moveToCart = async (product, token, dispatch, isProductInCart) => {
  await removeFromWishlist(product._id, token, dispatch);
  isProductInCart
    ? await updateQuantity("increment", product._id, token, dispatch)
    : await addToCart(product, token, dispatch);
};
export { moveToCart };
