import CartItem from "./CartItem";

function FullCart() {
  return (
    <>
      <div className="full-cart">
        <CartItem />
      </div>
      <div className="checkout"></div>
    </>
  );
}

export default FullCart;
