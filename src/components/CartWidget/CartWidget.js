import './CartWidget.css'
import { useContext, useState } from 'react';
import { Context } from '../../context/CartContext';



const CarWidget = () => {
    

    const {cantidadCarrito} = useContext(Context)
    let cantidad = cantidadCarrito()



    return (
        <div className='cart-shop-icon-container'>
            <img src={'images/cart-shop-icon.png'} alt='logo carrito'/>
            {cantidad}
        </div>
    )


}


export default CarWidget;