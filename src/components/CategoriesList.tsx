import { FC, memo, useCallback, useEffect } from "react";
import classNames from "classnames";
import { useActions, useTypedSelector } from "../hooks";
import { ICategory } from "../types/category";
import { Link } from "react-router-dom";

const CategoriesList: FC = () => {
  const { categories, isLoading, selectedCategory } = useTypedSelector(
    (state) => state.category
  );
  const { fetchCategories } = useActions();
  const { setSelectedCategory } = useActions();

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleClick = useCallback((category: string) => {
    setSelectedCategory(category);
  }, []);

  return (
    <div className="flex gap-3">
      {categories.map((category: ICategory) => (
        <Link
          to={`${
            category.title !== "All" ? `/catalog/${category.title}` : "/catalog"
          }`}
          className={classNames({
            "px-4 py-2 cursor-pointer": true,
            "text-green": selectedCategory === category.title,
          })}
          key={category.title}
          onClick={() => handleClick(category.title)}
        >
          {category.title}
        </Link>
      ))}
    </div>
  );
};

export default memo(CategoriesList);
