const getCateogrisedProducts = (products, categories) => {
  const isCategorySelected = Object.values(categories).every(
    category => category === false
  );
  if (isCategorySelected) return products;
  return products.filter(product => categories[product.categoryName]);
};

export { getCateogrisedProducts };
