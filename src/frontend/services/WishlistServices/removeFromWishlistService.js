import axios from "axios";

const removeFromWishlistService = async (_id, token) => {
  console.log(`/api/user/wishlist/${_id}`);
  try {
    await axios.delete(`/api/user/wishlist/${_id}`, {
      headers: { authorization: token },
    });
  } catch (e) {
    console.log(e);
  }
};
export { removeFromWishlistService };
