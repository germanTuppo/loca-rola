
import './App.css';
import Navbar from './components/NavBar.js';
function App() {
  return (
    <div className="App">

      {/* Componente Menú */}
      <header className="App-header">       
        <Navbar />
      </header>


      {/* Aca iria  un componente main*/}
      <main className="main">
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
      </main>


      {/* Aca va a ir un componente Footer */}
      

    </div>
  );
}

export default App;
