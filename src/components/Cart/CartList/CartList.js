import CartItem from "../CartItem/CartItem"
import './CartList.css'
import { Link } from "react-router-dom"

const CartList = ({carrito}) => {

    if(carrito.length === 0){
        return (
            <div>
                <h2>Su Carrito esta vacio</h2>
                <button><Link to='/'>Buscar que comprar</Link></button>
            </div>
        )
    }

    return (
        <div className="productos-container-cart">
        {carrito.map(p => 
            <CartItem key={p.id} product={p}/>
            )}
            <div>
            <button>Finalizar Compra</button>
        </div>
    </div>
    )

    
}

export default CartList