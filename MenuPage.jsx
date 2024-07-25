// src/pages/MenuPage.jsx
import React, { useState } from 'react';
import './MenuPage.css';
import MenuItem from '../Componentes/MenuItem';


const initialItems = [
    { id: 1, name: 'Hamburger', price: 200,image:"https://images.unsplash.com/photo-1521305916504-4a1121188589?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",  quantity: 0 },
    { id: 2, name: 'Fries', price: 100, image: "https://images.unsplash.com/photo-1523475886877-7cc3b40b8093?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", quantity: 0 },
    { id: 3, name: 'Coke', price: 50, image: "https://images.unsplash.com/photo-1554866585-cd94860890b7?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", quantity: 0 },
    { id:4, name: 'Pepsi' , prise:25, image:"https://images.unsplash.com/photo-1553456558-aff63285bdd1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", quentity:0}
    // Add more items here
];

const MenuPage = () => {
    const [items, setItems] = useState(initialItems);

    const handleAdd = (item) => {
        setItems(items.map(i => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i));
    };

    const handleRemove = (item) => {
        setItems(items.map(i => i.id === item.id && i.quantity > 0 ? { ...i, quantity: i.quantity - 1 } : i));
    };

    return (
        <div className="menu-page flex item-center justify-center">
            {items.map(item => (
                <MenuItem key={item.id} item={item} onAdd={handleAdd} onRemove={handleRemove} />
            ))}
        </div>
    );
};

export default MenuPage;
