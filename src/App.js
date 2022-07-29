
import './App.css';
import Navbar from './components/Navbar/NavBar.js';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <div className='App'>
      <Navbar/>
      <ItemListContainer greenting='React Store'/>  
      <ItemDetailContainer />
    </div>
  );
}

export default App;
