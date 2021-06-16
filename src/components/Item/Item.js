import React from 'react';
import './Item.css';
import Count from '../ItemCount/ItemCount';


// Item list container es un elemento de la lista de productos
const Item = ({items}) => {
  return (
    <div className="col-12 col-md-3 card carta">

        
        <img src= "" class="card-img-top w-50" alt=""></img>
        <div className="card-body">
            <h5 className="card-title">Titulo del producto</h5>
            <p className="card-text">Aca va una descripción del producto, claramente la idea es consumir una api o usar un JSON</p>
            <Count stock="9" initial="1" /> 
            
        </div>
    </div>
  );
};

export default Item; 