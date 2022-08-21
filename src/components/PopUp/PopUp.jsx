import { useRef, useEffect } from 'react'
import './PopUp.css'
import { Link } from "react-router-dom";


const PopUp = ({open, onClose, completado, ordenId}) => {

    const overlay = useRef(null)
    const popup = useRef(null)

    useEffect(() => {
        if(open){
        overlay.current.classList.add("active")
        popup.current.classList.add("active")
    }   
    }, [open])


    const description = completado ? `Felicidades por su compra, su numero de seguimiento es ${ordenId}` : 'Por favor Revise su carrito, cuenta con productos sin stock disponible'
    const link = completado ? '/' : '/cart'
    const title = completado ? 'Felicidades por su compra!' : 'No hemos podido completar su orden'
    const boton = completado ? 'Seguir comprando' : 'Revisar el carrito'

    if(!open) {return null}

    return ( 
        <div className="overlay" ref={overlay} >
            <div className="popup" ref={popup}>
                <h2 className='popop-title'>{title}</h2>
                <h5 className='popup-description'>{description}</h5>
                <button onClick={() => {onClose()}}><Link to={link}>{boton}</Link></button>
            </div>
        </div>
    );
    
}
 
export default PopUp;