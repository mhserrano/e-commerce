import "../components/ProductPage.css";

import { IconArrowLeft } from "@tabler/icons-react";

import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import { items } from "../components/AllData";
import TrendingSlider from "../components/TrendingSlider";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

function ProductPage() {
  const { id } = useParams();

  const products = items.filter((item) => parseInt(id) === item.id);

  const [image, setImage] = useState(products[0].img);
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(products[0].price);

  useEffect(() => {
    setImage(products[0].img);
    setPrice(products[0].price);
  }, [id]);

  function decreaseQuantity() {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      setPrice(price - products[0].price);
    }
  }

  function increaseQuantity() {
    setQuantity(quantity + 1);
    setPrice(price + products[0].price);
  }

  return (
    <div className="product-page-container">
      <div className="container">
        <div className="product-display">
          <Link to={`/categories/${products[0].category}`}>
            <IconArrowLeft />
            Back
          </Link>
          <h3 className="product-title">{products[0].description}</h3>
          <div className="product-info">
            <div className="img-side">
              <img src={image} alt="product" width={700} />
            </div>
            <div className="details-side">
              <div className="small-imgs">
                <img
                  src={products[0].img}
                  alt="product"
                  onMouseOver={() => setImage(products[0].img)}
                />
                {products[0].otherImgs.map((img, index) => {
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
                <p className="product-price">{price}.00€</p>
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
