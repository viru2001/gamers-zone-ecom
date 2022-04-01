import axios from "axios";

const getCartService = async token => {
  try {
    const { data: cart } = await axios.get("/api/user/cart", {
      headers: { authorization: token },
    });
    return cart;
  } catch (e) {
    console.log(e);
  }
};
export { getCartService };
