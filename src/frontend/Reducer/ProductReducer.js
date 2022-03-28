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
    case "RESET_WISHLIST":
      return {
        ...productState,
        wishlist: [],
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
    default:
      return productState;
  }
};

export { ProductInitialState, ProductReducer };
