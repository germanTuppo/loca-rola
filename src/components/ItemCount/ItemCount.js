import React, { useState } from 'react';
import './ItemCount.css';

//Item count es un contador de productos
function ItemCount ({stock, initial, onAdd}) {
  const [contador, setContador] = useState(parseInt(initial));

  function onIncrement (){
    if (contador<parseInt(stock)) {
      setContador(contador + 1);
    }  
  }

  function onDecrement (){
    if (contador>0) {
      setContador(contador - 1);
    } 
    
  }
  return (
    <div className="countContainer">
      <div className="contador">
        <button className="button" onClick={onDecrement}>-</button>
        <span className="contadorView">{contador}</span>
        <button className="button" onClick={onIncrement}>+</button>     
      </div>  
      <button className="agregar" onClick={onAdd}>Agregar al carrito</button>
    </div>
  );
};
export default ItemCount;