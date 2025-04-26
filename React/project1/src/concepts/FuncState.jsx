import React, { useState } from 'react'

function FuncState() {
    //state in func comp
    const [name, setName]= React.useState("Maaza");
    const [place, setPlace]=React.useState("Bangalore");

    function handleClick(){
        setName("Aishu");
        setPlace("Bengaluru");
    }
  return (
    <div>
      <h1>I am a function handling state.</h1>
      <h3>Hello this is {name} and I am from {place}.</h3>
      <button onClick={handleClick}>Change Name and place.</button>
    </div>
  )
}

export default FuncState;
//state in react js:
//state is an object that is native to the current component
//it originates in the specific componenet and is accessible in the same component 
//in functional components, state is accessed using useState() which is prebuilt in react package
//states are objects which can be updated over time
