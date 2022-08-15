import './CartItem.css'
import ItemCount from '../../ItemCount/ItemCount'
import { useContext, useState } from 'react'
import { Context } from '../../../context/CartContext'


const CartItem = ({product}) => {

    
    let {id, name, imgs, price, quantityToAdd, vStock} = product

    let {removeItem} = useContext(Context)

    let [precio, setPrecio] = useState(price * quantityToAdd)
 
    function sumarPrecio(cantidad){

        setPrecio(price * cantidad)
    }

    return (
        <div className='card-item-container'>
            <div className='container-top'>
                <div className='image-container'>
                    <img src={imgs[0].img} alt=''/>
                </div>
                <div className='name-shipping-container'>
                    <h5>{name}</h5>
                </div>
                <div>
                    <ItemCount stock={vStock} initial={quantityToAdd} sumarPrecio={sumarPrecio} mostrarBoton={false}/>
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