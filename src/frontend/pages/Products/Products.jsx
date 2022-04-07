import axios from "axios";
import { useEffect } from "react";
import { Filters, ProductList } from "../../components";
import { useProduct } from "../../context";
import {
  getSortedProducts,
  getCateogrisedProducts,
  getProductsInPriceRange,
  getRatedProducts,
  getSearchedProducts,
} from "../../utils";

import "./Products.css";
const Products = () => {
  const [
    {
      products,
      filters: { sortBy, categories, price, rating },
      searchQuery,
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

  const searchResults = getSearchedProducts(products, searchQuery);

  const ProductsInPriceRange = getProductsInPriceRange(searchResults, price);
  const cateogrisedProducts = getCateogrisedProducts(
    ProductsInPriceRange,
    categories
  );
  const ratedProducts = getRatedProducts(cateogrisedProducts, rating);
  const sortedProducts = getSortedProducts(ratedProducts, sortBy);

  return (
    <div className="wrapper d-grid">
      <Filters />
      <div className="mt-8 ml-2" id="search-box">
        <input
          type="text"
          className="text-input w-75 p-3 text-sm"
          placeholder="Enter Product Name Here"
          value={searchQuery}
          onChange={e => {
            productDispatch({ type: "SEARCH_QUERY", payload: e.target.value });
          }}
        />
      </div>
      <ProductList products={sortedProducts} page={"Products"} />
    </div>
  );
};

export { Products };
