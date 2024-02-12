import { Outlet } from "react-router-dom";

import CategoriesHeader from "../components/CategoriesHeader.jsx";
import Newsletter from "../components/Newsletter.jsx";
import Footer from "../components/Footer.jsx";

function Categories() {
  return (
    <div className="categories-container">
      <div className="container">
        <CategoriesHeader />
        <Outlet />
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
}

export default Categories;
