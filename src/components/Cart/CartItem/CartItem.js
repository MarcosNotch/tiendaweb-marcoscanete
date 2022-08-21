import './CartItem.css'
import ItemCount from '../../ItemCount/ItemCount'
import { useContext, useState, useEffect } from 'react'
import { Context } from '../../../context/CartContext'
import { obtenerProducto } from '../../../asyncMock';
import { async } from '@firebase/util';


const CartItem = ({product}) => {

    
    let {id, name, imgs, price, quantityToAdd, vStock} = product

    let {removeItem,changeQuantity} = useContext(Context)

    let [precio, setPrecio] = useState(price * quantityToAdd)
    let [stockReal, setStockReal] = useState('')
 
    function sumarPrecio(cantidad){

        setPrecio(price * cantidad)
        changeQuantity(id, cantidad)
    }
    
    useEffect(() => {
        obtenerProducto(id).then(response => {
            setStockReal(response.stock)
        })
    }, [])




    console.log(stockReal)

    return (
        <div className='card-item-container'>
            <div className='container-top'>
                <div className='image-container-cart'>
                    <img src={imgs[0].img} alt=''/>
                </div>
                <div className='name-shipping-container'>
                    <h5>{name}</h5>
                </div>
                <div className='contador-container'>
                    <div>
                        <ItemCount stock={stockReal} initial={quantityToAdd} sumarPrecio={sumarPrecio} mostrarBoton={false}/>
                    </div>
                    <div>
                       <p>Stock disponible {stockReal}</p>
                    </div>
                </div>
                <div>
                   <h4>$ {precio}</h4> 
                </div>  
            </div>
            <div>
                <button onClick={() => {removeItem(id)}}>Eliminar del Carrito</button>
            </div>
        </div>
    )

}


export default CartItem