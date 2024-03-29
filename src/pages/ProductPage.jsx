import "../components/ProductPage.css";

import { IconArrowLeft } from "@tabler/icons-react";

import { Link, useParams } from "react-router-dom";
import { useState, useEffect, createContext, useContext } from "react";

import { items } from "../components/AllData";

import TrendingSlider from "../components/TrendingSlider";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

export const CartContext = createContext();

function ProductPage() {
  const { addToCart } = useContext(CartContext);
  const { id } = useParams();
  const product = items.filter((item) => parseInt(id) === item.id);
  const [quantity, setQuantity] = useState(1);
  const [image, setImage] = useState(product[0].img);

  function calculateItemPrice(quantity) {
    return quantity * product[0].price;
  }
  function decreaseQuantity() {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }

  function increaseQuantity() {
    setQuantity(quantity + 1);
  }

  useEffect(() => {
    setImage(product[0].img);
    setQuantity(1);
  }, [id]);

  return (
    <div className="product-page-container">
      <div className="container">
        <div className="product-display">
          <Link to={`/categories/${product[0].category}`}>
            <IconArrowLeft />
            Back
          </Link>
          <h3 className="product-title">{product[0].description}</h3>
          <div className="product-info">
            <div className="img-side">
              <img src={image} alt="product" width={700} />
            </div>
            <div className="details-side">
              <div className="small-imgs">
                <img
                  src={product[0].img}
                  alt="product"
                  onMouseOver={() => setImage(product[0].img)}
                />
                {product[0].otherImgs.map((img, index) => {
                  return (
                    <img
                      src={img}
                      alt="product"
                      onMouseOver={() => setImage(img)}
                      key={index}
                    />
                  );
                })}
              </div>

              <div className="quantity-row">
                <p>quantity</p>
                <div className="product-btns">
                  <button onClick={decreaseQuantity}>-</button>
                  <div className="quantity-counter">{quantity}</div>
                  <button onClick={increaseQuantity}>+</button>
                </div>
                <p className="product-price">
                  {calculateItemPrice(quantity)}.00€
                </p>
              </div>
              <div className="shop-btns">
                <button
                  className="add-btn"
                  onClick={() => {
                    addToCart(product[0]);
                  }}
                >
                  add to cart
                </button>
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
