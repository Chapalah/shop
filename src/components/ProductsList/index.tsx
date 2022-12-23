import { FC, memo, useEffect } from "react";
import { useActions,  useTypedSelector } from "../../hooks";
import { IProduct } from "../../types/product";
import { ProductItem } from "../../components";

const ProductsList: FC = () => {
  const { products, filteredProducts, isLoading } = useTypedSelector(
    (state) => state.product
  );
  const { fetchProducts } = useActions();

  useEffect(() => {
    fetchProducts();
  }, []);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="container mx-auto flex flex-col justify-center align-center py-5">
      <div className="max-w-[1190px] flex flex-wrap gap-4 mx-auto">
        {filteredProducts.map((product: IProduct) => (
          <ProductItem product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default memo(ProductsList);
