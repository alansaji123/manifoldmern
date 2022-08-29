import { Routes, Route } from "react-router-dom";
import Layout from "./layouts/layout";
import Home from "./pages";
import { ROUTES } from "./routes";
import "./styles/App.scss";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
      </Routes>
    </Layout>
  );
}

export default App;
