import { Header, ProductsList } from "./components";
import "./style/style.scss";

const App = () => {
  return (
    <div>
      <Header />

      <div className="mt-20">
        <ProductsList />
      </div>
    </div>
  );
};

export default App;
