// src/components/MenuItem.jsx
import React from "react";

const MenuItem = ({ item, onAdd, onRemove }) => {
  return (
    <div className="relative w-full h-screen  flex items-center">
     <div className=" w-full h-[60%] ">
     <div id="card" className="menu-item  w-[60%] h-[90%] flex   flex-col  bg-gray-200">
        <div className="w-[100%] h-[50%] overflow-hidden bg-slate-200 ">
          <img id="imgid" className="bg-center" src={item.image} />
        </div>
        <h3 className="font-semibold">{item.name}</h3>
        <p>Price: {item.price}</p>
        <p>Total: {item.quantity}</p>
        <p>Cost (INR): {item.price * item.quantity}</p>
        <div>
          <button
            className=" text-xl text-white bg-blue-600"
            onClick={() => onAdd(item)}>
            +
          </button>
          <button
            className="px-5 py-1 text-xl text-white bg-red-500"
            onClick={() => onRemove(item)}
          >
            -
          </button>
        </div>
      </div>
     </div>
    </div>
  );
};

export default MenuItem;
