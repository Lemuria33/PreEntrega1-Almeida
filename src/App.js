import './App.css';
import NavBar from './Components/Navbar';
import ItemListContainer from './Components/ItemListContainer';

function App() {
  return (
    <div className="App">
        <NavBar/>
        <ItemListContainer
        greeting="no tienes nada en el carrito"/>
    </div>
  );
}

export default App;
