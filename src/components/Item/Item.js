import React from 'react';
import './Item.css';
import Count from '../ItemCount/ItemCount';
import img from '../../assets/img/producto_1.jpg'

// Item list container es un elemento de la lista de productos
const Item = ({items}) => {
  return (
    <div className="col-12 col-md-3 card carta">

        {console.log(items.codigo)}
        <img src= {img} class="card-img-top w-50" alt=""></img>
        <div className="card-body">
            <h5 className="card-title">Titulo del producto</h5>
            <p className="card-text">Aca va una descripción del producto, claramente la idea es consumir una api o usar un JSON</p>
            <Count stock="5" initial="1" /> 
            
        </div>
    </div>
  );
};

export default Item; 