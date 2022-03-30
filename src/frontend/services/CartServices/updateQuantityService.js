import axios from "axios";

const updateQuantityService = async (type, _id, token) => {
  const { data: cart } = await axios.post(
    `/api/user/cart/${_id}`,
    { action: { type: type } },
    {
      headers: { authorization: token },
    }
  );
  return cart;
};
export { updateQuantityService };
