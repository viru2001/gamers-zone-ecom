import { ProductCard } from "../../components";

const ProductList = ({ products }) => {
  return (
    <section id="products" className="d-grid mt-8">
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
