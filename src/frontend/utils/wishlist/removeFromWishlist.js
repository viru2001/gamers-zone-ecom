import { removeFromWishlistService } from "../../services";

const removeFromWishlist = async (_id, token, dispatch) => {
  await removeFromWishlistService(_id, token);
  dispatch({ type: "REMOVE_FROM_WISHLIST", payload: _id });
};
export { removeFromWishlist };
