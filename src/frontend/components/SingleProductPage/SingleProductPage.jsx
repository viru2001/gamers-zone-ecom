import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { fetchProductData } from "../../services";
import { useState } from "react";
import "./SingleProductPage.css";
import { useAuth, useProduct } from "../../context";
import {
  addToCart,
  addToWishlist,
  isProductInCart,
  isProductInWishlist,
  removeFromWishlist,
} from "../../utils";
const SingleProductPage = () => {
  const { productId } = useParams();
  const {
    auth: { status, token },
  } = useAuth();
  const [{ wishlist, cart }, productDispatch] = useProduct();
  const navigate = useNavigate();
  const [productData, setProductData] = useState({});

  const {
    discountPrice,
    originalPrice,
    img,
    name,
    tag,
    savePercent,
    rating,
    _id,
  } = productData;
  const isDiscountGiven = savePercent === 0 ? false : true;
  useEffect(() => {
    (async () => {
      const { product } = await fetchProductData(productId);
      setProductData(product || {});
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="container-center page-wrapper">
      <div className="d-flex flex-wrap">
        <div className="product-img-wrapper align-center p-relative">
          <img className="img-responsive m-auto" src={img} alt={name} />
          {tag && (
            <span className="vertical-card-badge product-badge text-sm p-3 p-absolute">
              {tag}
            </span>
          )}
        </div>
        <div className="d-flex flex-col product-detail-wrapper">
          <div>
            <h1 className="headline-md">{name}</h1>
            <p className="text-sm">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. At
              distinctio rerum nisi voluptate aperiam. Rem inventore, magni
              saepe cum esse eligendi doloremque ratione molestias harum? Ipsam
              temporibus obcaecati expedita tempore.
            </p>
          </div>
          <div className="py-2 mt-6 d-flex flex-col">
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
          <div>
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
                      ? addToCart(productData, token, productDispatch)
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
                  onClick={() =>
                    removeFromWishlist(_id, token, productDispatch)
                  }
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
                      ? addToWishlist(productData, token, productDispatch)
                      : navigate("/signin")
                  }
                >
                  <i className="fas fa-heart mr-3"></i>
                  Add to Wishlist
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export { SingleProductPage };
