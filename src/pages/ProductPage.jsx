import "../components/ProductPage.css";
import { useParams } from "react-router-dom";
import { items } from "../components/AllData";
import TrendingSlider from "../components/TrendingSlider";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

function ProductPage() {
  const { id } = useParams();

  const products = items.filter((item) => item.id === parseInt(id));
  console.log(products[0].otherImgs);
  return (
    <div className="product-page-container">
      <div className="container">
        <div className="product-display">
          <h3 className="product-title">Sophisticated Plush Suede Bed</h3>
          <div className="product-info">
            <div className="img-side">
              <img src={products[0].img} alt="product" width={700} />
            </div>
            <div className="details-side">
              <div className="small-imgs">
                <img src={products[0].img} alt="product" />
                {products[0].otherImgs.map((img, index) => {
                  return <img src={img} alt="product" key={index} />;
                })}
              </div>
              <div className="quantity-price">
                <div className="quantity-row">
                  <p>quantity</p>
                  <div className="product-btns">
                    <button>-</button>
                    <div className="quantity-counter">1</div>
                    <button>+</button>
                  </div>
                  <p className="product-price"></p>
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
