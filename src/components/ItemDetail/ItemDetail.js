import "./ItemDetail.css"
import ItemCount from "../ItemCount/ItemCount.js";
import { useState, useContext} from "react";
import { Link } from "react-router-dom";

import { Context } from "../../context/CartContext";
import MiniPicture from "../MiniPicture/MiniPicture";
import MainPictureDetail from "../MainPictureDetail/MainPictureDetail";
import LeftDetail from "./LetftDetail/LeftDetail";

const ItemDetail = ({item}) => {

    let {id, name, price, category, stock, description, shipping} = item.product;
    let imgs = item.imgs

    let [vStock, setStock] = useState(stock);
    let [mostrar, setMostrar] = useState(false)

    let {carrito, agregarAlCarrito} = useContext(Context)

 
    let cantidadInicial = carrito.find(e => e.id === id)
    cantidadInicial = typeof cantidadInicial !==  'undefined' ? cantidadInicial.quantityToAdd : 1
    
    function onAdd(quantityToAdd){
       setStock(stock - quantityToAdd)
       setMostrar(true)
       agregarAlCarrito({id, name, price, quantityToAdd, imgs, vStock})
    }

    return (
        <div className="item-detail">
            <LeftDetail imgs={imgs} />
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
                          {mostrar? <Link to="/cart">Finalizar Compra</Link> : <ItemCount stock={vStock} initial={cantidadInicial} onAdd={onAdd} mostrarBoton={true}/>}  
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

} 

export default ItemDetail;