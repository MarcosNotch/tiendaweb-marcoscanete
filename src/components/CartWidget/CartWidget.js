import './CartWidget.css'
import { useContext, useState } from 'react';
import { Context } from '../../context/CartContext';
import { Link } from 'react-router-dom';


const CarWidget = () => {
    

    const {cantidadCarrito} = useContext(Context)
    let cantidad = cantidadCarrito()

    if(!cantidad){
        return 
    }

    return (
        <Link to={'/cart'}>
            <div className='cart-shop-icon-container'>
                <img src={'images/cart-shop-icon.png'} alt='logo carrito'/>
                {cantidad}
            </div>
        </Link>
    )


}


export default CarWidget;