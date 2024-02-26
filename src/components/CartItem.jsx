import "./Cart.css";
import { useContext } from "react";

import { IconTrash } from "@tabler/icons-react";
import { CartContext } from "../pages/ProductPage";

function CartItem() {
  const {
    cartItem,
    cartItemQuantity,
    decreaseCartItemQuantity,
    increaseCartItemQuantity,
  } = useContext(CartContext);

  function calculateCartItemPrice(cartItemQuantity, product) {
    return cartItemQuantity * product;
  }

  return (
    <>
      {cartItem.map((item, id) => {
        return (
          <div className="cart-item" key={id}>
            <img src={item.img} width={120} />
            <div className="cart-item-info">
              <p className="cart-item-name">{item.description}</p>
              <div className="cart-quantity-btns">
                <button onClick={decreaseCartItemQuantity}>-</button>
                <p className="quantity">{cartItemQuantity}</p>
                <button onClick={increaseCartItemQuantity}>+</button>
              </div>
            </div>
            <div className="cart-item-price">
              <p>{calculateCartItemPrice(cartItemQuantity, item.price)}€</p>
              <IconTrash />
            </div>
          </div>
        );
      })}
    </>
  );
}

export default CartItem;
