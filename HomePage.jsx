// src/pages/HomePage.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "./homePage.css";
import "./index.css";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="home-page w-[100%] h-screen">
      <header className="header ">
        <h1>Welcome to Food's Kitchen</h1>
        <button onClick={() => navigate("/menu")} className="menu-button">
          GO TO MENU
        </button>
      </header>
    </div>
  );
};

export default HomePage;
