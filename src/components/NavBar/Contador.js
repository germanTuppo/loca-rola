import React, { useState } from 'react';



const Contador = () => {
  const [contador, setContador] = useState(0);
  return (
  
      
      <button className="contador" onClick={() => setContador(contador + 1)}>Mi Carrito {contador}</button>
      
  );
};
export default Contador;