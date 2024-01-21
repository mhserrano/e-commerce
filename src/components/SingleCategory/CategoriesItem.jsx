import "../Categories.css";
import { items } from "../AllData";

function CategoriesItem() {
  const shuffleItems = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

  shuffleItems(items);

  return (
    <div className="products-container">
      <div className="products-grid">
        {items.map((item) => {
          return (
            <div className="product" key={item.id}>
              <img src={item.img} alt="product" />
              <div className="product-details">
                <p className="product-description">{item.description}</p>
                <p className="price">{item.price}€</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CategoriesItem;
