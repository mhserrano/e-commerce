import { IconArrowNarrowLeft, IconArrowNarrowRight } from "@tabler/icons-react";
import TrendingIcon from "./TrendingItem";
function TrendingSlider() {
  return (
    <div className="trending-container">
      <div className="container">
        <div className="btns">
          <button>
            <IconArrowNarrowLeft />
          </button>
          <button>
            <IconArrowNarrowRight />
          </button>
        </div>
        <div className="trending-row">
          <TrendingIcon />
        </div>
      </div>
    </div>
  );
}

export default TrendingSlider;
