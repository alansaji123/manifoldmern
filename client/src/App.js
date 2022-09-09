import { Routes, Route } from "react-router-dom";
import Layout from "./layouts/layout";
import Home from "./pages";
import Products from "./pages/products/products";
import { ROUTES } from "./routes";
import "./styles/App.scss";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.PRODUCTS} element={<Products />} />
      </Routes>
    </Layout>
  );
}

export default App;
