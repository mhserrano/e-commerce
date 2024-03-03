import "./Categories.css";

import { Link, useLocation } from "react-router-dom";
import { useContext, useEffect } from "react";
import { CartContext } from "../pages/ProductPage";

import { IconArrowLeft } from "@tabler/icons-react";

function CategoriesHeader() {
  const { categoryTitle, setCategoryTitle } = useContext(CartContext);

  const location = useLocation();

  useEffect(() => {
    const currentLocation = location.pathname.slice(1);
    currentLocation === "categories/all" && setCategoryTitle("all");
  }, [location.pathname, setCategoryTitle]);

  return (
    <>
      <div className="title">
        <Link to="/">
          <IconArrowLeft />
          Home
        </Link>
        <h3>{categoryTitle}</h3>
      </div>
      <div className="categories-btns">
        <Link to="all">
          <button
            onClick={() => {
              setCategoryTitle("all");
            }}
          >
            All
          </button>
        </Link>
        <Link to="sofas">
          <button
            onClick={() => {
              setCategoryTitle("sofas");
            }}
          >
            Sofas
          </button>
        </Link>
        <Link to="beds">
          <button
            onClick={() => {
              setCategoryTitle("beds");
            }}
          >
            Beds
          </button>
        </Link>
        <Link to="lighting">
          <button
            onClick={() => {
              setCategoryTitle("lighting");
            }}
          >
            Lighting
          </button>
        </Link>
        <Link to="plants">
          <button
            onClick={() => {
              setCategoryTitle("plants");
            }}
          >
            Plants
          </button>
        </Link>
        <Link to="chairs">
          <button
            onClick={() => {
              setCategoryTitle("chairs");
            }}
          >
            Chairs
          </button>
        </Link>
      </div>
    </>
  );
}

export default CategoriesHeader;
