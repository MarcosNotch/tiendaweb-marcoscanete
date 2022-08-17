import { getProducts, getProductsByCategoryID } from "../../asyncMock";
import ItemList from "../ItemList/ItemList";
import {useState, useEffect} from "react";
import LoadingAnimation from "../LoadingAnimation/LoadingAnimation";
import { useParams } from "react-router-dom";
import Carusel from "../Carrusel/Carrusel.js";
import './ItemListContainer.css'
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../../services/firebase";

const ItemListContainer = ({greenting}) => {

    const [productos, setProductos] = useState([]);

    let [loaded, setLoaded] = useState(false)

    let {categoryID} = useParams()

    useEffect(() => {

        const collectionRef = !categoryID ? collection(db, 'products') : query(collection(db, 'products'), where('category', '==', categoryID))


        getDocs(collectionRef).then((response) => {
                const products = response.docs.map(doc => {
                    return {id: doc.id, ...doc.data()}
                })
                setProductos(products)
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