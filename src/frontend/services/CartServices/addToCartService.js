import axios from "axios";

const addToCartService = async (product, token) => {
  try {
    const { data: cart } = await axios.post(
      "/api/user/cart",
      { product },
      {
        headers: { authorization: token },
      }
    );
    return cart;
  } catch (e) {
    console.log(e);
  }
};
export { addToCartService };
