import { CartItemCard } from "../CartItemCard/CartItemCard";

const CartItemsList = ({ products }) => {
  return (
    <section id="cart-products" className="p-8 m-4">
      <div className="d-flex">
        <h1 className="headline-md">{`Your Cart (${products.length})`}</h1>
      </div>
      {products.length > 0 ? (
        products.map(product => {
          return <CartItemCard key={product._id} product={product} />;
        })
      ) : (
        <p className="text-md container-center">No Products Added in Cart</p>
      )}
    </section>
  );
};

export { CartItemsList };
