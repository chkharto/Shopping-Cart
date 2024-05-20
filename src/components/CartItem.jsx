import React from "react";
import { MdOutlineShoppingBag } from "react-icons/md";

const CartItem = ({ img, title, price, add }) => {
  return (
    <div className="product-box">
      <img src={img} alt="" className="product-img" />
      <h2 className="product-title">{title}</h2>
      <span className="price">{price}$</span>
      <MdOutlineShoppingBag className="add-cart" onClick={add} />
    </div>
  );
};

export default CartItem;
