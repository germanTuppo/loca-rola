//import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        

        {/* VOY A TRATAR DE PONER UN MENU DE BOOTSTRAP; ANTES COMMITEO POR LAS DUDAS*/}


        <h1
        className ="titulo"
        >
          Epezando con reactjs
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

        </p>

        <a
          className="linkRepo"
          href="https://github.com/germanTuppo/loca-rola.git"
          target="_blank"
          rel="noopener noreferrer"
        >
          Mi repositorio de react
        </a>
      </header>
    </div>
  );
}

export default App;
