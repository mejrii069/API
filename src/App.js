import "./App.css";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./Components/Navigation";
import React from "react";
import ProductList from "./Components/ProductList";
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/contact" exact element={<Contact />} />
          <Route path="/products" exact element={<ProductList />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
