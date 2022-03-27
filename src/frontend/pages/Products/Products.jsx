import axios from "axios";
import { useEffect } from "react";
import { Filters, ProductList } from "../../components";
import { useProduct } from "../../Context/";
import {
  getSortedProducts,
  getCateogrisedProducts,
  getProductsInPriceRange,
  getRatedProducts,
} from "../../utils";

import "./Products.css";
const Products = () => {
  const [
    {
      products,
      filters: { sortBy, categories, price, rating },
    },
    productDispatch,
  ] = useProduct();
  useEffect(() => {
    (async () => {
      try {
        const {
          data: { products },
        } = await axios.get("/api/products");
        productDispatch({ type: "LOAD_PRODUCTS", payload: products });
      } catch (e) {
        console.log(e);
      }
    })();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const ProductsInPriceRange = getProductsInPriceRange(products, price);
  const cateogrisedProducts = getCateogrisedProducts(
    ProductsInPriceRange,
    categories
  );
  const ratedProducts = getRatedProducts(cateogrisedProducts, rating);
  const sortedProducts = getSortedProducts(ratedProducts, sortBy);
  return (
    <div className="wrapper d-grid">
      <Filters />
      <ProductList products={sortedProducts} />
    </div>
  );
};

export { Products };
