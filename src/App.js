
import './App.css';
import Footer from './components/Footer/Footer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Navbar from './components/NavBar/NavBar.js';
function App() {
  return (
    <div className="App">

      {/* Componente Menú */}
      <header className="App-header">       
        <Navbar />
      </header>


      {/* Aca iria  un componente main, que lo llamamos ItemListContainer*/}
        <ItemListContainer />


      {/* Aca va a ir un componente Footer */}
        <Footer />

    </div>
  );
}

export default App;
