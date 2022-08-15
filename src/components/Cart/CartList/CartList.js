import CartItem from "../CartItem/CartItem"
import './CartList.css'

const CartList = ({carrito}) => {


    return (
        <div className="productos-container-cart">
        {carrito.map(p => 
            <CartItem key={p.id} product={p}/>
            )}
    </div>
    )

    
}

export default CartList