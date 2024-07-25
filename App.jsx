// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MenuPage from "./pages/MenuPage";
import CheckoutPage from "./pages/CheckoutPage";
import HomePage from "./Componentes/HomePage";
import Header from "./Componentes/Header";
import OrderSummary from "./Componentes/.OrderSummary";

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/cart" element={<OrderSummary />} />
          <Route path="/chackOutPage" element={<CheckoutPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
