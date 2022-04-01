import axios from "axios";

const addToCartService = async (product, token) => {
  try {
    await axios.post(
      "/api/user/cart",
      { product },
      {
        headers: { authorization: token },
      }
    );
  } catch (e) {
    console.log(e);
  }
};
export { addToCartService };
