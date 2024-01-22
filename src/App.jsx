import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import All from "./components/SingleCategory/All";
import Sofas from "./components/SingleCategory/Sofas";
import BedsCategory from "./components/SingleCategory/BedsCategory";
import Lighting from "./components/SingleCategory/Lighting";
import Plants from "./components/SingleCategory/Plants";
import Chairs from "./components/SingleCategory/Chairs";
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
          <Route path="beds" element={<BedsCategory />} />
          <Route path="lighting" element={<Lighting />} />
          <Route path="plants" element={<Plants />} />
          <Route path="chairs" element={<Chairs />} />
        </Route>
        <Route path="favorite-page" element={<FavoritePage />} />
      </Routes>
    </>
  );
}

export default App;
