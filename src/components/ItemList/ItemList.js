import React from 'react';
import './ItemList.css';
import Item from '../Item/Item';


// ItemList.js Es un agrupador de un set de componentes Item.js (Deberías incluirlo dentro de ItemListContainer del desafío 3)
const ItemList = ({results}) => {
  return (
    // id, title, description, price, pictureUrl
    <div>
      {
        results.map((items) => {
          return (
            <Item key={items.id} items={items} /> 
          )
        })
      }
     
        
    </div>
  );
};

export default ItemList;