import { Link } from "react-router-dom";

function Banner() {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="banner-container">
      <div className="text">
        <h2>Creative harmonious living</h2>
        <p>
          Our products are all made to standard sizes so that you can mix and
          match them freely.
        </p>
        <Link to="categories/all" onClick={handleClick}>
          <button>shop now</button>
        </Link>
      </div>
    </div>
  );
}

export default Banner;
