import React, {useEffect, useState} from "react";
import Header from "./Header";
import NumberPage from "./NumberPage";

function App() {

  const [numbers, setNumbers]=useState([])
  // const [search, setSearch]=useState("")
  

  useEffect(()=>{
    fetch("http://localhost:6001/plants")
    .then((r)=>r.json())
    .then((data)=>setNumbers(data))
  }, [])

  console.log(numbers)

function handleAddPlants(newnumber){
  setNumbers([...numbers, newnumber])
}
  return (
    <div className="app">
      <Header/>
      <NumberPage numList={numbers} handleAddPlants={handleAddPlants}/>
    </div>
  );
}

export default App;
