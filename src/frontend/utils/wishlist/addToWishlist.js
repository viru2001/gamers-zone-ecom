import { addToWishlistService } from "../../services/WishlistServices/addToWishlistService";

const addToWishlist = async (product, token, dispatch) => {
  await addToWishlistService(product, token);
  dispatch({ type: "ADD_TO_WISHLIST", payload: product });
};
export { addToWishlist };
