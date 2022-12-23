import { combineReducers } from "redux";
import { categorytReducer } from "./categoryReducer";
import { productReducer } from "./productReducer";

export const rootReducer = combineReducers({
  product: productReducer,
  category: categorytReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
