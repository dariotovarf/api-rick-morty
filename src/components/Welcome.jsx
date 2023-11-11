import React, { useState, useEffect } from 'react'

export default function Welcome({name, age}) {
    const [counter, setCounter] = useState(0);

    function consignar(){
        setCounter(counter + 10);
    }

    function retirar(){
        setCounter(counter - 10);
    }
    useEffect(()=>{
        console.log('consignando en la cuenta')
      });

  return (
    <>
    <h1>Helo {name} you are {age} years old</h1>
    <p>Saldo ${counter}</p>
    <button onClick={consignar}>Consignar + 10</button>
    <button onClick={retirar}>Retirar -10</button>
    </>
  )
}
