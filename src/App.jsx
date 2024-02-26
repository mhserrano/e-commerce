import { Routes, Route } from "react-router-dom";
import React, { useState } from "react";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import All from "./components/SingleCategory/All";
import SofasCategory from "./components/SingleCategory/SofasCategory";
import BedsCategory from "./components/SingleCategory/BedsCategory";
import LightingCategory from "./components/SingleCategory/LightingCategory";
import PlantsCategory from "./components/SingleCategory/PlantsCategory";
import ChairsCategory from "./components/SingleCategory/ChairsCategory";

import ProductPage from "./pages/ProductPage";
import FavoritePage from "./pages/FavoritePage";
import { CartContext } from "./pages/ProductPage";

function App() {
  const [cartItem, setCartItem] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [cartItemQuantity, setCartItemQuantity] = useState(1);

  function addToCart(product, qnt) {
    setCartItem([...cartItem, product]);
    checkItemQuantity(qnt);
  }

  const checkItemQuantity = (qnt) => {
    if (qnt > 1) {
      setCartItemQuantity(qnt);
    }
  };

  {
    /* Product Page */
  }
  function decreaseQuantity() {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }

  function increaseQuantity() {
    setQuantity(quantity + 1);
  }

  {
    /* Cart Item */
  }
  function decreaseCartItemQuantity() {
    if (cartItemQuantity > 1) {
      setCartItemQuantity(cartItemQuantity - 1);
    }
  }

  function increaseCartItemQuantity() {
    setCartItemQuantity(cartItemQuantity + 1);
  }

  return (
    <>
      <CartContext.Provider
        value={{
          addToCart,
          checkItemQuantity,
          cartItem,
          setCartItem,
          quantity,
          setQuantity,
          decreaseQuantity,
          increaseQuantity,
          cartItemQuantity,
          decreaseCartItemQuantity,
          increaseCartItemQuantity,
        }}
      >
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="categories" element={<Categories />}>
            <Route path="all" element={<All />} />
            <Route path="sofas" element={<SofasCategory />} />
            <Route path="beds" element={<BedsCategory />} />
            <Route path="lighting" element={<LightingCategory />} />
            <Route path="plants" element={<PlantsCategory />} />
            <Route path="chairs" element={<ChairsCategory />} />
          </Route>
          <Route path="/categories/product/:id" element={<ProductPage />} />
          <Route path="favorite-page" element={<FavoritePage />} />
        </Routes>
      </CartContext.Provider>
    </>
  );
}

export default App;
