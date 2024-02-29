import CartItem from "./CartItem";
import { useContext, useState, useEffect } from "react";
import { CartContext } from "../pages/ProductPage";
import EmptyCart from "./EmptyCart";

function FullCart() {
  const { cartItems } = useContext(CartContext);
  const [totalPrice, setTotalPrice] = useState();

  useEffect(() => {
    calculateTotalPrice();
  }, [cartItems]);

  const calculateTotalPrice = () => {
    const itemsPrices = cartItems.map((item) => item.price * item.quantity);
    const updatedTotalPrice = itemsPrices.reduce((total, price) => {
      return total + price;
    });
    setTotalPrice(updatedTotalPrice);
  };

  return (
    <>
      <div className="full-cart">
        <div className="items-list">
          {cartItems.length !== 0 ? <CartItem /> : <EmptyCart />}
        </div>
        <div className="subtotal-container">
          <div className="subtotal">
            <p>Subtotal</p>
            <p>{totalPrice}€</p>
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
