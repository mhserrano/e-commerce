import { items } from "../components/AllData";

function ProductPage() {
  return (
    <div className="product-page-container">
      <div className="container">
        <div className="product-grid">
          <h3>Product Name</h3>
          <div className="img-side">
            <img src={items[11].img} alt="product" width={100} />
          </div>
          <div className="details-side">
            <div className="small-imgs">
              <img src={items[11].img} width={100} />
              <img src={items[11].otherImgs[0]} width={100} />
              <img src={items[11].otherImgs[1]} width={100} />
            </div>
            <div className="quantity">
              <div className="quantity-row">
                <p>quantity</p>
                <div className="product-btns">
                  <button>-</button>
                  <div className="quantity">1</div>
                  <button>+</button>
                </div>
                <p className="product-price">price €</p>
              </div>
              <div className="shop-btns">
                <button className="add-btn">add to cart</button>
                <button className="buy-btn">buy now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
