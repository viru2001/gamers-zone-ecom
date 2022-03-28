const isProductInWishlist = (wishlist, _id) => {
  return wishlist.find(item => item._id === _id) ? true : false;
};
export { isProductInWishlist };
