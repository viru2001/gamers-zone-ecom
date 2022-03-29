import { CartItemsList, OrderDeatilsCard } from "../../components";
import { useProduct } from "../../context";
import "./Cart.css";

const Cart = () => {
  const [{ cart, orderDetails }] = useProduct();
  console.log(cart);
  return (
    <div className="cart-cards-wrapper d-grid">
      <CartItemsList products={cart} />
      <section id="order-details" className="p-sticky">
        <OrderDeatilsCard orderDetails={orderDetails} />
      </section>
    </div>
  );
};

export { Cart };
