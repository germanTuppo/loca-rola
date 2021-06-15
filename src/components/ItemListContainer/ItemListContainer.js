import React, {useState, useEffect} from 'react';
import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
import productos from '../../json/productos.json'
// Item list container es el contenedor de la lista de productos (desafío 3)
const ItemListContainer = () => {

  const [items, setItems] = useState([]);

    /*useEffect(() => {
     fetch(productos)
      .then (response => response.json())
      .then (response => setItems(response))
    
   }, []);

  */
    const [results, setResults] = useState([]);

    useEffect(async () => {
      fetch("../../json/productos.json")
        .then(result => {
          return result.json();
        })
        .then(({ results }) => {
          setResults(results);
        });
    }, []);

   
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
          Bienvenidos a la tienda 
        </p>
         
        <p>
          {results.map(element => {
            return <div>{element.stock}</div>;
          })}
        </p>
        <section>
          {/* <ItemList itemsProp={items}/>  */}
        </section>    
               
      </main>
  );
};

export default ItemListContainer;