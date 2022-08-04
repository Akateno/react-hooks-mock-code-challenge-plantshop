import React, {useState} from "react";

function PlantCard({id, num1, num2}) 
{
 const [stock, setStock]=useState(true)

 function handleStock(){setStock((stock)=> !stock)}

 const total = num1 +num2

  return (
    <li className="card">
     
      <p>First Number: {num1}</p>
      <p>Second Number {num2}</p>
      <h3>Total: {total}</h3>
      {stock ? (
        <button onClick={handleStock} className="primary">In Stock</button>
      ) : (
        <button onClick={handleStock}>Sold Out</button>
      )}
    </li>
  );
}

export default PlantCard;
