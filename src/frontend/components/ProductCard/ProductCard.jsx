import { useNavigate } from "react-router-dom";
import { useAuth, useProduct } from "../../context";
import {
  addToCart,
  addToWishlist,
  isProductInCart,
  isProductInWishlist,
  moveToCart,
  removeFromWishlist,
} from "../../utils";
import "./ProductCard.css";

const ProductCard = ({ product, page }) => {
  const {
    discountPrice,
    originalPrice,
    img,
    name,
    tag,
    savePercent,
    rating,
    _id,
  } = product;
  const isDiscountGiven = savePercent === 0 ? false : true;
  const {
    auth: { status, token },
  } = useAuth();
  const [{ wishlist, cart }, productDispatch] = useProduct();
  const navigate = useNavigate();
  return (
    <div className="card-wrapper product-card place-center p-relative">
      {tag && (
        <span className="vertical-card-badge text-sm p-3 p-absolute">
          {tag}
        </span>
      )}
      <div
        className="cursor-pointer"
        onClick={() => navigate(`/products/${_id}`)}
      >
        <div className="px-4">
          <img
            className="img-responsive d-block m-auto product-card-img"
            src={img}
            alt="headphone"
          />
        </div>
        <div className="p-2">
          <p className="font-wt-bold text-center text-sm">{name}</p>
        </div>
        <div className="px-8 py-2">
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
            <div className="product-rating font-wt-bold text-sm ml-auto">
              <span>{rating}</span>
              <span>
                <i className="fas fa-star ml-2"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
      {page === "Products" ? (
        <div className="card-btns-wrapper p-3 d-flex flex-col">
          {isProductInCart(cart, _id) ? (
            <button
              type="button"
              className="btn btn-primary rounded-sm text-sm p-3 mx-4"
              onClick={() => navigate("/cart")}
            >
              <i className="fas fa-shopping-cart mr-3"></i>
              Go to Cart
            </button>
          ) : (
            <button
              type="button"
              className="btn btn-primary rounded-sm text-sm p-3 mx-4"
              onClick={() =>
                status
                  ? addToCart(product, token, productDispatch)
                  : navigate("/signin")
              }
            >
              <i className="fas fa-shopping-cart mr-3"></i>
              Add to Cart
            </button>
          )}
          {isProductInWishlist(wishlist, _id) ? (
            <button
              type="button"
              className="btn btn-outline btn-primary-outline rounded-sm text-sm p-3 mx-4"
              onClick={() => removeFromWishlist(_id, token, productDispatch)}
            >
              <i className="fas fa-heart mr-3"></i>
              Remove From Wishlist
            </button>
          ) : (
            <button
              type="button"
              className="btn btn-outline btn-primary-outline rounded-sm text-sm p-3 mx-4"
              onClick={() =>
                status
                  ? addToWishlist(product, token, productDispatch)
                  : navigate("/signin")
              }
            >
              <i className="fas fa-heart mr-3"></i>
              Add to Wishlist
            </button>
          )}
        </div>
      ) : (
        <div className="card-btns-wrapper p-3 d-flex flex-col">
          <button
            type="button"
            className="btn btn-primary rounded-sm text-sm p-3 mx-4"
            onClick={() => {
              moveToCart(
                product,
                token,
                productDispatch,
                isProductInCart(cart, _id)
              );
              navigate("/cart");
            }}
          >
            <i className="fas fa-shopping-cart mr-3"></i>
            Move to Cart
          </button>
          <button
            type="button"
            className="btn btn-outline btn-primary-outline rounded-sm text-sm p-3 mx-4"
            onClick={() => removeFromWishlist(_id, token, productDispatch)}
          >
            <i className="fas fa-heart mr-3"></i>
            Remove from Wishlist
          </button>
        </div>
      )}
    </div>
  );
};
export { ProductCard };
