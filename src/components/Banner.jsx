import "./Banner.css";

import { Link } from "react-router-dom";
import banner1 from "../img/banners/banner1.jpg";
function Banner() {
  return (
    <div className="banner-container">
      <div className="banner-flex">
        <div className="text">
          <h2>Creative harmonious living</h2>
          <p>
            Our products are all made to standard sizes so that you can mix and
            match them freely.
          </p>
          <Link to="categories/all" onClick={() => window.scrollTo(0, 0)}>
            <button>shop now</button>
          </Link>
        </div>
        <div className="banner-img">
          <img src={banner1} alt="banner" />
        </div>
      </div>
    </div>
  );
}

export default Banner;
