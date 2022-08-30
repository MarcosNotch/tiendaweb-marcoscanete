import "./ItemDetail.css"
import ItemCount from "../ItemCount/ItemCount.js";
import { useState, useContext} from "react";
import { Link } from "react-router-dom";

import { Context } from "../../context/CartContext";
import BuyCondition from "../BuyCondition/BuyCondition";
import LeftDetail from "./LetftDetail/LeftDetail";

const ItemDetail = ({item}) => {

    let {id, name, price, stock, shipping} = item.product;
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
                        <h3 className="nombre-producto">{name}</h3>
                    </div>
                    <div>
                        <p className="precio-producto">${price}</p>
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
                        
                        <div className="buy-condition">
                          <BuyCondition logo={"fa-solid fa-arrow-rotate-left"} blueWords={"Devolucion gratis. "} grayWords={"Tenes 30 dias desde que lo recibis"}/>
                          <BuyCondition logo={"fa-solid fa-shield-heart"} blueWords={"Compra Protegida. "} grayWords={"Recibí el producto que esperabas o te devolvemos tu dinero."}/>
                          <BuyCondition  logo={"fa-solid fa-trophy"} blueWords={"Mercado Puntos. "} grayWords={"Sumas 914 puntos"}/>
                          <BuyCondition logo={"fa-solid fa-award"} blueWords={"Devolucion gratis. "} grayWords={"Tenes 30 dias desde que lo recibis"}/>
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