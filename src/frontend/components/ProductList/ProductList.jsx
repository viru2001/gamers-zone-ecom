import { ProductCard } from "../../components";

const ProductList = ({ products, page }) => {
  return (
    <section
      id={page === "Products" ? "products" : "wishlist-cards-wrapper"}
      className={page === "Products" ? "d-grid mt-8" : "d-grid m-8"}
    >
      {products.length > 0 ? (
        products.map(product => {
          return (
            <ProductCard key={product._id} product={product} page={page} />
          );
        })
      ) : (
        <p className="text-md container-center">No Products Found</p>
      )}
    </section>
  );
};
export { ProductList };
