import { Link } from "react-router-dom";

import { items } from "./AllData";

function TrendingItem() {
  const trendingItem = items.filter((item) => item.trending === true);

  return (
    <>
      {trendingItem.map((item) => {
        return (
          <Link
            onClick={() => window.scrollTo(0, 0)}
            to={`/categories/product/${item.id}`}
          >
            <div className="product" key={item.id}>
              <img src={item.img} alt="product" />
              <div className="product-details">
                <p className="product-description">{item.description}</p>
                <p className="price">{item.price}€</p>
              </div>
            </div>
          </Link>
        );
      })}
    </>
  );
}

export default TrendingItem;
