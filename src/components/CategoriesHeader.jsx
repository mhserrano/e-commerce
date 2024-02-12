import "./Categories.css";

import { Link } from "react-router-dom";
import { IconArrowLeft } from "@tabler/icons-react";
import { useState } from "react";

function CategoriesHeader() {
  const [title, setTitle] = useState("all");

  return (
    <>
      <div className="title">
        <Link to="/">
          <IconArrowLeft />
          Home
        </Link>
        <h3>{title}</h3>
      </div>
      <div className="categories-btns">
        <Link to="all">
          <button onClick={() => setTitle("all")}>All</button>
        </Link>
        <Link to="sofas">
          <button onClick={() => setTitle("sofas")}>Sofas</button>
        </Link>
        <Link to="beds">
          <button onClick={() => setTitle("beds")}>Beds</button>
        </Link>
        <Link to="lighting">
          <button onClick={() => setTitle("lighting")}>Lighting</button>
        </Link>
        <Link to="plants">
          <button onClick={() => setTitle("plants")}>Plants</button>
        </Link>
        <Link to="chairs">
          <button onClick={() => setTitle("chairs")}>Chairs</button>
        </Link>
      </div>
    </>
  );
}

export default CategoriesHeader;
