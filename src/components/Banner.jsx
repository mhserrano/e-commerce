import "./Banner.css";

import { Link } from "react-router-dom";

function Banner({ title, text, img }) {
  return (
    <div className="banner-container">
      <div className="banner-flex">
        <div className="text">
          <h2>{title}</h2>
          <p>{text}</p>
          <Link to="categories/all" onClick={() => window.scrollTo(0, 0)}>
            <button>shop now</button>
          </Link>
        </div>
        <div className="banner-img">
          <img src={img} alt="banner" />
        </div>
      </div>
    </div>
  );
}

export default Banner;
