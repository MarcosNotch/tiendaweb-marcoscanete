import React, {useState} from "react";
import './ItemCount.css'

const ItemCount = ({stock, initial, onAdd, sumarPrecio, mostrarBoton}) => {
    let [valor, setValor] = useState(initial)


    
    const sumar = () => {
        if(stock > valor){
        
            setValor(valor = valor + 1)

            if(!mostrarBoton){
          
                sumarPrecio(valor)
            }
        }
      
    }

    const restar = () => {
        if(1 < valor){
            setValor(valor = valor - 1)
            if(!mostrarBoton){
                sumarPrecio(valor)
            }
        }
       
    }

    const guardar = (e) => {
        valor = parseInt(e.target.value)
        setValor(valor);
    } 

    const agregar = () =>{
        if (valor >= initial){
            onAdd(valor)
            setValor(initial)
        } 
    }

    return (
        <div>

        <div className="item-count-container">
             <button className="boton" onClick={restar}>-</button>
             <input className="input-count" value={valor} onChange={guardar}/>
             <button className="boton" onClick={sumar}>+</button>
          
        </div>
        {mostrarBoton && <button onClick={agregar}>Agregar Al Carrito</button>}
        </div>
    )
}


export default ItemCount;