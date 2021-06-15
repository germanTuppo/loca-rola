import React, {useState, useEffect} from 'react';
import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';

// Item list container es el contenedor de la lista de productos (desafío 3)
const ItemListContainer = () => {

  const [items, setItems] = useState([]);

  // useEffect(() => {
  //   fetch('../../json/productos.json')
  //   .then ((response) => setItems (response))
  //   .then (console.log(items))
    
  // }, []);

  
  return (
    <main className="main">
        <h1
        className ="titulo"
        >
          La Loca Rola
        </h1>

        <p
          className ="parrafo"
        >
          Bienvenidos a la  tienda 
        </p>
         
        <section>
          {/* <ItemList itemsProp={items}/>  */}
        </section>    
               
      </main>
  );
};

export default ItemListContainer;