export interface IProduct {
  id: number;
  title: string;
  price: number;
  desription: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export interface ProductState {
  products: IProduct[];
  filteredProducts: IProduct[];
  isLoading: boolean;
  error: null | string;
}

export enum ProductsActionTypes {
  FETCH_PRODUCTS = "FETCH_PRODUCTS",
  FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS",
  FETCH_PRODUCTS_ERROR = "FETCH_PRODUCTS_ERROR",
  FILTER_PRODUCTS_BY_CATEGORY = 'FILTER_PRODUCTS_BY_CATEGORY'
}

interface FetchProductsAction {
  type: ProductsActionTypes.FETCH_PRODUCTS;
}

interface FetchProductsSuccessAction {
  type: ProductsActionTypes.FETCH_PRODUCTS_SUCCESS;
  payload: IProduct[];
}

interface FetchProductsErrorAction {
  type: ProductsActionTypes.FETCH_PRODUCTS_ERROR;
  payload: string;
}

interface FilterProductsByCategory {
  type: ProductsActionTypes.FILTER_PRODUCTS_BY_CATEGORY;
  payload: IProduct[];
}

export type ProductAction =
  | FetchProductsAction
  | FetchProductsSuccessAction
  | FetchProductsErrorAction
  | FilterProductsByCategory;
