import { useState } from "react";
import ToppingItem from "./ToppingItem.jsx";
import CheckOut from "./CheckOut.jsx";

function Topping() {
  const toppings = [
  {
    name: "Capsicum",
    price: 1.2
  },
  {
    name: "Paneer",
    price: 2.0
  },
  {
    name: "Red Paprika",
    price: 2.5
  },
  {
    name: "Onions",
    price: 3.0
  },
  {
    name: "Extra Cheese",
    price: 3.5
  },
  {
    name: "Baby Corns",
    price: 3.0
  },
  {
    name: "Mushroom",
    price: 2.0
  }
];
  const [selectTopping,setSelectTopping] = useState([])
  const [isCheckout,setIsCheckOut] = useState(false)

  const hdlClickSelect = (price,name,isClick) => {
    if(selectTopping.some((item) => item.name === name)) {
      
      setSelectTopping(selectTopping.filter((item) => item.name !== name))
    } else {
      setSelectTopping([...selectTopping,{price,name}])
    }
    // console.log(price)
  }

  const total = selectTopping.reduce((acc,curr) => acc + curr.price,0)
  // console.log('totallllll',total)

  // console.log('selectTopping', selectTopping)
  return (
    <div>
    <div className="space-y-2 ">
      {toppings.map((item,i) => (
        <ToppingItem key={i} item={item} hdlClickSelect={hdlClickSelect} 
        isClick={selectTopping.some((el) => el.name === item.name)}
        />
    ))}
    <p className=" text-xl text-pink-700 font-bold " >Total : THB {total.toFixed(2)}</p>
    <button 
    className={`btn p-5 shadow-lg shadow-pink-500 ${selectTopping.length > 0 ? "bg-pink-300 skeleton" : "bg-gray-400 text-white"} duration-200`}
    onClick={()=>setIsCheckOut((prev)=>!prev)}>Check Out</button>
    </div>
    <div>
      {isCheckout && selectTopping.length > 0 && (

      <div className="text-white my-4 py-4 px-6 space-y-4 bg-pink-300 rounded-3xl shadow-lg shadow-pink-500 ">
        {selectTopping.map((item) => (
          <CheckOut key={item.name} item={item} />
        ))}
      <p className="text-xl text-pink-900 font-bold skeleton p-2 text-center">Total : {total.toFixed(2)}</p>
      </div>
      )}

    </div>
</div>
  )
}

export default Topping