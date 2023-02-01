import {
  ICategory,
  CategoriesActionTypes,
  CategoryAction,
} from "./../../types/category";
import axios from "axios";
import { Dispatch } from "redux";

export const fetchCategories = () => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch({ type: CategoriesActionTypes.FETCH_CATEGORIES });
      const response = await axios.get<ICategory[]>(
        "https://fakestoreapi.com/products/categories"
      );

      dispatch({
        type: CategoriesActionTypes.FETCH_CATEGORIES_SUCCESS,
        payload: [
          { title: "All" },
          ...response.data.map((data) => ({ title: data })),
        ],
      });
    } catch (error) {
      dispatch({
        type: CategoriesActionTypes.FETCH_CATEGORIES_ERROR,
        payload: "Error while isLoading categories",
      });
    }
  };
};

export const setSelectedCategory = (category: string): CategoryAction => {
  return { type: CategoriesActionTypes.CHOOSE_CATEGORY, payload: category };
};
