const ProductInitialState = {
  products: [],
  filters: {
    sortBy: "",
    categories: {
      monitor: false,
      chair: false,
      headphone: false,
      keyboard: false,
      mouse: false,
      mousePad: false,
    },
    price: 30000,
    rating: 0,
  },
  wishlist: [],
  cart: [],
  orderDetails: { totalMRP: 0, discount: 0, delivery: 0 },
};

const ProductReducer = (productState, { type, payload }) => {
  switch (type) {
    case "LOAD_PRODUCTS":
      return { ...productState, products: payload };
    case "SORT":
      return {
        ...productState,
        filters: { ...productState.filters, sortBy: payload },
      };
    case "INCLUDE_MONITOR":
      return {
        ...productState,
        filters: {
          ...productState.filters,
          categories: { ...productState.filters.categories, monitor: payload },
        },
      };
    case "INCLUDE_CHAIR":
      return {
        ...productState,
        filters: {
          ...productState.filters,
          categories: {
            ...productState.filters.categories,
            chair: payload,
          },
        },
      };
    case "INCLUDE_HEADPHONE":
      return {
        ...productState,
        filters: {
          ...productState.filters,
          categories: {
            ...productState.filters.categories,
            headphone: payload,
          },
        },
      };
    case "INCLUDE_KEYBOARD":
      return {
        ...productState,
        filters: {
          ...productState.filters,
          categories: {
            ...productState.filters.categories,
            keyboard: payload,
          },
        },
      };
    case "INCLUDE_MOUSE":
      return {
        ...productState,
        filters: {
          ...productState.filters,
          categories: {
            ...productState.filters.categories,
            mouse: payload,
          },
        },
      };
    case "INCLUDE_MOUSEPAD":
      return {
        ...productState,
        filters: {
          ...productState.filters,
          categories: {
            ...productState.filters.categories,
            mousePad: payload,
          },
        },
      };
    case "PRICE_RANGE_CHANGE":
      return {
        ...productState,
        filters: {
          ...productState.filters,
          price: payload,
        },
      };

    case "RATING":
      return {
        ...productState,
        filters: {
          ...productState.filters,
          rating: payload,
        },
      };
    case "CLEAR":
      return { ...productState, filters: ProductInitialState.filters };

    case "FETCH_WISHLIST":
      return {
        ...productState,
        wishlist: payload,
      };
    case "RESET_WISHLIST_AND_CART":
      return {
        ...productState,
        wishlist: [],
        cart: [],
        orderDetails: { totalMRP: 0, discount: 0, delivery: 0 },
      };
    case "ADD_TO_WISHLIST":
      return {
        ...productState,
        wishlist: [...productState.wishlist, payload],
      };
    case "REMOVE_FROM_WISHLIST":
      return {
        ...productState,
        wishlist: productState.wishlist.filter(item => item._id !== payload),
      };
    case "FETCH_CART":
      return {
        ...productState,
        cart: payload,
      };
    case "ADD_TO_CART":
      return {
        ...productState,
        cart: payload,
      };
    case "UPDATE_ORDER_DETAILS":
      const [operation, product] = payload;
      if (operation === "add")
        return {
          ...productState,
          orderDetails: {
            ...productState.orderDetails,
            totalMRP:
              productState.orderDetails.totalMRP + product.originalPrice,
            discount:
              productState.orderDetails.discount +
              (product.originalPrice - product.discountPrice),
          },
        };
      if (operation === "remove")
        return {
          ...productState,
          orderDetails: {
            ...productState.orderDetails,
            totalMRP:
              productState.orderDetails.totalMRP - product.originalPrice,
            discount:
              productState.orderDetails.discount -
              (product.originalPrice - product.discountPrice),
          },
        };
      break;
    case "REMOVE_FROM_CART":
      return {
        ...productState,
        cart: payload,
      };
    case "UPDATE_QUANTITY":
      return {
        ...productState,
        cart: payload,
      };
    default:
      return productState;
  }
};

export { ProductInitialState, ProductReducer };
