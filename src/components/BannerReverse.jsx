import "./Banner.css";
import { Link } from "react-router-dom";
import banner2 from "../img/banners/banner2.jpg";

function BannerReverse() {
  return (
    <div className="banner-container">
      <div className="banner-flex">
        <div className="banner-img">
          <img src={banner2} alt="banner" />
        </div>

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
      </div>
    </div>
  );
}

export default BannerReverse;
