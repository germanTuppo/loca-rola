
import './App.css';
import Navbar from './components/NavBar.js';
function App() {
  return (
    <div classNameName="App">
      <header classNameName="App-header">
       
      <Navbar />


        {/* main*/}
        <h1
        classNameName ="titulo"
        >
          Epezando con reactjs
        </h1>

        <p
          classNameName ="parrafo"
        >
          Hola mundo!!!
        </p>

        <p
          classNameName ="parrafo"
        >
          Para empezar estoy tocando cosas para ver como es el sistema de archivos de react, borre el css que traia por defecto y Eliminé los estilos que traia por defecto.
          Voy a tratar de poner algunos estilos random a ver que onda
          Bootstrap?

        </p>

        <a
          classNameName="linkRepo"
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
