import classNames from "classnames";
import { FC, memo } from "react";
import { useActions, useTypedSelector } from "../../hooks";
import { ICategory } from "../../types/category";

interface CategoryProps {
  category: ICategory;
  selectedCategory: ICategory | null;
}

const CategoryItem: FC<CategoryProps> = (props: CategoryProps) => {
  const { title } = props.category;
  const selectedCategory = props.selectedCategory;
  const { products } = useTypedSelector((state) => state.product);
  const { setSelectedCategory, setFilterProducts } = useActions();

  const handleClick = () => {
    setSelectedCategory(props.category);

    filterProducts(props.category);
  };

  const filterProducts = (selectedCategory: ICategory): void => {
    if (selectedCategory?.title === "All") {
      setFilterProducts(products);
      return;
    }

    setFilterProducts(
      products.filter((product) => product.category === selectedCategory?.title)
    );
  };

  return (
    <span
      className={classNames({
        "px-4 py-2 cursor-pointer": true,
        "text-green": selectedCategory?.title === title,
      })}
      onClick={handleClick}
    >
      {title}
    </span>
  );
};

export default memo(CategoryItem);
