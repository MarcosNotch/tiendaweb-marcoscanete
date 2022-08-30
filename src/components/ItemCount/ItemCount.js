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

        <div className="button-container2">
            {mostrarBoton && <button onClick={agregar} className="comprar-ahora">Comprar ahora</button>}
        </div>


        </div>
    )
}


export default ItemCount;