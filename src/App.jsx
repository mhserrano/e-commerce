import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Categories from "./pages/Categories";
import All from "./components/SingleCategory/All";
import Sofas from "./components/SingleCategory/Sofas";
import Navbar from "./components/Navbar";
import FavoritePage from "./pages/FavoritePage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="categories" element={<Categories />}>
          <Route path="all" element={<All />} />
          <Route path="sofas" element={<Sofas />} />
        </Route>
        <Route path="favorite-page" element={<FavoritePage />} />
      </Routes>
    </>
  );
}

export default App;
