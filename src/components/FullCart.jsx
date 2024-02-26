import CartItem from "./CartItem";
import { useContext } from "react";
import { CartContext } from "../pages/ProductPage";
import EmptyCart from "./EmptyCart";

function FullCart() {
  const { cartItem } = useContext(CartContext);

  return (
    <>
      <div className="full-cart">
        {cartItem.length !== 0 ? <CartItem /> : <EmptyCart />}
        <div className="checkout"></div>
      </div>
    </>
  );
}

export default FullCart;
