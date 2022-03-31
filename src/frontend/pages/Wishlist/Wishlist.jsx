import { ProductList } from "../../components";
import { useProduct } from "../../context";
import "./Wishlist.css";

const Wishlist = () => {
  const [{wishlist}] = useProduct();
  return <ProductList products={wishlist} page={"Wishlist"} />;
};

export { Wishlist };
