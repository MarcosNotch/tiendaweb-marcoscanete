import ItemCount from "../ItemCount/ItemCount";
import {useState} from 'react';

const ItemListContainer = ({greenting}) => {
    
    let [stock, setStock] = useState(20)


    const onAdd = (cantidad) => {
        setStock(stock - cantidad) 
        console.log("cantidad de items agregados " + cantidad)    
        console.log(stock)
    }

    return (
        <div>
            <h1>{greenting}</h1>
            <p>Stock disponible {stock}</p>
            <ItemCount stock={stock} initial={1} onAdd={onAdd}/>
        </div>
    )



}


export default ItemListContainer