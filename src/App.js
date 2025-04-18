import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./containers/header/Header";
import Section from "./containers/section/Section";
import Chat from "./containers/chat/Chat";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const addToCart = (key) => {
    const product = products.find((product) => product.node.id === key);

    if (!product) {
      console.error(`Product with key ${key} does not exist.`);
      return;
    }

    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.node.id === key);
      if (existingProduct) {
        return prevCart.map((item) => item);
      } else {
        return [...prevCart, { ...product }];
      }
    });
    console.log(
      `Added to cart: ${product.node.title}, Price: ${product.node.variants.edges[0].node.price.amount}`
    );
  };

  const removeFromCart = (key) => {
    setCart((prevCart) => prevCart.filter((item) => item.node.id !== key));
    console.log(`Removed from cart: Product with key ${key}`);
  };

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const request = await fetch(
          "https://mock.shop/api?query={products(first:20){edges{node{id title description featuredImage{id url} variants(first:3){edges{node{price{amount currencyCode}}}}}}}}"
        );
        const response = await request.json();
        setProducts(response.data.products.edges);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchdata();
  }, []);

  return (
    <div className="App">
      <Header cart={cart} setCart={setCart} removeFromCart={removeFromCart} />
      <Section addToCart={addToCart} products={products} />
      <Chat />
    </div> 
  );
}

export default App;
