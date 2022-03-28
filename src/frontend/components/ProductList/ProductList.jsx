import { ProductCard } from "../../components";

const ProductList = ({ products, page }) => {
  return (
    <section
      id={page === "Products" ? "products" : "wishlist-cards-wrapper"}
      className={page === "Products" ? "d-grid mt-8" : "d-grid m-8"}
    >
      {products.length > 0 ? (
        products.map(
          ({
            _id,
            discountPrice,
            originalPrice,
            img,
            name,
            tag,
            savePercent,
            rating,
          }) => {
            return (
              <ProductCard
                key={_id}
                discountPrice={discountPrice}
                originalPrice={originalPrice}
                img={img}
                name={name}
                tag={tag}
                savePercent={savePercent}
                rating={rating}
                page={page}
              />
            );
          }
        )
      ) : (
        <p className="text-md container-center">No Products Found</p>
      )}
    </section>
  );
};
export { ProductList };
