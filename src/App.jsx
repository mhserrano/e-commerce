import { Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";

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

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const checkItemInCart = cartItems.find((item) => item.id === product.id);

    if (checkItemInCart) {
      const updatedCartItem = cartItems.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCartItems(updatedCartItem);
    } else {
      const newCartItem = { ...product, quantity: 1 };
      setCartItems([...cartItems, newCartItem]);
    }
  };
  const deleteItemFromCart = (product) => {
    const checkItemInCart = cartItems.find((item) => item.id === product.id);
    if (checkItemInCart) {
      const deletedCartItem = cartItems.filter(
        (item) => item.id !== product.id
      );
      setCartItems(deletedCartItem);
    }
  };
  const increaseCartItemQnt = (productId) => {
    const updatedCart = cartItems.map((item) =>
      item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartItems(updatedCart);
  };

  const decreaseCartItemQnt = (productId) => {
    const updatedCart = cartItems.map((item) =>
      item.id === productId && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCartItems(updatedCart);
  };

  useEffect(() => {
    const newItemNotification = (productName) =>
      toast.success(`"${productName}" has been added to your cart 🎉`);
    if (cartItems.length > 0) {
      const lastItemAdded = cartItems[cartItems.length - 1];
      const checkNewItem = cartItems.some(
        (item) => item.id !== lastItemAdded.id
      );

      checkNewItem && newItemNotification(lastItemAdded.description);
    }
  }, [cartItems.length]);

  return (
    <>
      <CartContext.Provider
        value={{
          addToCart,
          cartItems,
          setCartItems,
          decreaseCartItemQnt,
          increaseCartItemQnt,
          deleteItemFromCart,
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
        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition:Bounce
        />
      </CartContext.Provider>
    </>
  );
}
export default App;
