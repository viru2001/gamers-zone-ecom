import { CartItemsList, OrderDetailsCard } from "../../components";
import { useProduct } from "../../context";
import "./Cart.css";

const Cart = () => {
  const [{ cart, orderDetails }] = useProduct();
  return (
    <div className="cart-cards-wrapper d-grid">
      <CartItemsList products={cart} />
      <section id="order-details" className="p-sticky">
        <OrderDetailsCard orderDetails={orderDetails} />
      </section>
    </div>
  );
};

export { Cart };
