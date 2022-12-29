import axios from "axios";
import { Dispatch } from "redux";
import {
  IProduct,
  ProductAction,
  ProductsActionTypes,
} from "./../../types/product";

export const fetchProducts = () => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch({ type: ProductsActionTypes.FETCH_PRODUCTS });
      const response = await axios.get<IProduct[]>(
        "https://fakestoreapi.com/products"
      );

      dispatch({
        type: ProductsActionTypes.FETCH_PRODUCTS_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: ProductsActionTypes.FETCH_PRODUCTS_ERROR,
        payload: "Error while loading products",
      });
    }
  };
};

export const fetchProductsCategory = (category: string) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch({ type: ProductsActionTypes.FETCH_PRODUCTS });
      const response = await axios.get<IProduct[]>(
        `https://fakestoreapi.com/products/category/${category}`
      );

      dispatch({
        type: ProductsActionTypes.FETCH_PRODUCTS_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: ProductsActionTypes.FETCH_PRODUCTS_ERROR,
        payload: "Error while loading products",
      });
    }
  };
};

export const setFilterProducts = (products: IProduct[]) => {
  return {
    type: ProductsActionTypes.FILTER_PRODUCTS_BY_CATEGORY,
    payload: products,
  };
};