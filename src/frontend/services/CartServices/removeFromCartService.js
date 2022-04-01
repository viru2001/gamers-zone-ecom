import axios from "axios";

const removeFromCartService = async (_id, token) => {
  try {
    await axios.delete(`/api/user/cart/${_id}`, {
      headers: { authorization: token },
    });
  } catch (e) {
    console.log(e);
  }
};
export { removeFromCartService };
