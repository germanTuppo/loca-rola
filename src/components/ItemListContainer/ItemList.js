mimport React from 'react';
import './ItemList.css';

const ItemList = () => {
  return (
    <div className="card carta">
        <img src="../public/producto_1.jpg" class="card-img-top" alt=""></img>
        <div className="card-body">
            <h5 className="card-title">Titulo del producto</h5>
            <p className="card-text">Aca va una descripción del producto, claramente la idea es consumir una api o usar un JSON</p>
            <a href="#" className="btn">Agregar al carrito</a>
        </div>
    </div>
  );
};

export default ItemList;