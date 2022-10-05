import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from "./Products/Products";
import ProductDetail from "./ProductDetail/ProductDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/productdetail/:id" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
