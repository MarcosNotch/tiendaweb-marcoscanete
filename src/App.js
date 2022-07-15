
import './App.css';
import Navbar from './components/Navbar/NavBar.js';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';

function App() {
  return (
    <div className='App'>
    <Navbar/>
    <ItemListContainer greenting='React Store'/>
    </div>
  );
}

export default App;
