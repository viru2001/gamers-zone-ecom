import "./CartItemCard.css";
const CartItemCard = ({ product }) => {
  const {
    discountPrice,
    originalPrice,
    img,
    name,
    tag,
    savePercent,
    rating,
    qty,
  } = product;
  const isDiscountGiven = savePercent === 0 ? false : true;
  return (
    <div className="card-wrapper d-flex mt-4 p-relative">
      {tag && <span className="cart-card-badge p-3 p-absolute">{tag}</span>}
      <div className="p-4 container-center">
        <img
          className="img-responsive horizontal-card-img w-75"
          src={img}
          alt="monitor"
        />
      </div>
      <div className="p-3 w-100">
        <div className="product-info-wrapper">
          <h2 className="cart-product-heading">{name}</h2>

          <div className="pt-3">
            {
              <div className="product-price-wrapper">
                <span className="product-discount-price text-sm font-wt-bold">
                  {`Rs. ${discountPrice}`}
                </span>
                {isDiscountGiven && (
                  <span className="product-original-price text-sm ml-6">{`Rs. ${originalPrice}`}</span>
                )}
              </div>
            }
            <div className="w-100 d-flex">
              {isDiscountGiven && (
                <span className="product-discount font-wt-bold text-sm">{`Save ${savePercent}%`}</span>
              )}
              <div
                className={
                  isDiscountGiven
                    ? `product-rating font-wt-bold text-sm ml-6`
                    : `product-rating font-wt-bold text-sm`
                }
              >
                <span>{rating}</span>
                <span>
                  <i className="fas fa-star ml-2"></i>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex my-2 cart-action-container">
          <div className="d-flex align-center quantity-btn-container">
            <button
              type="button"
              className="btn btn-quantity btn-primary rounded-full"
            >
              <i className="fas fa-plus text-sm"></i>
            </button>
            <span className="text-sm mx-2 font-wt-semibold">{qty}</span>
            <button
              type="button"
              className="btn btn-quantity btn-outline btn-primary-outline rounded-full"
              disabled={qty <= 1}
            >
              <i className="fas fa-minus text-sm"></i>
            </button>
          </div>
          <div className="d-flex w-100 my-4 cart-btn-wrapper">
            <button
              type="button"
              className="btn btn-remove btn-outline btn-primary-outline rounded-sm text-sm p-3"
            >
              <i className="fas fa-trash mr-3"></i>
              Remove
            </button>
            {/* <button
              type="button"
              className="btn btn-primary rounded-sm text-sm p-3 ml-auto"
            >
              <i className="fas fa-heart mr-3"></i>
              Move to Wishlist
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};
export { CartItemCard };
