import { Routes, Route, Link } from "react-router-dom";
import { Layout } from "./components";
import Catalog from "./pages/Catalog";
import "./style/style.scss";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/catalog/:category" element={<Catalog />} />
      </Routes>
    </Layout>
  );
};

export default App;
