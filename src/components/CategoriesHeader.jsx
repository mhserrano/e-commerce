import "./Categories.css";

import { Link } from "react-router-dom";
import { IconArrowLeft } from "@tabler/icons-react";
function CategoriesHeader() {
  return (
    <div className="container">
      <div className="categ-container">
        <div className="title">
          <Link to="/">
            <IconArrowLeft />
            Home
          </Link>
          <h3>All</h3>
        </div>
        <div className="categories-btns">
          <button>All</button>
          <button>Sofas</button>
          <button>Beds</button>
          <button>Lighting</button>
          <button>Plants</button>
          <button>Chairs</button>
        </div>
      </div>
    </div>
  );
}

export default CategoriesHeader;
