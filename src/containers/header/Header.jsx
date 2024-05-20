import React, { useState } from "react";
import { MdOutlineShoppingBag } from "react-icons/md";
import "./header.css";
import SideBar from "../sidebar/SideBar";

const Header = ({ cart, removeFromCart, setCart }) => {
  const [close, setClose] = useState(false);

  const click = () => {
    setClose((prev) => !prev);
  };

  return (
    <div className="header">
      <h1>Ecommerce</h1>
      <MdOutlineShoppingBag className="icon" onClick={click} />
      <SideBar isOpen={close} click={click} cart={cart} removeFromCart={removeFromCart} setCart={setCart} />
    </div>
  );
};

export default Header;
