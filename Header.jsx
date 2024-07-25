// src/components/Header.jsx
import React from "react";
import { useState } from "react";
import "./homePage.css";
import OrderSummary from "./.OrderSummary";
import { Link } from "react-router-dom";
import CheckoutPage from "../pages/CheckoutPage";

const Header = () => {
  const [showOrderSummary, setShowOrderSummary] = useState(false);

  const handleSave = (order) => {
    console.log("Order saved:", order);
    setShowOrderSummary(false);
  };

  const handleCancel = () => {
    setShowOrderSummary(false);
  };
  const initialItems = [
    { name: "Coke", price: 50, quantity: 2 },
    { name: "Fries", price: 100, quantity: 1 },
  ];

  return (
    <div>
      <nav className=" navbar w-full h-[7%] bg-blue-500 flex  items-center justify-between p-4">
        <div className="navbar-brand flex flex-row gap-3">
          <i className="fas fa-utensils mt-1 text-white"></i>
          <h1 className="text-xl text-white">Food's Restaurant</h1>
        </div>
        <div className="cart-icon">
          <Link to="/menu">
            <i
              onClick={() => setShowOrderSummary(true)}
              className="fas fa-shopping-cart"
            ></i>
          </Link>

          <span className="cart-count"></span>
        </div>
      </nav>
      {showOrderSummary && (
        <OrderSummary
          items={initialItems}
          onSave={handleSave}
          onCancel={handleCancel}
        />
      )}
    </div>
  );
};

export default Header;
