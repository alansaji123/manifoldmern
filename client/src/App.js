import { Routes, Route, BrowserRouter } from "react-router-dom";
import Layout from "./layouts/layout";
import Home from "./pages";
import Products from "./pages/products/products";
import Cart from "./pages/cart/cart";
import { ROUTES } from "./routes";
import "./styles/custom.scss";
import { CartProvider } from "./context/CartContext";
import Login from "./pages/login/login";
import SignUp from "./pages/signup/signup";
import "./styles/App.less";

function App() {
  return (
    <CartProvider>
      <Routes>
        <Route path={ROUTES.HOME} element={<Layout />}>
          <Route index element={<Home />} />
          <Route path={ROUTES.PRODUCTS} element={<Products />} />
          <Route path={ROUTES.CART} element={<Cart />} />
          <Route path={ROUTES.SIGNUP} element={<SignUp />} />
          <Route path={ROUTES.LOGIN} element={<Login />} />
        </Route>
      </Routes>
    </CartProvider>
  );
}

export default App;
