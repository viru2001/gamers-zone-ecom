import axios from "axios";

const removeFromWishlistService = async (_id, token) => {
  try {
    await axios.delete(`/api/user/wishlist/${_id}`, {
      headers: { authorization: token },
    });
  } catch (e) {
    console.log(e);
  }
};
export { removeFromWishlistService };
