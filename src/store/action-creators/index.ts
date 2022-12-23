import * as ProductActionCreator from "./product";
import * as CategoryActionCreator from "./category";

export default {
  ...ProductActionCreator,
  ...CategoryActionCreator,
};
