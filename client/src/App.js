import { Routes, Route } from "react-router-dom";
import Home from "./pages";
import { ROUTES } from "./routes";

function App() {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<Home />} />
    </Routes>
  );
}

export default App;
