
import './App.css';
import Navbar from './components/Navbar/NavBar.js';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom' 
import {CartContext} from './context/CartContext'
import CartListContainer from './components/Cart/CartListContainer/CartListContainer';
import FinishOrder from './components/FinishOrder/FinishOrder';

function App() {
  
 

  return (
    
    <CartContext>
    <BrowserRouter>
        <div className='App'>
        <Navbar/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/category/:categoryID' element={<ItemListContainer greenting='Estamos filtrando'/>} />
        <Route path='/itemDetail/:productID' element={<ItemDetailContainer/>} />
        <Route path='/cart' element={<CartListContainer/>} />
        <Route  path='/finishOrder' element={<FinishOrder/>} />
      </Routes>

    </div>
    </BrowserRouter>
    </CartContext>
  );
}

export default App;
