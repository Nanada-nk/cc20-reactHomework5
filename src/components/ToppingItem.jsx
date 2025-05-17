/** @format */

import React, { useState } from "react";
import CheckOut from "./CheckOut";

function ToppingItem(props) {
  const {
    item: { name, price },hdlClickSelect,isClick
  } = props;

  const hdlClickTopping = () => {
    hdlClickSelect(price,name)
  }

  return (
  
    <div className="flex justify-between items-center px-6 py-4 rounded-lg 
    cursor-pointer hover:skeleton hover:bg-pink-200 
    hover:shadow-md hover:shadow-pink-500
    hover:outline-2 hover:outline-pink-600 bg-pink-100"
    onClick={()=>hdlClickTopping()}
    >
      <div className="flex items-center gap-2">
        <input type="checkbox"
        checked={isClick} 
        onChange={hdlClickTopping}
        />
        <p>{name}</p>
      </div>
      <p>THB {price.toFixed(2)}</p>
    </div>
   
  );
}

export default ToppingItem;
