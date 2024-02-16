import { items } from "../AllData";
import { Link } from "react-router-dom";

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
            <Link
              to={`/categories/product/${item.id}`}
              key={item.id}
              onClick={() => {
                window.scrollTo(0, 0);
              }}
            >
              <div className="product">
                <img src={item.img} alt="product" />
                <div className="product-details">
                  <p className="product-description">{item.description}</p>
                  <p className="price">{item.price}€</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default CategoriesItem;
