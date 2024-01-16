import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Categories from "./pages/Categories";
import Navbar from "./components/Navbar";
import FavoritePage from "./pages/FavoritePage";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pages/Categories" element={<Categories />} />
        <Route path="/pages/FavoritePage" element={<FavoritePage />} />
      </Routes>
    </div>
  );
}

export default App;
