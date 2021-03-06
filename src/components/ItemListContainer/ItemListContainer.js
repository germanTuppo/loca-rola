import React, {useState, useEffect} from 'react';
import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
//import productos from '../../json/productos.json'
// Item list container es el contenedor de la lista de productos (desafío 3)
const ItemListContainer = () => {

  
    // id, title, description, price, pictureUrl
    const productList = [
      {
        id: '1',
        title: 'Nombre del producto 1',
        description: 'Descripción del producto 1',
        stock: 50,
        price: 300,
        pictureUrl: '../../assets/img/producto_1.jpg'
      },
      {
        id: '2',
        title: 'Nombre del producto 2',
        description: 'Descripción del producto 2',
        stock: 5,
        price: 500,
        pictureUrl: '../../assets/img/producto_2.jpg'
      }
    ];

    const task = new Promise((resolve, reject) => {
      // pasados 2 segundos....
      console.log('Esperando 2 segundos para simular retraso del server');
      setTimeout(() => {
        resolve(productList);
      }, 2000);
    });
    
    // Una vez lista la resolución de la promesa ( 2 segundos despues), vamos a tirar por consola, una lista de productos.
    
    task.then(data => {
      //Resultado.
      data.forEach(producto => {
        console.log(producto);
      });
    });

    const [results, setResults] = useState([]);

    useEffect(async () => {
      fetch(productList)
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
         
        </p> 
        <section>
           <ItemList itemsProp={results}/>  
        </section>    
               
      </main>
  );
};

export default ItemListContainer;