import { FC, memo, useEffect } from "react";
import { CategorytItem } from "..";
import { useActions, useTypedSelector } from "../../hooks";
import { ICategory } from "../../types/category";

const CategoriesList: FC = () => {
  const { categories, isLoading, selectedCategory } = useTypedSelector(
    (state) => state.category
  );
  const { fetchCategories } = useActions();

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div className="flex gap-3">
      {categories.map((category: ICategory) => (
        <CategorytItem
          category={category}
          selectedCategory={selectedCategory}
          key={category.title}
        />
      ))}
    </div>
  );
};

export default memo(CategoriesList);
