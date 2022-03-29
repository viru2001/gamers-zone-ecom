const isProductInCart = (cart, _id) => {
  return cart.find(item => item._id === _id) ? true : false;
};
export { isProductInCart };
