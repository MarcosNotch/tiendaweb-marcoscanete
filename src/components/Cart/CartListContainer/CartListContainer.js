import { useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../../../context/CartContext";
import CartList from "../CartList/CartList";
import './CartListContainer.css'

const CartListContainer = () => {

    const {carrito} = useContext(Context)

return (
    <div className="cart-list-container">
        <CartList carrito={carrito}/>
        <div>
            <button>Finalizar Compra</button>
        </div>
    </div>
)


}

export default CartListContainer