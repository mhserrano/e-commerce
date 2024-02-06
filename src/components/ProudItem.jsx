import "../components/Categories.css";

import { Link } from "react-router-dom";

import { items } from "./AllData";

function ProudItem() {
  let proudItems = items.filter((item) => item.proud);

  return (
    <>
      <h2 className="proud-title">Products we are proud of</h2>
      <div className="products-grid">
        {proudItems.map((item) => {
          return (
            <Link
              to={`/categories/product/${item.id}`}
              onClick={() => window.top(0, 0)}
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
      </div>
    </>
  );
}

export default ProudItem;
