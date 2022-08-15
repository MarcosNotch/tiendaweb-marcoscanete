import React, {useState} from "react";


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
             {mostrarBoton && <button onClick={agregar}>Agregar Al Carrito</button>}
        </div>
    

    )
}


export default ItemCount;