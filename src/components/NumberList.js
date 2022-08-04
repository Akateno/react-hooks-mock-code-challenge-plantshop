import React from "react";
import NumberCard from "./NumberCard";

function NumberList({numList}) {
  console.log("plant page",numList)
  return (
    <ul className="cards">
      {
        numList.map((num)=>(
          <NumberCard
          key={num.id}
          num1={num.firstnum}
          num2={num.secondnum}
          />
        ))}

      </ul>
  );
}

export default NumberList;
