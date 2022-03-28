import { getWishlistService } from "../../services";

const fetchWishlist = async (dispatch, token) => {
  const { wishlist } = await getWishlistService(token);
  dispatch({ type: "FETCH_WISHLIST", payload: wishlist });
};
export { fetchWishlist };
