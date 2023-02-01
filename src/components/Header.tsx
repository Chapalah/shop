import { FC, memo } from "react";
import { CategoriesList } from "./index";

const Header: FC = () => {
  return (
    <div className="header">
      <div className="container mx-auto flex flex-col justify-center align-center">
        HEADER
      </div>

      <CategoriesList />
    </div>
  );
};

export default memo(Header);
