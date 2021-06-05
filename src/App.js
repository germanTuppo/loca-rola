
import './App.css';
import Footer from './components/footer/Footer';
import Main from './components/main/Main';
import Navbar from './components/NavBar/NavBar.js';
function App() {
  return (
    <div className="App">

      {/* Componente Menú */}
      <header className="App-header">       
        <Navbar />
      </header>


      {/* Aca iria  un componente main*/}
        <Main />


      {/* Aca va a ir un componente Footer */}
        <Footer />

    </div>
  );
}

export default App;
