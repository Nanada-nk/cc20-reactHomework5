/** @format */

import React, { useState } from "react";
import CheckOut from "./CheckOut";

function ToppingItem(props) {
  const {
    item: { name, price },hdlClickSelect
  } = props;

  const [isClick,setIsClick] = useState(false)

  const hdlClickTopping = () => {
    hdlClickSelect(price,name,isClick)
    setIsClick((prev) => !prev)
  }

  return (
  
    <div className="flex justify-between items-center px-6 py-4 rounded-lg cursor-pointer hover:skeleton hover:bg-pink-200 hover:shadow-md hover:outline-2 hover:outline-pink-600 bg-pink-100"
    onClick={()=>hdlClickTopping()}
    >
      <div className="flex items-center gap-2">
        <input type="checkbox"
        checked={isClick} 
        onChange={(e)=>setIsClick(e.target.checked)}
        />
        <p>{name}</p>
      </div>
      <p>THB {price.toFixed(2)}</p>
    </div>
   
  );
}

export default ToppingItem;
