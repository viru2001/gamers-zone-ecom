import axios from "axios";

const addToWishlistService = async (product, token) => {
  console.log("product", product);
  try {
    await axios.post("/api/user/wishlist", {product}, {
      headers: { authorization: token },
    });
  } catch (e) {
    console.log(e);
  }
};
export { addToWishlistService };
