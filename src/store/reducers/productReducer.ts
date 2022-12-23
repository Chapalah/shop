import {
  ProductState,
  ProductAction,
  ProductsActionTypes,
} from "./../../types/product";

const initialState: ProductState = {
  products: [],
  filteredProducts: [],
  isLoading: false,
  error: null,
};

export const productReducer = (
  state: ProductState = initialState,
  action: ProductAction
): ProductState => {
  switch (action.type) {
    case ProductsActionTypes.FETCH_PRODUCTS:
      return { ...state, isLoading: true, error: null, products: [] };
    case ProductsActionTypes.FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        products: action.payload,
        filteredProducts: action.payload,
      };
    case ProductsActionTypes.FETCH_PRODUCTS_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
        products: [],
        filteredProducts: [],
      };
    case ProductsActionTypes.FILTER_PRODUCTS_BY_CATEGORY:
      return {
        ...state,
        filteredProducts: action.payload,
      }
    default:
      return state;
  }
};
