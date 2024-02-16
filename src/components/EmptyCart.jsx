import { Link } from "react-router-dom";
import EmptyCartImg from "../img/cart/empty-cart.png";

function EmptyCart() {
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
        <button>Keep Browsing</button>
      </Link>
    </div>
  );
}

export default EmptyCart;
