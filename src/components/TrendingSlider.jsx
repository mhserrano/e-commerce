import "./TrendingSlider.css";
import "./Categories.css";
import { IconArrowNarrowLeft, IconArrowNarrowRight } from "@tabler/icons-react";
import TrendingItem from "./TrendingItem";
function TrendingSlider() {
  return (
    <div className="trending-container">
      <div className="title-btns">
        <h2>Trending Now</h2>
        <div className="btns">
          <button>
            <IconArrowNarrowLeft />
          </button>
          <button>
            <IconArrowNarrowRight />
          </button>
        </div>
      </div>
      <div className="trending-row">
        <TrendingItem />
      </div>
    </div>
  );
}

export default TrendingSlider;
