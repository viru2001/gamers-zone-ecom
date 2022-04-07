import axios from "axios";

const fetchProductData = async id => {
  try {
    const { data } = await axios.get(`/api/products/${id}`);
    return data;
  } catch (e) {
    console.log(e);
  }
};
export { fetchProductData };
