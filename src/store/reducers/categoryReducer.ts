import {
  CategoryState,
  CategoryAction,
  CategoriesActionTypes,
} from "./../../types/category";

const initialState: CategoryState = {
  categories: [],
  isLoading: false,
  error: null,
  selectedCategory: "All",
};

export const categorytReducer = (
  state: CategoryState = initialState,
  action: CategoryAction
): CategoryState => {
  switch (action.type) {
    case CategoriesActionTypes.FETCH_CATEGORIES:
      return { ...state, isLoading: true, error: null, categories: [] };
    case CategoriesActionTypes.FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        categories: action.payload,
      };
    case CategoriesActionTypes.FETCH_CATEGORIES_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
        categories: [],
      };
    case CategoriesActionTypes.CHOOSE_CATEGORY:
      return { ...state, selectedCategory: action.payload };
    default:
      return state;
  }
};