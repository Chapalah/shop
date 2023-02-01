export interface ICategory {
  title: string;
}

export interface CategoryState {
  categories: ICategory[];
  isLoading: boolean;
  error: null | string;
  selectedCategory: string;
}

export enum CategoriesActionTypes {
  FETCH_CATEGORIES = "FETCH_CATEGORIES",
  FETCH_CATEGORIES_SUCCESS = "FETCH_CATEGORIES_SUCCESS",
  FETCH_CATEGORIES_ERROR = "FETCH_CATEGORIES_ERROR",
  CHOOSE_CATEGORY = "CHOOSE_CATEGORY",
}

interface FetchCategoriesAction {
  type: CategoriesActionTypes.FETCH_CATEGORIES;
}

interface FetchCategoriesSuccessAction {
  type: CategoriesActionTypes.FETCH_CATEGORIES_SUCCESS;
  payload: ICategory[];
}

interface FetchCategoriesErrorAction {
  type: CategoriesActionTypes.FETCH_CATEGORIES_ERROR;
  payload: string;
}

interface ChooseCategory {
  type: CategoriesActionTypes.CHOOSE_CATEGORY;
  payload: string;
}

export type CategoryAction =
  | FetchCategoriesAction
  | FetchCategoriesSuccessAction
  | FetchCategoriesErrorAction
  | ChooseCategory;