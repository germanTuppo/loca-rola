import React from 'react';
import './Main.css';
const Main = () => {
  return (
    <main className="main">
        <h1
        className ="titulo"
        >
          Empezando con reactjs
        </h1>

        <p
          className ="parrafo"
        >
          Hola mundo!!!
        </p>

        <p
          className ="parrafo"
        >
          Para empezar estoy tocando cosas para ver como es el sistema de archivos de react, borre el css que traia por defecto y Eliminé los estilos que traia por defecto.
          Voy a tratar de poner algunos estilos random a ver que onda
          Bootstrap?

          Ahora desarroyé el main dentro de uin componente, me conviene poner las etiquetas main en el componente o en app.js?
          ¿Donde va la multimedia?
          css?
        </p>

        <a
          className="linkRepo"
          href="https://github.com/germanTuppo/loca-rola.git"
          target="_blank"
          rel="noopener noreferrer"
        >
          Mi repositorio de react
        </a>
      </main>
  );
};

export default Main;