import { FC, memo } from "react";
import { IProduct } from "../types/product";

interface ProductProps {
  product: IProduct;
}

const Product: FC<ProductProps> = (props: ProductProps) => {
  const { title, image, category, desription, rating, price } = props.product;

  return (
    <div className="w-[386px] bg-white p-4 flex flex-col hover:drop-shadow-md duration-200 ease-in-out cursor-pointer rounded-md">
      <div className="w-[354px] h-[300px] flex items-center justify-center">
        <img className="w-full h-full object-scale-down" src={image} alt={title} />
      </div>

      <span>{category}</span>

      <h3 className="mt-5 text-lg font-light black">{title}</h3>

      <p className="mt-1 text-lg font-medium black">${price}</p>
    </div>
  );
};

export default memo(Product);
