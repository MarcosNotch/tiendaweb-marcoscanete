import React, {useState} from "react";

const ItemCount = ({stock, initial, onAdd}) => {
    let [valor, setValor] = useState(initial)
    

    const sumar = () => {
        if(stock > valor){
            setValor(valor + 1)
           
        }
  
    }

    const restar = () => {
        if(initial < valor){
            setValor(valor - 1)
        }
    }

    const guardar = (e) => {
        valor = parseInt(e.target.value)
        setValor(valor);
    } 

    const agregar = () =>{
        if (valor > initial){
            onAdd(valor)
            setValor(initial)
        } 
    }

    return (
        <div>
             <button onClick={restar}>-</button>
             <input  value={valor} onChange={guardar}/>
             <button onClick={sumar}>+</button>
             <button onClick={agregar}>Agregar Al Carrito</button>
        </div>
    

    )
}


export default ItemCount;