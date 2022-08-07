import "./ItemDetail.css"
import ItemCount from "../ItemCount/ItemCount.js";
import { useState } from "react";
import { Link } from "react-router-dom";


const ItemDetail = ({id, name, price, category, img, stock, description, shipping}) => {

    let [vStock, setStock] = useState(stock);
    let [mostrar, setMostrar] = useState(false)

 
    
    function onAdd(quantityToAdd){
       setStock(stock - quantityToAdd)
       setMostrar(true) 
    }


    return (
        <div className="item-detail">
            <div className="container-imagen-detalle">
                <div>
                    <img className="imagen-detalle" src={img} alt='imagen del producto'/>
                </div>
                <div>
                        <p>{description}</p>
                </div>               
            </div>
            <div className="detail">
                <div className="detail-left">
                    <div>
                        <h3>{name}</h3>
                    </div>
                  
                    <div>
                        <p>${price}</p>
                    </div>
                </div>
                <div className="detail-rigth">
                    <div>
                        <p>Envio: {shipping}</p>
                    </div>
                    <div>
                        <p>{vStock} unidades disponibles</p>
                    </div>
                    <div className="button-container">
                        <div>
                            <button>COMPRAR</button>
                        </div>
                        <div>
                          {mostrar? <Link to="/cart">Finalizar Compra</Link> : <ItemCount stock={vStock} initial={1} onAdd={onAdd}/>}  
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

} 

export default ItemDetail;