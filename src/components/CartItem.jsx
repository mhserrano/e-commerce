import "./Cart.css";
import { useContext } from "react";

import { IconTrash } from "@tabler/icons-react";
import { CartContext } from "../pages/ProductPage";

function CartItem() {
  const { cartItem, quantity, decreaseQuantity, increaseQuantity } =
    useContext(CartContext);

  function calculatePrice(quantity) {
    return quantity * cartItem[0].price;
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
                <button onClick={decreaseQuantity}>-</button>
                <p className="quantity">{quantity}</p>
                <button onClick={increaseQuantity}>+</button>
              </div>
            </div>
            <div className="cart-item-price">
              <p>{calculatePrice(quantity, item.price)}€</p>
              <IconTrash />
            </div>
          </div>
        );
      })}
    </>
  );
}

export default CartItem;
