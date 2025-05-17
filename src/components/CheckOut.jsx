function CheckOut({item:{name,price}}) {
  return (
  
      <div className="flex justify-between items-center">
        <p>{name}</p>
        <p>THB: {price.toFixed(2)}</p>
      </div>
    
  )
}

export default CheckOut