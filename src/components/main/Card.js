import React from 'react';


const Card = () => {
  return (
    <div className="card">
        <img src="" class="card-img-top" alt=""></img>
        <div className="card-body">
            <h5 className="card-title">Titulo del producto</h5>
            <p className="card-text">Aca va una descripción del producto, claramente la idea es consumir una api o usar un JSON</p>
            <a href="#" className="btn">Agregar al carrito</a>
        </div>
    </div>
  );
};

export default Card;