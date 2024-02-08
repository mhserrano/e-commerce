import { Outlet } from "react-router-dom";

import CategoriesHeader from "../components/CategoriesHeader.jsx";
import Newsletter from "../components/Newsletter.jsx";
import Footer from "../components/Footer.jsx";

function Categories() {
  return (
    <>
      <CategoriesHeader />
      <Outlet />
      <Newsletter />
      <Footer />
    </>
  );
}

export default Categories;
