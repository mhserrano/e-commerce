import CartItem from "./CartItem";
import { useContext } from "react";
import { CartContext } from "../pages/ProductPage";
import EmptyCart from "./EmptyCart";

function FullCart() {
  const { cartItems } = useContext(CartContext);

  return (
    <>
      <div className="full-cart">
        <div className="items-list">
          {cartItems.length !== 0 ? <CartItem /> : <EmptyCart />}
        </div>
        <div className="subtotal-container">
          <div className="subtotal">
            <p>Subtotal</p>
            <p>120.00€</p>
          </div>
          <div className="checkout">
            <button>Go to Checkout</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default FullCart;
