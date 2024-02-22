import "./Cart.css";
import { items } from "./AllData";
import { IconX } from "@tabler/icons-react";
function CartItem() {
  return (
    <div className="cart-item">
      <img src={items[2].img} width={120} />
      <div className="cart-item-info">
        <p className="cart-item-name">{items[2].description}</p>
        <div className="cart-quantity-btns">
          <button>-</button>
          <p className="quantity">1</p>
          <button>+</button>
        </div>
      </div>
      <div className="cart-item-price">
        <p>{items[2].price}€</p>
        <IconX />
      </div>
    </div>
  );
}

export default CartItem;
