import "../components/ProductPage.css";

import { items } from "../components/AllData";

function ProductPage() {
  return (
    <div className="container">
      <div className="product-page-container">
        <div className="product-display">
          <h3 className="product-title">Sophisticated Plush Suede Bed</h3>
          <div className="product-info">
            <div className="img-side">
              <img src={items[6].img} alt="product" width={700} />
            </div>
            <div className="details-side">
              <div className="small-imgs">
                <img src={items[16].img} width={170} />
                <img src={items[19].otherImgs[0]} width={170} />
                <img src={items[16].otherImgs[1]} width={170} />
              </div>
              <div className="quantity-price">
                <div className="quantity-row">
                  <p>quantity</p>
                  <div className="product-btns">
                    <button>-</button>
                    <div className="quantity-counter">1</div>
                    <button>+</button>
                  </div>
                  <p className="product-price">price €</p>
                </div>
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
