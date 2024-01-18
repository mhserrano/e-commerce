import CategoriesHeader from "../components/CategoriesHeader.jsx";
import { Outlet } from "react-router-dom";

function Categories() {
  return (
    <>
      <CategoriesHeader />
      <Outlet />
    </>
  );
}

export default Categories;
