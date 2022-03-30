import axios from "axios";

const updateQuantityService = async (type, _id, token) => {
  try {
    await axios.post(
      `/api/user/cart/${_id}`,
      { action: { type: type } },
      {
        headers: { authorization: token },
      }
    );
  } catch (e) {
    console.log(e);
  }
};
export { updateQuantityService };
