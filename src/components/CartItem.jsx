import "./Cart.css";
import { useContext } from "react";

import { IconTrash } from "@tabler/icons-react";
import { CartContext } from "../pages/ProductPage";

function CartItem() {
  const {
    cartItems,
    decreaseCartItemQnt,
    increaseCartItemQnt,
    deleteItemFromCart,
  } = useContext(CartContext);

  function calculateCartItemPrice(cartItemQuantity, price) {
    return cartItemQuantity * price;
  }

  return (
    <>
      {cartItems.map((item, id) => {
        return (
          <div className="cart-item" key={id}>
            <img src={item.img} width={120} />
            <div className="cart-item-info">
              <p className="cart-item-name">{item.description}</p>
              <div className="cart-quantity-btns">
                <button onClick={() => decreaseCartItemQnt(item.id)}>-</button>
                <p className="quantity">{item.quantity}</p>
                <button onClick={() => increaseCartItemQnt(item.id)}>+</button>
              </div>
            </div>
            <div className="cart-item-price">
              <p>{calculateCartItemPrice(item.quantity, item.price)}€</p>
              <IconTrash onClick={() => deleteItemFromCart(item)} />
            </div>
          </div>
        );
      })}
    </>
  );
}

export default CartItem;
