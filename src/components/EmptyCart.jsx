import { Link } from "react-router-dom";
import "./Cart.css";
import EmptyCartImg from "../img/cart/empty-cart.png";

function EmptyCart({ changeCartState }) {
  return (
    <div className="empty-cart">
      <img src={EmptyCartImg} alt="empty-cart" width={160} />
      <p>Your cart is empty</p>
      <Link
        to="categories/all"
        onClick={() => {
          window.scrollTo(0, 0);
        }}
      >
        <button onClick={changeCartState}>Keep Browsing</button>
      </Link>
    </div>
  );
}

export default EmptyCart;
