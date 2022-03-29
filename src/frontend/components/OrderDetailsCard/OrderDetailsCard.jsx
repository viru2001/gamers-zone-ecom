const OrderDeatilsCard = ({ orderDetails }) => {
  const { totalMRP, discount, delivery } = orderDetails;
  return (
    <div className="d-flex flex-col p-8">
      <h2 className="headline-md mb-2">Order Details</h2>
      <div className="d-flex justify-between text-sm mt-2">
        <span>Total MRP </span>
        <span>{`₹ ${totalMRP}`} </span>
      </div>
      <div className="d-flex justify-between text-sm mt-2">
        <span>Discount</span>
        <span> {`-₹ ${discount}`}</span>
      </div>
      <div className="d-flex justify-between text-sm mt-2">
        <span>Delivery</span>
        <span>{delivery === 0 ? `Free` : `₹ ${delivery}`}</span>
      </div>
      <div className="d-flex justify-between text-sm mt-8 font-wt-bold">
        <span>Total Amount</span>
        <span>{`₹ ${totalMRP - discount}`}</span>
      </div>
      <div className="mt-8 d-flex">
        <button
          type="button"
          className="btn btn-primary rounded-sm text-sm p-3 w-100"
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};
export { OrderDeatilsCard };
