import "./TrendingSlider.css";

import { items } from "./AllData";

function TrendingItem() {
  const trendingItem = items.filter((item) => item.trending === true);

  return (
    <div className="item-container">
      {trendingItem.map((item) => {
        return <h3 key={item.id}>{item.category}</h3>;
      })}
    </div>
  );
}

export default TrendingItem;
