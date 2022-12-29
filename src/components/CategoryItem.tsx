import classNames from "classnames";
import { FC, memo } from "react";
import { Link } from "react-router-dom";
import { useActions } from "../hooks";
import { ICategory } from "../types/category";

interface CategoryProps {
  category: ICategory;
  selectedCategory: ICategory | null;
}

const CategoryItem: FC<CategoryProps> = (props: CategoryProps) => {
  const { selectedCategory, category } = props;
  const { setSelectedCategory } = useActions();

  const handleClick = () => {
    setSelectedCategory(category.title);
  };

  return (
    <Link
      to={`${category.title !== "All" ? `/catalog/${category}` : "/catalog"}`}
      className={classNames({
        "px-4 py-2 cursor-pointer": true,
        "text-green": selectedCategory?.title === category.title,
      })}
      onClick={handleClick}
    >
      {category.title}
    </Link>
  );
};

export default memo(CategoryItem);
