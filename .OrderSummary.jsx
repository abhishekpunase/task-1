// src/components/OrderSummary.jsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CheckoutPage from "../pages/CheckoutPage";


const OrderSummary = ({ items, onSave, onCancel }) => {
  const navigate = useNavigate();
  const [order, setOrder] = useState(items);

  const updateQuantity = (name, delta) => {
    const newOrder = order
      .map((item) => {
        if (item.name === name) {
          return { ...item, quantity: item.quantity + delta };
        }
        return item;
      })
      .filter((item) => item.quantity > 0);
    setOrder(newOrder);
  };

  const calculateTotal = () => {
    return order.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div >
      <div id="div1" className="order-summary ">
        <h2 className="font-bold font-bold">Order Summary</h2>
        {order.map((item) => (
          <div key={item.name} className="order-item">
            <span>{item.name} :</span>
            <button
              onClick={() => updateQuantity(item.name, 1)}
              className="btn btn-increase "
            >
              +
            </button>
            <span>{item.quantity}</span>
            <button
              onClick={() => updateQuantity(item.name, -1)}
              className="btn btn-decrease"
            >
              -
            </button>
          </div>
        ))}
        <div className="order-total">Total (INR) : {calculateTotal()}</div>
        <Link to="/CheckoutPage.jsx">
          <button
            onClick={() => navigate("")}
            className="btn btn-save px-2 py-1 bg-red-800"
           
          >
            SAVE AND CHECKOUT
          </button>
        </Link>
        <button onClick={onCancel} className="btn btn-cancel">
          CANCEL
        </button>
      </div>
    </div>
  );
};

export default OrderSummary;
