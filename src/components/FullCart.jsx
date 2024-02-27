import CartItem from "./CartItem";
import { useContext } from "react";
import { CartContext } from "../pages/ProductPage";
import EmptyCart from "./EmptyCart";

function FullCart() {
  const { cartItems, cartItemQuantity } = useContext(CartContext);

  return (
    <>
      <div className="full-cart">
        {cartItems.length !== 0 ? <CartItem /> : <EmptyCart />}
        <div className="checkout"></div>
      </div>
    </>
  );
}

export default FullCart;
