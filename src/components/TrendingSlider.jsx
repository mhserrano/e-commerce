import "./TrendingSlider.css";
import "./Categories.css";
import { IconArrowNarrowLeft, IconArrowNarrowRight } from "@tabler/icons-react";
import TrendingItem from "./TrendingItem";
function TrendingSlider() {
  const slideLeft = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 220;
  };
  const slideRight = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 220;
  };
  return (
    <div className="trending-container">
      <div className="title-btns">
        <h2>Trending Now</h2>
        <div className="btns">
          <button onClick={slideLeft}>
            <IconArrowNarrowLeft />
          </button>
          <button onClick={slideRight}>
            <IconArrowNarrowRight />
          </button>
        </div>
      </div>
      <div className="trending-row" id="slider">
        <TrendingItem />
      </div>
    </div>
  );
}

export default TrendingSlider;
