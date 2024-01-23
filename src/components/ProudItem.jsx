import "../components/Categories.css";

import { items } from "./AllData";

function ProudItem() {
  let proudItems = items.filter((item) => item.proud);

  return (
    <>
      <h2 className="proud-title">Products we are proud of</h2>
      <div className="products-grid">
        {proudItems.map((item) => {
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
    </>
  );
}

export default ProudItem;
