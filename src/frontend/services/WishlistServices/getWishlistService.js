import axios from "axios";

const getWishlistService = async token => {
  try {
    const { data : wishlist } = await axios.get("/api/user/wishlist", {
      headers: { authorization: token },
    });
    return wishlist;
  } catch (e) {
    console.log(e);
  }
};
export { getWishlistService };
