import { items } from "../AllData";
import { Link } from "react-router-dom";

function Lighting() {
  const filteredItems = items.filter((item) => item.category === "lighting");

  return (
    <div className="products-container">
      <div className="products-grid">
        {filteredItems.map((item) => {
          return (
            <Link to={`/categories/product/${item.id}`} key={item.id}>
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

export default Lighting;
