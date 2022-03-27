const getSortedProducts = (products, sortBy) => {
  if (sortBy === "LOW_TO_HIGH")
    return [...products].sort(
      (item1, item2) => item1.discountPrice - item2.discountPrice
    );

  if (sortBy === "HIGH_TO_LOW")
    return [...products].sort(
      (item1, item2) => item2.discountPrice - item1.discountPrice
    );

  return products;
};

export { getSortedProducts };
