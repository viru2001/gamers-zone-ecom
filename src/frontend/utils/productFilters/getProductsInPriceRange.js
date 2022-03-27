const getProductsInPriceRange = (products, price) =>
  products.filter(item => item.discountPrice <= price);
export { getProductsInPriceRange };
