import React from "react";
import { FaTrash } from "react-icons/fa";

const CartBar = ({ product, quantity, onQuantityChange, removeFromCart }) => {
  const handleQuantityChange = (event) => {
    let value = parseInt(event.target.value, 10);

    if (isNaN(value) || value < 1) {
      value = 1;
    } else if (value > 99) {
      value = 99;
    } 

    onQuantityChange(value);
  };

  return (
    <div className="cart-box">
      <img src={product.featuredImage.url} alt="" className="cart-img" />
      <div className="detail-box">
        <div className="cart-product-title">{product.title}</div>
        <div className="cart-price">
          {product.variants.edges[0].node.price.amount}$
        </div>
        <input
          type="number"
          value={quantity}
          className="cart-quantity"
          onChange={handleQuantityChange}
        />
      </div>
      <FaTrash className="cart-remove" onClick={removeFromCart} />
    </div>
  );
};

export default CartBar;
