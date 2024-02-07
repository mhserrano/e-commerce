import { Link } from "react-router-dom";

import { items } from "./AllData";

function TrendingItem() {
  const trendingItem = items.filter((item) => item.trending === true);

  return (
    <>
      {trendingItem.map((item) => {
        return (
          <Link
            to={`/categories/product/${item.id}`}
            onClick={() => window.scrollTo(0, 0)}
            key={item.id}
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
    </>
  );
}

export default TrendingItem;
