import { getProducts, getProductsByCategoryID } from "../../asyncMock";
import ItemList from "../ItemList/ItemList";
import {useState, useEffect} from "react";
import LoadingAnimation from "../LoadingAnimation/LoadingAnimation";
import { useParams } from "react-router-dom";
import Carusel from "../Carrusel/Carrusel.js";
import './ItemListContainer.css'

const ItemListContainer = ({greenting}) => {

    const [productos, setProductos] = useState([]);

    let [loaded, setLoaded] = useState(false)

    let {categoryID} = useParams()

    let traerProductos = categoryID ? getProductsByCategoryID : getProducts;

    useEffect(() => {

        traerProductos(categoryID).then((response) => {
                setProductos(response);
            }).catch(error =>{
                console.log(error)
            }).finally(() => {
                setLoaded(true);
            })


  
    }, [categoryID])

    if(!loaded){
        return(
            <LoadingAnimation/>
        )
    }


    return (
        <div>
            <h1>{greenting}</h1>
            <div className="carrusel-container">
                <Carusel/>
            </div>
            
            <ItemList products={productos}/>
        </div>
    )



}


export default ItemListContainer