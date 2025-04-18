import React, { useState } from "react";
import "./sidebar.css";
import { IoClose } from "react-icons/io5";
import CartBar from "../../components/CartBar";

const SideBar = ({ isOpen, click, cart, removeFromCart, setCart }) => {
  const [quantities, setQuantities] = useState(cart.reduce((acc, item) => {
    acc[item.node.id] = 1;
    return acc;
  }, {}));

  const handleQuantityChange = (id, quantity) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: quantity,
    })); 
  };

  const total = cart.reduce((sum, item) => {
    const itemPrice = parseFloat(item.node.variants.edges[0].node.price.amount);
    const quantity = quantities[item.node.id];
    return sum + itemPrice * quantity;
  }, 0);

  const handleBuyNow = () => {
    alert("Your Order is placed");
    setCart([]); 
  };

  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <h2 className="cart-title">Your Cart</h2>
      <div className="cart-content">
        {cart.map((item) => (
          <CartBar
            key={item.node.id}
            product={item.node}
            quantity={quantities[item.node.id]}
            onQuantityChange={(quantity) => handleQuantityChange(item.node.id, quantity)}
            removeFromCart={() => removeFromCart(item.node.id)}
          />
        ))}
      </div>
      <div className="total">
        <div className="total-title">Total</div>
        <div className="total-price">${total.toFixed(2)}</div>
      </div>
      <button className="btn-buy" type="button" onClick={handleBuyNow}>
        Buy Now
      </button>
      <IoClose className="close-icon" onClick={click} />
    </div>
  );
};

export default SideBar;
