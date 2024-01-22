import { items } from "../AllData";

function Chairs() {
  const filteredItems = items.filter((item) => item.category === "chair");

  return (
    <div className="products-container">
      <div className="products-grid">
        {filteredItems.map((item) => {
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

export default Chairs;
