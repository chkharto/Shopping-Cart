import React from "react";
import "./section.css";
import CartItem from "../../components/CartItem";
import Chat from './../chat/Chat';

const Section = ({ addToCart, products }) => {
  return (
    <section className="shop container">
      <h2 className="section-title">Shop Products</h2>
      <div className="shop-content">
        {products.map((product) => (
          <CartItem
            key={product.node.id}
            img={product.node.featuredImage.url}
            title={product.node.title}
            price={product.node.variants.edges[0].node.price.amount}
            add={() => addToCart(product.node.id)}
          />
        ))}
        <Chat />
      </div>
    </section>
  );
};

export default Section;
