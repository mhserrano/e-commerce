import "../components/ProductPage.css";

import { items } from "../components/AllData";
import TrendingSlider from "../components/TrendingSlider";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

function ProductPage() {
  return (
    <div className="product-page-container">
      <div className="container">
        <div className="product-display">
          <h3 className="product-title">Sophisticated Plush Suede Bed</h3>
          <div className="product-info">
            <div className="img-side">
              <img src={items[4].img} alt="product" width={700} />
            </div>
            <div className="details-side">
              <div className="small-imgs">
                <img src={items[4].img} />
                <img src={items[4].otherImgs[0]} />
                <img src={items[4].otherImgs[1]} />
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
        <TrendingSlider />
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
}

export default ProductPage;
