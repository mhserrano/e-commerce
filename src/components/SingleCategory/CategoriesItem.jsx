import { items } from "../AllData";

function CategoriesItem() {
  const shuffleItems = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

  const shuffledItems = shuffleItems(items);

  return (
    <div className="products-container">
      <div className="products-grid">{shuffledItems.map((item) => {})}</div>
    </div>
  );
}

export default CategoriesItem;
