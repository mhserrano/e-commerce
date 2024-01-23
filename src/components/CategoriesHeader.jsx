import "./Categories.css";

import { Link } from "react-router-dom";
import { IconArrowLeft } from "@tabler/icons-react";

function CategoriesHeader() {
  return (
    <div className="container">
      <div className="title">
        <Link to="/">
          <IconArrowLeft />
          Home
        </Link>
        <h3>All</h3>
      </div>
      <div className="categories-btns">
        <Link to="all">
          <button>All</button>
        </Link>
        <Link to="sofas">
          <button>Sofas</button>
        </Link>
        <Link to="beds">
          <button>Beds</button>
        </Link>
        <Link to="lighting">
          <button>Lighting</button>
        </Link>
        <Link to="plants">
          <button>Plants</button>
        </Link>
        <Link to="chairs">
          <button>Chairs</button>
        </Link>
      </div>
    </div>
  );
}

export default CategoriesHeader;
